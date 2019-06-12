(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{190:function(t,n,e){"use strict";e.r(n);var _=e(0),r=Object(_.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hx交易所钱包适配指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hx交易所钱包适配指南","aria-hidden":"true"}},[t._v("#")]),t._v(" HX交易所钱包适配指南")]),t._v(" "),e("p",[t._v("本章将介绍交易所如何适配HX")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#系统环境软硬件需求"}},[t._v("系统环境软硬件需求")])]),e("li",[e("a",{attrs:{href:"#如何启动rpc服务端监听"}},[t._v("如何启动RPC服务端监听")])]),e("li",[e("a",{attrs:{href:"#rpc使用规范"}},[t._v("RPC使用规范")])]),e("li",[e("a",{attrs:{href:"#基本操作指令"}},[t._v("基本操作指令")])]),e("li",[e("a",{attrs:{href:"#轻钱包rpc接口"}},[t._v("轻钱包rpc接口")])]),e("li",[e("a",{attrs:{href:"#hrc12代币接口"}},[t._v("HRC12代币接口")])]),e("li",[e("a",{attrs:{href:"#注意事项"}},[t._v("注意事项")])]),e("li",[e("a",{attrs:{href:"#参考文档"}},[t._v("参考文档")])]),e("li",[e("a",{attrs:{href:"#附：终端命令行模式下常用指令"}},[t._v("附：终端命令行模式下常用指令")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"系统环境软硬件需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统环境软硬件需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统环境软硬件需求")]),t._v(" "),e("ul",[e("li",[t._v("操作系统：Ubuntu 16.04 LTS64位系统")]),t._v(" "),e("li",[t._v("硬件：内存16GB+  硬盘可用空间10GB+")])]),t._v(" "),e("p",[t._v("交易所及其他中心化应用系统通过rpc方式访问底层钱包")]),t._v(" "),e("h2",{attrs:{id:"如何启动rpc服务端监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何启动rpc服务端监听","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何启动RPC服务端监听")]),t._v(" "),e("p",[t._v("启动Rpc模式")]),t._v(" "),e("pre",[e("code",[t._v("启动hx_node --data-dir=$data-dir --rpc-enpoint=$server_ip \n启动hx_client --wallet-file=$walletname --server-rpc-endpoint=$server_ip --rpc-endpoint=$client_ip\n")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"right"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("--data-dir")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定hx启动需要的数据目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("--rpc-endpoint")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定hx_node和hx_client rpc监听ip端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("--server-rpc-endpoint")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定hx_client 需要链接的服务器ip（格式为 “ws://127.0.0.1:8090”）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("--wallet-file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定的钱包文件，不指定则钱包会自动生成")])])])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("pre",[e("code",[t._v("hx_node --data-dir =./data --rpc-endpoint=127.0.0.1:9991\nhx_client --wallet-file=a.json --server-rpc-endpoint=”ws://127.0.0.1:9991” --rpc-endpoint=”127.0.0.1:9992”\n其中--rpc-endpoint 参数127.0.0.1:9992 为用户访问hx节点的rpc入口\n")])]),t._v(" "),e("h2",{attrs:{id:"rpc使用规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc使用规范","aria-hidden":"true"}},[t._v("#")]),t._v(" RPC使用规范")]),t._v(" "),e("blockquote",[e("p",[t._v("基本规范")])]),t._v(" "),e("p",[t._v("所有RPC接口均遵循jsonrpc规范2.0，具体参考文档："),e("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jsonrpc.org/specification"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("使用方式")])]),t._v(" "),e("p",[t._v("所有jsonrpc数据均通过HTTP POST方法传递，结果在HTTP响应中获取。\nHTTP请求的URL为hx_client的rpc监听服务："),e("a",{attrs:{href:"http://127.0.0.1:9992/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9992/"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("注意，请不要直接使用hx_node提供的rpc服务，该服务目前仅对hx_client内部开放。")]),t._v(" "),e("blockquote",[e("p",[t._v("消息结构")])]),t._v(" "),e("p",[t._v("Jsonrpc的消息由请求和响应分别构成，一一对应。")]),t._v(" "),e("ul",[e("li",[t._v("请求")])]),t._v(" "),e("p",[t._v("Jsonrpc请求包括如下结构：")]),t._v(" "),e("pre",[e("code",[t._v('{ \n“jsonrpc” : ”2.0”,\n"method" : "info", \n"params" : [], \n"id" : 1\n}\n')])]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("jsonrpc")]),t._v("” - 协议版本，目前固定为”2.0”")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("method")]),t._v("” – 调用的方法名称，具体参考下面的接口列表")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("params")]),t._v("” – 方法所需要的参数，参考具体接口描述")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("id")]),t._v("” – 请求消息的唯一id，如客户端需要同时并发多个消息，此字段会由服务端原封不动返回，客户端以此来辨别是哪个请求对应的消息响应.")]),t._v(" "),e("ul",[e("li",[t._v("响应")])]),t._v(" "),e("p",[t._v("响应包括如下结构：")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": {\n"head_block_num": 786742,\n"head_block_id": "000c013669c0391fdd12eeacc8d2eafdd56fdd75",\n"head_block_age": "5 seconds old",\n"next_maintenance_time": "18 hours in the future",\n"chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",\n"participation": "100.00000000000000000",\n"round_participation": "68.00000000000000000",\n"scheduled_citizens": ["1.6.168","1.6.146","1.6.31","1.6.42","1.6.15","1.6.86","1.6.44","1.6.4","1.6.27","1.6.160","1.6.65","1.6.84",\n"1.6.118","1.6.39","1.6.77","1.6.73","1.6.119","1.6.131","1.6.147","1.6.16","1.6.2","1.6.106","1.6.53","1.6.145",\n"1.6.154"]\n}\n}\n')])]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("id")]),t._v("” – 请求消息的唯一id，如客户端需要同时并发多个消息，此字段会由服务端原封不动返回，客户端以此来辨别是哪个请求对应的消息响应")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("jsonrpc")]),t._v("” - 协议版本，目前固定为”2.0”")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("result")]),t._v("” – 调用方法返回的结果，具体参考下面的接口列表")]),t._v(" "),e("p",[t._v("“"),e("strong",[t._v("error")]),t._v("” – 如果调用方法出错，则会有此字段，正常返回无此字段")]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP样例")])]),t._v(" "),e("ul",[e("li",[t._v("请求")])]),t._v(" "),e("p",[t._v("请求结构如下：")]),t._v(" "),e("pre",[e("code",[t._v('POST / HTTP/1.1\nHost: 127.0.0.1:9992\nCache-Control: no-cache\n{\n"id":1,\n“jsonrpc":"2.0",\n"method":"info",\n"params":[]\n}\n')])]),t._v(" "),e("ul",[e("li",[t._v("响应")])]),t._v(" "),e("p",[t._v("注意，此处省略HTTP头部。")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": {\n"head_block_num": 786742,\n"head_block_id": "000c013669c0391fdd12eeacc8d2eafdd56fdd75",\n"head_block_age": "5 seconds old",\n"next_maintenance_time": "18 hours in the future",\n"chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",\n"participation": "100.00000000000000000",\n"round_participation": "68.00000000000000000",\n"scheduled_citizens": [\n"1.6.168",\n"1.6.146",\n"1.6.31",\n"1.6.42",\n"1.6.15",\n"1.6.86",\n"1.6.44",\n"1.6.4",\n"1.6.27",\n"1.6.160",\n"1.6.65",\n"1.6.84",\n"1.6.118",\n"1.6.39",\n"1.6.77",\n"1.6.73",\n"1.6.119",\n"1.6.131",\n"1.6.147",\n"1.6.16",\n"1.6.2",\n"1.6.106",\n"1.6.53",\n"1.6.145",\n"1.6.154"\n]\n}\n}\n')])]),t._v(" "),e("blockquote",[e("p",[t._v("curl样例")])]),t._v(" "),e("ul",[e("li",[t._v("请求")])]),t._v(" "),e("p",[t._v("请求命令如下：")]),t._v(" "),e("pre",[e("code",[t._v('curl -X POST   http://127.0.0.1:9992/   -H \'cache-control: no-cache\'   -H \'postman-token: a79b33f6-31a3-ec23-d114-d468f3d71c7c\'   -d \'{\n  "jsonrpc": "2.0",\n  "id": 61,\n  "method": "info",\n  "params": []\n}\'\n')])]),t._v(" "),e("ul",[e("li",[t._v("响应")])]),t._v(" "),e("p",[t._v("响应如下：")]),t._v(" "),e("pre",[e("code",[t._v('{"id":61,\n"jsonrpc":"2.0",\n"result":\n{"head_block_num":787040,\n"head_block_id":"000c0260fb7dc04a7a6a1781ec54753cc9d536f4",\n"head_block_age":"3 seconds old",\n"next_maintenance_time":"18 hours in the future",\n"chain_id":"2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",\n"participation":"100.00000000000000000",\n"round_participation":"64.00000000000000000",\n"scheduled_citizens":["1.6.42","1.6.39","1.6.143","1.6.150","1.6.156","1.6.30","1.6.65","1.6.125","1.6.131","1.6.34","1.6.33","1.6.4","1.6.47","1.6.94","1.6.165","1.6.109","1.6.107","1.6.12","1.6.104","1.6.115","1.6.86","1.6.36","1.6.161","1.6.106","1.6.53"]}}\n')])]),t._v(" "),e("h2",{attrs:{id:"基本操作指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本操作指令","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本操作指令")]),t._v(" "),e("blockquote",[e("p",[t._v("获取客户端信息")])]),t._v(" "),e("p",[t._v("Request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"info","id":20180523092052345,"jsonrpc":"2.0","params":[]}\n')])]),t._v(" "),e("p",[t._v("response成功")]),t._v(" "),e("pre",[e("code",[t._v('{\n\t"id": "20180523092052345",\n\t"result": {\n\t"head_block_num": 634505,\n\t"head_block_id": "0009ae8941db944c1d2ec63cf64be2bd6b79b695",\n\t"head_block_age": "1 second old",\n\t"next_maintenance_time": "21 hours in the future",\n\t"chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",\n\t"participation": "98.43750000000000000",\n\t"round_participation": "24.00000000000000000",\n\t"scheduled_citizens": ["1.6.63", "1.6.33", "1.6.66", "1.6.95", "1.6.86", "1.6.112", "1.6.42", "1.6.54", "1.6.8", "1.6.52", "1.6.97", "1.6.123", "1.6.38", "1.6.139", "1.6.124", "1.6.31", "1.6.146", "1.6.115", "1.6.93", "1.6.4", "1.6.137", "1.6.53", "1.6.84", "1.6.27", "1.6.109"]\n}\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v('" head_block_num ": 区块号,')]),t._v(" "),e("p",[t._v('" head_block_age ": 当前最大块的产生的时长,')]),t._v(" "),e("p",[t._v('" next_maintenance_time ": "下一次链上maintenance时间",')]),t._v(" "),e("p",[t._v('" head_block_id ": "当前块ID",')]),t._v(" "),e("p",[t._v('" chain_id ": "链ID",')]),t._v(" "),e("p",[t._v('" participation ": 当前链上参与率,')]),t._v(" "),e("p",[t._v('" round_participation ": "当前轮参与率",')]),t._v(" "),e("p",[t._v('" scheduled_citizens ":当前出块的citizen')]),t._v(" "),e("blockquote",[e("p",[t._v("查询链上参数（手续费等）")])]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"get_global_properties","id":20180523092052345,"jsonrpc":"2.0","params":[]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n\t"id": "2.0.0",\n\t"parameters": {\n\t\t"current_fees": {\n\t\t\t"parameters": [\n\t\t\t\t[0, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[1, {\n\t\t\t\t\t"fee": 50\n\t\t\t\t}],\n\t\t\t\t[2, {\n\t\t\t\t\t"fee": 0\n\t\t\t\t}],\n\t\t\t\t[3, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[4, {\n\t\t\t\t\t"fee": 0\n\t\t\t\t}],\n\t\t\t\t[5, {\n\t\t\t\t\t"basic_fee": 500000,\n\t\t\t\t\t"premium_fee": 20000,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[6, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[7, {\n\t\t\t\t\t"fee": 300000\n\t\t\t\t}],\n\t\t\t\t[8, {\n\t\t\t\t\t"membership_annual_fee": 20000,\n\t\t\t\t\t"membership_lifetime_fee": 100000\n\t\t\t\t}],\n\t\t\t\t[9, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[10, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[11, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[12, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[13, {\n\t\t\t\t\t"symbol3": 5000000,\n\t\t\t\t\t"symbol4": 3000000,\n\t\t\t\t\t"long_symbol": 50000,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[14, {\n\t\t\t\t\t"fee": 5000,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[15, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[16, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[17, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[18, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[19, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[20, {\n\t\t\t\t\t"fee": 1000\n\t\t\t\t}],\n\t\t\t\t[21, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[22, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[23, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[24, {\n\t\t\t\t\t"fee": 100000000\n\t\t\t\t}],\n\t\t\t\t[25, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[26, {\n\t\t\t\t\t"fee": 0\n\t\t\t\t}],\n\t\t\t\t[27, {\n\t\t\t\t\t"fee": 0\n\t\t\t\t}],\n\t\t\t\t[28, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[29, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[30, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[31, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[32, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[33, {\n\t\t\t\t\t"fee": 200,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[34, {\n\t\t\t\t\t"fee": 0\n\t\t\t\t}],\n\t\t\t\t[35, {\n\t\t\t\t\t"fee": 1000000000\n\t\t\t\t}],\n\t\t\t\t[36, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[37, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[38, {\n\t\t\t\t\t"fee": 35000\n\t\t\t\t}],\n\t\t\t\t[39, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[40, {\n\t\t\t\t\t"fee": 200\n\t\t\t\t}],\n\t\t\t\t[41, {\n\t\t\t\t\t"fee": 45000\n\t\t\t\t}],\n\t\t\t\t[42, {\n\t\t\t\t\t"fee": 10,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[43, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[44, {}],\n\t\t\t\t[45, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 10\n\t\t\t\t}],\n\t\t\t\t[46, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[47, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[48, {\n\t\t\t\t\t"fee": 50,\n\t\t\t\t\t"price_per_output": 50\n\t\t\t\t}],\n\t\t\t\t[49, {\n\t\t\t\t\t"fee": 50,\n\t\t\t\t\t"price_per_output": 50\n\t\t\t\t}],\n\t\t\t\t[50, {\n\t\t\t\t\t"fee": 50\n\t\t\t\t}],\n\t\t\t\t[51, {}],\n\t\t\t\t[52, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[53, {}],\n\t\t\t\t[54, {\n\t\t\t\t\t"fee": 10\n\t\t\t\t}],\n\t\t\t\t[55, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[56, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[57, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[58, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[59, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[60, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[61, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[62, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[63, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[64, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[65, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[66, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[67, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[68, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[69, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[70, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[71, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[72, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[73, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[74, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[75, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[76, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[77, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[78, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[79, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[80, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[81, {\n\t\t\t\t\t"fee": 100,\n\t\t\t\t\t"price_per_kbyte": 100\n\t\t\t\t}],\n\t\t\t\t[82, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[83, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[84, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[85, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[86, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[87, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[88, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[89, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[90, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[91, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[92, {\n\t\t\t\t\t"fee": 5000\n\t\t\t\t}],\n\t\t\t\t[93, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[94, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[95, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[96, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[97, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[98, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[99, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[100, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[101, {\n\t\t\t\t\t"fee": 100000000\n\t\t\t\t}],\n\t\t\t\t[102, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[103, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[104, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[105, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[106, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[107, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[108, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[109, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[110, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[111, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}],\n\t\t\t\t[112, {\n\t\t\t\t\t"fee": 100\n\t\t\t\t}]\n\t\t\t],\n\t\t\t"scale": 10000\n\t\t},\n\t\t"block_interval": 5,\n\t\t"maintenance_interval": 86400,\n\t\t"maintenance_skip_slots": 3,\n\t\t"committee_proposal_review_period": 1209600,\n\t\t"maximum_transaction_size": 2048,\n\t\t"maximum_block_size": 2048000000,\n\t\t"maximum_time_until_expiration": 86400,\n\t\t"maximum_proposal_lifetime": 2419200,\n\t\t"maximum_asset_whitelist_authorities": 10,\n\t\t"maximum_asset_feed_publishers": 10,\n\t\t"maximum_miner_count": 1001,\n\t\t"maximum_guard_count": 15,\n\t\t"minimum_guard_count": 7,\n\t\t"maximum_authority_membership": 10,\n\t\t"reserve_percent_of_fee": 2000,\n\t\t"network_percent_of_fee": 2000,\n\t\t"lifetime_referrer_percent_of_fee": 3000,\n\t\t"cashback_vesting_period_seconds": 31536000,\n\t\t"cashback_vesting_threshold": 10000,\n\t\t"count_non_member_votes": true,\n\t\t"allow_non_member_whitelists": false,\n\t\t"miner_pay_per_block": 1000,\n\t\t"worker_budget_per_day": 50000000,\n\t\t"max_predicate_opcode": 1,\n\t\t"fee_liquidation_threshold": 10000,\n\t\t"accounts_per_fee_scale": 1000,\n\t\t"account_fee_scale_bitshifts": 4,\n\t\t"max_authority_depth": 2,\n\t\t"min_pay_back_balance": 100,\n\t\t"min_pay_back_balance_other_asset": [],\n\t\t"extensions": []\n\t},\n\t"next_available_vote_id": 217,\n\t"active_committee_members": ["1.5.0", "1.5.1", "1.5.2", "1.5.3", "1.5.4", "1.5.5", "1.5.6", "1.5.7", "1.5.8", "1.5.9", "1.5.10", "1.5.11", "1.5.12", "1.5.13", "1.5.14"],\n\t"active_witnesses": ["1.6.1", "1.6.2", "1.6.3", "1.6.4", "1.6.5", "1.6.6", "1.6.7", "1.6.8", "1.6.9", "1.6.10", "1.6.11", "1.6.12", "1.6.13", "1.6.14", "1.6.15", "1.6.16", "1.6.17", "1.6.18", "1.6.19", "1.6.20", "1.6.21", "1.6.22", "1.6.23", "1.6.24", "1.6.25", "1.6.26", "1.6.27", "1.6.28", "1.6.29", "1.6.30", "1.6.31", "1.6.32", "1.6.33", "1.6.34", "1.6.35", "1.6.36", "1.6.37", "1.6.38", "1.6.39", "1.6.40", "1.6.41", "1.6.42", "1.6.43", "1.6.44", "1.6.45", "1.6.46", "1.6.47", "1.6.48", "1.6.49", "1.6.50", "1.6.51", "1.6.52", "1.6.53", "1.6.54", "1.6.55", "1.6.56", "1.6.57", "1.6.58", "1.6.59", "1.6.60", "1.6.61", "1.6.62", "1.6.63", "1.6.64", "1.6.65", "1.6.66", "1.6.67", "1.6.68", "1.6.69", "1.6.70", "1.6.71", "1.6.72", "1.6.73", "1.6.74", "1.6.75", "1.6.76", "1.6.77", "1.6.78", "1.6.79", "1.6.80", "1.6.81", "1.6.82", "1.6.83", "1.6.84", "1.6.85", "1.6.86", "1.6.87", "1.6.88", "1.6.89", "1.6.90", "1.6.91", "1.6.92", "1.6.93", "1.6.94", "1.6.95", "1.6.96", "1.6.97", "1.6.98", "1.6.99", "1.6.100", "1.6.101", "1.6.102", "1.6.103", "1.6.104", "1.6.105", "1.6.106", "1.6.107", "1.6.108", "1.6.109", "1.6.110", "1.6.111", "1.6.112", "1.6.113", "1.6.114", "1.6.115", "1.6.116", "1.6.117", "1.6.118", "1.6.119", "1.6.120", "1.6.121", "1.6.122", "1.6.123", "1.6.124", "1.6.125", "1.6.126", "1.6.127", "1.6.128", "1.6.129", "1.6.130", "1.6.131", "1.6.132", "1.6.133", "1.6.134", "1.6.135", "1.6.136", "1.6.137", "1.6.138", "1.6.139", "1.6.140", "1.6.141", "1.6.142", "1.6.143", "1.6.144", "1.6.145", "1.6.146", "1.6.147", "1.6.148", "1.6.149", "1.6.150", "1.6.151", "1.6.152", "1.6.153", "1.6.154", "1.6.155", "1.6.156", "1.6.157", "1.6.158", "1.6.159", "1.6.160", "1.6.161", "1.6.162", "1.6.163", "1.6.164", "1.6.165", "1.6.166", "1.6.167", "1.6.168", "1.6.169", "1.6.170", "1.6.171", "1.6.172", "1.6.173", "1.6.174", "1.6.175", "1.6.176", "1.6.177", "1.6.178", "1.6.179", "1.6.180", "1.6.181", "1.6.182", "1.6.183", "1.6.184", "1.6.185", "1.6.186", "1.6.187", "1.6.188", "1.6.189", "1.6.190", "1.6.191", "1.6.192", "1.6.193", "1.6.194", "1.6.195", "1.6.196", "1.6.197", "1.6.198", "1.6.199"],\n\t"unorder_blocks_match": [\n\t\t[6307200, 2700000],\n\t\t[12614400, 2500000],\n\t\t[18921600, 2400000],\n\t\t[25228800, 2200000],\n\t\t[31536000, 2100000],\n\t\t[37843200, 1900000],\n\t\t[44150400, 1700000],\n\t\t[4294967295, 200000]\n\t]\n}\n')])]),t._v(" "),e("p",[t._v("参数解释：")]),t._v(" "),e("p",[t._v("“current_fees”对象下的手续费按照类型不同分别计算，其中比较常用的是类型为60的转账交易。其中转账备注是按照长度收费，每1KB收0.001HX。")]),t._v(" "),e("blockquote",[e("p",[t._v("创建钱包")])]),t._v(" "),e("p",[t._v("调用前提:钱包不存在\n注：成功创建钱包后，钱包默认是关闭的，。\n请求方法：set_password 请求参数：创建密码（长度不低于8位）")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"set_password","id":20180517140651383,"jsonrpc":"2.0","params":["12345678"]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517140651383","result":null}\n')])]),t._v(" "),e("blockquote",[e("p",[t._v("解锁钱包")])]),t._v(" "),e("p",[t._v("调用前提:钱包存在\n请求方法：unlock 请求参数：密码")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"unlock","id":20180517142746758,"jsonrpc":"2.0","params":["12345678"]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517142746758","result":null}\n')])]),t._v(" "),e("blockquote",[e("p",[t._v("创建账户")])]),t._v(" "),e("p",[t._v("调用前提：钱包解锁")]),t._v(" "),e("p",[t._v("请求方法：wallet _create_account请求参数：待创建的用户名（小写英文字符开头、只能是小写英文字符、数字或中划线）")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"wallet _create_account","id":20180517144818773,"jsonrpc":"2.0","params":["test"]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517144818773","result":"HXNgycDeX4xna8w6cchoudZanQ8ssT9mriXh"}\n')])]),t._v(" "),e("p",[t._v("result: 创建账户地址")]),t._v(" "),e("blockquote",[e("p",[t._v("查询账户信息")])]),t._v(" "),e("p",[t._v("请求方法： get_account  请求参数： 账户名")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"get_account","id":20180517144818773,"jsonrpc":"2.0","params":["hyper-exchange"]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517144818773","result": {\n\t"id": "1.2.229",\n\t"membership_expiration_date": "1970-01-01T00:00:00",\n\t"registrar": "1.2.0",\n\t"referrer": "1.2.0",\n\t"lifetime_referrer": "1.2.0",\n\t"network_fee_percentage": 2000,\n\t"lifetime_referrer_fee_percentage": 3000,\n\t"referrer_rewards_percentage": 0,\n\t"name": "hyper-exchange",\n\t"addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",\n\t"owner": {\n\t\t"weight_threshold": 1,\n\t\t"account_auths": [],\n\t\t"key_auths": [\n\t\t\t["HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t", 1]\n\t\t],\n\t\t"address_auths": []\n\t},\n\t"active": {\n\t\t"weight_threshold": 1,\n\t\t"account_auths": [],\n\t\t"key_auths": [\n\t\t\t["HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t", 1]\n\t\t],\n\t\t"address_auths": []\n\t},\n\t"options": {\n\t\t"memo_key": "HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t",\n\t\t"voting_account": "1.2.5",\n\t\t"num_witness": 0,\n\t\t"num_committee": 0,\n\t\t"votes": [],\n\t\t"miner_pledge_pay_back": 10,\n\t\t"extensions": []\n\t},\n\t"statistics": "2.9.229",\n\t"whitelisting_accounts": [],\n\t"blacklisting_accounts": [],\n\t"whitelisted_accounts": [],\n\t"blacklisted_accounts": [],\n\t"owner_special_authority": [0, {}],\n\t"active_special_authority": [0, {}],\n\t"top_n_control_flags": 0,\n\t"online": "true"\n} }\n')])]),t._v(" "),e("p",[t._v("result: 账户详细信息")]),t._v(" "),e("blockquote",[e("p",[t._v("4.7\t查询钱包内账户的地址")])]),t._v(" "),e("p",[t._v("请求方法：get_account_balances 请求参数：账户名")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"get_account_balances","id":20180517150216550,"jsonrpc":"2.0","params":["test"]}\n')])]),t._v(" "),e("p",[t._v("reponse")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517150216550", "result": [{\n\t"amount": 16452,\n\t"asset_id": "1.3.0"\n}, {\n\t"amount": 0,\n\t"asset_id": "1.3.3"\n}] }\n')])]),t._v(" "),e("p",[t._v("返回结果中，amount 为不带精度的余额 asset_id 为资产id")]),t._v(" "),e("blockquote",[e("p",[t._v("根据地址查询余额")])]),t._v(" "),e("p",[t._v("请求方法：get_addr_balances 请求参数：hx地址")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"get_addr_balances","id":20180517150216550,"jsonrpc":"2.0","params":[" HXNQoBQ6xLLRY5NvhjFX2UbessNAbP4E1LXm"]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{"id":"20180517150216550", "result": [{\n\t"amount": 16452,\n\t"asset_id": "1.3.0"\n}, {\n\t"amount": 0,\n\t"asset_id": "1.3.3"\n}] }\n')])]),t._v(" "),e("blockquote",[e("p",[t._v("账户转账")])]),t._v(" "),e("p",[t._v("调用前提：钱包解锁，钱包内有账户\n请求方法： transfer_to_address\n请求参数：取钱账户、 转账到账户的地址、转账金额、 转账资产类型（HX）、备注信息,是否广播")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"transfer_to_address","id":20180517150833029,"jsonrpc":"2.0",\n"params":["test","HXNQoBQ6xLLRY5NvhjFX2UbessNAbP4E1LXm","23",HX,”hello world”,true]\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n\t"id": "20180517150833029",\n\t"result": {\n\t"ref_block_num": 47371,\n\t"ref_block_prefix": 1886805367,\n\t"expiration": "2018-12-25T07:05:20",\n\t"operations": [\n\t\t[0, {\n\t\t\t"fee": {\n\t\t\t\t"amount": 100,\n\t\t\t\t"asset_id": "1.3.0"\n\t\t\t},\n\t\t\t"from": "1.2.0",\n\t\t\t"to": "1.2.0",\n\t\t\t"from_addr": "HXNQ3vUe95it1pXVqjuUhMBPMf9B5mSLjBzR",\n\t\t\t"to_addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",\n\t\t\t"amount": {\n\t\t\t\t"amount": 40311,\n\t\t\t\t"asset_id": "1.3.0"\n\t\t\t},\n\t\t\t"memo": {\n\t\t\t\t"from": "HX1111111111111111111111111111111114T1Anm",\n\t\t\t\t"to": "HX1111111111111111111111111111111114T1Anm",\n\t\t\t\t"nonce": 0,\n\t\t\t\t"message": "0000000068656c6c6f"\n\t\t\t},\n\t\t\t"extensions": []\n\t\t}]\n\t],\n\t"extensions": [],\n\t"signatures": ["1f0a02c4cee5146a47ec3a9fedcbc30543bac531351d0c8acf66151c4da445f985167616005ef0c34dcade32ff3750ee3322516e71870ec870f56f9cc53b2415ff"],\n\t"block_num": 0,\n\t"trxid": "34f1bf431281f2f62abb54bb98a36dd954495ef0"\n}\n}\n')])]),t._v(" "),e("p",[t._v("返回参数:")]),t._v(" "),e("p",[t._v("trx_id: 交易单号(重要)")]),t._v(" "),e("p",[t._v("block_num: 块号(交易打包后会正式写入)")]),t._v(" "),e("p",[t._v("is_virtual: 保留字段")]),t._v(" "),e("p",[t._v("operations: 结构体类型名")]),t._v(" "),e("blockquote",[e("p",[t._v("交易记录查询")])]),t._v(" "),e("p",[t._v("调用前提：钱包打开\n请求方法：get_transaction\n请求参数 : 交易id")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{"method":"get_transaction","id":20180517153307898,"jsonrpc":"2.0",\n"params":[“94711706fd82c84f3961136ba44d5dc251b8abb1”]}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n\t"id": "20180517150833029",\n    "result": {\n\t"ref_block_num": 47371,\n\t"ref_block_prefix": 1886805367,\n\t"expiration": "2018-12-25T07:05:20",\n\t"operations": [\n\t\t[0, {\n\t\t\t"fee": {\n\t\t\t\t"amount": 100,\n\t\t\t\t"asset_id": "1.3.0"\n\t\t\t},\n\t\t\t"from": "1.2.0",\n\t\t\t"to": "1.2.0",\n\t\t\t"from_addr": "HXNQ3vUe95it1pXVqjuUhMBPMf9B5mSLjBzR",\n\t\t\t"to_addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",\n\t\t\t"amount": {\n\t\t\t\t"amount": 40311,\n\t\t\t\t"asset_id": "1.3.0"\n\t\t\t},\n\t\t\t"memo": {\n\t\t\t\t"from": "HX1111111111111111111111111111111114T1Anm",\n\t\t\t\t"to": "HX1111111111111111111111111111111114T1Anm",\n\t\t\t\t"nonce": 0,\n\t\t\t\t"message": "hello"\n\t\t\t},\n\t\t\t"extensions": []\n\t\t}]\n\t],\n\t"extensions": [],\n\t"signatures": ["1f0a02c4cee5146a47ec3a9fedcbc30543bac531351d0c8acf66151c4da445f985167616005ef0c34dcade32ff3750ee3322516e71870ec870f56f9cc53b2415ff"],\n\t"block_num": 637196,\n\t"trxid": "34f1bf431281f2f62abb54bb98a36dd954495ef0"\n}\n}\n')])]),t._v(" "),e("p",[t._v("返回参数:")]),t._v(" "),e("p",[t._v("id: 交易单号")]),t._v(" "),e("p",[t._v("block_num: 块号（链上确认之后，块号将不为0）")]),t._v(" "),e("p",[t._v("operations：交易op信息，其中红色数字为op类型")]),t._v(" "),e("p",[t._v("fee：手续费信息")]),t._v(" "),e("p",[t._v("若交易id没有被确认，则该命令无法查询到任何信息")]),t._v(" "),e("h2",{attrs:{id:"轻钱包rpc接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轻钱包rpc接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 轻钱包rpc接口")]),t._v(" "),e("blockquote",[e("p",[t._v("获取链上refinfo信息")])]),t._v(" "),e("p",[t._v("请求方法：lightwallet_get_refblock_info\n请求参数：无")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc":"2.0",\n  "id":1,\n  "method":"lightwallet_get_refblock_info",\n  "params":[]\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"result": "11398,47706285"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("result中返回的字符串即为refinfo")]),t._v(" "),e("blockquote",[e("p",[t._v("广播交易")])]),t._v(" "),e("p",[t._v("请求方法：lightwallet_broadcast\n请求参数：需广播的交易（格式化为一行的json字符串）")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc":"2.0",\n  "id":1,\n  "method":"lightwallet_broadcast",\n  "params":[{"ref_block_num":20295,"ref_block_prefix":1522980328,"expiration":"2018-12-26T06:04:55","operations":[[0,{"fee":{"amount":200,"asset_id":"1.3.0"},"from":"1.2.0","to":"1.2.0","from_addr":"HXNRhTbDKiw2ut91BJEc5zy49HKWQnRw9as7","to_addr":"HXNUFt3gViQn3iXLRL9eTMGsaJFhYQ6RT4gM","amount":{"amount":10000000,"asset_id":"1.3.3"},"extensions":[]}]],"extensions":[],"signatures":["20434f13d89a088a1f6c3d4978c961885ff193237dca6dbae0e48224afb318f57c28001dd9162984a4f970979ffaf9870359c3da722af6699336a8d53b27c0ae60"]}]\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"result": "94711706fd82c84f3961136ba44d5dc251b8abb1"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("result中返回的字符串即为交易的id")]),t._v(" "),e("h2",{attrs:{id:"hrc12代币接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hrc12代币接口","aria-hidden":"true"}},[t._v("#")]),t._v(" HRC12代币接口")]),t._v(" "),e("blockquote",[e("p",[t._v("合约调用通用接口")])]),t._v(" "),e("p",[t._v("对于HRC12代币，所有的接口调用都是通过智能合约接口调用完成，因此有相对统一的格式。智能合约的调用接口分为三类，分别有三种不同的格式：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("invoke_contract：该类型调用需要消耗一定量的HX作为GAS，结果会在区块链上记录。其格式为:")]),t._v(" "),e("pre",[e("code",[t._v("method - invoke_contract \n参数1 – 账户名（可以是本地账户名）\n参数2 - Gas limit， 执行每一笔花费的gas，通常设置0.00001即可，如果网络拥堵可以提高该值优先打包\n参数3 - 总的gas费用， 该值是一个预计值，打包时会按照实际执行步数收取。如果实际的值小于该值，以实际的为准。否则该交易会失败，如果该失败交易未上链，则费用退回，否则费用不退。\n参数4 – 合约地址\n参数5 - 合约方法名， 根据实际合约的API文档填入即可\n参数6 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）\n")])])]),t._v(" "),e("li",[e("p",[t._v("invoke_contract_testing： 该类型接口跟上一个执行同样的逻辑，但是不会广播到区块链上，只会返回运行中消耗的GAS，但不会实际消耗。主要用于在调用正式接口之前进行测试，对需要消耗的GAS做一个估算。\n其格式为:")]),t._v(" "),e("pre",[e("code",[t._v("method - invoke_contract_testing\n参数1 – 账户名（可以是本地账户名）\n参数2 – 合约地址\n参数3 - 合约方法名， 根据实际合约的API文档填入即可\n参数4 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）\n")])])]),t._v(" "),e("li",[e("p",[t._v("invoke_contract_offline：该类型的接口只在本地进行计算，通常是进行一些查询的功能，不消耗GAS\n其格式为:")]),t._v(" "),e("pre",[e("code",[t._v("method - invoke_contract_testing\n参数1 – 账户名（可以是本地账户名）\n参数2 – 合约地址\n参数3 - 合约方法名， 根据实际合约的API文档填入即可\n参数4 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）\n")])])])]),t._v(" "),e("p",[t._v("invoke_contract_testing方法仅可对非offline类型的接口来执行，用于估算即使gas消耗。实际使用中会在testing接口返回的gas值上增加一点来传入实际的invoke_contract方法。")]),t._v(" "),e("blockquote",[e("p",[t._v("[offline]获取HRC12代币符号")])]),t._v(" "),e("p",[t._v("请求方法：tokenSymbol")]),t._v(" "),e("p",[t._v("请求参数：无")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract_offline", \n  "params": ["test", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "tokenSymbol", ""], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[e("strong",[t._v("参数说明")]),t._v("：")]),t._v(" "),e("p",[t._v("method：根据HRC12规范，该接口是offline接口，因此method为”invoke_contract_offline”")]),t._v(" "),e("p",[t._v("test：执行合约的账户名（可以是本地账户），应该根据实际情况自行修改")]),t._v(" "),e("p",[t._v("HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU：合约地址，每一个智能合约都有一个唯一的地址，请根据实际情况修改")]),t._v(" "),e("p",[t._v("tokenSymbol：合约方法，用于查询HRC12代币的符号")]),t._v(" "),e("p",[t._v("其他参数：根据不同的智能合约接口，参数不同，请参考具体规范。在tokenSymbol这个方法里不需要额外参数，但是需要一个空字符串占位用。")]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": "BTM"\n}\n')])]),t._v(" "),e("p",[t._v("返回结果中BTM为HRC12代币的符号。")]),t._v(" "),e("blockquote",[e("p",[t._v("[offline]获取token名称")])]),t._v(" "),e("p",[t._v("请求方法：tokenName")]),t._v(" "),e("p",[t._v("请求参数：无")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract_offline", \n  "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "tokenName", ""], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": "Bytom"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("返回结果中BTM为HRC12代币的名称。")]),t._v(" "),e("blockquote",[e("p",[t._v("[offline]获取token总量")])]),t._v(" "),e("p",[t._v("请求方法：totalSupply")]),t._v(" "),e("p",[t._v("请求参数：无")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract_offline", \n  "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "totalSupply", ""], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": "2100000000"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("返回结果中2100000000为HRC12代币的总供应量。")]),t._v(" "),e("blockquote",[e("p",[t._v("[offline]获取token精度")])]),t._v(" "),e("p",[t._v("请求方法：precision")]),t._v(" "),e("p",[t._v("请求参数：无")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract_offline", \n  "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", " precision", ""], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": "100000000"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("返回结果中100000000为HRC12代币的精度，表示该代币最小单位是100000000分之一。")]),t._v(" "),e("blockquote",[e("p",[t._v("[offline]获取某个账户的余额")])]),t._v(" "),e("p",[t._v("请求方法：balanceOf")]),t._v(" "),e("p",[t._v("请求参数：要查询的地址")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract_offline", \n  "params": ["a", "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd", "balanceOf", "HXNWgseVgYxqJrWq4v7QbXjDiT7FAGToTa2R"], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": "99699999800000000"\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("返回结果中99699999800000000为查询地址拥有HRC12代币的数量，显示的时候需要除以精度。")]),t._v(" "),e("blockquote",[e("p",[t._v("转账")])]),t._v(" "),e("p",[t._v("请求方法：transfer")]),t._v(" "),e("p",[t._v("请求参数：转入地址,金额,备注")]),t._v(" "),e("p",[t._v("金额是不带精度的，需要以实际的金额乘以代币的精度。备注是可选的。")]),t._v(" "),e("p",[t._v("request")]),t._v(" "),e("pre",[e("code",[t._v('{\n  "jsonrpc": "2.0", \n  "method": "invoke_contract", \n  "params": ["a", 0.00001, 500000, "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd", "transfer", "HXNbtEpjh3GuSCSTAUtaC9vJUoKWjmEY8nnD,10,test"], \n  "id": 1\n}\n')])]),t._v(" "),e("p",[t._v("response")]),t._v(" "),e("pre",[e("code",[t._v('{\n"id": 1,\n"jsonrpc": "2.0",\n"result": {\n"ref_block_num": 47218,\n"ref_block_prefix": 303117421,\n"expiration": "2019-03-06T05:39:30",\n"operations": [\n[\n79,\n{\n"fee": {\n"amount": 5100,\n"asset_id": "1.3.0"\n},\n"invoke_cost": 500000,\n"gas_price": 1,\n"caller_addr": "HXNWgseVgYxqJrWq4v7QbXjDiT7FAGToTa2R",\n"caller_pubkey": "0362e1605ebc5e85ae510a4f2c736a1a6f9b6ce2b4979ea62b6b872d169ac4ba56",\n"contract_id": "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd",\n"contract_api": "transfer",\n"contract_arg": "HXNbtEpjh3GuSCSTAUtaC9vJUoKWjmEY8nnD,10,test"\n}\n]\n],\n"extensions": [],\n"signatures": ["1f5481cae439b77103daf1ade23de91d2274aab448f3065e985c5a4f6741c3fd8906ecc730043101bad1a376da69605671218703ed617e80791b0ab4eb7d1fee02"\n],\n"block_num": 0,\n"trxid": "29e16b8e00e3f9fd0714a7f469a0250ef179f76c"\n}\n}\n')])]),t._v(" "),e("p",[t._v("返回参数：")]),t._v(" "),e("p",[t._v("返回结果是上链的交易信息。")]),t._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("ul",[e("li",[t._v("返回值中的时间都是标准格林尼治时间")]),t._v(" "),e("li",[t._v("返回值中的金额是带精度的金额，需要缩小100000倍才是真正的金额，比如转账1个HX，那么在返回值中标示为100000")])]),t._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),e("p",[t._v("HRC12规范:"),e("a",{attrs:{href:"https://github.com/HcashOrg/HyperExchange/wiki/HX-Token-contract-protocol(HRC12)",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/HcashOrg/HyperExchange/wiki/HX-Token-contract-protocol(HRC12)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"附：终端命令行模式下常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附：终端命令行模式下常用指令","aria-hidden":"true"}},[t._v("#")]),t._v(" 附：终端命令行模式下常用指令")]),t._v(" "),e("p",[t._v("1.创建钱包")]),t._v(" "),e("pre",[e("code",[t._v("set_password 12345678\n")])]),t._v(" "),e("p",[t._v("参数： 钱包密码")]),t._v(" "),e("p",[t._v("该操作会生成一个钱包文件，默认为wallet.json, 如果该文件已经存在，则set_password将会变为修改密码操作")]),t._v(" "),e("p",[t._v("2.解锁钱包")]),t._v(" "),e("pre",[e("code",[t._v("unlock 12345678\n")])]),t._v(" "),e("p",[t._v("参数：钱包密码")]),t._v(" "),e("p",[t._v("3.创建账号")]),t._v(" "),e("pre",[e("code",[t._v("wallet_create_account testaccount\n")])]),t._v(" "),e("p",[t._v("参数：账户名称")]),t._v(" "),e("p",[t._v("4.导入私钥")]),t._v(" "),e("pre",[e("code",[t._v("import_key testaccount1 私钥 \n")])]),t._v(" "),e("p",[t._v("参数：本地不存在的账户名称 私钥")]),t._v(" "),e("p",[t._v("5.列出钱包下所有账号")]),t._v(" "),e("pre",[e("code",[t._v("list_my_accounts\n")])]),t._v(" "),e("p",[t._v("6.列出账号地址")]),t._v(" "),e("pre",[e("code",[t._v("get_account_addr testaccount\n")])]),t._v(" "),e("p",[t._v("参数：账户名称")]),t._v(" "),e("p",[t._v("7.导出私钥")]),t._v(" "),e("pre",[e("code",[t._v("dump_private_key  testaccount1\n")])]),t._v(" "),e("p",[t._v("参数：账户名")]),t._v(" "),e("p",[t._v("8.查询余额")]),t._v(" "),e("pre",[e("code",[t._v("get_account_balances testaccount\n")])]),t._v(" "),e("p",[t._v("参数：账户名")]),t._v(" "),e("p",[t._v("9.查询链上参数")]),t._v(" "),e("pre",[e("code",[t._v("get_global_properties\n")])]),t._v(" "),e("p",[t._v("参数：无")])])},[],!1,null,null,null);n.default=r.exports}}]);