/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import "@atixlabs/hardhat-time-n-mine"
import "hardhat-gas-reporter"

module.exports = {
  solidity: "0.8.6",
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
