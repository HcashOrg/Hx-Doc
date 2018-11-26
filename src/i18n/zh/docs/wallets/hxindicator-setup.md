## HyperExchange Indicator设置指导

最新版本 v1.0.7.

---

`HXIndicator`是HyperExchange钱包的图形用户界面。当此应用程序启动时，它会自动在后台启动自己的命令行工具`hx_node` 和 `hx_client`。

!!! info "区块链下载"

	HXIndicator需要先下载HyperExchange区块链的完整区块数据才能使用它。这意味着可能必须完成大量下载，并且必须在装有Hyperexchange的PC上提供大量存储空间。

    请保留足够的磁盘空间。

---

## 下载和安装

最新版本的HXIndicator可以从官网<http://www.hx.cash/>下载。

> Windows系统

1. 下载安装文件 `HXIndicator.exe`.

1. 双击安装程序并按照说明进行操作。

1. 请在桌面上添加HyperExchange的快捷方式，以便下次更容易找到。

> 苹果系统

1. 下载 `HXIndicator.dmg` 。

1. 双击 `HXIndicator.dmg` 文件。

1. 将HXIndicator拖到应用程序中。

> Linux

目前不支持

---

## Windows/MAC OS上打开并设置HXIndicator

首次打开HXIndicator将显示以下屏幕：

![HXIndicator open screen](/img/wallets/hxindicator/indicator-open.png)

!!! info "默认路径为：%AppData%\HXIndicator_1.1.0\chaindata，您可以选择要存储chaindata的路径，确保路径有足够的磁盘空间。"

然后单击 **Next**.

选择 **CreateWallet**(如果您使用的是先前备份的钱包文件，请选择 **ImportWallet**).

![HXIndicator create wallet screen](/img/wallets/hxindicator/create-wallet.png)

如果选择 **ImportWallet**,选择一个 **wallet.json** 文件从本地路径中,加载后输入此钱包的密码，将显示如下：

![HXIndicator import wallet screen](/img/wallets/hxindicator/import-wallet.png)

然后点击 **Next**, **LOADING**...之后,请设置密码。

![HXIndicator set password screen](/img/wallets/hxindicator/set-password.png)

点击 **New Wallet**,将显示主界面。

![HXIndicator main interface screen](/img/wallets/hxindicator/main-interface.png)

在界面的右下角，显示连接数和blcok块号。

![HXIndicator connection status screen](/img/wallets/hxindicator/conn-status.png)

在界面的左下角，单击 **...**后,列出 **Setting/Lock/Console/Help**

* Setting:设置语言和其他参数：

![HXIndicator setting screen](/img/wallets/hxindicator/setting.png)

* Setting:更改密码，查看默认的数据路径以及配置文件路径：

![HXIndicator setting screen](/img/wallets/hxindicator/setting-change-password.png)

* Setting:帐户“删除”/“导出”，“备份钱包”：

![HXIndicator setting screen](/img/wallets/hxindicator/setting-account.png)

* Lock:点击锁定后，钱包将更改为锁定状态：

![HXIndicator setting screen](/img/wallets/hxindicator/lock-status.png)

* Console:您可以在此处执行某些命令，例如，执行命令`help`将显示您可以调用的所有命令：

![HXIndicator setting screen](/img/wallets/hxindicator/console.png)

* Help:include ***About Us**/*Update**，可以查看是否是最新版本并自动升级：

![HXIndicator setting screen](/img/wallets/hxindicator/setting-update.png)

## 故障排除

*HXIndicator无法启动!*

```
HXIndicator closed due to an error. Check HXIndicator logs
and contact support if the issue persists.
```

*HyperExchange在哪里存储数据/写入日志文件？*

HyperExchange将区块链，钱包，日志文件和自己的配置文件存储在一个目录中。根据操作系统使用不同的目录：

| OS      | HyperExchange data directory                   |
| -------:|:-------------------------------------------:|
| Windows | `%AppData%\HXIndicator_1.1.0\chaindata`                |
| macOS   | `~\Library\Application Support\HXIndicator_1.1.0\chaindata/` |
