import { useContract } from "@thirdweb-dev/react";



function ThisOne(){
  const spender = '0x5cD4165B2e84c14729c21dF908c98F3446753cAb';
  const addedValue = 35000;
  const { contract, isLoading } = useContract("0x963DeD2a1Bc6527563D37A673D1e7b5D8CE0c70C");
/* const result = async() => await contract.call("increaseAllowance", spender, addedValue); */

  return (
    <div>
      <button>Just Increase it</button>
    </div>
  )
  
}

export default ThisOne;