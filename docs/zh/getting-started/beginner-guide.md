# 初学者指南

上次更新 v1.0.7

[[toc]]

---

## 欢迎使用HyperExchange 

欢迎来到HyperExchange！HyperExchange需要你学习很多新东西才能完全掌握工作原理。本文档将尝试使你更容易的使用HyperExchange的相关应用。

本初学者指南将学习如何安装，设置和使用HyperExchange应用程序; 如何获得HX; 以及如何创建跨链交易等。

**注意：强烈建议使用Testnet学习如何使用HyperExchange软件，而不必担心出错或HX亏损。请参考[公测链使用](/getting-started/public-testnet.md)。**

---
    
## 应用 

您可以在下面找到当前可用应用程序的列表，其中的图表显示了它们与不同操作系统的兼容性。

* **hx_node**: hx_node通过P2P连接到HX网络，从网络接收块，将本地签名的交易报文广播到网络，hx_node通过websocket + HTTP RPC向其他程序提供API，使用中间件处理跨链数据的存取操作。HX_node管理钱包文件，其中包含加密用户的私钥。钱包文件可以包含多个私钥。

* **middleware**: 中间件，定期从BTC / LTC / ETH和其他主链收集数据，并将其存储在数据库中。

* **HXIndicator**: HXIndicator是hx wallet的图形用户界面.

* **hx_client**: 通过rpc连接到hx_node，hx_client提供了交易签名功能，然后将签名广播到hx_node，hx_client为其他程序提供了通过HTTP RPC调用的API（以下简称钱包API）

|           | hx_node | middleware | HXIndicator | hx_client |
| ---------:|:----:|:---------:|:------:|:------:|
| Windows   | Y    | Y         | Y      | Y      |
| macOS     | Y    | Y         | Y      | Y      |
| Linux     | Y    | Y         | N      | Y      |


---

## 用户指引

> 普通用户

* 对于初次使用HX的用户，建议使用手机版钱包进行体验，官方推荐使用[AnyBit](https://www.anybit.io/)钱包，也可使用其他支持HX的钱包，如：[虎符钱包](https://www.hoo.com/)和[HPY钱包](https://hyperpay.me/)。
* 从HX官方网站下载适用于您的操作系统的HXIndicator。请参考 [HXIndicator设置](/wallets/hxindicator-setup.md)中的`下载和安装`。
* 如果你已经获得了hx在mainnet中，你可以参考 [使用HXIndicator](/wallets/hxindicator-using-account.md) 去使用 HXIndicator. 
* 如果您对测试公共testnet感兴趣，请参阅 [公测链使用](/getting-started/public-testnet.md)

> 开发者用户

* 从github下载HyperExchange源代码:<https://github.com/HcashOrg/HyperExchange.git>
* [编译](/wallets/hx-building.md)
* [私有链使用](/getting-started/private-testnet.md)
* 如果想使用docker部署hx的所有应用(hx-node/hx-cli/中间件等)，请参考[docker部署](/wallets/hx-docker-deploy.md)
* 如果要使用命令行测试充值/提现/跨链转账和其他功能，请参阅 [Hx-cli RPC命令](/wallets/hxwallet-cli-rpc-commands.md).

---

## 安装指导

要开始使用HyperExchange的应用，请在下面选择适用于您的操作系统的安装选项：

> Windows

* [HXIndicator 设置](/wallets/hxindicator-setup.md)

> Ubuntu

* [hx-node 启动](/wallets/hxnode-setup.md)
* [hx-client 启动](/wallets/hxwallet-cli.md)

> Mac OS

* HXIndicator请参考window中的使用[HXIndicator Setup](/wallets/hxindicator-setup.md).

---

**注意：可以在导航菜单中找到具有相同名称的所有以下指南。**


## 一般指南

以下指南独立于不同的应用程序：

* [HyperExchange 特性](/getting-started/hx-features.md)
* [测试网络](/getting-started/private-testnet.md)
* [HX分配](/getting-started/obtaining-hx-test.md)
* [区块浏览器](/getting-started/using-the-block-explorer.md)
