# info

info 命令输出HX链运行时的一些重要信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "info", 
  "params": [""], 
  "id": 1
}
```
> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "head_block_num": 3470221,
        "head_block_id": "0034f38dd587c9aefc18e3ab7f979c4a57085199",
        "head_block_age": "3 seconds old",
        "version": "1.2.20",
        "next_maintenance_time": "23 hours in the future",
        "chain_id": "2e13ba07b457f2e284dcfcbd3d4a3e4d78a6ed89a61006cdb7fdad6d67ef0b12",
        "participation": "92.96875000000000000",
        "round_participation": "88.00000000000000000",
        "scheduled_citizens": [
            "1.6.247",
            "1.6.270",
            "1.6.12",
            "1.6.1",
            "1.6.9",
            "1.6.246",
            "1.6.40",
            "1.6.16",
            "1.6.14",
            "1.6.15",
            "1.6.2",
            "1.6.113",
            "1.6.6",
            "1.6.80",
            "1.6.109",
            "1.6.271",
            "1.6.17",
            "1.6.7",
            "1.6.13",
            "1.6.24",
            "1.6.8",
            "1.6.10",
            "1.6.22",
            "1.6.21",
            "1.6.4"
        ]
    }
}
```

> 返回参数

- **head_block_num**: 最新块高
- **head_block_id**: 最新块的hash
- **head_block_age**: 最新块产生距今时间
- **version**: hx_client 版本号
- **next_maintenance_time**: ~~目前未用到~~
- **chain_id**: 链id，用于区分不同的链（比如主链和测试链）
- **participation**: 累计的参与率，越高表示网络越稳定
- **round_participation**: 当前轮的参与率，跟本轮的进度有关，越高表示本轮参与的矿工越稳定，低也可能是本轮的进度比较低，需结合本轮参与矿工数一起判断
- **scheduled_citizens**: 当前轮矿工列表