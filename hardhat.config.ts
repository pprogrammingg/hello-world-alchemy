/**
* @type import('hardhat/config').HardhatUserConfig
*/

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./dotEnvConfig"

const { API_URL, PRIVATE_KEY } = process.env;

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
}

console.log(`${JSON.stringify(config, null, 2)}`);

export default config;

