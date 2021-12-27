<p align="center">
  <img src="https://res.cloudinary.com/tryvium/image/upload/v1626217444/Github/solidity_logo.png" height=250/>
  <img src="https://res.cloudinary.com/tryvium/image/upload/v1551645701/company/logo-circle.png" height=250 style="margin-left:30px;margin-right:30px;"/>
  <img src="https://res.cloudinary.com/tryvium/image/upload/v1626217279/Github/waffle-logo-square.svg" height=250/>
</p>

![GitHub](https://img.shields.io/github/license/tryvium-travels/smart-contracts-development-template?style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/tryviumtravels?style=social)

# Tryvium Smart Contracts Repository Template

The Tryvium Smart Contracts repository, based on Waffle, Typescript, used to create decentralized projects from a solid base.

This template includes an Example ERC20 implementation with tests.

# Usage

First of all you need to install the dependencies

``` bash
yarn install
```

Then you can add your solidity smart contracts to the [`contracts`](./contracts) directory
and the contract tests to the [`test`](./test) directory.

Finally, you can build your contracts using

``` bash
yarn build
```

and you can test them using

``` bash
yarn test
```

Finally, you can create a flatten version of all the contracts using the command

``` bash
yarn flatten
```

You will be able to use this flatten file to deploy your contract using Remix or
verify your contract using Etherscan or BSCscan.

This project is powered by [`waffle`](https://getwaffle.io) and [`Typescript`](https://www.typescriptlang.org).

Please, see the details of the scripts in [`package.json` file](package.json).
