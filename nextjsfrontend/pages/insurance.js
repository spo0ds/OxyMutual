import { useState } from 'react'
import { MoralisProvider } from 'react-moralis'
import Head from 'next/head'
import Web3 from 'web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import { ConnectButton } from '@web3uikit/web3'
export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()
  const [insuredAmount, setInsuredAmount] = useState()
  const [startingBlockTime, setStartingBlockTime] = useState()
  const [interval, setInterval] = useState()
  const [timeToPay, setTimeToPay] = useState()
  const [insuredAmountPerSession, setinsuredAmountPerSession] = useState()
  const [paymentPhase, setpaymentPhaase] = useState()
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [paymentPhaseState, setPaymentPhaseState] = useState()
  const [insuredDetail, setinsuredDetail] = useState()

  const connectWalletHandler = async () => {
    //check if metamask is intall 
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try{
        await window.ethereum.request({method: "eth_requestAccounts"})
        // create web3 instance and set to state
        const web3 = new Web3(window.ethereum)
        //set web3 instance in React State
        setWeb3(web3)
        //get list of accounts
        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])
      }
      catch{

      }
    }
     else {
      //metamask is not install
      console.log("Please Install MetaMask")
    }
  }
  const getContractBalance = async () => {
    document.getElementById("getContractBalance").innerHTML = "1000 ETH"
  }
const insuredDetails = async () =>{
    document.getElementById("insuredDetails").innerHTML = "{insuredAmount: 1000,startingBlockTime: 10, interval: 5, timeToPay: false, payeAmount:200, insuredAmountPerSession: 200, paymentPhase:'2', timePassed:false, readToPay:false, rightToClaim: false}"
}
const display = async () => {
        var x = document.getElementById("address").value;
        document.getElementById("amount").innerHTML = x;
    }
    const recentAddress = async () => {
        document.getElementById("address").innerHTML = "0xa962a245685890A5914C38b2D7C7716070Ef576e";
    }
  const amount= async () => {
      document.getElementById("amount").innerHTML = "2 Eth"
    }
  const isRightToClaim = async () =>{
    document.getElementById("isRightToClaim").innerHTML = "False"
  }
    const isFullyInsured = async () =>{
    document.getElementById("isFullyInsured").innerHTML = "False"
  }
  return (
    <div>
    

      <main className={styles.main}>
        <nav className="navbar">
          <div className="container12">
            <div className="navbar-end">
              {/* <button onClick={connectWalletHandler} className="button is-link">Connect Wallet</button> */}
             
              <ConnectButton moralisAuth={false}/>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-thirds">
                 {/* <section className="mt-5">
                  <p>Check Address Consist Two-Consutive Pay</p>
                  <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                  <button className="button is-link is-large is-Warning mt-3">isTwoConsutive</button>
                </section> */}
                <section className="mt-5">
                  <p class="has-text-black">Received Insured</p>
                  <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                  <button className="button12">Received Insured</button>
                </section>
                <section className="mt-5">
                  <p class="has-text-black">Daily Payment With Fine</p>
                   <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                  <button className="button12">Transfer Fine</button>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">Check is Validator </p>
                    <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                    <button className="button12 ">Validator</button>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">If Stake Verified Only then that person can withdraw the Insurance balance</p>
                  <button className="button12">Withdraw</button>
                </section>
                <section className="mt-7">
                  <p class="has-text-black">Get Insured Details</p>
                  <button className="button12" onClick={getContractBalance}>get Contract Balance</button>
                  <p class="has-text-black" id="getContractBalance"></p>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">Insured Person Fully Paid </p>
                    <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                    <button className="button12 " onClick={isFullyInsured}>IsFullyInsured</button>
                    <p class="has-text-black" id="isFullyInsured"> </p>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">Check Address that has right to Claim </p>
                    <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                    <button className="button12 " onClick={isRightToClaim}>IsRightToClaim</button>
                    <p class="has-text-black" id="isRightToClaim"></p>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">Recent Insured Address </p>
                    <button className="button12" onClick={recentAddress}>Recent Insured Address</button>
                    <p class="has-text-black" id="address"></p>
                    <br></br>
                </section>
                <section className="mt-7">
                    <p class="has-text-black">Total Insured Amount from Particular Address</p>
                    <input class="input is-rounded is-small" type="text" placeholder="address X"></input>
                    {/* <p id="amount"></p> */}
                    <button className="button12 " onClick={amount}>TotalInsuredAmount</button>
                    <p class="has-text-black" id="amount"></p>
                </section>
                {/* <section className="mt-7">
                    <p> </p>
                    <input class="input is-rounded is-small" type="text" placeholder="address X" id="address"></input>
                    <p id="details"></p>
                    <button onClick={insuredDetails}className="button is-link is-large is-info mt-3" >who is Insured</button>
                    <p id="demo"></p>
                </section> */}
              </div> 
              <div className="column is-one-third">
                  <section className="mt-5">
                    <div className="card12">
                      <div className="card-content12">
                        <div className="content12">
                           <h2>Payment Details</h2>
                              <div className="transaction-history">
                                <div>Transaction 1: 0xa962a245685890A5914C38b2D7C7716070Ef576e</div>
                                <div>Transaction 2: 0xa962a245685890A5914C38b2D7C7716070Ef576e</div>
                                <div>Transaction 3: 0xa962a245685890A5914C38b2D7C2346070Ef576e</div>
                                <div>Transaction 4: 0xa962a245685890A5914C38b2D7C9867544Ef576e</div>
                              </div>
                          </div>   
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </section>
        </div>
        
      </main>

      <footer className='footer'
      style={{
        marginTop:"188px",
        alignItems:'center',
        textAlign: 'center',
      }}    >
        <br />
       <br />
      <p>Oxyreium ©2022 Created by Us.</p>
      </footer>
    </div>
  )
}