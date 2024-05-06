# Smart Contract Deployment and Interaction

This is a guide that could be followed to build Solidity smart contracts and interact with them.


## AlChemy Tutorials: Creating and Interacting with Smart Contracts

Learn how to create and interact with a smart contract using Alchemy:

### Hello World Contract
- [Hello World Smart Contract](https://docs.alchemy.com/docs/hello-world-smart-contract)

#### Topics and Code Base
- Alchemy Composer Tool for invoking some methods on blockchain explorer
- Install Node.js/npm, Hardhat (has ethers.js) for smart contract development

- Build and deploy a simple "Hello World" smart contract using Hardhat:
   - Develop the contract in Solidity
   - dotenv, metamask setup, metamask private key and AlChemy API key
   - Extract ABI and Bytecode of the contract
   - Provider and Signer setup
   - Deploy contract: Ethers ContractFactory
   - Instantiate deployed contract for uinteraction purposes using ABI and Signer
   - Read and write smart contract message

   ```
      npx hardhat run scripts/interact.ts 
   ```

   - Submit the smart contract to BlockSouts (OP Sepolia) for verification (similar procedure can be used for Etherscan compatible smart contracts)

   ```
      npx hardhat verify --network optimismSepolia <smart contract address> 'Hello World!'
   ```

   - Instantiate Alchemy SDK
   - Listening to on-Chain events with Alchemy SDK(read more here https://docs.alchemy.com/docs/on-chain-events)

   ```
      npx ts-node scripts/listenToEvents.ts
   ```

   - Decoding of log data using Abi decoder from ethers


## EVM Smart Contracts Event Handling
- Events can be defined at file level or as inheritable members of contracts (including interfaces and libraries). When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain. These logs are associated with the address of the contract that emitted them, are incorporated into the blockchain, and stay there as long as a block is accessible (forever as of now, but this might change in the future). The Log and its event data is not accessible from within contracts (not even from the contract that created them).

- Topics stored indexed information in the logs extracted from event. First topic is a hash of event signature (i.e. updateMessage(string, string))
- Certain events have indexed params, those can be the next items in the topics array (e.g. To and From address in a transfer event)
- Unindexed arguments are data of log and as such are store in the "data" field

### Storage, Memory, and Calldata
- see Reference Types
https://docs.soliditylang.org/en/latest/types.html#reference-types
### Events in Solidity
### Mapping and Arrays in Solidity
