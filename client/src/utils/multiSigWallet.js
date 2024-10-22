import web3 from './web3';
import MultiSigWalletABI from '../contracts/MultiSigWallet.json'; // Ensure this path is correct

const contractAddress = '0x7Da5ebad446eeF7Baf796540976e7744Cd2f1c86'; // Replace with actual address
const multiSigWallet = new web3.eth.Contract(MultiSigWalletABI.abi, contractAddress); // Use .abi to access the ABI

export default multiSigWallet;
