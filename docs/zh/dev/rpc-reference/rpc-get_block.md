# get_block

get_block 命令通过块高度获得块信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_block", 
  "params": ["3537624"], 
  "id": 1
}
```

> 输入参数

* 需要查询的块高度

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "previous": "0035fad71b754a8ad3c00f2fb0756ab4ae111f2e",
        "timestamp": "2019-06-17T03:00:40",
        "trxfee": 361,
        "miner": "1.6.19",
        "transaction_merkle_root": "5a2906f23978581785a12fc86ca33d645460a473",
        "extensions": [],
        "next_secret_hash": "e276fa1c501f9be02b55e7953c6c102c938c14d7",
        "previous_secret": "768a8ed245b5cec132b1b9c2236a7e8c7562d944",
        "miner_signature": "1f77502c7de4b9eff92a9531c3c294acfb2b52bee0a3caac98a338dbbf05c2588330b25bd2117df832c3e31f2fde8a8cde2ea322be97e386f833840e1c1faa318c",
        "transactions": [
            {
                "ref_block_num": 64211,
                "ref_block_prefix": 2123691888,
                "expiration": "2019-06-17T03:00:46",
                "operations": [
                    [
                        79,
                        {
                            "fee": {
                                "amount": 20100,
                                "asset_id": "1.3.0"
                            },
                            "invoke_cost": 2000000,
                            "gas_price": 1,
                            "caller_addr": "HXNj9ABgVB3oBFqZwt4tjXjPP7PbAkdTUph2",
                            "caller_pubkey": "02ad4f756a94fdc25aea170315a07b0c9e1f5e7472d8dc1cbb92712a03f86a92e2",
                            "contract_id": "HXCWxpm7Fb4etMph2aShVnaPg9KTzWnwE3Gi",
                            "contract_api": "open",
                            "contract_arg": ""
                        }
                    ]
                ],
                "extensions": [],
                "signatures": [
                    "20630c3c1bf2e2670b829927087828835aeebe882406af137fe8aef253eebb302864e5e3f0e88db944c5dbc19246dc2d01007553a1715bf912b7de071155d3d83c"
                ],
                "operation_results": [
                    [
                        4,
                        {
                            "digest_str": "a0706036db297fc32c25f3fff48998f5695fd10b581b9deb7d9c90084a6585c9",
                            "api_result": "[\"{\\\"isOpen\\\":true,\\\"betOdds\\\":1.407000,\\\"betTime\\\":1560740430,\\\"betIndex\\\":2651,\\\"betPrice\\\":300000,\\\"betPlayer\\\":\\\"HXNVrkJNMMkCe2vNZNuUnnGcobkUT2WXvSjB\\\",\\\"betRandom\\\":68,\\\"betReward\\\":4.221000,\\\"betTarget\\\":71,\\\"currBlock\\\":3537622,\\\"betWinRatio\\\":70,\\\"bankerReward\\\":0.064279}\",\"{\\\"isOpen\\\":true,\\\"betOdds\\\":1.492000,\\\"betTime\\\":1560740430,\\\"betIndex\\\":2652,\\\"betPrice\\\":100000,\\\"betPlayer\\\":\\\"HXNcwG8v7noziZAmwexF3NjefCj44uaLUGjA\\\",\\\"betRandom\\\":68,\\\"betReward\\\":0.000000,\\\"betTarget\\\":67,\\\"currBlock\\\":3537622,\\\"betWinRatio\\\":66,\\\"bankerReward\\\":0.000000}\"]",
                            "gas_count": 26001
                        }
                    ]
                ]
            }
        ],
        "number": 3537624,
        "block_id": "0035fad8df67a41ab982d5b269f163013ccb5717",
        "signing_key": "HX8JcFaDA3kdqntafe2juNTt2FKbYWfrnktmzYTMXfJdzcQfmJ6a",
        "reward": 683861,
        "transaction_ids": [
            "f2a1720a4b1c17abbfa854768529887ed8fcb76a"
        ]
    }
}
```

> 返回值

返回投票给不同 Citizen 的信息集合，以数组方式呈现。每个数组元素是一个对象，其内容含义如下：

- **previous**: 前一块 hash
- **timestamp**: 当前块时间戳
- **miner**: 产块矿工 id
- **transaction_merkle_root**: 交易 merkle 根的 hash
- **previous_secret**: 前一块随机数种子
- **miner_signature**: 矿工签名
- **transactions.expiration**: 交易过期时间
- **transactions.operations**: 交易操作，第一个字段是操作码，第二个是操作对象
- **number**: 当前块高
- **block_id**: 当前块 hash
- **signing_key**: 块奖励
- **transaction_ids**: 块包含的交易 id 列表
