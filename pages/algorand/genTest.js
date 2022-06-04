import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backendDB from '../../reachBackend/indexDB3.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";

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
  const api = async (reachBackend, ctcDeployed,worked, errored, apiArg) => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(reachBbackend, ctcDeployed);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(worked)
        } catch (e) {
            res = [`err`, e]
            console.log(errored)
        }
    };

    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.btCtcId(apiArg);
        return apiReturn;
    });
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
      
    </div>
  );
}

export default Deliver;
