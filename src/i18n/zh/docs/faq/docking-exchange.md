# HX交易所钱包适配指南

本页将介绍交易所如何适配HX

## 系统环境软硬件需求

- 操作系统：Ubuntu 16.04 LTS64位系统
- 硬件：内存16GB+  硬盘可用空间10GB+

交易所及其他中心化应用系统通过rpc方式访问底层钱包

## 如何启动RPC服务端监听

启动Rpc模式

    启动hx_node --data-dir=$data-dir --rpc-enpoint=$server_ip 
    启动hx_client --wallet-file=$walletname --server-rpc-endpoint=$server_ip --rpc-endpoint=$client_ip

|参数      |说明|
| -------:|:-------------------------------------------:|
|--data-dir|	指定hx启动需要的数据目录|
|--rpc-endpoint|	指定hx_node和hx_client rpc监听ip端口|
|--server-rpc-endpoint|	指定hx_client 需要链接的服务器ip（格式为 “ws://127.0.0.1:8090”）|
|--wallet-file|	指定的钱包文件，不指定则钱包会自动生成|

示例：

    hx_node --data-dir =./data --rpc-endpoint=127.0.0.1:9991
    hx_client --wallet-file=a.json --server-rpc-endpoint=”ws://127.0.0.1:9991” --rpc-endpoint=”127.0.0.1:9992”
    其中--rpc-endpoint 参数127.0.0.1:9992 为用户访问hx节点的rpc入口

## RPC使用规范

> 基本规范

所有RPC接口均遵循jsonrpc规范2.0，具体参考文档：<https://www.jsonrpc.org/specification>

> 使用方式

所有jsonrpc数据均通过HTTP POST方法传递，结果在HTTP响应中获取。
HTTP请求的URL为hx_client的rpc监听服务：<http://127.0.0.1:9992/>。

注意，请不要直接使用hx_node提供的rpc服务，该服务目前仅对hx_client内部开放。

> 消息结构

Jsonrpc的消息由请求和响应分别构成，一一对应。

- 请求

Jsonrpc请求包括如下结构：

    { 
    “jsonrpc” : ”2.0”,
    "method" : "info", 
    "params" : [], 
    "id" : 1
    }

“**jsonrpc**” - 协议版本，目前固定为”2.0”

“**method**” – 调用的方法名称，具体参考下面的接口列表

“**params**” – 方法所需要的参数，参考具体接口描述

“**id**” – 请求消息的唯一id，如客户端需要同时并发多个消息，此字段会由服务端原封不动返回，客户端以此来辨别是哪个请求对应的消息响应.

- 响应

响应包括如下结构：

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
    "head_block_num": 786742,
    "head_block_id": "000c013669c0391fdd12eeacc8d2eafdd56fdd75",
    "head_block_age": "5 seconds old",
    "next_maintenance_time": "18 hours in the future",
    "chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",
    "participation": "100.00000000000000000",
    "round_participation": "68.00000000000000000",
    "scheduled_citizens": ["1.6.168","1.6.146","1.6.31","1.6.42","1.6.15","1.6.86","1.6.44","1.6.4","1.6.27","1.6.160","1.6.65","1.6.84",
    "1.6.118","1.6.39","1.6.77","1.6.73","1.6.119","1.6.131","1.6.147","1.6.16","1.6.2","1.6.106","1.6.53","1.6.145",
    "1.6.154"]
    }
    }

“**id**” – 请求消息的唯一id，如客户端需要同时并发多个消息，此字段会由服务端原封不动返回，客户端以此来辨别是哪个请求对应的消息响应

“**jsonrpc**” - 协议版本，目前固定为”2.0”

“**result**” – 调用方法返回的结果，具体参考下面的接口列表

“**error**” – 如果调用方法出错，则会有此字段，正常返回无此字段

> HTTP样例

- 请求

请求结构如下：

    POST / HTTP/1.1
    Host: 127.0.0.1:9992
    Cache-Control: no-cache
    {
    "id":1,
    “jsonrpc":"2.0",
    "method":"info",
    "params":[]
    }


- 响应

