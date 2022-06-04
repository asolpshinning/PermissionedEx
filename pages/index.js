import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import {unsafeAllowMultipleStdlibs} from "@reach-sh/stdlib";
import * as backendERC from '../reachBackend/erc20b.main.js';
import * as backendDB from '../reachBackend/indexDB3.main.js'
import * as backendST from '../reachBackend/indexST.main.js'
import * as backendCtc from '../reachBackend/indexCtc2.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";


//0x057a1B89a5Ba8A6944ADF1573C86d733615FA63b  = usdc id = stored in db  #acc 2
//0xc09e15db2f49B7B02d25b42E6F23c2E4Ff8945b6  = share token = stored in db #acc 5
//0x73D7D5194549aA630d46e0192dAfC27388368145  = central manager ctc = stored in db #acc 5

export default function Home() {
  const dbCtcId = '0xBe3BFf421AC52c81EEe4bD802Dd219A313E55758' //kovan deployed DB test3
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
  const [btDeploy, setBtDeploy] = useState(['DEPLOY' , `USDC or Equivalent`, 'USDC/BT']);
  const [stDeploy, setStDeploy] = useState(['DEPLOY' , ` Share Tokens`, 'ST or Equivalent']);
  const [ctcDeploy, setCtcDeploy] = useState(`DEPLOY`);
  const [lock, setLock] = useState(`Sales unlocked. Approved investors are free to trade`);
  const btDeployed = useRef(false);
  const stDeployed = useRef(false);
  const ctcDeployed = useRef(false);
  const firstUpdate = useRef(false);
  const stcId = useRef('');
  const centralCtc = useRef('');

  useEffect(async() => {
    //event.preventDefault();
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
      unsafeAllowMultipleStdlibs()
      const acc = await reach.getDefaultAccount()
      setAddress(acc.getAddress());
      const addr = acc.getAddress();
      setBalance(reach.formatCurrency((await reach.balanceOf(acc))),4);
      //console.log(addr)
      //view DB to see if backing token is already deployed
      const ctc = await acc.contract(backendDB, dbCtcId);
      //console.log(await ctcUser.views)
      const x =  await ctc.views.vBtCtc(addr) 
      console.log('This is the backing token',x)
      if (x[1] != '0x0000000000000000000000000000000000000000') {
        setBtDeploy([`BACKING TOKEN ALREADY DEPLOYED: ${x[1]}`]);
        btDeployed.current = true;
        console.log(`Creator has deployed BT contract: `, x[1]);
      }
      const st =  await ctc.views.vStCtc(addr);
      stcId.current = st[1];
      console.log('This is the share token', st)
      if (st[1] != '0x0000000000000000000000000000000000000000') {
        setStDeploy([`SHARE TOKEN ALREADY DEPLOYED: ${st[1]}`]);
        stDeployed.current = true;
        console.log(`Creator already deployed ST contract: `, st[1]);
      }
      // read central ctc from the DB and save it into var centralCtc
      const cenCtc = await ctc.views.vManCtc(addr);
      centralCtc.current = cenCtc[1];
      console.log(`central CTC already deployed: `, centralCtc.current);
      if (cenCtc[1] != '0x0000000000000000000000000000000000000000') {
        setCtcDeploy([`Manager Contract ALREADY DEPLOYED: ${cenCtc[1]}`]);
        ctcDeployed.current = true;
        console.log(`Creator already deployed Central Manager contract: `, cenCtc[1]);
      }
}
    if (firstUpdate === true){ 
    }   
  }, [/* btDeploy, stDeploy, ctcDeploy */]);

  //useful function for reading user-entered values from input boxes
  const getElement = (className) => {
    let theElement = document.getElementsByClassName(className)[0];
    console.log(theElement.value)
    return theElement.value
  }
