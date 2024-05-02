/**
* @type import('hardhat/config').HardhatUserConfig
*/

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "sepolia",
  networks: {
     hardhat: {},
     sepolia: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
}

export default config;

