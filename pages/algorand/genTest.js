import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backendDB from '../../reachBackend/indexDB3.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";

//
let Address = 'Address';
let Bool = 'Bool';

const API = (arg) => {
    return arg;
}
const Fun = (arg1, arg2) => {
    return [arg1, arg2]
}
//this is an input that needs to be provided by the smart contract developer
const User = API({
    // transfer(to, amt)
    manCtcId: Fun([Address], Bool),
    // transferFrom(from, to, amt)
    btCtcId: Fun([Address], Bool),
    // approve(approved, amt)
    stCtcId: Fun([Address], Bool),
});
//

function Deliver() {
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
 //
  const connect = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    //
  };
  
  //API for saving new contract address into DB
  const callAPI = async (reachBackend, ctcDeployed, worked, apiName, apiArg) => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(reachBackend, ctcDeployed);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(worked)
        } catch (e) {
            res = [`err`, e]
            console.log(`there is an error`, e)
        }
    };
    //
    const apis = ctc.a;
    call(async () => {
      let apiReturn;
      for (const f in apis){
        if(f == apiName){
          apiReturn = await apis[apiName](apiArg);
        } 
      }
        return apiReturn;
    });
  }

  const saveToDB = () => {
    callAPI(
      backendDB,
      '91149871',
      'Yes this test API worked',
      'stCtcId',
      '0x00000e'
    )
  }

  const deploy = () => {
    //fill this in later
  }
// this is the div that is generated from the API code
  const apiDivs = () => {
    let array = [];
    let counter = 0;
    for (const i in User){
      counter++
      let div = 
        <div>
          <br/>
          {`${i} ${User[i][0]} ==> `}
          <input className = {`${i}${User[i][0]}${counter}`}></input>
          <br/>
          <button>Call {i} API</button>
        </div>
      array = array.concat(div);
    }
    console.log(array);
    return array;
  }
//
  return (
    <div>
      <h1>Check This Out</h1>
      <button onClick={connect}> Connect </button>

      <div><h3> Your Connected Wallet Address: </h3> {address} </div>
      <div> <h3> Your Wallet Balance: </h3> {balance} ALGO </div>
      <button onClick={deploy}> Deploy </button>
      <br/>
      <br/>
      <button onClick={saveToDB}> Add a dummy ctc to Database </button>
      {apiDivs()}
    </div>
  );
}

export default Deliver;
