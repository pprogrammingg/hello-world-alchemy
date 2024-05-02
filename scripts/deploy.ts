import { BytesLike, ContractFactory } from 'ethers';
import { getTheAbiAndByteCode } from './getArtifactProps';

async function main() {
    const { abi, bytecode } = getTheAbiAndByteCode('HelloWorld.sol/HelloWorld.json');

    // Check if ABI and bytecode are defined
    if (!abi || !bytecode) {
        throw new Error('Failed to retrieve ABI or bytecode');
    }
  
    const HelloWorld = new ContractFactory(abi, bytecode as BytesLike);
 
    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");   
    console.log("Contract deployed to address:", hello_world.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });