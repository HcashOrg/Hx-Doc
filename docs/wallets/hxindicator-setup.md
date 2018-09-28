## HyperExchange Indicator Setup Guide

Last updated for v1.0.7.

---

`HXIndicator` is a graphical user interface for HyperExchange wallet. When this application launches, it automatically starts its own instance of the command line tools `hx_node` and `hx_client` in the background.

!!! info "Blockchain Download"

	HXIndicator needs to download a full copy of the HyperExchange blockchain before it can be used. This means that maybe a large download must be completed and a large amount of storage space must be be available on the PC where Hyperexchange is intalled.

	Reserve enough disk space please.

---

<h2 id="1">Download and Install</h2>

The latest version of HXIndicator can be downloaded official website <www.hx.cash>.

> Windows

1. Download the Windows installer `HXIndicator.exe`.

1. Double click the installer and follow the instructions. This will install and automatically start up hx_node to download the HyperExchange blockchain and set up your wallet.

1. Please adds a shortcut to HyperExchange on your desktop to make it for easier to find next time.

> macOS

1. Download the `HXIndicator.dmg` file.

1. Double click the `HXIndicator.dmg` file once downloaded to mount the disk image.

1. Drag the HXIndicator.app into the link to your Applications folder within the disk image.

> Linux

Not support now.

---

<h2 id="2">Open and Set Up HXIndicator on Windows/MAC OS</h2>

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

## Troubleshooting

*HXIndicator will not start!*

```
HXIndicator closed due to an error. Check HXIndicator logs
and contact support if the issue persists.
```

*Where does HyperExchange store data/write log files?*

HyperExchange stores the blockchain, your wallet, log files and its own configuration files all in a single directory. A different directory is used depending on the operating system:

| OS      | HyperExchange data directory                   |
| -------:|:-------------------------------------------:|
| Windows | `%appdata%\HXIndicator_test\chaindata`                |
| macOS   | `~\Library\Application Support\HXIndicator_test\chaindata/` |
| Linux   | `~/HXIndicator_test/chaindata/`                     |
