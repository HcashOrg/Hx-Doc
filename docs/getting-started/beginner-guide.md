# Beginner's Guide

Last updated for v1.0.7

---

## Welcome To HyperExchange 

Welcome to HyperExchange! We are very glad to have you. As you may or may not already know, HyperExchange is different. There's a lot of new things to learn to fully grasp how things work. This documentation will attempt to make things a bit easier to understand.

This beginner's guide is a path to getting the HyperExchange software up and running. You can choose from multiple clients to get a node on the network and HyperExchange in your wallet. Specifically, you'll learn how to install, setup, and use the HyperExchange applications; how to obtain HX; and how to create cross-chain transaction.

**NOTE: Using Testnet is highly recommended for learning how to use HyperExchange software without worrying about making mistakes or losing money. After setup your software with following guides, please visit Using Testnet Guide to learn how to launch your application onto hyperexchange’s testnet.**

---
    
## Applications 

Below you'll find a list of currently available applications, with a chart showing their compatibility with different operating systems.

* **hx_node**: hx_node Connect to the HX network via P2P, receive blocks from the network, broadcast locally signed transaction packets to network, hx_node provide API to other programs to call through websocket + HTTP RPC, work with middleware to handle cross-chain deposit and withdrawal operations. HX_node manage wallet file, which contains the encrypted user’s private key. A wallet file can contain multiple private keys.

* **middleware**: Regularly collect data from BTC/LTC/ETH and other main chains,  and store it in database.

* **HXIndicator**: HXIndicator is a graphical user interface for hx wallet.

* **hx_client**: Connect through rpc to hx_node,hx_client provided  transaction signature function, and the signature is then broadcast to the hx_node,hx_client provides an API for other programs to call through HTTP RPC (hereinafter referred to as the wallet API).

|           | hx_node | middleware | HXIndicator | hx_client |
| ---------:|:----:|:---------:|:------:|:------:|
| Windows   | Y    | Y         | Y      | Y      |
| macOS     | Y    | Y         | Y      | Y      |
| Linux     | Y    | Y         | N      | Y      |


---

## User Guides

> General User

* Download HXIndicator for your operating system from HX official website.Refer to part `Download and Install` in [HXIndicator Setup](/wallets/hxindicator-setup.md)
* If you have got hx of mainnet, you can refer [Using HXIndicator](/wallets/hxindicator-using-account.md)  to use HXIndicator. 
* If you are interested in testing public testnet, refer to [Using Public Testnet](/getting-started/public-testnet.md)

> Developer User

* Download HyperExchange soure code from github:<https://github.com/HcashOrg/HyperExchange.git>
* [Building](/wallets/hx-building.md)
* [Deploy private testnet](/getting-started/private-testnet.md)
* If you want to test deposit/withdraw/crosschain transfer and other functions in command console, please refer to [Hx-cli RPC Commands](/wallets/hxwallet-cli-rpc-commands.md).

---

## Installation Guides 

To get started, choose an option for installations available for your operating system below:

> Windows

* [HXIndicator Setup](/wallets/hxindicator-setup.md)

> Ubuntu

* [hx-node Setup](/wallets/hxnode-setup.md)
* [hx-client Startup](/wallets/hxwallet-cli.md)

> Mac OS

* HXIndicator can refer to [HXIndicator Setup](/wallets/hxindicator-setup.md) on Windows.

---

**NOTE:** All of the following guides can be found in the navigation menu with the same names.


## General Guides 

The following guides are independent of the different applications:

* [HyperExchange Features](/getting-started/hx-features.md)
* [Using Testnet](/getting-started/private-testnet.md)
* [Obtaining HX](/getting-started/obtaining-hx-test.md)
* [Using the Block Explorer](/getting-started/using-the-block-explorer.md)