//
  //useful function for storing ctcId's to decentralized database
  const dbApi = async(deployedCtc, apiCalled) => {
              let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
              let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
              const acc = await reach.getDefaultAccount();
              await acc.setGasLimit(5000000);
              console.log(`Gas Limit Set for storing ctcid into decentralized database`)
              const call = async (f) => {
                let res = undefined;
                try {
                  res = await f();
                  console.log(`ctcid stored in db: `, res)
                } catch (e) {
                  res = [`err`, e]
                  console.log(`There is an error while trying to store in db: `, e)
                }
                
              };
              const ctc = acc.contract(backendDB, dbCtcId); //dbCtcId is the contract acting as db
             
              const apis = ctc.a;
              //const apisST = ctcST.a;
              call(async () => {
                let apiReturn;
                if (apiCalled === "btCtcId") {
                  apiReturn = await apis.btCtcId(deployedCtc); //backing token API (btCtcId) stores "deployedCtc" id into the contract (dbCtcId)
                } else if (apiCalled === "stCtcId") {
                  apiReturn = await apis.stCtcId(deployedCtc);
                } else if (apiCalled === "manCtcId") {
                  apiReturn = await apis.manCtcId(deployedCtc);
                } /* else if (apiCalled === "addCtcToST") {
                  apiReturn = await apisST.realCentralCtc(centralCtc);
                } */
                  
                return apiReturn;
              });
          }
  
  // for deploying ERC20 or USDC (backing token) contract for testing purposes only
  const deployBT = async () => {
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await stdlib.getDefaultAccount()
   //connect to backendERC
    const ctcCreator = accCreator.contract(backendERC);
    console.log(`...backend now connected`);
    await Promise.all([
      backendERC.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set four parameters of ERC20`);
          
          return {
            name: getElement("btCtcName"), symbol: getElement("btCtcSymbol"), uri: `https://tinyurl.com/4nd2faer`,
            zeroAddress: `0x0000000000000000000000000000000000000000`, 
          }

        },
        iDeployed: async(msg) => {
          console.log(msg);
          const deployedCtc = await ctcCreator.getContractAddress();
          console.log(deployedCtc);
          //API for storing contract ID into database
          dbApi(deployedCtc, "btCtcId");
        },
      })])
  }
  //
  // for deploying share token contract for testing purposes only
  const deployST = async () => {
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await stdlib.getDefaultAccount()
   //connect to backendST
    const ctcCreator = accCreator.contract(backendST);
    console.log(`...backend now connected`);
    await Promise.all([
      backendST.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set four parameters of ShareTOkens`);
          
          return {
            name: getElement("stCtcName"), symbol: getElement("stCtcSymbol"), uri: `https://tinyurl.com/4nd2faer`, centralCtc: accCreator.getAddress(), managerAddr: accCreator.getAddress(),
            zeroAddress: `0x0000000000000000000000000000000000000000`, 
          }

        },
        iDeployed: async(msg) => {
          console.log(msg);
          const deployedCtc = await ctcCreator.getContractAddress();
          console.log(deployedCtc);
          //API for storing contract ID into database
          dbApi(deployedCtc, "stCtcId");
        },
      })])
  }
  //deploy central manager contract
  const deployManCtc = async () => {
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await stdlib.getDefaultAccount()
   //connect to backendST
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);
    await Promise.all([
      backendCtc.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set five parameters of Manager Contract`);
          
          return {
            companyName: getElement("manCtcName"), sT: getElement("stID"), bT: getElement("btID"),
            lockSale: false, managerAddr: accCreator.getAddress(), 
          }

        },
        iDeployed: async(msg) => {
          console.log(msg);
          const deployedCtc = await ctcCreator.getContractAddress();
          console.log(deployedCtc);
          //API for storing contract ID into database
          dbApi(deployedCtc, "manCtcId");
        },
      })])
  }
  //This API is for adding central CTC to the ST contract
  const addCentralCtcToST = async() => {
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    //let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const acc = await reach.getDefaultAccount();
    await acc.setGasLimit(5000000);
    console.log(`Gas Limit Set`);
    console.log(stcId.current);
    const ctc = acc.contract(backendST, stcId.current);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`central ctc id just changed in ST Contract: `, res)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
    };
    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.realCentralCtc(centralCtc.current);
        console.log(`wait for it... db should...`, apiReturn);
        return apiReturn;
    });
  }
  //API for minting share tokens into your wallet
  const mint = async() => {
    const qty = parseInt(getElement('mintQty'))
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    //let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const acc = await reach.getDefaultAccount();
    await acc.setGasLimit(5000000);
    console.log(`Gas Limit Set`);
    //console.log(stcId.current);
    const ctc = acc.contract(backendST, stcId.current);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`Share tokens just minted: `, qty)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
    }; 
    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.mint(acc.getAddress(), qty);
        console.log(`wait for it... share tokens minted...`, apiReturn);
        return apiReturn;
    });
  }
  //API for allocating share tokens into investors
  const allocateST = async() => {
    const tokenAllocated = parseInt(getElement('tokenAllocated'));
    const addr = getElement('invWallet')
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    //let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const acc = await reach.getDefaultAccount();
    await acc.setGasLimit(5000000);
    console.log(`Gas Limit Set`);
    //console.log(stcId.current);
    const centralContract = centralCtc.current;
    console.log(`I am reprinting central ctc: `, centralContract)
    const ctc = acc.contract(backendCtc, centralContract);
    console.log(centralCtc.current);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`Share tokens just allocated to ${addr} : `, tokenAllocated)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
    }; 
    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.aST(acc.getAddress(),addr, tokenAllocated);
        console.log(`wait for it... share tokens allocated...`, apiReturn);
        return apiReturn;
    });
  }
  //
  return (
    <div>
      <h3>Connected Address: </h3> {address}
      <h3>Balance: </h3> {balance} ETH
      <br/>
      <br/>

      <h2>Deploy Backing Token Contract (e.g USDC for testing purpose only) </h2>
         Name => 
      {btDeployed.current == false ? <input className = 'btCtcName'></input> : 'Backing Token'}
      <br/>
       Symbol =>
       {btDeployed.current == false ? <input className = 'btCtcSymbol'></input> : 'USDC/BT'}
      <br/>
      <br/>
      <button onClick = {() => { if(btDeployed.current == false) deployBT()}}>{btDeploy[0]}</button>
      <br/>

      <h2>Deploy Share Token Contract (Shareholder tokens representing business ownership)</h2>
        Name =>
      {stDeployed.current == false ? <input className = 'stCtcName'></input> : 'Share Token'}
      <br/>
      Symbol =>
      {stDeployed.current == false ? <input className = 'stCtcSymbol'></input> : 'ST or Equivalent'}
      <br/>
      <br/>
      <button onClick = {() => { if(stDeployed.current == false) deployST()}}>{stDeploy[0]}</button>
      <br/>
      
      <h2>Deploy Central / Manager Contract (Manages allocations and distributions)</h2>
      Syndication Name =>
      {ctcDeployed.current == false ? <input className = 'manCtcName'></input> : 'Central / Manager Contract'}
      <br/>
      Share Token ID =>
      {ctcDeployed.current == false ? <input className = 'stID'></input> : ctcDeploy}
      <br/>
      Backing Token ID =>
      {ctcDeployed.current == false ? <input className = 'btID'></input> : ctcDeploy}
      <br/>
      <br/>
      <button onClick  = {deployManCtc}>{ctcDeploy}</button>
      <br/>
      <br/>

      
      <h3> If you already deployed Share Token Contract & Manager Contract, click this button below once so that your manager contract ID can be whitelisted on your Share Token Contract </h3>
      <button onClick = {addCentralCtcToST}>Add Central Contract ID to ST Contract</button>

      
      <h2>Mint Share Tokens To Your Wallet (only wallet-to-contract transfers allowed or vice-versa) </h2>
      
      Amount to be Minted =>
      <input className = 'mintQty'></input> (integers only)
      <br/>
      Legal Document Hash =>
      <input className = 'docHash'></input> (if necessary)
      <br/>
      <br/>
      <button onClick = {mint}>MINT</button>
      <br/>
      <br/>
      Total share tokens minted since launch: <br/>
      Total share tokens in your wallet:
      
      

      <h2>Allocate Share Tokens to an Investor (Investors can pickup allocated tokens later)</h2>
      Name of Investor ==
      <input className = 'invName'></input>
      <br/>
      Investor Wallet =>=>
      <input className = 'invWallet'></input>
      <br/>
      Amount of Tokens =>
      <input className = 'tokenAllocated'></input>
      <br/>
      <br/>
      <button onClick = {allocateST}>ALLOCATE</button>
      <br/>
      <br/>
      Total share tokens allocated since launch: <br/>
      Total share tokens claimed by investors:
      

       <h2>Send Backing Tokens for Distribution (Just send once and each investor can claim) </h2>
      Amount of Tokens =>
      <input className = 'distrAmt'></input> (Integer only)
      <br/>
      <br/>
      <button>SEND</button>
      <br/>
      <br/>
      Total backing tokens sent to contract since launch: <br/>
      Total backing tokens distributed / claimed by investors:
      

      <h2>Lock / Unlock Share Token Sales (During vesting, and during distributions, lock sales) </h2> 
      No investor can currently sell or buy share tokens
      <br/>
      <br/>
      <button onClick = {() => getElement("btCtcName")}>LOCK</button>
    </div>
    )
}
