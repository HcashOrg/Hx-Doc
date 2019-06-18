# invoke_contract

invoke_contract 命令调用合约方法。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "invoke_contract", 
  "params": ["test", 0.0001, 10000, "HXTCYttAT61esjuoqThW8rnhqc2VLmYNEhrsD", "getBonus", ""], 
  "id": 1
}
```

> 输入参数

* 调用账户名
* gas 价格，即单步执行花费的 HX 金额，最少为 0.00001
* gas 最大步数，如果实际执行步数小于该限制，按照实际收取费用，如果大于该限制，调用失败
* 合约地址(id)
* 合约方法名
* 合约参数，无参数传空字符串

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "ref_block_num": 65533,
        "ref_block_prefix": 2423819965,
        "expiration": "2019-06-18T01:49:20",
        "operations": [
            [
                79,
                {
                    "fee": {
                        "amount": 1200,
                        "asset_id": "1.3.0"
                    },
                    "invoke_cost": 10000,
                    "gas_price": 10,
                    "caller_addr": "HXTNiRFXW8qpvfNGU4ewhKQEngiVHNTngxYyb",
                    "caller_pubkey": "0344d3bcc10ea31fd7db3dd15cb7d4983e079a3634f0810e7d04d659529d401590",
                    "contract_id": "HXTCYttAT61esjuoqThW8rnhqc2VLmYNEhrsD",
                    "contract_api": "getBonus",
                    "contract_arg": ""
                }
            ]
        ],
        "extensions": [],
        "signatures": [
            "2022ea9e0fd94746ed35ef1d9d8c6a256c605fa6c9ee88a804e4dfa0db9d9fc84215c56e806118d0b32ffe39138b25a2248054470dd4f6ca3f99193c34852c64cb"
        ],
        "block_num": 0,
        "trxid": "e3cf4222cc7dfd70136e57e5a7595d500473e1b9"
    }
}
```

> 返回值

- **expiration**: 交易过期时间
- **operations**: 交易操作
  - **79**: 表示调用合约方法操作类型
  - **fee**: 手续费
  - **gas_price**: gas 价格
  - **caller_addr**: 方法调用人地址
  - **caller_pubkey**: 方法调用人公钥
  - **contract_id**: 合约 id
  - **contract_api**: 调用方法名
- **signatures**: 交易签名
- **trxid**: 交易 id
