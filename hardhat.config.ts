import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers : [{
      version: "0.8.12",
    },
    {
      version: "0.6.12",
    }
  ],
  overrides: {},
  },
  networks : {
    hardhat : {
      forking : {
        url : "https://klaytn04.fandom.finance/",
      },
      accounts : {
        mnemonic : "test test test test test test test test test test test junk",
        initialIndex : 0,
        accountsBalance : "1000000000000000000000000" // 1,000,000 KLAY
      },
      blockGasLimit: 30000000,
    },
    baobab : {
      url : "https://api.baobab.klaytn.net:8651",
      chainId : 1001,
      accounts : require("./privateKey.json").privateKey,
      gas : 200000000,
      gasPrice : 2500000000000,
    },
    cypress : {
      url : "https://klaytn01.fandom.finance/",
      chainId : 8217,
      accounts : require("./privateKey.json").privateKey,
      gas : 200000000,
      gasPrice : 2500000000000,
    }
  }
};

export default config;
