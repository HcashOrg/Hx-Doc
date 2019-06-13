# get_ntp_info

get_ntp_info 命令输出 hx_client 和 hx_node 程序中当前的 ntp 信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_ntp_info", 
  "params": [""], 
  "id": 1
}
```
> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": [
        [
            "cli_wallet",
            {
                "_last_valid_ntp_reply_received_time": "2019-06-13T00:55:45",
                "_last_ntp_delta_initialized": true,
                "_last_ntp_delta_microseconds": -1608972
            }
        ],
        [
            "witness_node",
            {
                "_last_valid_ntp_reply_received_time": "2019-06-13T00:21:21",
                "_last_ntp_delta_initialized": true,
                "_last_ntp_delta_microseconds": -1595806
            }
        ]
    ]
}
```

> 返回参数

- **_last_valid_ntp_reply_received_time**: 最近一次收到ntp响应的时间
- **_last_ntp_delta_initialized**: ntp 误差是否已校正
- **_last_ntp_delta_microseconds**: 误差微秒数
