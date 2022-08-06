// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

library Types {
    struct Details {
        uint256 insuredAmount; //  amount person is insuring for
        uint256 startingBlockTime; // starting time the person has insured
        uint256 interval; // for how long he's insuring
        uint256 timeToPay; // yearly or monthy payment time by the insured person
        uint256 payedAmount; // amount payed during insurance
        uint256 payedTime; // time when insured person has payed
        uint256 insuredAmountPerSession; // amount paid at certain time period
        uint256 paymentPhase; // times when one can pay the insured amount
        bool timePassed; // does that payment time passed?
        bool readyToPay; // is the whole time period finished?
        bool rightToClaim; // is the insured person has right to claim?
        bool threeDelayed; // does the insured person failed to give the insured amount times
        bool claimReturnedByValidator;
        // bool stakeReturnedByValidator;
    }
}