注意，此处省略HTTP头部。

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
    "head_block_num": 786742,
    "head_block_id": "000c013669c0391fdd12eeacc8d2eafdd56fdd75",
    "head_block_age": "5 seconds old",
    "next_maintenance_time": "18 hours in the future",
    "chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",
    "participation": "100.00000000000000000",
    "round_participation": "68.00000000000000000",
    "scheduled_citizens": [
    "1.6.168",
    "1.6.146",
    "1.6.31",
    "1.6.42",
    "1.6.15",
    "1.6.86",
    "1.6.44",
    "1.6.4",
    "1.6.27",
    "1.6.160",
    "1.6.65",
    "1.6.84",
    "1.6.118",
    "1.6.39",
    "1.6.77",
    "1.6.73",
    "1.6.119",
    "1.6.131",
    "1.6.147",
    "1.6.16",
    "1.6.2",
    "1.6.106",
    "1.6.53",
    "1.6.145",
    "1.6.154"
    ]
    }
    }

> curl样例

- 请求

请求命令如下：

    curl -X POST   http://127.0.0.1:9992/   -H 'cache-control: no-cache'   -H 'postman-token: a79b33f6-31a3-ec23-d114-d468f3d71c7c'   -d '{
      "jsonrpc": "2.0",
      "id": 61,
      "method": "info",
      "params": []
    }'

- 响应

响应如下：

    {"id":61,
    "jsonrpc":"2.0",
    "result":
    {"head_block_num":787040,
    "head_block_id":"000c0260fb7dc04a7a6a1781ec54753cc9d536f4",
    "head_block_age":"3 seconds old",
    "next_maintenance_time":"18 hours in the future",
    "chain_id":"2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",
    "participation":"100.00000000000000000",
    "round_participation":"64.00000000000000000",
    "scheduled_citizens":["1.6.42","1.6.39","1.6.143","1.6.150","1.6.156","1.6.30","1.6.65","1.6.125","1.6.131","1.6.34","1.6.33","1.6.4","1.6.47","1.6.94","1.6.165","1.6.109","1.6.107","1.6.12","1.6.104","1.6.115","1.6.86","1.6.36","1.6.161","1.6.106","1.6.53"]}}

## 基本操作指令

> 获取客户端信息

Request

    {"method":"info","id":20180523092052345,"jsonrpc":"2.0","params":[]}

response成功

    {
    	"id": "20180523092052345",
    	"result": {
    	"head_block_num": 634505,
    	"head_block_id": "0009ae8941db944c1d2ec63cf64be2bd6b79b695",
    	"head_block_age": "1 second old",
    	"next_maintenance_time": "21 hours in the future",
    	"chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",
    	"participation": "98.43750000000000000",
    	"round_participation": "24.00000000000000000",
    	"scheduled_citizens": ["1.6.63", "1.6.33", "1.6.66", "1.6.95", "1.6.86", "1.6.112", "1.6.42", "1.6.54", "1.6.8", "1.6.52", "1.6.97", "1.6.123", "1.6.38", "1.6.139", "1.6.124", "1.6.31", "1.6.146", "1.6.115", "1.6.93", "1.6.4", "1.6.137", "1.6.53", "1.6.84", "1.6.27", "1.6.109"]
    }
    }

返回参数：

" head_block_num ": 区块号,

" head_block_age ": 当前最大块的产生的时长,

" next_maintenance_time ": "下一次链上maintenance时间",

" head_block_id ": "当前块ID",

" chain_id ": "链ID",

" participation ": 当前链上参与率,

" round_participation ": "当前轮参与率",

" scheduled_citizens ":当前出块的citizen

> 查询链上参数（手续费等）

request

    {"method":"get_global_properties","id":20180523092052345,"jsonrpc":"2.0","params":[]}

