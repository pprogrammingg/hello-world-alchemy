import fs from 'fs';
import path from 'path';


interface ContractJSON {
  abi: any; // Define the type for ABI based on your contract's ABI structure
}

// Define ContractJSON interface for type checking
interface ContractJSON {
    abi: any; // Define the type for ABI based on your contract's ABI structure
    bytecode: string; // Define the type for bytecode
  }
  
  // Define the function to retrieve ABI and bytecode from the specified artifact file
  export const getTheAbiAndByteCode = (artifactName: string): { abi?: any; bytecode?: string } => {
    try {
        
      const rootDir: string = path.resolve(__dirname, '..'); // Navigate up one directory from 'scripts'

      // Resolve the file path based on the artifactName parameter
      const dir: string = path.resolve(rootDir, `artifacts/contracts/${artifactName}`);
  
      // Read the file content synchronously using fs.readFileSync
      const file: string = fs.readFileSync(dir, 'utf8');
  
      // Parse the JSON content and extract ABI and bytecode
      const json: ContractJSON = JSON.parse(file);
      const { abi, bytecode } = json;
  
      // console.log(`ABI for ${artifactName}:`, abi);
      // console.log(`Bytecode for ${artifactName}:`, bytecode);
  
      return { abi, bytecode };
    } catch (e) {
      console.error(`Error reading ABI and bytecode file for ${artifactName}:`, e);
      return {};
    }
  };
