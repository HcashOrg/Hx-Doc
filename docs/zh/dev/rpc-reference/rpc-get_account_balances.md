# get_account_balances

get_account_balances 根据账户名查询地址。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_account_balances", 
  "params": ["zb"], 
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
    "result": [
        {
            "amount": 0,
            "asset_id": "1.3.0"
        }
    ]
}
```

> 返回值

返回用户余额列表，多个资产分别显示。如果该地址从未有过转账，列表为空。

- **amount**: 数量
- **asset_id**: 资产类型 id (可通过 get_asset 查看)
