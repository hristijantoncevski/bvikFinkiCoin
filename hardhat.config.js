require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { infuraApiKey, mnemonic, etherscanApiKey } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
  etherscan: {
    apiKey: `${etherscanApiKey}`,
  }
};
