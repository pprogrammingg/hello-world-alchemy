/**
* @type import('hardhat/config').HardhatUserConfig
*/

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//import "@nomicfoundation/hardhat-verify"
import "./dotEnvConfig"

const { API_URL, PRIVATE_KEY, OP_SEPOLIA_BLOCKSCOUTS_API_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "optimismSepolia",
  networks: {
     hardhat: {},
     optimismSepolia: {
        url: API_URL,
        accounts: [`${PRIVATE_KEY}`]
     }
  },
  etherscan: {
      // Your API key for Etherscan
      apiKey: OP_SEPOLIA_BLOCKSCOUTS_API_KEY,
      customChains:[
         {
            network: "optimismSepolia",
            chainId: 11155420,
            urls: {
               apiURL: "https://optimism-sepolia.blockscout.com/api",
               browserURL: "https://optimism-sepolia.blockscout.com"
            }
         }
      ]  
   },
}

// console.log(`${JSON.stringify(config, null, 2)}`);

export default config;

