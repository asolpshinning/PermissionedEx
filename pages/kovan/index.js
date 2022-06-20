import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import {unsafeAllowMultipleStdlibs} from "@reach-sh/stdlib";
import * as backendERC from '../../reachBackend/erc20b.main.js';
import * as backendDB from '../../reachBackend/indexDB3.main.js'
import * as backendST from '../../reachBackend/indexST.main.js'
import * as backendCtc from '../../reachBackend/indexCtc3.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";
//

export default function Home() {
  const dbCtcId = '0xffd647a596d9ec345d9cbd4d1235d9d957a9fde1'// KOVAN => '0x28f434B75693DF60eFB4830dEA68BB5Eb6F9546d' //Algorand deployed DB test1 //'91227394' DB 2//
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
  const [btDeploy, setBtDeploy] = useState(['DEPLOY' , `USDC or Equivalent`, 'USDC/BT']);
  const [stDeploy, setStDeploy] = useState(['DEPLOY' , ` Share Tokens`, 'ST or Equivalent']);
  const [ctcDeploy, setCtcDeploy] = useState(`DEPLOY`);
  const [lock, setLock] = useState(`Sales unlocked. Approved investors are free to trade`);
  const [totTokens, setTotTokens] = useState([0,0,0]);
  const [totTokensRec, setTotTokensRec] = useState([0,0,0]);
  const [tokenData, setTokenData] = useState(
    <div>
      
  </div>)
  const btDeployed = useRef(false);
  const stDeployed = useRef(false);
  const ctcDeployed = useRef(false);
  const firstUpdate = useRef(false);
  const stcId = useRef('');
  const centralCtc = useRef('');

  useEffect(async() => {
    //event.preventDefault();
      const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
      const acc = await reach.getDefaultAccount()
      setAddress(acc.getAddress());
      const addr = acc.getAddress();
      setBalance(reach.formatCurrency((await reach.balanceOf(acc))),4);
      //view DB to see if backing token is already deployed
      const ctc = await acc.contract(backendDB, dbCtcId);
      const x =  await ctc.views.vBtCtc(addr);
      console.log('This is the backing token',x[1]);
      console.log('Backing token ID in big number: ', reach.hexToBigNumber(x[1]));
      if (x[1] != '0x0000000000000000000000000000000000000000') {
        setBtDeploy([`BACKING TOKEN ALREADY DEPLOYED: ${x[1]}`]);
        btDeployed.current = true;
        console.log(`Creator has deployed BT contract: `, x[1]);
      }
      const st =  await ctc.views.vStCtc(addr);
      stcId.current = st[1];
      //console.log('This is the share token', st)
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
              const acc = await reach.getDefaultAccount();
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
  //show/reset token distribution and allocation data
  const showTokenData = async() => {
    const cenCtc = getElement('tokenData')
      const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
      const acc = await reach.getDefaultAccount();
      const ctc = await acc.contract(backendCtc, cenCtc);
      const tot =  await ctc.views.totSTBTD();
      const claimed = await ctc.views.totSTBTDRec(acc.getAddress());
      const allocated = await ctc.views.claimSTBT(acc.getAddress());
      let totST = reach.bigNumberToNumber(tot[1][0]);
      let totBT = reach.bigNumberToNumber(tot[1][1]);
      let cST = reach.bigNumberToNumber(claimed[1][0]);
      let cBT = reach.bigNumberToNumber(claimed[1][1]);
      let allocatedST = reach.bigNumberToNumber(allocated[1][0]);
      console.log('This is the total share token: ',totST, 'and total backing token: ', totBT);
    setTokenData(
    <div>
      FOR INVESTOR: <br/>
      Total share tokens in your custom investor's wallet: <b>TBD</b>  <br/>
      Total share tokens allocated to current logged-in investor since launch: ==> <b>{allocatedST}</b> <br/>
      Total backing tokens claimed by current logged-in investor: ==> <b>{cBT}</b> <br/>

      FOR SYNDICATOR: <br/>
      Total share tokens allocated since launch ==> <b>{totST}</b> <br/>
      Total backing tokens sent to contract since launch ==> <b>{totBT}</b> <br/>
      
    </div>
    )
  }
  // for deploying ERC20 or USDC (backing token) contract for testing purposes only
  const deployBT = async () => {
    //connect wallet
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await reach.getDefaultAccount();
    //Launch tokens
    const bT = await reach.launchToken(accCreator, getElement("btCtcName"), getElement("btCtcSymbol"));
    console.log('This is the ID of the backing token: ', bT.id);
    //console.log('Backing token ID in plain number: ', reach.bigNumberToNumber(bT.id._hex));
    dbApi(bT.id, "btCtcId");
  }
  //
  // for deploying share token contract for testing purposes only
  const deployST = async () => {
    //connect wallet
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await reach.getDefaultAccount()
   //connect to backendST
    const ctcCreator = accCreator.contract(backendST);
    console.log(`...backend now connected`);
    await Promise.all([
      backendST.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${reach.formatAddress(accCreator)} about to set four parameters of ShareTOkens`);
          
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
  
  //Mint share token
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
  
  //deploy central manager contract
  const deployManCtc = async () => {
    //connect wallet
    let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const accCreator = await stdlib.getDefaultAccount()
   //connect to backendST
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);
    await Promise.all([
      backendCtc.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set five parameters of Manager Contract`);
          return {
            companyName: getElement("manCtcName"), bT:  getElement("btID"), sT: getElement("stID"),
            lockSale: false, managerAddr: accCreator.getAddress(), authorizedST: 1000
          }

        },
        iDeployed: async(msg) => {
          console.log(msg);
          const deployedCtc = await ctcCreator.getInfo();
          console.log(deployedCtc);
          //API for storing contract ID into database
          dbApi(deployedCtc, "manCtcId");
        },
      })])
  }
  
  //API for allocating share tokens into investors
  const allocateST = async() => {
    const tokenAllocated = parseInt(getElement('tokenAllocated'));
    const addr = getElement('invWallet')
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ETH-browser" });
    const acc = await reach.getDefaultAccount();
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
  //Deploy DB
  const deployDB = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const stdlib = reach;
    const accCreator = await stdlib.getDefaultAccount();
    const ctcCreator = accCreator.contract(backendDB);
    console.log(`...backendDB now connected`);
    await Promise.all([
      backendDB.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set one parameter of dbCtc`);
          return {
            zeroAddress: `0x0000000000000000000000000000000000000000`, 
          }

        },
        iDeployed: (msg) => {
          console.log(msg);
          console.log(ctcCreator.getInfo())
          console.log(ctcCreator.getContractAddress())
        },
      })])
  }
  // Save to DB
  const saveToDB = async (arg) => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(backendDB, dbCtcId);
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`data just stored into decentralized db: `, res)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
        /* const vBtCtc = await ctc.views.vBtCtc(acc.getAddress());
        console.log(`User has deployed BT contract: `, vBtCtc[1]) */

    };

    const apis = ctc.a;
    console.log(apis);
    call(async () => {
        let apiReturn;
        const bt = '';
        const st = '';
        const man = '';
        if(arg = 'bt') apiReturn = await apis.btCtcId(bt);
        if(arg = 'st') apiReturn = await apis.stCtcId(st);
        if(arg = 'man') apiReturn = await apis.manCtcId(man);
        console.log(`wait for it... db should...`, apiReturn);
        return apiReturn;
    });
  }
  //
  
  //Distribute backing token
  const distrBT = async() => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const acc = await reach.getDefaultAccount();
    const addr = acc.getAddress();
    const amt = parseInt(getElement('distrAmt'));
    const ctc = acc.contract(backendCtc, centralCtc.current);
    const call = async (f) => {
                    let res = undefined;
                    try {
                        res = await f();
                        console.log(`This ${addr} has just paid this amount of Backing token into Central Contract: `, amt)
                    } catch (e) {
                        res = [`err`, e]
                        console.log(`There is an error: `, e)
                    }
                };
                const apis = ctc.a;
                call(async () => {
                    const apiReturn = await apis.dBT(amt);
                    //console.log(`wait for it... share tokens allocated...`, apiReturn);
                    return apiReturn;
                }); 
    
  }

   //Claim backing token
  const claimBT = async() => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const acc = await reach.getDefaultAccount();
    const addr = acc.getAddress();
    //const amt = parseInt(getElement('cBT'));
    const cenContr = getElement('cenContr');
    const ctc = acc.contract(backendCtc, cenContr);
    const call = async (f) => {
                    let res = undefined;
                    try {
                        res = await f();
                        console.log(`This ${addr} has just claimed this amount of Backing token from the Central Contract: `, amt)
                    } catch (e) {
                        res = [`err`, e]
                        console.log(`There is an error: `, e)
                    }
                };
                const apis = ctc.a;
                call(async () => {
                    const apiReturn = await apis.cBT();
                    return apiReturn;
                }); 
    
  }

  //
  return (
    <div>
      <h3>Connected Address: </h3> {address}
      <h3>Balance: </h3> {balance} ALGO
      <br/>
      <br/>
      <button onClick = {deployDB}>Deploy DB</button> 
      <br/>
       <button onClick = {() => saveToDB('bt')}>Save BT to DB</button>
        <br/>
      <button onClick = {() => saveToDB('st')}>Save ST to DB</button>
      <br/>
      <button onClick = {() => saveToDB('man')}>Save ManCtc to DB</button>
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
      Share Token ID => {ctcDeployed.current == false ? <input className = 'stID'></input> : ctcDeploy}
      <br/>
      Backing Token ID =>
      {ctcDeployed.current == false ? <input className = 'btID'></input> : ctcDeploy}
      <br/>
      <br/>
      <button onClick  = {() => { if(ctcDeployed.current == false) deployManCtc()}}>{ctcDeploy}</button>
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
      <br/>
      

      <h2>Allocate Share Tokens to an Investor (Investors automatically receive share tokens in custom wallet)</h2>
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

      
       <h2>Send Backing Tokens for Distribution (Just send once and each investor can claim) </h2>
      Amount of Tokens =>
      <input className = 'distrAmt'></input> (Integer only)
      <br/>
      <br/>
      <button onClick = {distrBT}>SEND</button>
      <br/>
      <br/>
      
      <h3>Show/Reset Distribution/ Allocation Data</h3>
      Central Contract ID ==> <input className = 'tokenData'></input> (Delete all the extra 0's at the end)<br/>
      {tokenData}
      <button onClick = {showTokenData}>Show/Reset</button>


      <h2>Claim Backing Tokens (Remember to Opt in First</h2>
      Central Contract ID ==> 
      <input className = 'cenContr'></input> <br/>
      <button onClick = {claimBT}>Claim</button>
      <br/>
      <br/>
      Test this and give feedback

      {/* <h2>Lock / Unlock Share Token Sales (During vesting, and during distributions, lock sales) </h2> 
      No investor can currently sell or buy share tokens
      <br/>
      <br/>
      <button onClick = {() => getElement("btCtcName")}>LOCK</button> */}
    </div>
    )
}
