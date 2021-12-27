// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Example contract using from ERC20
contract BasicToken is ERC20 {
  constructor(uint256 initialBalance) ERC20("Basic", "BSC") {
      _mint(msg.sender, initialBalance);
  }
}
