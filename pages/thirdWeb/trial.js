//import { useContract } from "@thirdweb-dev/react";
import {loadStdlib} from "@reach-sh/stdlib";

import {ABI, byteCode} from './useThis'; 
import { ContractFactory } from "ethers";
const myGasLimit = 5000000;
const bt = '0x20d95DeBC5A4C2bA6323088c4647d706E05e72aC';
const st = '0xC5Ef67fB467eA4ae218eF7Abf5Abff599e1F918f';



function ThisOne(){

  const deploy = async()=> {
    const { ethers } = loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const reach = loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const accAlice = await reach.getDefaultAccount()
    accAlice.setGasLimit(myGasLimit);
  
    //const remoteABI = remoteCtc["abi"];
    //const remoteBytecode = remoteCtc["bin"];
    const factory = new ethers.ContractFactory(ABI, byteCode, accAlice.networkAccount);
    const contract = await factory.deploy("Zorkmid", "ZMD",bt,st, { gasLimit: myGasLimit });
    await contract.deployTransaction.wait();
    const ctcId = contract.address;
    console.log(contract);
    console.log(ctcId);
    const t = await contract["getCM"]();
    //await t.wait();
    console.log(t);
    //const t = await contract["mint"](supply);
    //await t.wait();
  }

  const interact= async() => {
    const ctcId = '0x6aaD00e0F676FF0c2ea7D2E352225fCcc49Aa22e'
    //const { ethers } = loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const reach = loadStdlib({REACH_CONNECTOR_MODE: "ETH-browser"});
    const accAlice = await reach.getDefaultAccount()
    accAlice.setGasLimit(myGasLimit);
    
    const contractFactory = new ContractFactory(ABI, byteCode, accAlice.networkAccount);
    const ctc = contractFactory.attach(ctcId);
    const t = await ctc["_totBT"]();
    console.log(t);
  }
  


  return (
    <div>
      <button onClick = {deploy}>Deploy</button>
      <br/>
       <button onClick = {interact}>Interact</button>
    </div>
  )
  
}

export default ThisOne;