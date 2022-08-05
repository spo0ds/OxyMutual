# OxyMutual

Decentralized insurance with the integration of government

Approach

What does Insurance contract needs to do?

-   First track the insured address with the details
-   If given below necessary condition are fulfilled chainlink keepers fire up
    -   time of the insurance has finished
    -   insured person has the right to claim
    -   full payment has done that he/she has aggreed on
    -   has no any two consecutive fails
-   Owner of the insurance is set
    -   because he can withdraw the amount
        -   company also want to get profit from the business
        -   but only staking the property
-   All insured payed amount is added to the contract balance
-   If insurance fails to give the amount in time, 10% fine will be charged.
-   2 consecutive delayment of payments leads to no longer insured and won't get any money back.
-   only owner can see the balance and deposit in the contract.

What does client/insured will be able to do?

-   Apply for the insurance, select the payment phase and provide all the insurance requirements.
-   Insured person Pays the amount for the Insurance.
-   Get's the details about the Insurance
-   If any incident happens, ask for the claim to the Insurance company.

Everything will be deployed in a hyperledger besu(private Ethereum blockchain) following IBFT 2.0 POA consensus algorithm with 4 validators.
