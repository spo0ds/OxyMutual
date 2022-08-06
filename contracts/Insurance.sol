// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "./Types.sol";
import "./Validators.sol";

error Insurance__PhaseNumberNotCorrect();
error Insurance__UpKeepNotNeeded();
error Insurance__NotOwner();
error Insurance__AdminWithdrawFailed();
error Insurance__NotEnoughBalance();
error Insurance__NotValidateForStake();
error Insurance__DepositedAmountNotEqualToWithdrawnAmount();

contract Insurance is KeeperCompatibleInterface {
    address public s_insuredAddress;
    uint256 private s_contractBalance = 0;
    address private immutable i_owner;
    Validators private immutable i_validators;
    uint256 constant REQUIREDVALIDATORS = 3;
    uint256 public txnId = 0;
    uint256 private withdrawBalance = 0;
    bool private staked = false;
    uint256 public count = 0;

    event SuccessfulClaim(address indexed insuredAddress, uint256 indexed amount);

    event InsuredAmount(address indexed insuredAddress, uint256 indexed insuredAmount);

    // for tracking the insured details
    mapping(address => Types.Details) private trackingDetail;

    constructor(address _owner, address _validatorsContractAddress) {
        i_owner = _owner;
        i_validators = Validators(_validatorsContractAddress);
    }

    modifier onlyOwner() {
        if (i_owner != msg.sender) {
            revert Insurance__NotOwner();
        }
        _;
    }

    function getAppeal(uint256 insuredAmount) public {
        i_validators.appeal(insuredAmount);
    }

    // sets the stake of the Insurance owner to true
    // only validators are allowed to do it
    function setStake() public {
        i_validators.approveStake(txnId);
        // if (i_validators._getStakeCount(txnId) >= REQUIREDVALIDATORS){
        //     approved[txnId][msg.sender] = true;
        count++;
        if (count > 2) {
            staked = true;
            txnId += 1;
            count = 0;
        }

        // }
    }

    function getStakeCount() public view returns (uint256) {
        return i_validators._getStakeCount(txnId);
    }

    // sets the claim of the client to true
    // only validators are allowed to do it
    function setClaim(address x) public {
        i_validators.approveClaim(txnId);
        if (i_validators._getValidationCount(txnId) >= REQUIREDVALIDATORS) {
            trackingDetail[x].claimReturnedByValidator = true;
            txnId += 1;
        }
    }

    function recieveInsuredAmount() external {}

    // ownly owner could withdraw form the balance
    // but needs to stake the property
    // staking is still needs to maintain
    function withdraw() public payable onlyOwner {
        if (!staked) {
            revert Insurance__NotValidateForStake();
        }
        if (s_contractBalance <= 0) {
            revert Insurance__NotEnoughBalance();
        }
        s_contractBalance = s_contractBalance - msg.value;
        withdrawBalance += msg.value;
        (bool success, ) = payable(i_owner).call{value: address(this).balance}("");
        if (!success) {
            revert Insurance__AdminWithdrawFailed();
        }
    }

    // only owner could deposit the amount that he/she has withdrawn
    function deposit() public payable onlyOwner {
        if (msg.value != withdrawBalance) {
            revert Insurance__DepositedAmountNotEqualToWithdrawnAmount();
        }
        s_contractBalance += msg.value;
    }

    // checks is the particular address
    function timeFinished(address x) public {
        if (block.timestamp >= trackingDetail[x].startingBlockTime + trackingDetail[x].interval) {
            trackingDetail[x].readyToPay = true;
        }
    }

    // does particular address has the right to claim
    function rightToClaim(address x) public {
        if (
            trackingDetail[x].readyToPay == true &&
            trackingDetail[x].payedAmount == trackingDetail[x].insuredAmount &&
            trackingDetail[x].claimReturnedByValidator
        ) {
            trackingDetail[x].rightToClaim = true;
        }
    }

    // does the payed time exceeds the payment time
    function timePassed(address x) public {
        if (trackingDetail[x].timeToPay < trackingDetail[x].payedTime) {
            trackingDetail[x].timePassed = true;
        }
    }

    function isThreeFail(address x) public {
        uint256 failCount = 0;
        if (trackingDetail[x].timePassed) {
            failCount += 1;
        }

        if (failCount == 3) {
            trackingDetail[x].threeDelayed = true;
            transferFailedAmountToInsurance(x);
        }
    }

    function transferFailedAmountToInsurance(address x) internal {
        s_contractBalance += trackingDetail[x].payedAmount;
        delete (trackingDetail[x]);
    }

    function transferFineToInsurance(address x) public {
        uint256 amount;
        if (isTimePasses(x)) {
            amount = trackingDetail[x].payedAmount;
            amount = (amount * 10) / 100;
            s_contractBalance += amount;
            isThreeFail(x);
        }
    }

    // returns the condition for the contract to automatically run
    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        upkeepNeeded = (!(isTimeFinished(s_insuredAddress)) &&
            isTimePasses(s_insuredAddress) &&
            isRightToClaim(s_insuredAddress) &&
            isFullPaymentDone(s_insuredAddress) &&
            trackingDetail[s_insuredAddress].claimReturnedByValidator);
        return (upkeepNeeded, "0x0");
    }

    // automatically runs after the insurance time period has finished
    // so that insured gets payed
    function performUpkeep(
        bytes calldata /* callData */
    ) external override {
        (bool upKeepNeeded, ) = checkUpkeep("");
        if (!upKeepNeeded) {
            revert Insurance__UpKeepNotNeeded();
        }
        trackingDetail[s_insuredAddress].payedAmount += trackingDetail[s_insuredAddress]
            .insuredAmount;
        emit SuccessfulClaim(s_insuredAddress, trackingDetail[s_insuredAddress].insuredAmount);
        trackingDetail[s_insuredAddress].insuredAmount = 0;
        trackingDetail[s_insuredAddress].readyToPay = false;
        trackingDetail[s_insuredAddress].rightToClaim = false;
        trackingDetail[s_insuredAddress].claimReturnedByValidator = false;
    }

    function setInsuranceDetail(
        address x,
        uint256 _insuredAmount,
        uint256 _startingBlockTime,
        uint256 _interval,
        uint256 _timeToPay,
        uint256 _payedAmount,
        uint256 _payedTime,
        uint256 _insuredAmountPerSession,
        uint256 _paymentPhase
    ) external {
        trackingDetail[x].insuredAmount = _insuredAmount;
        trackingDetail[x].startingBlockTime = _startingBlockTime;
        trackingDetail[x].interval = _interval;
        trackingDetail[x].timeToPay = _timeToPay;
        trackingDetail[x].payedAmount = _payedAmount;
        trackingDetail[x].payedTime = _payedTime;
        trackingDetail[x].insuredAmountPerSession = _insuredAmountPerSession;
        trackingDetail[x].paymentPhase = _paymentPhase;
    }

    function isTimeFinished(address x) public view returns (bool) {
        return trackingDetail[x].readyToPay;
    }

    function isRightToClaim(address x) public view returns (bool) {
        return trackingDetail[x].rightToClaim;
    }

    function isTimePasses(address x) public view returns (bool) {
        return trackingDetail[x].timePassed;
    }

    function isFullPaymentDone(address x) public view returns (bool) {
        return trackingDetail[x].insuredAmount == trackingDetail[x].payedAmount;
    }

    function _getContractBalance() private view onlyOwner returns (uint256) {
        return s_contractBalance;
    }

    function getRemainingDetail(address x) public view returns (Types.Details memory) {
        return trackingDetail[x];
    }

    receive() external payable {
        trackingDetail[msg.sender].payedAmount = msg.value;
        s_insuredAddress = msg.sender;
        s_contractBalance += trackingDetail[msg.sender].payedAmount;
        emit InsuredAmount(msg.sender, msg.value);
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }

    function getInsuredDetail(address x)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            trackingDetail[x].insuredAmount,
            trackingDetail[x].startingBlockTime,
            trackingDetail[x].interval,
            trackingDetail[x].timeToPay,
            trackingDetail[x].payedAmount,
            trackingDetail[x].payedTime,
            trackingDetail[x].insuredAmountPerSession
        );
        // trackingDetail[x].timePassed;
        // trackingDetail[x].readyToPay;
        // trackingDetail[x].rightToClaim;
        // trackingDetail[x].threeDelayed;
        // trackingDetail[x].claimReturnedByValidator;
    }
}
