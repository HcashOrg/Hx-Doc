# get_account_id

get_account_id 命令通过账户名获取账户 id。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_account_id", 
  "params": ["nathan"], 
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
    "result": "1.2.38"
}
```

> 返回值

- **result**: 账户名对应的 id

