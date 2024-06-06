import { BytesLike, ContractFactory, Wallet, providers } from 'ethers';
import { getTheAbiAndByteCode } from './getArtifactProps';
import "../dotEnvConfig";

async function main() {

    const { API_URL, PRIVATE_KEY } = process.env;
    const provider = new providers.JsonRpcProvider(`${API_URL}`);
    const wallet = new Wallet(`${PRIVATE_KEY}`, provider); // Use your private key to create a wallet

    const { abi, bytecode } = getTheAbiAndByteCode('Escrow_Dummy.sol/Escrow.json');

    // Check if ABI and bytecode are defined
    if (!abi || !bytecode) {
        throw new Error('Failed to retrieve ABI or bytecode');
    }
  
    const EscrowDummy = new ContractFactory(abi, bytecode as BytesLike, wallet);
 
    // Start deployment, returning a promise that resolves to a contract object
    const escrow_dummy = await EscrowDummy.deploy();   
    console.log("Contract deployed to address:", escrow_dummy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });