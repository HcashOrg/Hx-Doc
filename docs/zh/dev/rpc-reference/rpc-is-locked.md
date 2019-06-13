# is_locked

is_locked 命令判断 hx_client 是否处于锁定状态。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "is_locked", 
  "params": [""], 
  "id": 1
}
```
> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": false
}
```

> 返回参数

- **result**: true 表示已锁定， false 表示未锁定
