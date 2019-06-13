# get_account_addr

get_account_addr 根据账户名查询地址。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_account_addr", 
  "params": ["x"], 
  "id": 1
}
```

> 输入参数

* 账户名称

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "HXNgwap5htsS2p4Ja7i3cirenGQf8vM4MgcR"
}
```

> 返回值

- **result**: 账户名对应地址
