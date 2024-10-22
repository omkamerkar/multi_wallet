const hre = require("hardhat");

async function main() {
  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(["0xAddress1", "0xAddress2"], 2); // Replace with your owners and required confirmations

  await multiSigWallet.deployed();
  console.log("MultiSigWallet deployed to:", multiSigWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
