// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "./Types.sol";

error Insurance__PhaseNumberNotCorrect();
error Insurance__UpKeepNotNeeded();
error Insurance__NotOwner();
error Insurance__AdminWithdrawFailed();
error Insurance__NotEnoughBalance();

contract Insurance is KeeperCompatibleInterface {
    address public s_insuredAddress;
    uint256 private s_contractBalance = 0;
    address private immutable i_owner;

    event SuccessfulClaim(address indexed insuredAddress, uint256 indexed amount);

    event InsuredAmount(address indexed insuredAddress, uint256 indexed insuredAmount);

    // for tracking the insured details
    mapping(address => Types.Details) private trackingDetail;

    constructor(address _owner) {
        i_owner = _owner;
    }

    modifier onlyOwner() {
        if (i_owner != msg.sender) {
            revert Insurance__NotOwner();
        }
        _;
    }

    // ownly owner could withdraw form the balance
    // but needs to stake the property
    // staking is still needs to maintain
    function withdraw() public payable onlyOwner {
        if (s_contractBalance <= 0) {
            revert Insurance__NotEnoughBalance();
        }
        s_contractBalance = 0;
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        if (!success) {
            revert Insurance__AdminWithdrawFailed();
        }
    }

    // only owner could deposit the amount that he/she has withdrawn
    function deposit() public payable onlyOwner {
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
            trackingDetail[x].payedAmount == trackingDetail[x].insuredAmount
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

    // function recieveInsuredAmount() external {}

    function isTwoConsutiveFail(address x) public {
        uint256 failCount = 0;
        if (trackingDetail[x].timePassed) {
            failCount += 1;
        }

        if (failCount == 2) {
            trackingDetail[x].twoConsutiveFail = true;
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
            isTwoConsutiveFail(x);
        }
    }

    // function vlidatorValidates(address x) external {
    //     // called by the validator and sets the bool
    // }

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
            isFullPaymentDone(s_insuredAddress));
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

    function getData(address x) external {}

    receive() external payable {
        trackingDetail[msg.sender].payedAmount = msg.value;
        s_insuredAddress = msg.sender;
        s_contractBalance += trackingDetail[msg.sender].payedAmount;
        emit InsuredAmount(msg.sender, msg.value);
    }
}