response

    {
    	"id": "2.0.0",
    	"parameters": {
    		"current_fees": {
    			"parameters": [
    				[0, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[1, {
    					"fee": 50
    				}],
    				[2, {
    					"fee": 0
    				}],
    				[3, {
    					"fee": 100
    				}],
    				[4, {
    					"fee": 0
    				}],
    				[5, {
    					"basic_fee": 500000,
    					"premium_fee": 20000,
    					"price_per_kbyte": 10
    				}],
    				[6, {
    					"fee": 100,
    					"price_per_kbyte": 10
    				}],
    				[7, {
    					"fee": 300000
    				}],
    				[8, {
    					"membership_annual_fee": 20000,
    					"membership_lifetime_fee": 100000
    				}],
    				[9, {
    					"fee": 5000
    				}],
    				[10, {
    					"fee": 5000
    				}],
    				[11, {
    					"fee": 100
    				}],
    				[12, {
    					"fee": 5000
    				}],
    				[13, {
    					"symbol3": 5000000,
    					"symbol4": 3000000,
    					"long_symbol": 50000,
    					"price_per_kbyte": 10
    				}],
    				[14, {
    					"fee": 5000,
    					"price_per_kbyte": 10
    				}],
    				[15, {
    					"fee": 5000
    				}],
    				[16, {
    					"fee": 5000
    				}],
    				[17, {
    					"fee": 100,
    					"price_per_kbyte": 10
    				}],
    				[18, {
    					"fee": 100
    				}],
    				[19, {
    					"fee": 10
    				}],
    				[20, {
    					"fee": 1000
    				}],
    				[21, {
    					"fee": 5000
    				}],
    				[22, {
    					"fee": 10
    				}],
    				[23, {
    					"fee": 10
    				}],
    				[24, {
    					"fee": 100000000
    				}],
    				[25, {
    					"fee": 100
    				}],
    				[26, {
    					"fee": 0
    				}],
    				[27, {
    					"fee": 0
    				}],
    				[28, {
    					"fee": 100,
    					"price_per_kbyte": 10
    				}],
    				[29, {
    					"fee": 100,
    					"price_per_kbyte": 10
    				}],
    				[30, {
    					"fee": 10
    				}],
    				[31, {
    					"fee": 10
    				}],
    				[32, {
    					"fee": 10
    				}],
    				[33, {
    					"fee": 200,
    					"price_per_kbyte": 10
    				}],
    				[34, {
    					"fee": 0
    				}],
    				[35, {
    					"fee": 1000000000
    				}],
    				[36, {
    					"fee": 100
    				}],
    				[37, {
    					"fee": 10
    				}],
    				[38, {
    					"fee": 35000
    				}],
    				[39, {
    					"fee": 10
    				}],
    				[40, {
    					"fee": 200
    				}],
    				[41, {
    					"fee": 45000
    				}],
    				[42, {
    					"fee": 10,
    					"price_per_kbyte": 10
    				}],
    				[43, {
    					"fee": 10
    				}],
    				[44, {}],
    				[45, {
    					"fee": 100,
    					"price_per_kbyte": 10
    				}],
    				[46, {
    					"fee": 100
    				}],
    				[47, {
    					"fee": 100
    				}],
    				[48, {
    					"fee": 50,
    					"price_per_output": 50
    				}],
    				[49, {
    					"fee": 50,
    					"price_per_output": 50
    				}],
    				[50, {
    					"fee": 50
    				}],
    				[51, {}],
    				[52, {
    					"fee": 100
    				}],
    				[53, {}],
    				[54, {
    					"fee": 10
    				}],
    				[55, {
    					"fee": 100
    				}],
    				[56, {
    					"fee": 100
    				}],
    				[57, {
    					"fee": 100
    				}],
    				[58, {
    					"fee": 100
    				}],
    				[59, {
    					"fee": 100
    				}],
    				[60, {
    					"fee": 100
    				}],
    				[61, {
    					"fee": 100
    				}],
    				[62, {
    					"fee": 100
    				}],
    				[63, {
    					"fee": 100
    				}],
    				[64, {
    					"fee": 100
    				}],
    				[65, {
    					"fee": 100
    				}],
    				[66, {
    					"fee": 100
    				}],
    				[67, {
    					"fee": 100
    				}],
    				[68, {
    					"fee": 100
    				}],
    				[69, {
    					"fee": 100
    				}],
    				[70, {
    					"fee": 100
    				}],
    				[71, {
    					"fee": 100
    				}],
    				[72, {
    					"fee": 100
    				}],
    				[73, {
    					"fee": 100
    				}],
    				[74, {
    					"fee": 100
    				}],
    				[75, {
    					"fee": 100
    				}],
    				[76, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[77, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[78, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[79, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[80, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[81, {
    					"fee": 100,
    					"price_per_kbyte": 100
    				}],
    				[82, {
    					"fee": 100
    				}],
    				[83, {
    					"fee": 100
    				}],
    				[84, {
    					"fee": 100
    				}],
    				[85, {
    					"fee": 100
    				}],
    				[86, {
    					"fee": 100
    				}],
    				[87, {
    					"fee": 100
    				}],
    				[88, {
    					"fee": 100
    				}],
    				[89, {
    					"fee": 100
    				}],
    				[90, {
    					"fee": 100
    				}],
    				[91, {
    					"fee": 100
    				}],
    				[92, {
    					"fee": 5000
    				}],
    				[93, {
    					"fee": 100
    				}],
    				[94, {
    					"fee": 100
    				}],
    				[95, {
    					"fee": 100
    				}],
    				[96, {
    					"fee": 100
    				}],
    				[97, {
    					"fee": 100
    				}],
    				[98, {
    					"fee": 100
    				}],
    				[99, {
    					"fee": 100
    				}],
    				[100, {
    					"fee": 100
    				}],
    				[101, {
    					"fee": 100000000
    				}],
    				[102, {
    					"fee": 100
    				}],
    				[103, {
    					"fee": 100
    				}],
    				[104, {
    					"fee": 100
    				}],
    				[105, {
    					"fee": 100
    				}],
    				[106, {
    					"fee": 100
    				}],
    				[107, {
    					"fee": 100
    				}],
    				[108, {
    					"fee": 100
    				}],
    				[109, {
    					"fee": 100
    				}],
    				[110, {
    					"fee": 100
    				}],
    				[111, {
    					"fee": 100
    				}],
    				[112, {
    					"fee": 100
    				}]
    			],
    			"scale": 10000
    		},
    		"block_interval": 5,
    		"maintenance_interval": 86400,
    		"maintenance_skip_slots": 3,
    		"committee_proposal_review_period": 1209600,
    		"maximum_transaction_size": 2048,
    		"maximum_block_size": 2048000000,
    		"maximum_time_until_expiration": 86400,
    		"maximum_proposal_lifetime": 2419200,
    		"maximum_asset_whitelist_authorities": 10,
    		"maximum_asset_feed_publishers": 10,
    		"maximum_miner_count": 1001,
    		"maximum_guard_count": 15,
    		"minimum_guard_count": 7,
    		"maximum_authority_membership": 10,
    		"reserve_percent_of_fee": 2000,
    		"network_percent_of_fee": 2000,
    		"lifetime_referrer_percent_of_fee": 3000,
    		"cashback_vesting_period_seconds": 31536000,
    		"cashback_vesting_threshold": 10000,
    		"count_non_member_votes": true,
    		"allow_non_member_whitelists": false,
    		"miner_pay_per_block": 1000,
    		"worker_budget_per_day": 50000000,
    		"max_predicate_opcode": 1,
    		"fee_liquidation_threshold": 10000,
    		"accounts_per_fee_scale": 1000,
    		"account_fee_scale_bitshifts": 4,
    		"max_authority_depth": 2,
    		"min_pay_back_balance": 100,
    		"min_pay_back_balance_other_asset": [],
    		"extensions": []
    	},
    	"next_available_vote_id": 217,
    	"active_committee_members": ["1.5.0", "1.5.1", "1.5.2", "1.5.3", "1.5.4", "1.5.5", "1.5.6", "1.5.7", "1.5.8", "1.5.9", "1.5.10", "1.5.11", "1.5.12", "1.5.13", "1.5.14"],
    	"active_witnesses": ["1.6.1", "1.6.2", "1.6.3", "1.6.4", "1.6.5", "1.6.6", "1.6.7", "1.6.8", "1.6.9", "1.6.10", "1.6.11", "1.6.12", "1.6.13", "1.6.14", "1.6.15", "1.6.16", "1.6.17", "1.6.18", "1.6.19", "1.6.20", "1.6.21", "1.6.22", "1.6.23", "1.6.24", "1.6.25", "1.6.26", "1.6.27", "1.6.28", "1.6.29", "1.6.30", "1.6.31", "1.6.32", "1.6.33", "1.6.34", "1.6.35", "1.6.36", "1.6.37", "1.6.38", "1.6.39", "1.6.40", "1.6.41", "1.6.42", "1.6.43", "1.6.44", "1.6.45", "1.6.46", "1.6.47", "1.6.48", "1.6.49", "1.6.50", "1.6.51", "1.6.52", "1.6.53", "1.6.54", "1.6.55", "1.6.56", "1.6.57", "1.6.58", "1.6.59", "1.6.60", "1.6.61", "1.6.62", "1.6.63", "1.6.64", "1.6.65", "1.6.66", "1.6.67", "1.6.68", "1.6.69", "1.6.70", "1.6.71", "1.6.72", "1.6.73", "1.6.74", "1.6.75", "1.6.76", "1.6.77", "1.6.78", "1.6.79", "1.6.80", "1.6.81", "1.6.82", "1.6.83", "1.6.84", "1.6.85", "1.6.86", "1.6.87", "1.6.88", "1.6.89", "1.6.90", "1.6.91", "1.6.92", "1.6.93", "1.6.94", "1.6.95", "1.6.96", "1.6.97", "1.6.98", "1.6.99", "1.6.100", "1.6.101", "1.6.102", "1.6.103", "1.6.104", "1.6.105", "1.6.106", "1.6.107", "1.6.108", "1.6.109", "1.6.110", "1.6.111", "1.6.112", "1.6.113", "1.6.114", "1.6.115", "1.6.116", "1.6.117", "1.6.118", "1.6.119", "1.6.120", "1.6.121", "1.6.122", "1.6.123", "1.6.124", "1.6.125", "1.6.126", "1.6.127", "1.6.128", "1.6.129", "1.6.130", "1.6.131", "1.6.132", "1.6.133", "1.6.134", "1.6.135", "1.6.136", "1.6.137", "1.6.138", "1.6.139", "1.6.140", "1.6.141", "1.6.142", "1.6.143", "1.6.144", "1.6.145", "1.6.146", "1.6.147", "1.6.148", "1.6.149", "1.6.150", "1.6.151", "1.6.152", "1.6.153", "1.6.154", "1.6.155", "1.6.156", "1.6.157", "1.6.158", "1.6.159", "1.6.160", "1.6.161", "1.6.162", "1.6.163", "1.6.164", "1.6.165", "1.6.166", "1.6.167", "1.6.168", "1.6.169", "1.6.170", "1.6.171", "1.6.172", "1.6.173", "1.6.174", "1.6.175", "1.6.176", "1.6.177", "1.6.178", "1.6.179", "1.6.180", "1.6.181", "1.6.182", "1.6.183", "1.6.184", "1.6.185", "1.6.186", "1.6.187", "1.6.188", "1.6.189", "1.6.190", "1.6.191", "1.6.192", "1.6.193", "1.6.194", "1.6.195", "1.6.196", "1.6.197", "1.6.198", "1.6.199"],
    	"unorder_blocks_match": [
    		[6307200, 2700000],
    		[12614400, 2500000],
    		[18921600, 2400000],
    		[25228800, 2200000],
    		[31536000, 2100000],
    		[37843200, 1900000],
    		[44150400, 1700000],
    		[4294967295, 200000]
    	]
    }

参数解释：

“current_fees”对象下的手续费按照类型不同分别计算，其中比较常用的是类型为60的转账交易。其中转账备注是按照长度收费，每1KB收0.001HX。

> 创建钱包

调用前提:钱包不存在
注：成功创建钱包后，钱包默认是关闭的，。
请求方法：set_password 请求参数：创建密码（长度不低于8位）

request

    {"method":"set_password","id":20180517140651383,"jsonrpc":"2.0","params":["12345678"]}

response

    {"id":"20180517140651383","result":null}

> 解锁钱包

调用前提:钱包存在
请求方法：unlock 请求参数：密码

request

    {"method":"unlock","id":20180517142746758,"jsonrpc":"2.0","params":["12345678"]}

response

    {"id":"20180517142746758","result":null}

> 创建账户

调用前提：钱包解锁

请求方法：wallet _create_account请求参数：待创建的用户名（小写英文字符开头、只能是小写英文字符、数字或中划线）

request

    {"method":"wallet _create_account","id":20180517144818773,"jsonrpc":"2.0","params":["test"]}

response

    {"id":"20180517144818773","result":"HXNgycDeX4xna8w6cchoudZanQ8ssT9mriXh"}

result: 创建账户地址

> 查询账户信息

请求方法： get_account  请求参数： 账户名

request

    {"method":"get_account","id":20180517144818773,"jsonrpc":"2.0","params":["hyper-exchange"]}

response

    {"id":"20180517144818773","result": {
    	"id": "1.2.229",
    	"membership_expiration_date": "1970-01-01T00:00:00",
    	"registrar": "1.2.0",
    	"referrer": "1.2.0",
    	"lifetime_referrer": "1.2.0",
    	"network_fee_percentage": 2000,
    	"lifetime_referrer_fee_percentage": 3000,
    	"referrer_rewards_percentage": 0,
    	"name": "hyper-exchange",
    	"addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",
    	"owner": {
    		"weight_threshold": 1,
    		"account_auths": [],
    		"key_auths": [
    			["HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t", 1]
    		],
    		"address_auths": []
    	},
    	"active": {
    		"weight_threshold": 1,
    		"account_auths": [],
    		"key_auths": [
    			["HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t", 1]
    		],
    		"address_auths": []
    	},
    	"options": {
    		"memo_key": "HX6L9qtB2hMFVAmc9NowwHYiwkTSeemqK1RbytTG7uSP96uZd35t",
    		"voting_account": "1.2.5",
    		"num_witness": 0,
    		"num_committee": 0,
    		"votes": [],
    		"miner_pledge_pay_back": 10,
    		"extensions": []
    	},
    	"statistics": "2.9.229",
    	"whitelisting_accounts": [],
    	"blacklisting_accounts": [],
    	"whitelisted_accounts": [],
    	"blacklisted_accounts": [],
    	"owner_special_authority": [0, {}],
    	"active_special_authority": [0, {}],
    	"top_n_control_flags": 0,
    	"online": "true"
    } }

result: 账户详细信息

> 4.7	查询钱包内账户的地址

请求方法：get_account_balances 请求参数：账户名

request

    {"method":"get_account_balances","id":20180517150216550,"jsonrpc":"2.0","params":["test"]}

reponse

    {"id":"20180517150216550", "result": [{
    	"amount": 16452,
    	"asset_id": "1.3.0"
    }, {
    	"amount": 0,
    	"asset_id": "1.3.3"
    }] }

返回结果中，amount 为不带精度的余额 asset_id 为资产id

> 根据地址查询余额

请求方法：get_addr_balances 请求参数：hx地址

request

    {"method":"get_addr_balances","id":20180517150216550,"jsonrpc":"2.0","params":[" HXNQoBQ6xLLRY5NvhjFX2UbessNAbP4E1LXm"]}

response

    {"id":"20180517150216550", "result": [{
    	"amount": 16452,
    	"asset_id": "1.3.0"
    }, {
    	"amount": 0,
    	"asset_id": "1.3.3"
    }] }

> 账户转账

调用前提：钱包解锁，钱包内有账户
请求方法： transfer_to_address
请求参数：取钱账户、 转账到账户的地址、转账金额、 转账资产类型（HX）、备注信息,是否广播

request

    {"method":"transfer_to_address","id":20180517150833029,"jsonrpc":"2.0",
    "params":["test","HXNQoBQ6xLLRY5NvhjFX2UbessNAbP4E1LXm","23",HX,”hello world”,true]
    }

response

    {
    	"id": "20180517150833029",
    	"result": {
    	"ref_block_num": 47371,
    	"ref_block_prefix": 1886805367,
    	"expiration": "2018-12-25T07:05:20",
    	"operations": [
    		[0, {
    			"fee": {
    				"amount": 100,
    				"asset_id": "1.3.0"
    			},
    			"from": "1.2.0",
    			"to": "1.2.0",
    			"from_addr": "HXNQ3vUe95it1pXVqjuUhMBPMf9B5mSLjBzR",
    			"to_addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",
    			"amount": {
    				"amount": 40311,
    				"asset_id": "1.3.0"
    			},
    			"memo": {
    				"from": "HX1111111111111111111111111111111114T1Anm",
    				"to": "HX1111111111111111111111111111111114T1Anm",
    				"nonce": 0,
    				"message": "0000000068656c6c6f"
    			},
    			"extensions": []
    		}]
    	],
    	"extensions": [],
    	"signatures": ["1f0a02c4cee5146a47ec3a9fedcbc30543bac531351d0c8acf66151c4da445f985167616005ef0c34dcade32ff3750ee3322516e71870ec870f56f9cc53b2415ff"],
    	"block_num": 0,
    	"trxid": "34f1bf431281f2f62abb54bb98a36dd954495ef0"
    }
    }

返回参数:

trx_id: 交易单号(重要)

block_num: 块号(交易打包后会正式写入)

is_virtual: 保留字段

operations: 结构体类型名

> 交易记录查询

调用前提：钱包打开
请求方法：get_transaction
请求参数 : 交易id

request

    {"method":"get_transaction","id":20180517153307898,"jsonrpc":"2.0",
    "params":[“94711706fd82c84f3961136ba44d5dc251b8abb1”]}

response

    {
    	"id": "20180517150833029",
        "result": {
    	"ref_block_num": 47371,
    	"ref_block_prefix": 1886805367,
    	"expiration": "2018-12-25T07:05:20",
    	"operations": [
    		[0, {
    			"fee": {
    				"amount": 100,
    				"asset_id": "1.3.0"
    			},
    			"from": "1.2.0",
    			"to": "1.2.0",
    			"from_addr": "HXNQ3vUe95it1pXVqjuUhMBPMf9B5mSLjBzR",
    			"to_addr": "HXNRGtrNXR5RD9rUxFQGr6o8D6Q6zm2zGvGJ",
    			"amount": {
    				"amount": 40311,
    				"asset_id": "1.3.0"
    			},
    			"memo": {
    				"from": "HX1111111111111111111111111111111114T1Anm",
    				"to": "HX1111111111111111111111111111111114T1Anm",
    				"nonce": 0,
    				"message": "hello"
    			},
    			"extensions": []
    		}]
    	],
    	"extensions": [],
    	"signatures": ["1f0a02c4cee5146a47ec3a9fedcbc30543bac531351d0c8acf66151c4da445f985167616005ef0c34dcade32ff3750ee3322516e71870ec870f56f9cc53b2415ff"],
    	"block_num": 637196,
    	"trxid": "34f1bf431281f2f62abb54bb98a36dd954495ef0"
    }
    }

返回参数:

id: 交易单号

block_num: 块号（链上确认之后，块号将不为0）

operations：交易op信息，其中红色数字为op类型

fee：手续费信息

若交易id没有被确认，则该命令无法查询到任何信息

## 轻钱包rpc接口

> 获取链上refinfo信息

请求方法：lightwallet_get_refblock_info 
请求参数：无

request

    {
      "jsonrpc":"2.0",
      "id":1,
      "method":"lightwallet_get_refblock_info",
      "params":[]
    }

response

    {
    "id": 1,
    "result": "11398,47706285"
    }

返回参数：

result中返回的字符串即为refinfo

> 广播交易

请求方法：lightwallet_broadcast 
请求参数：需广播的交易（格式化为一行的json字符串）

request

    {
      "jsonrpc":"2.0",
      "id":1,
      "method":"lightwallet_broadcast",
      "params":[{"ref_block_num":20295,"ref_block_prefix":1522980328,"expiration":"2018-12-26T06:04:55","operations":[[0,{"fee":{"amount":200,"asset_id":"1.3.0"},"from":"1.2.0","to":"1.2.0","from_addr":"HXNRhTbDKiw2ut91BJEc5zy49HKWQnRw9as7","to_addr":"HXNUFt3gViQn3iXLRL9eTMGsaJFhYQ6RT4gM","amount":{"amount":10000000,"asset_id":"1.3.3"},"extensions":[]}]],"extensions":[],"signatures":["20434f13d89a088a1f6c3d4978c961885ff193237dca6dbae0e48224afb318f57c28001dd9162984a4f970979ffaf9870359c3da722af6699336a8d53b27c0ae60"]}]
    }

response

    {
    "id": 1,
    "result": "94711706fd82c84f3961136ba44d5dc251b8abb1"
    }

返回参数：

result中返回的字符串即为交易的id

## HRC12代币接口

> 合约调用通用接口

对于HRC12代币，所有的接口调用都是通过智能合约接口调用完成，因此有相对统一的格式。智能合约的调用接口分为三类，分别有三种不同的格式：

1.	invoke_contract：该类型调用需要消耗一定量的HX作为GAS，结果会在区块链上记录。其格式为: 

    	method - invoke_contract 
    	参数1 – 账户名（可以是本地账户名）
    	参数2 - Gas limit， 执行每一笔花费的gas，通常设置0.00001即可，如果网络拥堵可以提高该值优先打包
    	参数3 - 总的gas费用， 该值是一个预计值，打包时会按照实际执行步数收取。如果实际的值小于该值，以实际的为准。否则该交易会失败，如果该失败交易未上链，则费用退回，否则费用不退。
    	参数4 – 合约地址
    	参数5 - 合约方法名， 根据实际合约的API文档填入即可
    	参数6 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）

2.	invoke_contract_testing： 该类型接口跟上一个执行同样的逻辑，但是不会广播到区块链上，只会返回运行中消耗的GAS，但不会实际消耗。主要用于在调用正式接口之前进行测试，对需要消耗的GAS做一个估算。
其格式为: 

    	method - invoke_contract_testing
    	参数1 – 账户名（可以是本地账户名）
    	参数2 – 合约地址
    	参数3 - 合约方法名， 根据实际合约的API文档填入即可
    	参数4 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）

3.	invoke_contract_offline：该类型的接口只在本地进行计算，通常是进行一些查询的功能，不消耗GAS
其格式为: 

    	method - invoke_contract_testing
    	参数1 – 账户名（可以是本地账户名）
    	参数2 – 合约地址
    	参数3 - 合约方法名， 根据实际合约的API文档填入即可
    	参数4 - 合约API参数， 根据合约实际的API文档填入接口（通常是多个以“，”分割的字符串）

invoke_contract_testing方法仅可对非offline类型的接口来执行，用于估算即使gas消耗。实际使用中会在testing接口返回的gas值上增加一点来传入实际的invoke_contract方法。


> [offline]获取HRC12代币符号

请求方法：tokenSymbol

请求参数：无

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["test", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "tokenSymbol", ""], 
      "id": 1
    }

**参数说明**：

method：根据HRC12规范，该接口是offline接口，因此method为”invoke_contract_offline”

test：执行合约的账户名（可以是本地账户），应该根据实际情况自行修改

HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU：合约地址，每一个智能合约都有一个唯一的地址，请根据实际情况修改

tokenSymbol：合约方法，用于查询HRC12代币的符号

其他参数：根据不同的智能合约接口，参数不同，请参考具体规范。在tokenSymbol这个方法里不需要额外参数，但是需要一个空字符串占位用。


response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "BTM"
    }

返回结果中BTM为HRC12代币的符号。

> [offline]获取token名称

请求方法：tokenName

请求参数：无

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "tokenName", ""], 
      "id": 1
    }

response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "Bytom"
    }

返回参数：

返回结果中BTM为HRC12代币的名称。


> [offline]获取token总量

请求方法：totalSupply

请求参数：无

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", "totalSupply", ""], 
      "id": 1
    }

