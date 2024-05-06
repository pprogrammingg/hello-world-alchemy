// Example based on https://docs.alchemy.com/reference/logs

import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";
import "../dotEnvConfig";
import { getTheAbiAndByteCode } from './getArtifactProps';

const { abi } = getTheAbiAndByteCode('HelloWorld.sol/HelloWorld.json');
const iface = new ethers.utils.Interface(abi);


const { API_KEY, CONTRACT_ADDRESS } = process.env;

const settings = {
  apiKey: `${API_KEY}`,
  network: Network.OPT_SEPOLIA, 
};
const alchemy = new Alchemy(settings);

// Subscription for new blocks on Eth Mainnet.
alchemy.ws.on("block", (blockNumber) =>
  console.log("Welcome to Alchemy SDK, the latest block number is", blockNumber)
);


// This filter could also be generated with the Contract or
// Interface API. If address is not specified, any address
// matches and if topics is not specified, any log matches
const filter = {
  address: `${CONTRACT_ADDRESS}`,
  topics: [ethers.utils.id("UpdatedMessages(string,string)")],
};

// Subscribe to logs using Alchemy WebSocket API
alchemy.ws.on(filter, (log, event) => {
  console.log(`Received log:`, log);

  // Decode the provided hex string
  let decodedData = iface.decodeEventLog("UpdatedMessages", log.data)


  console.log("Decoded log data:", decodedData);

  console.log(`Received event:`, event);
});
