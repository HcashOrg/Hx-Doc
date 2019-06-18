# get_citizen

get_citizen 命令通过账户名获取 Citizen 信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_citizen", 
  "params": ["leo"], 
  "id": 1
}
```

> 输入参数

* 需要查询的账户名

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "id": "1.6.5",
        "miner_account": "1.2.10",
        "last_aslot": 3694158,
        "signing_key": "HX5HNPCT3pxpK2CMGWExfP4RzRLKt8ztPkiovMMBpXge71pfqM7t",
        "last_change_signing_key_block_num": 0,
        "vote_id": "1:4",
        "total_votes": 0,
        "url": "",
        "total_missed": 1447,
        "lockbalance_total": [
            [
                "BCH",
                {
                    "amount": 49950000,
                    "asset_id": "1.3.8"
                }
            ],
            [
                "BTC",
                {
                    "amount": "10530038999",
                    "asset_id": "1.3.1"
                }
            ],
            [
                "ETH",
                {
                    "amount": "840941562999",
                    "asset_id": "1.3.4"
                }
            ],
            [
                "HC",
                {
                    "amount": "19723065271735",
                    "asset_id": "1.3.3"
                }
            ],
            [
                "HX",
                {
                    "amount": "128797361658",
                    "asset_id": "1.3.0"
                }
            ],
            [
                "LTC",
                {
                    "amount": "86144232999",
                    "asset_id": "1.3.2"
                }
            ]
        ],
        "total_produced": 39636,
        "last_confirmed_block_num": 3538589,
        "pledge_weight": "551763069349",
        "pledge_rate": 0,
        "participation_rate": 100,
        "next_secret_hash": "74ade99b9428eb2b6dd6bbfd31462a07d4e1e95b"
    }
}
```

> 返回值

- **id**: Citizen id
- **miner_account**: 账户 id
- **last_aslot**: 最近产出的块高
- **signing_key**: 签名公钥
- **total_missed**: 错过的块数
- **lockbalance_total**: 质押资产信息
- **total_produced**: 总产块数量
- **last_confirmed_block_num**: 最近产块高度
- **pledge_weight**: 投票权重
- **next_secret_hash**: 下个随机数种子