response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "2100000000"
    }

返回参数：

返回结果中2100000000为HRC12代币的总供应量。


> [offline]获取token精度

请求方法：precision

请求参数：无

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["a", "HXCWMNwuFzr3JSiDvGjZasDCm6dn2mVvxXKU", " precision", ""], 
      "id": 1
    }

response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "100000000"
    }

返回参数：

返回结果中100000000为HRC12代币的精度，表示该代币最小单位是100000000分之一。


> [offline]获取某个账户的余额

请求方法：balanceOf

请求参数：要查询的地址

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["a", "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd", "balanceOf", "HXNWgseVgYxqJrWq4v7QbXjDiT7FAGToTa2R"], 
      "id": 1
    }

response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "99699999800000000"
    }

返回参数：

返回结果中99699999800000000为查询地址拥有HRC12代币的数量，显示的时候需要除以精度。


> 转账

请求方法：transfer

请求参数：转入地址,金额,备注

金额是不带精度的，需要以实际的金额乘以代币的精度。备注是可选的。

request

    {
      "jsonrpc": "2.0", 
      "method": "invoke_contract_offline", 
      "params": ["a", "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd", "transfer", "HXNWgseVgYxqJrWq4v7QbXjDiT7FAGToTa2R"], 
      "id": 1
    }

