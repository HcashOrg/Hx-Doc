# wallet_create_account

wallet_create_account 命令用于创建一个本地账户并返回其地址。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "wallet_create_account", 
  "params": ["usdh"], 
  "id": 1
}
```
> 输入参数

- 要创建的账户名，此账户名为本地使用，如要永久使用该名称可调用注册账户接口注册上链

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "HXNTdmBwvhgsLPtgSYRu2iiXrHZwr1dau33W"
}
```

> 返回参数

- **result**: 账户对应的 HX 地址
