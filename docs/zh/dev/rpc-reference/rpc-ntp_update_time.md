# ntp_update_time

ntp_update_time 命令立即更新 ntp 时间。更新结果可稍后通过 [get_ntp_info](/zh/dev/rpc-reference/rpc-get-ntp-info) 查看。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "ntp_update_time", 
  "params": [""], 
  "id": 1
}
```
> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": null
}
```

> 返回参数

- **result**: 返回 null
