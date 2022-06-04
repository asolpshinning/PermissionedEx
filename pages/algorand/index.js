import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import loadStdlib from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import {unsafeAllowMultipleStdlibs} from "@reach-sh/stdlib";
import * as backendERC from '../../reachBackend/erc20b.main.js';
import * as backendDB from '../../reachBackend/indexDB3.main.js'
import * as backendST from '../../reachBackend/indexST.main.js'
import * as backendCtc from '../../reachBackend/indexCtcALGO2.main.js'
import React from "react";
import { useState, useRef, useEffect } from "react";


//  91151742 = usdc id = stored in db  #acc 2
//  91162279 = share token = stored in db #acc 5
//   = central manager ctc = stored in db #acc 5

export default function Home() {
  const dbCtcId = '91149871' //Algorand deployed DB test1 //'91227394' DB 2//
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
  const [btDeploy, setBtDeploy] = useState(['DEPLOY' , `USDC or Equivalent`, 'USDC/BT']);
  const [ctcDeploy, setCtcDeploy] = useState(`DEPLOY`);
  //const [lock, setLock] = useState(`Sales unlocked. Approved investors are free to trade`);
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
      const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
      reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));
      unsafeAllowMultipleStdlibs()
      const acc = await reach.getDefaultAccount()
      setAddress(acc.getAddress());
      const addr = acc.getAddress();
      setBalance(reach.formatCurrency((await reach.balanceOf(acc))),4);
      //view DB to see if backing token is already deployed
      const ctc = await acc.contract(backendDB, dbCtcId);
      const x =  await ctc.views.vBtCtc(addr) 
      console.log('This is the backing token',x[1]);
      console.log('Backing token ID in big number: ', reach.hexToBigNumber(x[1]));
      if (x[1] != '0x0000000000000000000000000000000000000000000000000000000000000000') {
        setBtDeploy([`BACKING TOKEN ALREADY DEPLOYED: ${x[1].substring(0,10)}`]);
        btDeployed.current = true;
        console.log(`Creator has deployed BT contract: `, x[1].substring(0,10));
      }
      
      // read central ctc from the DB and save it into var centralCtc
      const cenCtc = await ctc.views.vManCtc(addr);
      centralCtc.current = cenCtc[1].substring(0,10);
      console.log(`central CTC already deployed: `, centralCtc.current);
      if (cenCtc[1] != '0x0000000000000000000000000000000000000000000000000000000000000000') {
        setCtcDeploy([`Manager Contract ALREADY DEPLOYED: ${cenCtc[1].substring(0,10)}`]);
        ctcDeployed.current = true;
        console.log(`Creator already deployed Central Manager contract: `, cenCtc[1].substring(0,10));
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
              let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
              reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
      const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
      reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const accCreator = await reach.getDefaultAccount();
    //Launch tokens
    const bT = await reach.launchToken(accCreator, getElement("btCtcName"), getElement("btCtcSymbol"));
    console.log('This is the ID of the backing token: ', bT.id._hex);
    console.log('Backing token ID in plain number: ', reach.bigNumberToNumber(bT.id._hex));
    dbApi(bT.id._hex, "btCtcId");
  }
  //
  // for deploying share token contract for testing purposes only
  const deployST = async () => {
    //connect wallet
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
  //deploy central manager contract
  const deployManCtc = async () => {
    //connect wallet
    let stdlib = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const accCreator = await stdlib.getDefaultAccount()
   //connect to backendST
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);
    await Promise.all([
      backendCtc.Creator(ctcCreator, {
        getParams: () => {
          console.log(`${stdlib.formatAddress(accCreator)} about to set five parameters of Manager Contract`);
          return {
            companyName: getElement("manCtcName"), bT: {"type": "BigNumber", "hex": getElement("btID")}, 
            lockSale: false, managerAddr: accCreator.getAddress(), authorizedST: 1000
          }

        },
        iDeployed: async(msg) => {
          console.log(msg);
          const deployedCtc = await ctcCreator.getInfo();
          console.log(deployedCtc);
          //API for storing contract ID into database
          dbApi(deployedCtc._hex, "manCtcId");
        },
      })])
  }
  
  //API for allocating share tokens into investors
  const allocateST = async() => {
    const tokenAllocated = parseInt(getElement('tokenAllocated'));
    const addr = getElement('invWallet')
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    const stdlib = reach;
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
        /* iDeployed: (msg) => {
          console.log(msg);
          console.log(ctcCreator.getInfo())
          console.log(ctcCreator.getContractAddress())
        }, */
      }),
      () => {
        let id = ctcCreator.getInfo();
        console.log(id)
                 }
    ]);
    
  }
  // Save to DB
  const saveToDB = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
        const vBtCtc = await ctc.views.vBtCtc(acc.getAddress());
        console.log(`User has deployed BT contract: `, vBtCtc[1])

    };

    const apis = ctc.a;
    console.log(apis);
    call(async () => {
        const id = reach.bigNumberToHex(91151742);
        console.log(id);
        const apiReturn = await apis.btCtcId(id._hex);
        console.log(`wait for it... db should...`, apiReturn);
        return apiReturn;
    });
  }
  //
  //optin to contract
  const optIn = async() => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const addr = acc.getAddress();
    const cenContr = getElement('optIn');
    const ctc = acc.contract(backendCtc, cenContr);
    const call = async (f) => {
                    let res = undefined;
                    try {
                        res = await f();
                        console.log(`This ${addr} has just been opted into the contract: `, res)
                    } catch (e) {
                        res = [`err`, e]
                        console.log(`There is an error: `, e)
                    }
                };
                const apis = ctc.a;
                call(async () => {
                    const apiReturn = await apis.optIn();
                    //console.log(`wait for it... share tokens allocated...`, apiReturn);
                    return apiReturn;
                });
  }
  //Distribute backing token
  const distrBT = async() => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
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

  //API for adding investor to WhiteList
