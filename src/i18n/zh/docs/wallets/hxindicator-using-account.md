# HyperExchange Indicator使用指导

最新版本 v1.0.7.

本指南假设您已使用[HyperExchange Indicator设置](hxindicator-setup.md)设置了HyperExchange钱包。下面将详细介绍一下功能：`Account/Contract/Advance/Contacts/Senator/Citizen`.

---

## Assets

登录资产页面后，您可以查看钱包帐户里的所有资产。

![Account Tab](/img/wallets/hxindicator/asset-page.png)

> 

资产页面点击创建账户，输入账户名（会校验本钱包是否有重名以及区块链上注册账户是否重名），


![NEW Tab](/img/wallets/hxindicator/create-new-account.png)

点击确定后要求备份钱包数据文件，选择一个安全的路径，点击备份

![backup Tab](/img/wallets/hxindicator/backup-wallet.png)

![backup Tab1](/img/wallets/hxindicator/backup-wallet1.png)

> 导入账户

在资产页面点击 "IMPORT" ，输入账户名和私钥，(或者选择一个私钥文件),然后点击"Import",每次导入一个账户后, 钱包会重新扫描区块数据，扫描结束之后，该账户的所有相关交易会显示出来。

![Import Account Tab](/img/wallets/hxindicator/import-account.png)

> 交易记录

点击 "RECORDS",你可以输入一个地址或者交易ID,然后点击search,你还可以选择 "TYPE"/"TIME"/accout对交易记录进行过滤查询。
如果你想拷贝某一列的信息，点击那一列，然后点击拷贝。

![Transaction Tab](/img/wallets/hxindicator/transaction-record.png)

> 转账

对于有余额的资产，点击 "transfer",输入 "FromAccount","Coin","ToAddress","Amount","Fee","Memo"，然后点击 "Send" ，确认账单后输入钱包密码。

![Transfer Tab](/img/wallets/hxindicator/transfer.png)

![Transfer Tab1](/img/wallets/hxindicator/transfer1.png)

![Transfer Tab2](/img/wallets/hxindicator/transfer2.png)

点击 "RECORD"查看刚才发送的交易。

![Transfer Tab3](/img/wallets/hxindicator/transfer3.png)

> 充值

在资产页面点击balance后面的"deposit"，下面用BTC资产举例。
在你第一次充值BTC的时候，钱包会生成一个充值地址，并和你的账户进行绑定。会提示你重新备份钱包，因为之前的钱包里并没有保存生成的充值地址的私钥等。

**注意:** 请再次备份你的钱包！

![Deposit Tab](/img/wallets/hxindicator/deposit.png)

使用可以转账BTC的钱包向该地址转账，在BTC链至少4个区块确认后，可以进行划转。

> 提现

在资产页面，点击"withdraw",输入 "Withdraw to address","Amount",然后点击"ok".

![Withdraw Tab](/img/wallets/hxindicator/withdraw.png)

> 划转

资产页面点击相应币种后的划转，进入资金划转页面。可以看到刚才充值的BTC，
选择充值，输入划转数量，将BTC划转到对应HX账户上。
如果不想充值到HX链上，可以选择提现，则会划转到提现地址。

![Allot Tab](/img/wallets/hxindicator/allot.png)

## 挖矿

> 注册账户

只有注册账户才能参与挖矿，在挖矿页面点击注册：

![Mining Register](/img/wallets/hxindicator/mining-register.png)

点击 "OK"，输入钱包密码，会出现下面的界面：

![Mining Register](/img/wallets/hxindicator/mining-register1.png)

> 质押资产

在挖矿页面，点击 "MORTGAGE"，选择 "Miner to pledge to" 和 "Asset to pledge"，输入"Amount to pledge"，然后点击"OK".

![Mining Mortgage](/img/wallets/hxindicator/mining-mortgage.png)

![Mining Mortgage](/img/wallets/hxindicator/mining-mortgage1.png)

点击 "MORTGAGE"可以看到当前质押的资产，可以随时add" 或者 "foreclose"。

![Mining Mortgage](/img/wallets/hxindicator/mining-mortgage2.png)

> 领取收入

所选的质押人出块后就会分得收入，在"INCOME"里可以看到。

![Mining Mortgage](/img/wallets/hxindicator/mining-income.png)

达到最低领取数量后可以点击"get income"进行领取。

![Mining Mortgage](/img/wallets/hxindicator/mining-get-income.png)

## 分红

![Bonus](/img/wallets/hxindicator/bonus.png)

---
