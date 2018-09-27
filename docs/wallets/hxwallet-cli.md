# HyperExchange Cli-wallet Startup Guide

Last updated for v1.0.7.

The following will explain how to startup the console wallet (not GUI).

---

## LAUNCHING

The cli_wallet creates a local wallet.json file that contains the encrypted private keys required to access the funds in your account. It `requires a running witness node` (not necessarily locally) and connects to it on launch:

    programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090
Depending on the actual chain that you want to connect to your may need to specifiy –chain-id.

## ENABLING REMOTE PROCEDURE CALLS (RPC)

In order to allow RPC calls for wallet operations (spend, buy, sell, …) you can choose between pure RPC or RPC-HTTP requests. In this tutorial, the latter is prefered since well established libraries make use of the RPC-HTTP protocol.

The cli-wallet can open a RPC port so that you can interface your application with it. You have the choices of * websocket RPC via the `-r` parameter, and * HTTP RPC via the `-H` parameter:

To enable RPC-HTTP in your wallet you need to run:
    
    # recommended for use with python, or curl:
    programs/cli_wallet/cli_wallet --rpc-http-endpoint="127.0.0.1:8092"
    # or
    programs/cli_wallet/cli_wallet --rpc-endpoint="127.0.0.1:8092"

depending on the kind of RPC protocol.

This will open the port 8092 for local queries only. It is not recommended to publicly expose your wallet!

## Cli_wallet  Startup Arguments List

List All the arguments of cli_wallet.
    
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