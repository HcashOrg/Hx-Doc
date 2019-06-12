# hx-cli启动指导

[[toc]]

本章介绍如何使用命令行钱包(非GUI).

---

## 简介

hx_client 是基于区块链数据来管理用户钱包数据的客户端程序。 hx_client 通过websocket连接到hx_node获得区块链数据，并为用户保存私钥并管理相关的交易数据。

## 启动

hx_client 在本地生成一个 wallet.json 文件，里面包含账户的私钥等. 首先需要启动一个 hx_node ，并用以下命令连接 hx_node ：
```
    hx_client -s ws://127.0.0.1:8090
```
根据您要连接的实际链，您可能需要指定 -chain-id 。 chain-id 会在 hx_node 第一次启动的时候的输出。

如果需要指定RPC的监听端口，使用 '--rpc-http-endpoint=' 参数指定：
```
    hx_client --rpc-http-endpoint="127.0.0.1:8092"
```
如果需要启动websocket监听服务，使用 '--rpc-endpoint=' 参数指定：
```
    hx_client --rpc-endpoint="127.0.0.1:8092"
```

选择适合你的rpc命令启动。

## hx_client 启动参数

hx_client 所有的启动参数如下：
    
      -h [ --help ] Print this help message and exit.
      -s [ --server-rpc-endpoint ] [=arg(=ws://127.0.0.1:8090)] Server websocket RPC endpoint
      -u [ --server-rpc-user ] arg  Server Username
      -p [ --server-rpc-password ] arg  Server Password
      -r [ --rpc-endpoint ] [=arg(=127.0.0.1:8091)]   Endpoint for wallet websocket RPC to listen on
      -t [ --rpc-tls-endpoint ] [=arg(=127.0.0.1:8092)]  Endpoint for wallet websocket TLS RPC to listen on -c [ --rpc-tls-certificate ] [=arg(=server.pem)]
    PEM certificate for wallet websocket TLS RPC
      -H [ --rpc-http-endpoint ] [=arg(=127.0.0.1:8093)] Endpoint for wallet HTTP RPC to listen on
      -d [ --daemon ]   Run the wallet in daemon mode
      -w [ --wallet-file ] [=arg(=wallet.json)]  wallet to load
      --chain-id argchain ID to connect to
    

## 重要参数说明

### --server-rpc-endpoint

此参数指定 hx_node 的监听服务端口，如果 hx_node 没有监听在本地默认端口，请使用此参数指定具体的服务监听地址和端口。

### --wallet-file

通常 hx_client 第一次启动时会在当前目录下创建 wallet.json 文件来保存用户的账户信息。 此为账户文件的默认路径，如果需要保存或使用其他路径下的账户文件，请使用此参数指定具体的账户文件路径。

### --chain-id

对于主网来说，通常无需指定此参数。如果要连接测试网络或本地私有网络，请指定具体的参数。此信息可以由测试网络的 hx_node 节点的命令行输出获得。

---