# Using the Block Explorer

---

## Overview

All blocks/transactions/contracts on the hyperexchange blockchain are visible through the use of this block explorer.

* The explorer of public testnet:<http://explorer.hx.cash>.
* The explorer of mainnet:<http://explorer.hx.cash>.

You can enter Address/TxHash/Contract Address/Height in the search box to find more detailed information about them.

![Search](/img/getting-started/explore/search.png)

## Home

* Blockchain Info

Column Explanation

| Column    | Explanation |
| ---------:|:----:|
| Total Supply| The total amount of HX|
| Transactions| Total number of transactions on the hyperexchange blockchain|
| Block Height| The number of current block|
| Block Reward| The total reward for all blocks|

![Home](/img/getting-started/explore/home.png)

* Value Info

Column Explanation

| Column     | Explanation |
| ---------: |:----:|
| Price($)   | The current price in dollars|
| Price(BTC) | The current price in BTC|
| Change(24H)| The ups and downs of the day|

![Home](/img/getting-started/explore/home1.png)

* Blocks

Displays information for the last 10 blocks, if you want to more blocks information, please click `More`.

![Home](/img/getting-started/explore/home2.png)

* Transaction

Displays information for the last 10 transactions, if you want to more transactions information, please click `More`.

![Home](/img/getting-started/explore/home3.png)

* Transaction Statistics

Count the number of transactions per hour in a day/per day in a week/per day in a month.

![Home](/img/getting-started/explore/home4.png)

## Blocks

* In this page, will show all blocks in hyperexchange blockchain.

Column Explanation

| Column    | Explanation |
| ---------:|:----:|
| Height| The block number|
| Age   | How long ago the block was added to the blockchain|
| txn   | The number of transactions in this block|
| Miner | Creator of this block|
| Reward| The number of HX rewards in this block|

![Blocks](/img/getting-started/explore/blocks.png)

* After click `Height`, will show detail information of this block,and all transactions of this block.

![Blocks](/img/getting-started/explore/block1.png)

![Blocks](/img/getting-started/explore/block2.png)

## Transactions

* In this page, will show all transactioins in hyperexchange blockchain, Related transactions can be viewed according to transaction type:**Transfer/Withdraw/Deposit/Contract/Reward/Acceptance/Other**.

Column Explanation

| Column    | Explanation |
| ---------:|:----:|
| TxHash| hash of this transaction|
| Block | The block number that contains the transaction|
| Types | type of this transaction|
| Age   | How long ago the transaction was added to the blockchain|
| From  | The sender of the transaction|
| To    |The recipient of the transaction |
| Value |transfer amount|
| Fee   |fee of this transaction|


![Transactions](/img/getting-started/explore/transactions.png)

* After click TxHash, will show detail information of this transaction.

![Transactions](/img/getting-started/explore/transaction1.png)


## Contracts

* Show all contracts information on hyperexchange blockchain.

Column Explanation

| Column    | Explanation |
| ---------:|:----:|
| Contract Address| address of the contract|
| Author Address  | address of the contract depolyer    |
| CallTimes       | The number of times a contract is called|
| Create Time     | The time the contract was created|
| The Last Time   | The last time the contract was invoked|

![Contracts](/img/getting-started/explore/explore-contract.png)

* After click one `Contract Adredss`, will show detail information of this contract.

Column Explanation

| Column    | Explanation |
| ---------:|:----:|
| Contract Address| address of the contract|
| Author Address  | address of the contract depolyer    |
| Transaction       | The number of transactions associated with the contract|
| Create txn     | The transaction that create this contract|
| Balance| Balance of this contract|

![Contracts](/img/getting-started/explore/contract-address.png)

Click Transactions will show detail information of transactions associated with the contract.

![Contracts](/img/getting-started/explore/contract-address1.png)

Click Api will show all the interface of this contract user can use.

![Contracts](/img/getting-started/explore/contract-address2.png)


* After click one `Author Adredss`, will show detail information of this address.