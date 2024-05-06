import { BytesLike, ContractFactory, Wallet, providers } from 'ethers';
import { getTheAbiAndByteCode } from './getArtifactProps';
import "../dotEnvConfig";

async function main() {

    const { API_URL, PRIVATE_KEY } = process.env;
    const provider = new providers.JsonRpcProvider(`${API_URL}`);
    const wallet = new Wallet(`${PRIVATE_KEY}`, provider); // Use your private key to create a wallet

    const { abi, bytecode } = getTheAbiAndByteCode('HelloWorld.sol/HelloWorld.json');

    // Check if ABI and bytecode are defined
    if (!abi || !bytecode) {
        throw new Error('Failed to retrieve ABI or bytecode');
    }
  
    const HelloWorld = new ContractFactory(abi, bytecode as BytesLike, wallet);
 
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