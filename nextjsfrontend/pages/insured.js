import { useEffect, useState } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
// import insuredContract from "../blockchain/Insured"
import { ConnectButton } from '@web3uikit/web3'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

import 'antd/dist/antd.css';

export default function Home() {
  const [web3, setWeb3] = useState()
  const [address, setAddress] = useState()
  const [inContract, setinContract] = useState()
  const [getInsuredD, setgetInsuredD] = useState()

  useEffect(() =>{
    if (inContract) insuredDetail()
  }, [inContract, getInsuredD])

const insuredDetail = async () => {
  console.log('getPot')
  const detail = await inContract.methods.getInsuredDetail().call()
  setgetInsuredD(detail)
}
  const PhaseNumber= async () => {
    var x = document.getElementById("phase").value
    if(x==1){
      document.getElementById("PhaseNumber").innerHTML = "First Phase"
    }
    else if(x==2){
      document.getElementById("PhaseNumber").innerHTML = "Second Phase"
    }
    else{
      document.getElementById("PhaseNumber").innerHTML = "Third Phase"
    }
  }
  const amount= async () => {
      document.getElementById("amount").innerHTML = "1.6 Eth"
  }
  const date= async () => {
      document.getElementById("date").innerHTML = "August 15 2022"
  }
   const timeFinished= async () => {
      document.getElementById("timeFinished").innerHTML = "False"
  }
  const insuredDetails = async () =>{
    document.getElementById("insuredDetails").innerHTML = "insuredAmount: 1000,<br /> startingBlockTime: 10,<br /> interval: 5, <br />timeToPay: false,<br /> payeAmount:200,<br /> insuredAmountPerSession: 200,<br /> paymentPhase:'2',<br />timePassed:false,<br />readToPay:false,<br /> rightToClaim: false"
}
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
        const lc = insuredContract(web3)
        setinContract(lc)
        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])
      }
      catch{
        console.log(err.message)
      }
    }
     else {
      //metamask is not install
      console.log("Please Install MetaMask")
    }
  }
  return (
    <div>
     
      <main className={styles.main}>
        <nav className="navbar ">
          <div className="container12">
            <div className="navbar-end" >
              <ConnectButton moralisAuth={false}/>
               {/* <button onClick={connectWalletHandler} className="button is-link">Connect Wallet</button> */}
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-thirds">
                <section className="mt-5">
                  <p class="has-text-black">Initiate the Insurance from Open Law:</p>
                  <input class="input is-rounded is-small" type="text" placeholder="Rounded input" id="phase"></input>
                  <button className="button12 " onClick={PhaseNumber}>PhaseNumber</button>
                  <p class="has-text-black" id="PhaseNumber"></p>
                </section>
                 <section className="mt-7">
                  <p class="has-text-black">Check Paid Insured Amount till the date:</p>
                  <button className="button12 " onClick={amount}>PaidInsuredAmount</button>
                  <p class="has-text-black"id="amount"></p>
                </section>
                <section className="mt-7">
                  <p class="has-text-black">Time Period For Right To Claim:</p>
                  <button className="button12" onClick={date}>Right To Claim</button>
                  <p class="has-text-black" id="date"></p>
                </section>
                <section className="mt-7">
                  <button className="button12 " onClick={timeFinished}>Time Finished</button>
                  <p class="has-text-black" id="timeFinished"></p> 
                </section>
                <section className="mt-7">
                  <button className="button12 ">Fine Percent</button>
                </section>
                <section className="mt-7">
                  <p class="has-text-black">Get Insured Details:</p>
                  <button className="button12" onClick={insuredDetails}>Get Here!</button>
                  <p id="insuredDetails"></p>
                  <p>{getInsuredD}</p>
                </section>
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
  
      <p>Oxerium ©2022 Created by Us.</p>
      </footer>
    </div>
  )
}