This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run Project add few Dependencies

``` yarn add react react-dom moralis react-moralis ```

``` yarn add  @web3uikit/core @web3uikit/web3 @web3uikit/icons ```

``` yarn add bulma ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn run dev
```

## Features in Insured side

- Person can Insured Amount  only after two parties agreement between Client and Insurance Company.

- Entry the payInsureAmount in `eth` or `matic` and Phase of Installment to pay full amount.

- If Insured Person pay amount after the mentioned time he/she should pay insured amount with certain fine.

- After completely verified Transaction, Client can check his detail accordingly with his transaction hashes and check right to Claim amount.

- check the Time passed of Insured amount.

## Features in Insurance side.

- CheckUpkeep check the bytes and fires PerformUpkeep which trigger the right date and right to claim at right time from chainlink keeper.

- Can abe to deposit the amount in Insurance Balance with proper verification.

- check any insured address having three delayed payments.

- Owner of the insurance is set

- Because he can withdraw the amount.

- The company wants to profit from the business as well.

- but only by staking the property.

- All insured paid amounts are added to the contract balance.

- If insurance fails to give the amount in time, a 10% fine will be charged.

- 3 delay of payments leads to no longer being insured and you won't get any money back.

- only the owner can see the balance and deposit in the contract.


