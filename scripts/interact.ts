import "../dotEnvConfig";
import { getTheAbiAndByteCode } from './getArtifactProps';
import { Contract,Wallet, providers } from 'ethers';

const { API_URL, CONTRACT_ADDRESS, PRIVATE_KEY } = process.env;

const { abi } = getTheAbiAndByteCode('HelloWorld.sol/HelloWorld.json');

const provider = new providers.JsonRpcProvider(`${API_URL}`);
const wallet = new Wallet(`${PRIVATE_KEY}`, provider); // Use your private key to create a wallet

// Check if ABI and bytecode are defined
if (!abi || !CONTRACT_ADDRESS) {
    throw new Error('Failed to retrieve needed parameters');
}

const helloWorldContract = new Contract(CONTRACT_ADDRESS, abi, wallet);


async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
  }
  main();