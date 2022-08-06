# OxyMutual

OxyMutual is a Blockchain based Insurance Company which profound improvements such as limited dependency on centralized parties and
improve efficiency. It follows `IBFT 2.0` POA "Proof of Authority" consesus mechanism and stores all its data in a private blockchain maintains using hyperledger Besu keeping account of users' privacy with the integration of government entities which acts a validator based on POA mechanism showing clear `Transperancy`, complete elimination of `Brokerage Model` and math based agreement. The agreement between two parties i.e Insurance Company and Insured person are also stores in private blockchain using Open Law.

The Validator are especially from the government sector such as `Police Department`, `Government Insurance Association`, `Lawyer`, `Local Government Representatives`, `Government Banking` and more. With the integration of Government, OxyMutual invests in Government National Projects which prevent outgoing of Nation Currency.

## Why Decentralized Insurance?

Cons of Traditional Insurance

**Loyalty / Trust Issues**

        - Insurance Company are in the sole purpose of making money rather than giving out money. So, Traditional Insurance Company will try their best to find the fault. Also, they are the only who is making the decision.

                                      Even if Insured Person claim is valid Company might refuse to give us the required necessary amount. So
        our best option is file a case and fight our claim even though we should have got money after having a valid claim.

**The claim takes longer to resolve**

        - Lots of Documents to review before making decision. So, it might take more than a month to resolve the valid claim.

**Commission System**

        - Due to Brokers in between they get certain % percent commission where if the percent is given to client he/she could utilized it for others purpose.

## Impact Created by OxyMutual

**POA Consensus overtaking centralized power**

    - The decision of the claim is validated by the validator sceizing the centralized Power from Insurance Company

**Integration with Government (Validators).**

    - The Validator are especially from the government sector such as `Police Department`, `Government Insurance Association`,  `Lawyer`, `Local Government Representatives`, `Government Banking` and more which create `transparency` and `trust` in Public.

**Government participant's engagement in Investing the Governmental National Project**

    - OxyMutual invests in Government National Projects which prevent outgoing of Nation Currency.

**Decentralized Agreement**

    - OxyMutual uses `Open Law` to create an agreement which is signed by both parties if they are agreed.

**Getting Back agreement total amount is resolved according to mathematical Algorithms**

    - If all necessary claims are met `ChainLink Keeper` Fires up and all the required amount is deposited to Client wallet.

**Pirvacy**

    - Data are stored in private blockchain using `HyperLegder Besu`keeping account of clients privacy.

**Validating Rewards**

    - Rewards are distributed Among the Validators.

## Architecture of OxyMutual

![Architecture of OxyMutual](Architecture.png)

## Steps To Run The OxyMutual

**REQUIREMENTS**

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    -   You'll know you did it right if you can run git --version and you see a response like git version x.x.x
-   [Nodejs](https://classic.yarnpkg.com/lang/en/docs/install/)
    -   You'll know you've installed nodejs right if you can run:
        -   node --version and get an ouput like: vx.x.x
-   [Yarn](https://yarnpkg.com/getting-started/install) instead of npm
    -   You'll know you've installed yarn right if you can run:
        -   yarn --version and get an output like: x.x.x
        -   You might need to [install it with npm]() or corepack

### QUICKSTART

```
    git clone https://github.com/spo0ds/OxyMutual.git
    cd OxyMutual
    yarn
```

### USAGE

To run Locally on ganache-cli

```
    yarn ganache-cli
```

### DEPLOY

```
    yarn truffle migrate
```

### TESTING

```
    yarn truffle test
```

### 1. Deployment to a testnet or mainnet [RINKEBY TESTNET /ETHEREUM NETWORK]

1. Setup environment variabltes

You'll want to set your RINKEBY_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

    - PRIVATE_KEY: The private key of your account (like from [metamask](https://metamask.io/)). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.

    - RINKEBY_RPC_URL: This is url of the rinkeby testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH & LINK. You should see the ETH and LINK show up in your metamask. [You can read more on setting up your wallet with LINK.](https://docs.chain.link/docs/deploy-your-first-contract/#install-and-fund-your-metamask-wallet)

### 2. Deployment to a testnet or mainnet [MUMBAI TESTNET /POLYGON NETWORK]

1. Setup environment variabltes

You'll want to set your MUMBAI_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

    - PRIVATE_KEY: The private key of your account (like from [metamask](https://metamask.io/)). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.

    - POLYGON_RPC_URL: This is url of the rinkeby testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet MATIC

Head over to [faucet.polygon.technology](https://faucet.polygon.technology/) and get some tesnet MATIC & LINK. You should see the MATIC and LINK show up in your metamask. [You can read more on setting up your wallet with LINK.](https://docs.chain.link/docs/deploy-your-first-contract/#install-and-fund-your-metamask-wallet)

### Playing around in Remix

1. Copy the contract Types.sol, Insurance.sol, Insured.sol and Validators.sol.

2. Deploy Validators.sol first passing it the array of validator array and number of required validates.

3. After that deploy the Insurance contract passing it the address of the owner and the Validators.sol contract address.

4. Then deploy the Insured.sol passing in the required arguments.

5. Play with all the function of the contract.

## Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environemnt variable named ETHERSCAN_API_KEY. You can pop it into your .env file as seen in the .env.example.

In it's current state, if you have your api key set, it will auto verify kovan contracts!

However, you can manual verify with:

`yarn truffe run verify **ContractName** --network **NetworkName**`

# Draft (How did we implement it?)

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

# THANK YOU!
