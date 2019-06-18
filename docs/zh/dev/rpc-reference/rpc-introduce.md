# RPC 介绍

[[toc]]

RPC 是外部应用程序跟 HX 链交互的基本接口。HX 链提供的 RPC 服务符合 JSONRPC 2.0 规范。外部应用程序通过跟 HX 链发起 RPC 请求来获得链上的数据，并对 HX 链进行必要的操作。比如创建账户、注册账户、跨链充值、跨链提现、转账、调用智能合约、投票挖矿等等。所有的 HX 链的功能都可以通过 RPC 接口由外部程序来进行调用。

> 如何使用 RPC 服务

1. 请参考[启动 RPC 服务](/zh/dev/docking-exchange.html#如何启动rpc服务端监听)
2. 请参考[RPC 规范](/zh/dev/docking-exchange.html#RPC使用规范)

> 名词

1. `智能合约 id`：，每个智能合约都使用一个唯一的 hash 值来表示，我们称之为`智能合约 id`，也称为`智能合约地址`。

本章提供 RPC 接口的完整参考手册。文档如有描述不符或不够详细的情况，请在github发起[文档issue](https://github.com/HcashOrg/Hx-Doc/issues)由官方进行修订。