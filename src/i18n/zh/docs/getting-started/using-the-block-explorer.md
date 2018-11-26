# 区块浏览器

---

## 概述

通过使用此块浏览器，可以看到hyperexchange区块链上的所有块/交易/合约。

* The explorer of public testnet:<http://explorer.hx.cash>.
* The explorer of mainnet:<http://explorer.hx.cash>.

您可以在搜索框中输入地址/ TxHash /合同地址/高度，以查找有关它们的更多详细信息。

![Search](/img/getting-started/explore/search.png)

## 首页

* Blockchain Info

列说明

| 列    | 说明 |
| ---------:|:----:|
| Total Supply| HX的总量|
| Transactions| hyperexchange区块链上的交易总数|
| Block Height| 当前块的高度|
| Block Reward| 所有块的总奖励|

![Home](/img/getting-started/explore/home.png)

* Value Info

列说明

| 列    | 说明 |
| ---------: |:----:|
| Price($)   | 目前以美元计算的价格|
| Price(BTC) | 目前以BTC计算的价格|
| Change(24H)| 一天内的涨跌|

![Home](/img/getting-started/explore/home1.png)

* Blocks

显示最近10个块的信息，如果您想要更多块信息，请单击`More`

![Home](/img/getting-started/explore/home2.png)

* Transaction

显示最近10笔交易的信息，如果您想了解更多交易信息，请点击`More`。

![Home](/img/getting-started/explore/home3.png)

* Transaction Statistics

计算`一个月中每周/每周中每天/每天中每小时交易次数`。

![Home](/img/getting-started/explore/home4.png)

## Blocks

* 在此页面中，将显示hyperexchange区块链中的所有块

列说明

| 列    | 说明 |
| ---------:|:----:|
| Height| 块号|
| Age   | 多久以前块被添加到区块链中|
| txn   | 块中的交易数|
| Miner | 挖出这个块的矿工|
| Reward| 这个块的奖励|

![Blocks](/img/getting-started/explore/blocks.png)

* 点击后`Height`，将显示该块的详细信息，以及该块的所有事务。

![Blocks](/img/getting-started/explore/block1.png)

![Blocks](/img/getting-started/explore/block2.png)

## Transactions

* 在此页面中，将显示hyperexchange区块链中的所有交易，可以根据交易类型查看相关交易:**Transfer/Withdraw/Deposit/Contract/Reward/Acceptance/Other**。

列说明

| 列    | 说明 |
| ---------:|:----:|
| TxHash| 交易的hash值|
| Block | 交易所在的块号|
| Types | 交易的类型|
| Age   | 多久以前，交易被添加到区块链中|
| From  | 交易的发送者|
| To    |交易的接收者|
| Value |转账金额|
| Fee   |交易的手续费|


![Transactions](/img/getting-started/explore/transactions.png)

* 单击`TxHash`后，将显示此事务的详细信息。

![Transactions](/img/getting-started/explore/transaction1.png)


## Contracts

* 显示有关hyperexchange区块链的所有智能合约的信息。

列说明

| 列    | 说明 |
| ---------:|:----:|
| Contract Address| 合约地址|
| Author Address  | 创建合约的地址 |
| CallTimes       | 合约被调用的次数|
| Create Time     | 合约的产生时间|
| The Last Time   | 合约最后一次被调用的时间|

![Contracts](/img/getting-started/explore/explore-contract.png)

* 点击一下后`Contract Adredss`，将显示该合约的详细信息。

列说明

| 列    | 说明 |
| ---------:|:----:|
| Contract Address| 合约地址|
| Author Address  | 创建合约的地址 |
| Transaction       | 合约相关的交易个数|
| Create txn     | 产生合约的交易ID|
| Balance| 合约余额|

![Contracts](/img/getting-started/explore/contract-address.png)

点击 `Transactions` 将显示与合约关联的交易的详细信息.

![Contracts](/img/getting-started/explore/contract-address1.png)

点击 `Api` 将显示该合约用户可以使用的所有的api。

![Contracts](/img/getting-started/explore/contract-address2.png)


* 点击 `Author Adredss`, 将显示该地址的详细信息。