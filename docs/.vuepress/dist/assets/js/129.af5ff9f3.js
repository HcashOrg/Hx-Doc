(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{199:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hx-cli启动指导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hx-cli启动指导","aria-hidden":"true"}},[e._v("#")]),e._v(" hx-cli启动指导")]),e._v(" "),r("p",[e._v("接下来将介绍如何启动一个命令行钱包(非GUI).")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),r("p",[e._v("hx-cli在本地生成一个wallet.json文件，里面包含账户的私钥等. 需要启动一个hx-node，用以下命令连接hx-node：")]),e._v(" "),r("pre",[r("code",[e._v("programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090\n")])]),e._v(" "),r("p",[e._v("根据您要连接的实际链，您可能需要指定-chain-id。chain-id会在第一次启动的时候的报错信息里。")]),e._v(" "),r("h2",{attrs:{id:"启动rpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动rpc","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动RPC")]),e._v(" "),r("p",[e._v('http-rpc启动命令：\nprograms/cli_wallet/cli_wallet --rpc-http-endpoint="127.0.0.1:8092"\nwebsocket rpc启动命令：\nprograms/cli_wallet/cli_wallet --rpc-endpoint="127.0.0.1:8092"')]),e._v(" "),r("p",[e._v("选择适合你的rpc命令启动。")]),e._v(" "),r("h2",{attrs:{id:"hx-cli启动参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hx-cli启动参数","aria-hidden":"true"}},[e._v("#")]),e._v(" hx-cli启动参数")]),e._v(" "),r("p",[e._v("hx-cli所有的启动参数如下：")]),e._v(" "),r("pre",[r("code",[e._v("  -h [ --help ] Print this help message and exit.\n  -s [ --server-rpc-endpoint ] [=arg(=ws://127.0.0.1:8090)] Server websocket RPC endpoint\n  -u [ --server-rpc-user ] arg  Server Username\n  -p [ --server-rpc-password ] arg  Server Password\n  -r [ --rpc-endpoint ] [=arg(=127.0.0.1:8091)]   Endpoint for wallet websocket RPC to listen on\n  -t [ --rpc-tls-endpoint ] [=arg(=127.0.0.1:8092)]  Endpoint for wallet websocket TLS RPC to listen on -c [ --rpc-tls-certificate ] [=arg(=server.pem)]\nPEM certificate for wallet websocket TLS RPC\n  -H [ --rpc-http-endpoint ] [=arg(=127.0.0.1:8093)] Endpoint for wallet HTTP RPC to listen on\n  -d [ --daemon ]   Run the wallet in daemon mode\n  -w [ --wallet-file ] [=arg(=wallet.json)]  wallet to load\n  --chain-id argchain ID to connect to\n")])]),e._v(" "),r("hr")])},[],!1,null,null,null);t.default=n.exports}}]);