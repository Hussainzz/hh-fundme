require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");


const COINMARKET = process.env.COINMARKET;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  //solidity: "0.8.8",
  solidity:{
    compilers:[
      {version: "0.8.8"},
      {version: "0.6.6"}
    ]
  },
  defaultNetwork:"hardhat",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 4,
      blockConfirmations: 6
    },
  },
  gasReporter:{
    enabled: true,
    outputFile: "gas-report.txt",
    noColors:true,
    currency: "USD",
    coinmarketcap: COINMARKET,
    token: "ETH"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts:{
    deployer:{
      default:0
    }
  }
};
