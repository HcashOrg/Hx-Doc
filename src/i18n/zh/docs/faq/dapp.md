# HXDapp欢乐五色棋游戏

HX是一条支持原生多链资产跨链同时还支持智能合约的公有链，可玩性非常高。
同时各种链的基础建设也相对比较完善，开发Dapp的门槛也不高，链上的交易手续费也比较低，
因此HX是一条非常适合在其上面进行Dapp开发和部署的链。


## Dapp游戏欢乐五色棋介绍
这是一个支持多人同时游戏互动的Dapp游戏，用户可以向合约充值HX，也可以从合约内提取HX。
用户充值后可以在一个19*19棋盘上进行游戏，用户在棋盘的选定位置通过鼠标双击的方式下棋，棋子颜色随机。
当棋盘上横、竖、斜线上出现4个相同颜色的棋子，则本轮游戏结束。根据用户拥有获胜棋子的颜色计算
权重并按照权重给用户分配奖金池内的资产


## 开发步骤：

1.利用AnyChainIDE开发Dapp合约

> AnyChainIDE介绍

AnyChainIDE是一款支持HX/UB/CTC链的区块链合约IDE，支持lua/JAVA/Csharp/Kotlin这几种语言，支持通过IDE
进行合约的编写、上链、单步调试、账户管理、命令行等多种功能。

AnyChain官网:<http://www.anychain.org/>

下载链接:<https://github.com/AnyChainOrg/AnyChainIDE/releases>

> IDE简介

<http://docs.hx.cash/zh/research/ide/ide-using/>

> IDE使用

<http://docs.hx.cash/zh/research/ide/ide-using/>

> 合约编写

合约语言方面我选择了比较熟悉的lua语言,合约语法参考<http://glualang.org/>

> 五色棋合约源码

<https://github.com/HcashOrg/Dapp-5color/blob/master/Contract/5color.lua>

IDE内置了一条本地运行的测试链可以用来测试合约，当合约测试成功后，则可以将合约编译后的字节码gpc文件部署
到正式链上了


2.安装HX浏览器插件

> HX浏览器插件介绍

HX浏览器插件是一款支持Chrome/Opera浏览器的浏览器插件，这款插件相当于是一个浏览器版本的HX轻钱包，
通过这个浏览器插件可以实现创建新账户私钥、转账、部署调用合约、查询交易等多种功能。
私钥本地管理，交易本地插件签名并广播，这是一个非常好用的插件。

> 下载链接

<https://github.com/HcashOrg/hxWebWalletExtension/releases>

> 安装方法

同Chrome,Opera其他插件的安装方式


3.Dapp合约部署

- 点击HX浏览器插件，选择“我的钱包”，登录账户(选择本地私钥文件并输入密码解锁)，账户正常登录后，可以查询到该地址的余额。
- 选择“合约”，点击“部署”，选择需要部署的合约gpc文件，点击“测试”，再点击“提交”，则可以看到部署合约的这条交易的交易id
- 等待10秒钟后，可以看到该合约的合约id


4.Dapp前端功能开发

需要额外引入Hxjs和HxPay两个js库:

Hxjs的下载地址:<https://github.com/HcashOrg/hx.js/releases>

HxPay的下载地址:<https://github.com/HcashOrg/hxPayment.js/releases>

然后就可以选择自己喜欢的前端开发框架，结合自己Dapp的业务要求，开始Dapp的开发了


五色棋的Dapp前端源码:<https://github.com/HcashOrg/Dapp-5color/tree/master/Dapp>





