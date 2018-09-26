# Public Testnet Using Guide

Last updated for v1.0.7

We will mainly talk about public testnets in this page so that every user can easily use HXIndicator.

In order to improve the stability of main chain, testnet is available for free trial by Hcash and community users who have interests. After testnet runs steadily for a while, the main chain will be officially released. Due to the complexity of the project and diversity of roles on the chain, we need to engage users to have some basic understanding of the Hyper Exchange project. Please read `Cross Chain` and `Smart Contract` parts in `Advanced`.

Testnet will now offer the following features:

1. Basic user registration and transfer function;

2. Pledge mining function testing;
3. Citizen mining function;
4. Fee acceptance function;
5. Asset exchange function on the chain (currently supporting HC, BTC and LTC);
6. Smart contract function (there are asset exchange contracts on the chain, and IDE development tools will be introduced later).


## Download and startup HXIndicator

The latest version of HXIndicator can be downloaded from official website.

## Startup and setup

Opening HXIndicator for the first time will display the following screen:

![HXIndicator open screen](/img/wallets/hxindicator/indicator-open.png)

!!! info "The default path is:%appdata%\HXIndicator_test\chaindata,you can select a path that you want to store the chaindata,make sure that path has enough disk space."

Then click **Next**.

Select **CreateWallet**(If you are using a previously backed wallet file, select **ImportWallet**).

![HXIndicator create wallet screen](/img/wallets/hxindicator/create-wallet.png)

If you select **ImportWallet**,select a **wallet.json** file from your local path,after loading,input the password of this wallet,will display as below:

![HXIndicator import wallet screen](/img/wallets/hxindicator/import-wallet.png)

Then click **Next**,after **LOADING**...,Please setup the password.

![HXIndicator set password screen](/img/wallets/hxindicator/set-password.png)

Then click **New Wallet**,will display the main interface.

![HXIndicator main interface screen](/img/wallets/hxindicator/main-interface.png)

In the lower right corner of the interface,show the connection number and blcok number.

![HXIndicator connection status screen](/img/wallets/hxindicator/conn-status.png)

In the lower left corner of the interface,after click **...**,list **Setting**/Lock/Console/Help

* Setting:set language and other parameter:

![HXIndicator setting screen](/img/wallets/hxindicator/setting.png)

* Setting:Change password:

![HXIndicator setting screen](/img/wallets/hxindicator/setting-change-password.png)

* Setting:Account "delete"/"export","Backup wallet":

![HXIndicator setting screen](/img/wallets/hxindicator/setting-account.png)

* Lock:after click lock,the wallet will change to lock status:

![HXIndicator setting screen](/img/wallets/hxindicator/lock-status.png)

* Console:you can excute some commands here,such as,excute command **help** will show all commands that you can call:

![HXIndicator setting screen](/img/wallets/hxindicator/console.png)

* Help:include ***About Us**/*Update**

## Create a new account

Click "NEW" to create an account on asset page, enter your account name (it will check whether the registered account already existed on the blockchain).

![NEW Tab](/img/getting-started/create-account.png)

Click "OK" to backup wallet data, select a safe path, and click "Backup".

![backup Tab](/img/getting-started/backup-wallet.png)

![backup Tab1](/img/getting-started/backup-wallet1.png)

Now you will get a HX address.

![backup](/img/getting-started/test-account.png)

## Obtaining test HX coin

Vist [faucet website](http://faucet.h.cash/), input your hx address.

![Faucet](/img/getting-started/visit-faucet.png)
 
## Obtaining other asset test coin

Click `deposit` botton to get address of this asset,then visit btc and ltc faucet website to obtain testcoin.

* BTC faucet:<https://testnet.manu.backend.hamburg/faucet>
* LTC faucet:<http://testnet.litecointools.com>

## Deposit

For HX assets, there is no need to top up.HX, which the user receives from the faucet or transfers via Indicator, can be used directly.

For other HIOU assets, if they are in other wallets, or if they are collected from the faucet, they need to be deposited to get into the HX chain.

* First, you can click the deposit button of the "Assets" page to get the deposit address.

![Deposit](/img/getting-started/deposit.png)

* The user deposit other assets by transferring from other account or by getting from faucet.

![Deposit](/img/getting-started/deposit1.png)

* After deposit is completed, the asset can be seen in the Indicator after waiting for 6 confirmation blocks.

## Transfer

* In the "Assets" page, you can click the "transfer" button on the right of each asset to transfer between the same asset.

![Transfer](/img/getting-started/transfer.png)

* Enter "FromAccount","Coin","ToAddress","Amount","Fee","Memo". Then click "Send" to confirm the transaction and enter the wallet password.

![Transfer](/img/getting-started/transfer1.png)

* A certain amount of HX shall be charged for the transfer. If there is no HX in the account, you can choose to use the fee acceptance to pay the fee.
* As shown above, you can use HC to pay the fee, which shows the number of HC to be paid.
* if there are many fee acceptances on the chain, the wallet automatically picks the cheapest one.

## Transaction Records

The `Transaction Records` page can query all transactions related to the account and also provides some filter conditions for easy inquiry.

![Transactions](/img/getting-started/transaction-records.png)

## Asset Exchange

You can see other users' orders in the `Order Center` page, and you can choose the right order to buy.If you want to create your own sales order, you need to create a pending contract, and the Indicator will automatically prompt you to register at about 0.02039HX.
The exchange is similar to an exchange except that it is executed by smart contracts.Therefore, users need the following steps to exchange assets:
* top up the assets to be exchanged to the contract (click "MY CONTRACT" in the "My Orders" page, and then click "DEPOSIT" button)

![Exchange](/img/getting-started/exchange.png)

* set the exchange rate (click the "SELL" button in the "My Orders" page).

![Exchange](/img/getting-started/exchange1.png)

* You can see the order in the `Order Center` page, and can choose the appropriate order to buy.

![Exchange](/img/getting-started/exchange2.png)

* withdrawal of assets after exchange (assets which are not used after deposit or withdrawal to contract are displayed in the `Contract Balance`, and users can withdraw at any time)

![Exchange](/img/getting-started/exchange3.png)

## Mining

HX's mining is different from existing mechanisms such as bitcoin or other POS.HX can use any asset to mine and gain HX benefits.It's easy to be an HX miner here, just two steps:
* Become a registered user (click the "Mining" submenu under the "Account" menu, and click the "REGISTER" button on the interface, it will be successfully registered at the cost of 5HX)

![Mining](/img/getting-started/mining.png)

* Choose a mining method
(1)mortgage asset mining (click the "MORTGAGE" button in the "Mining" interface and choose to pledge your asset to a citizen. At this time, the ownership of the asset is still your own and you can cancel it at any time.

![Mining](/img/getting-started/mining1.png)

![Mining](/img/getting-started/mining2.png)

(2)pay 10000HX to be a citizen (currently the wallet is not supported, and the updated version will be support)

The difference between pledged assets to existing Citizen and to become Citizen is that Citizen is like a mining pool and can extract a certain proportion of the profits.
When the Citizen comes out, all the pledgee, including Citizen, will get the benefit.As shown in the following figure, the user needs to collect the income by himself, and only after receiving the income can it enter the user's account and be used.

![Mining](/img/getting-started/mining3.png)

---
