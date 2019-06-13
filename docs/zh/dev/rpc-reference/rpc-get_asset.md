# get_asset

get_asset 命令获取 HX 链上资产相关信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_asset", 
  "params": ["HX"], 
  "id": 1
}
```

> 输入参数

* 需要查询的资产符号

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "id": "1.3.0",
        "symbol": "HX",
        "precision": 5,
        "issuer": "1.2.3",
        "options": {
            "max_supply": "10000000000000000",
            "market_fee_percent": 0,
            "max_market_fee": "10000000000000000",
            "issuer_permissions": 0,
            "flags": 0,
            "core_exchange_rate": {
                "base": {
                    "amount": 1,
                    "asset_id": "1.3.0"
                },
                "quote": {
                    "amount": 1,
                    "asset_id": "1.3.0"
                }
            },
            "whitelist_authorities": [],
            "blacklist_authorities": [],
            "whitelist_markets": [],
            "blacklist_markets": [],
            "description": "",
            "extensions": []
        },
        "dynamic_asset_data_id": "2.3.0",
        "feeds": [],
        "publishers": [],
        "current_feed": {
            "settlement_price": {
                "base": {
                    "amount": 0,
                    "asset_id": "1.3.0"
                },
                "quote": {
                    "amount": 0,
                    "asset_id": "1.3.0"
                }
            },
            "maintenance_collateral_ratio": 1750,
            "maximum_short_squeeze_ratio": 1500,
            "core_exchange_rate": {
                "base": {
                    "amount": 0,
                    "asset_id": "1.3.0"
                },
                "quote": {
                    "amount": 0,
                    "asset_id": "1.3.0"
                }
            }
        },
        "current_feed_publication_time": "1970-01-01T00:00:00",
        "allow_withdraw_deposit": true
    }
}
```

> 返回参数

- **id**: 资产对应的 id
- **symbol**: 资产符号
- **precision**: 资产精度
- **issuer**: 发行人账户 id
- **options.max_supply**: 总供应量
- **options.market_fee_percent**: ~~暂未使用~~
- **options.max_market_fee**: ~~暂未使用~~
- **options.issuer_permissions**: ~~暂未使用~~
- **options.flags**: ~~暂未使用~~
- **options.core_exchange_rate**: ~~暂未使用~~
- **options.whitelist_authorities**: ~~暂未使用~~
- **options.blacklist_authorities**: ~~暂未使用~~
- **options.whitelist_markets**: ~~暂未使用~~
- **options.blacklist_markets**: ~~暂未使用~~
- **options.description**: ~~暂未使用~~
- **options.extensions**: ~~暂未使用~~
- **dynamic_asset_data_id**: ~~暂未使用~~
- **feeds**: 喂价交易信息
- **current_feed**: 当前喂价信息
- **current_feed_publication_time**: 当前喂价时间
- **allow_withdraw_deposit**: ~~暂未使用~~
