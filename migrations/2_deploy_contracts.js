const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWallet, ["0x7Da5ebad446eeF7Baf796540976e7744Cd2f1c86", "0xd223a78E53826Ce36bCda5293Eb458e9b83F7025"], 2); // Replace with your owners and required confirmations
};