const addToWhiteList = async () => {
    const addr = getElement('invAddWL') //get address to be added to whitelist from input box element
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const centralContract = centralCtc.current; //put central contract ID here
    console.log(`I am currently working on adding an investorto WL connecting to this ctc `, centralContract)
    const ctc = acc.contract(backendCtc, centralContract);

    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`Investor just added to whiteList: `, addr)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
    };
    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.addWL(addr);
        return apiReturn;
    });
}

  //API for removing an investor from whitelist
const remFromWhiteList = async () => {
    const addr = getElement('invRemWL') //get address to be removed from whitelist from input box element
    let reach = await loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const centralContract = centralCtc.current; //put central contract ID here
    console.log(`I am currently working on removing investor from WL connectiing to this ctc: `, centralContract)
    const ctc = acc.contract(backendCtc, centralContract);

    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log(`Investor just removed from whiteList: `, addr)
        } catch (e) {
            res = [`err`, e]
            console.log(`There is an error: `, e)
        }
    };
    const apis = ctc.a;
    call(async () => {
        const apiReturn = await apis.remWL(addr);
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
       <button onClick = {saveToDB}>Save BT to DB</button>
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

     
      
      <h2>Deploy Central / Manager Contract (Manages allocations and distributions)</h2>
      Syndication Name =>
      {ctcDeployed.current == false ? <input className = 'manCtcName'></input> : 'Central / Manager Contract'}
      <br/>
      Share Token ID => No need. SHare token will be automatically deployed in this contract.
      <br/>
      Backing Token ID =>
      {ctcDeployed.current == false ? <input className = 'btID'></input> : ctcDeploy}
      <br/>
      <br/>
      <button onClick  = {() => { if(ctcDeployed.current == false) deployManCtc()}}>{ctcDeploy}</button>
      <br/>
      <br/>
      
      <h2>Investor Optin (Investor should click this button once)</h2>
      Central Contract ID =>=>
      <input className = 'optIn'></input>
      <button onClick = {optIn}>OptIn to Manager Contract</button>
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


      <h2>Add Investor to WhiteList (Make sure investor opts in first)</h2>
      Investor Address ==> 
      <input className = 'invAddWL'></input> <br/>
      <button onClick = {addToWhiteList}>Add</button>
      <br/>

      <h2>Remove Investor from WhiteList (Make sure investor is already in WHiteList)</h2>
      Investor Address ==> 
      <input className = 'invRemWL'></input> <br/>
      <button onClick = {remFromWhiteList}>Remove</button>
      <br/>


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
