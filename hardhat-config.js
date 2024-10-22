require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",   // Ganache default URL
    },
  },
  solidity: "0.8.18", // or the version you are using for your contract
};
