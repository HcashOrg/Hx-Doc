# register_account

register_account 命令把本地账户注册为链上账户。注册账户需要 5HX 作为手续费。此手续费被打包的矿工获得。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "register_account", 
  "params": ["test", "true"], 
  "id": 1
}
```

> 输入参数

* 需要注册的账户名
* 是否广播到链上 (true / false)

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "ref_block_num": 64907,
        "ref_block_prefix": 3421029415,
        "expiration": "2019-06-18T00:47:40",
        "operations": [
            [
                5,
                {
                    "fee": {
                        "amount": 500000,
                        "asset_id": "1.3.0"
                    },
                    "registrar": "1.2.0",
                    "referrer": "1.2.0",
                    "referrer_percent": 0,
                    "name": "test",
                    "owner": {
                        "weight_threshold": 1,
                        "account_auths": [],
                        "key_auths": [
                            [
                                "HX7MYdFqggtfHp4qQGxAZ8fNFa6JoeRA8PUMmmpeQxQRTtEZ2N23",
                                1
                            ]
                        ],
                        "address_auths": []
                    },
                    "active": {
                        "weight_threshold": 1,
                        "account_auths": [],
                        "key_auths": [
                            [
                                "HX7MYdFqggtfHp4qQGxAZ8fNFa6JoeRA8PUMmmpeQxQRTtEZ2N23",
                                1
                            ]
                        ],
                        "address_auths": []
                    },
                    "payer": "HXTNiRFXW8qpvfNGU4ewhKQEngiVHNTngxYyb",
                    "options": {
                        "memo_key": "HX7MYdFqggtfHp4qQGxAZ8fNFa6JoeRA8PUMmmpeQxQRTtEZ2N23",
                        "voting_account": "1.2.5",
                        "num_witness": 0,
                        "num_committee": 0,
                        "votes": [],
                        "miner_pledge_pay_back": 10,
                        "extensions": []
                    },
                    "extensions": {}
                }
            ]
        ],
        "extensions": [],
        "signatures": [
            "2015d98b93455cec7aeffdb41508a1f85a6a8d53f934d92c77ab446699c776cca27ae3cb309bdf387c42e9bfb3b57e244a5b36f86f7437502e0f1d6d0d222f73b5"
        ],
        "block_num": 0,
        "trxid": "0b94f40bfb7c6fac5bb6a3ac23805d56791905f9"
    }
}
```

> 返回值

如果成功，返回注册交易。

- **expiration**: 交易过期时间
- **operations**: 交易操作
  - **5**: 表示注册账户操作类型
  - **fee**: 手续费
  - **name**: 注册账户名称
  - **payer**: 付款人地址
  - **max_supply**: 最大供应量
- **signatures**: 签名
- **trxid**: 交易 id
- **block_num**: 确认块高，当前为0
