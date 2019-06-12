# hx-cli启动指导

接下来将介绍如何启动一个命令行钱包(非GUI).

---

## 启动

hx-cli在本地生成一个wallet.json文件，里面包含账户的私钥等. 需要启动一个hx-node，用以下命令连接hx-node：

    programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090
根据您要连接的实际链，您可能需要指定-chain-id。chain-id会在第一次启动的时候的报错信息里。

## 启动RPC

http-rpc启动命令：
    programs/cli_wallet/cli_wallet --rpc-http-endpoint="127.0.0.1:8092"
websocket rpc启动命令：
    programs/cli_wallet/cli_wallet --rpc-endpoint="127.0.0.1:8092"

选择适合你的rpc命令启动。

## hx-cli启动参数

hx-cli所有的启动参数如下：
    
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
    

---