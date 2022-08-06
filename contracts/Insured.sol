// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "./Types.sol";
import "./Insurance.sol";

error Insured__NotEnoughInsuranceAmount();
error Insured__HasAlreadyInsured();
error Insured__NoNeedToPayFine();
error Insured__UpKeepNotNeeded();
error Insured__PhaseNumberNotCorrect();
error Insured__InsuredAountPaymentFailed();
error Insured__AmountNotPerSession();

contract Insured {
    uint256 public constant FINE_PERCENT = 10; // fine percentage if insured person doesn't pay in time

    Insurance private immutable i_insurance;

    enum InsuranceState {
        NotInsured, // still no insurance done
        InProcess, // insurance is done for certain time period
        Closed // insurance time period is done
    }

    enum PaymentPhase {
        firstPhase, // full payment done at once before the payment time
        secondPhase, // can pay twice to pay the total amount before the payment time
        thirdPhase // can pay thrice to pay the total amount before the payment time
    }

    PaymentPhase private paymentPhaseState;

    InsuranceState private insuranceState;

    Types.Details private insuredDetail;

    event SuccessfulWithdraw(address indexed insured, uint256 indexed amount);

    constructor(
        uint256 _insuredAmount,
        uint256 _interval,
        uint256 _timeToPay,
        address payable _insuranceContractAddress,
        uint256 _insuredAmountPerSession
    ) {
        insuredDetail.insuredAmount = _insuredAmount;
        insuredDetail.startingBlockTime = block.timestamp;
        insuredDetail.interval = _interval;
        insuredDetail.timeToPay = _timeToPay;
        insuranceState = InsuranceState.InProcess;
        i_insurance = Insurance(_insuranceContractAddress);
        insuredDetail.insuredAmountPerSession = _insuredAmountPerSession;
    }

    function payInsuranceAmount(uint256 phaseNumber) external payable {
        if (insuranceState != InsuranceState.InProcess) {
            revert Insured__HasAlreadyInsured();
        }
        // if (msg.value < insuredDetail.insuredAmountPerSession) {
        //     revert Insured__NotEnoughInsuranceAmount();
        // }
        if (phaseNumber < 0 || phaseNumber > 3) {
            revert Insured__PhaseNumberNotCorrect();
        }
        insuredDetail.payedTime = block.timestamp;
        // payes the insured Amount

        insuredDetail.paymentPhase = phaseNumber;

        if (insuredDetail.insuredAmountPerSession != msg.value * phaseNumber) {
            revert Insured__AmountNotPerSession();
        }

        insuredDetail.payedAmount += msg.value;

        (bool success, ) = address(i_insurance).call{value: address(this).balance}("");
        if (!success) {
            revert Insured__InsuredAountPaymentFailed();
        }
    }

    // returns whether the insurance time period has finished or not
    function timeFinished() public {
        if (block.timestamp >= insuredDetail.startingBlockTime + insuredDetail.interval) {
            insuredDetail.readyToPay = true;
        }
    }

    // returns whether or not insured person has the right to claim
    function rightToClaim() public {
        if (
            insuredDetail.readyToPay == true &&
            insuredDetail.payedAmount == insuredDetail.insuredAmount
        ) {
            insuredDetail.rightToClaim = true;
        }
    }

    // returns whether insured person has paying the insurance in time or not
    // otherwise 10% fine will be charged
    function timePassed() public {
        if (insuredDetail.timeToPay < insuredDetail.payedTime) {
            insuredDetail.timePassed = true;
        }
    }

    // fine is charged if the insured person exceeds the payment day i.e s_payedTime
    function payInsuredAmountWithFine() public {
        if (insuredDetail.timePassed == false) {
            revert Insured__NoNeedToPayFine();
        }
        insuredDetail.insuredAmountPerSession =
            insuredDetail.insuredAmountPerSession +
            (insuredDetail.insuredAmountPerSession * FINE_PERCENT) /
            100;
    }

    function getInsuredDetail()
        public
        view
        returns (
            uint256 insuredAmount,
            uint256 startingBlockTime,
            uint256 interval,
            uint256 timeToPay,
            uint256 payedAmount,
            uint256 payedTime,
            uint256 insuredAmountPerSession,
            uint256 paymentPhase,
            bool,
            bool readyToPay,
            bool,
            bool twoConsutiveFail
        )
    {
        return (
            insuredDetail.insuredAmount,
            insuredDetail.startingBlockTime,
            insuredDetail.interval,
            insuredDetail.timeToPay,
            insuredDetail.payedAmount,
            insuredDetail.payedTime,
            insuredDetail.insuredAmountPerSession,
            insuredDetail.paymentPhase,
            insuredDetail.timePassed,
            insuredDetail.readyToPay,
            insuredDetail.rightToClaim,
            insuredDetail.twoConsutiveFail
        );
    }

    function getFinePercent() public pure returns (uint256) {
        return FINE_PERCENT;
    }
}