response

    {
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
    "ref_block_num": 47218,
    "ref_block_prefix": 303117421,
    "expiration": "2019-03-06T05:39:30",
    "operations": [
    [
    79,
    {
    "fee": {
    "amount": 5100,
    "asset_id": "1.3.0"
    },
    "invoke_cost": 500000,
    "gas_price": 1,
    "caller_addr": "HXNWgseVgYxqJrWq4v7QbXjDiT7FAGToTa2R",
    "caller_pubkey": "0362e1605ebc5e85ae510a4f2c736a1a6f9b6ce2b4979ea62b6b872d169ac4ba56",
    "contract_id": "HXCYDj67eqDChkrg1pmkm17LmWZCkVZdCSQd",
    "contract_api": "transfer",
    "contract_arg": "HXNbtEpjh3GuSCSTAUtaC9vJUoKWjmEY8nnD,10,test"
    }
    ]
    ],
    "extensions": [],
    "signatures": ["1f5481cae439b77103daf1ade23de91d2274aab448f3065e985c5a4f6741c3fd8906ecc730043101bad1a376da69605671218703ed617e80791b0ab4eb7d1fee02"
    ],
    "block_num": 0,
    "trxid": "29e16b8e00e3f9fd0714a7f469a0250ef179f76c"
    }
    }

返回参数：

返回结果是上链的交易信息。


## 注意事项

- 返回值中的时间都是标准格林尼治时间
- 返回值中的金额是带精度的金额，需要缩小100000倍才是真正的金额，比如转账1个HX，那么在返回值中标示为100000

## 参考文档

HRC12规范:<https://github.com/HcashOrg/HyperExchange/wiki/HX-Token-contract-protocol(HRC12)>

## 附：终端命令行模式下常用指令

1.创建钱包

    set_password 12345678

参数： 钱包密码

该操作会生成一个钱包文件，默认为wallet.json, 如果该文件已经存在，则set_password将会变为修改密码操作

2.解锁钱包

    unlock 12345678

参数：钱包密码

3.创建账号

	wallet_create_account testaccount

参数：账户名称

4.导入私钥

	import_key testaccount1 私钥 

参数：本地不存在的账户名称 私钥

5.列出钱包下所有账号

	list_my_accounts

6.列出账号地址

	get_account_addr testaccount

参数：账户名称

7.导出私钥

	dump_private_key  testaccount1

参数：账户名

8.查询余额

	get_account_balances testaccount

参数：账户名

9.查询链上参数

    get_global_properties

参数：无
















