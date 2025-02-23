require("@nomiclabs/hardhat-waffle");

const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/polygon";
const NEXT_PUBLIC_PRIVATE_KEY = "a73cebabe2a04e8a314e1e5ce12a7c5a581f847ca6dd58246c25f2ceb8194a70";

 //module.exports = {
  // solidity: {
    // version: "0.8.4",
    // settings: {
    //   optimizer: {
     //    enabled: true,
     //    runs: 1000,
    //   },
   //  },
  // },
  // networks: {
   //  hardhat: {
     //  chainId: 31337,
    // },
   //},
 //};

 module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon:{
      url: NEXT_PUBLIC_RPC_URL,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      gas: 12000000,
    },
  },
};

