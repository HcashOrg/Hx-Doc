# transfer_to_contract

transfer_to_contract 命令向合约转账资产。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "transfer_to_contract", 
  "params": ["test", "HXTCYttAT61esjuoqThW8rnhqc2VLmYNEhrsD", 10, "HX", "", 0.00001, 10000, true], 
  "id": 1
}
```

> 输入参数

* 转出账户名
* 合约地址(id)
* 转账金额
* 资产符号(HX, HC, BTC, LTC, ETH, BCH, USDT, ERCPAX, ERCELF)

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "ref_block_num": 65457,
        "ref_block_prefix": 3876718435,
        "expiration": "2019-06-18T01:43:00",
        "operations": [
            [
                81,
                {
                    "fee": {
                        "amount": 300,
                        "asset_id": "1.3.0"
                    },
                    "invoke_cost": 10000,
                    "gas_price": 1,
                    "caller_addr": "HXTNiRFXW8qpvfNGU4ewhKQEngiVHNTngxYyb",
                    "caller_pubkey": "0344d3bcc10ea31fd7db3dd15cb7d4983e079a3634f0810e7d04d659529d401590",
                    "contract_id": "HXTCYttAT61esjuoqThW8rnhqc2VLmYNEhrsD",
                    "amount": {
                        "amount": 1000000,
                        "asset_id": "1.3.0"
                    },
                    "param": ""
                }
            ]
        ],
        "extensions": [],
        "signatures": [
            "1f55219ef8dbd19f7b9313a12bdb0f7add5b2c2d229a4c95ee51f42141a3c412de70b4e00a28d7ebd928d105ead7f0d97bb5b5076829df4e80abc5682ab9f6377e"
        ],
        "block_num": 0,
        "trxid": "e24eb80a85fd20c3e1fec770d9d4c59169e3e4f4"
    }
}
```

> 返回值

- **expiration**: 交易过期时间
- **operations**: 交易操作
  - **81**: 表示向合约转账操作类型
  - **fee**: 手续费
  - **gas_price**: gas 价格
  - **caller_addr**: 方法调用人地址
  - **caller_pubkey**: 方法调用人公钥
  - **amount**: 转账金额
  - **contract_id**: 合约 id
- **signatures**: 交易签名
- **trxid**: 交易 id
