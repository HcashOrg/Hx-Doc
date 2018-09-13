# Beginner's Guide

Last updated for v1.0.7

---

## Welcome To HyperExchange 

Welcome to HyperExchange! We are very glad to have you. As you may or may not already know, HyperExchange is different. There's a lot of new things to learn to fully grasp how things work. This documentation will attempt to make things a bit easier to understand.

This beginner's guide is a path to getting the HyperExchange software up and running. You can choose from multiple clients to get a node on the network and HyperExchange in your wallet. Specifically, you'll learn how to install, setup, and use the HyperExchange applications; how to obtain HX; and how to create crosschain transaction.

**NOTE: Using Testnet is highly recommended for learning how to use the HyperExchange software without the fear of making a mistake and losing real money. After following the guides to setup your choice of software, please visit the [Using Testnet guide](/getting-started/private-testnet.md) to learn how to launch your application onto hyperexchange's testnet.**

---
    
## Applications 

Below you'll find a list of currently available applications, with a chart showing their compatibility with different operating systems.

* **hx_node**: hx_node Connect to the HX network via P2P, receive the latest blocks from the network, broadcast locally signed transaction packets to the network, and provide API for other programs to call through websocket + HTTP RPC (hereinafter referred to as node API),work with middleware to handle cross-chain deposit and withdrawal operations.manage the wallet file, which contains the encrypted user's private key. A wallet file can contain multiple private keys,

* **middleware **: Regularly collect data from the btc/ltc/eth... main chain and store it to the database.

* **HXIndicator **: HXIndicator is a graphical user interface for hx wallet.

* **hx_client **: Connect through rpc to hx_node,hx_client provided  transaction signature function, and the signature is then broadcast to the hx_node,hx_client provides an API for other programs to call through HTTP RPC (hereinafter referred to as the wallet API).

|           | hx_node | middleware | HXIndicator | hx_client |
| ---------:|:----:|:---------:|:------:|:------:|
| Windows   | Y    | Y         | Y      | Y      |
| macOS     | Y    | Y         | Y      | Y      |
| Linux     | Y    | Y         | N      | Y      |
| Other UNIX| Y    | Y         | Y      | Y      |


---

## Installation Guides 

To get started, choose an option for installations available for your operating system below:

> Windows

* [HXIndicator Setup](/wallets/hxindicator-setup.md)

> Ubuntu

* [Witness-node Setup](/wallets/hxnode-setup.md)
* [Cli-wallet Startup](/wallets/hxwallet-cli.md)

> Mac OS

* HXIndicator can refer to [HXIndicator Setup](/wallets/hxindicator-setup.md) on Windows.

---

**NOTE:** All of the following guides can be found in the navigation menu with the same names.


## General Guides 

The following guides are independent of the different applications:

* [HyperExchange Features](/getting-started/hx-features.md)
* [Using Testnet](/getting-started/private-testnet.md)
* [Obtaining HX](/getting-started/obtaining-hx.md)
* [Using the Block Explorer](/getting-started/using-the-block-explorer.md)
