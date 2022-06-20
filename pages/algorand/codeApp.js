export const codeApp = `
  import loadStdlib from "@reach-sh/stdlib";
//import * as backend from '../../reachBackend/indexDB3.main.js';
import React from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { useState } from "react";

const ctcDeployed = '0xBe3BFf421AC52c81EEe4bD802Dd219A313E55758' //kovan deployed DB test3
  //'0x1f177A4BFa0D699ccEB132Ed017107F43BDbD7D8' //kovan deployed DB test2

function App() {
  const [address, setAddress] = useState("Connect Your Wallet. Click 'connect'");
  const [balance, setBalance] = useState(0);
 //
  const connect = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));
      //unsafeAllowMultipleStdlibs()
    const acc = await reach.getDefaultAccount()
    await acc.setGasLimit(5000000);
    setAddress(await acc.getAddress());
    setBalance(await reach.formatCurrency((await reach.balanceOf(await acc.getAddress())), 4))
    //

  };
  // for deploying contract
  const deploy = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    const stdlib = reach;
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const accCreator = await stdlib.getDefaultAccount();
    setAddress(await accCreator.getAddress());
    setBalance(await stdlib.formatCurrency((await stdlib.balanceOf(await accCreator.getAddress())), 4))
    const ctcCreator = accCreator.contract(backend);
    console.log('...backend now connected');
    await Promise.all([
      backend.Creator(ctcCreator, {
        getParams: () => {
          console.log('Creator about to set one parameter of dbCtc');
          return {
            zeroAddress: '0x00000000', 
          }

        },
        iDeployed: (msg) => {
          console.log(msg);
          console.log(ctcCreator.getInfo())
          console.log(ctcCreator.getContractAddress())
        },
      })])
  }

  
  //API for saving new contract address into DB
  const saveToDB = async () => {
    const reach = loadStdlib.loadStdlib({REACH_CONNECTOR_MODE: "ALGO"});
    reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(backend, ctcDeployed);
    setAddress(await acc.getAddress());
    
    const call = async (f) => {
        let res = undefined;
        try {
            res = await f();
            console.log('data just stored into decentralized db: ', res)
        } catch (e) {
            res = ['err', e]
            console.log('There is an error: ', e)
        }
        const vBtCtc = await ctc.views.vBtCtc(acc.getAddress());
        console.log('User has deployed BT contract: ', vBtCtc[1])

    };
    const apis = ctc.a;
    console.log(apis);
    call(async () => {
        const apiReturn = await apis.btCtcId('0x057a1B89a5Ba8A6944ADF1573C86d733615FA63b');
        console.log('wait for it... db should...', apiReturn);
        return apiReturn;
    });
  }
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
export default App;`