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
const cenCtc = '91149871';

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
//useful function for reading user-entered values from input boxes
  const getElement = (className) => {
    let theElement = document.getElementsByClassName(className)[0];
    return theElement.value
  }

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
  const callAPI = async (reachBackend, ctcDeployed, apiName, apiArg) => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(reachBackend, ctcDeployed);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`the ${apiName} API has successfully worked. Here is the response:`, res)
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
          apiReturn = await apis[apiName](...apiArg);
        } 
      }
        return apiReturn;
    });
  }

  //this is just an example of how callAPI works - worked well BTW
  const saveToDB = () => {
    callAPI(
      backendDB,
      cenCtc,
      'stCtcId',
      ['0x00000e']
    )
  }

  // this is the function that executes and call the callAPI
  const runAPI = (apiName) => {
    let arrArg = [];
    User[apiName][0].map(
      (j, index) => {
        let input = getElement(`${apiName}${User[apiName][0]}${index+1}`);
        //console.log(getElement(input))
        arrArg = arrArg.concat(input);
      }
    )
    //console.log(arrArg)
   callAPI(backendDB, cenCtc, apiName, arrArg )
  }

  const deploy = () => {
    //fill this in later
  }
  
// this is the div that is generated from the API code
  const apiDivs = () => {
    let array = [];
    let counter = 0;
    for (const i in User){
      User[i][0].map(
        (j, index) => {
          let div = 
            <div>
              <br/>
              {`${i} ${User[i][0]} ==> `}
              <input className = {`${i}${User[i][0][0]}${index+1}`}></input>
              <br/>
              <button onClick = {() => runAPI(i)}>Call {i} API</button>
            </div>
          console.log(`${i}${User[i][0][index]}${index++}`)
          array = array.concat(div);
        }
      )
      
      counter++
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
