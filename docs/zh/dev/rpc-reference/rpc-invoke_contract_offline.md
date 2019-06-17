# invoke_contract_offline

invoke_contract_offline 命令调用智能合约的 offline 接口。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "invoke_contract_offline", 
  "params": ["nathan", "HXTCQtETHn1MUjN3hJNTmWKe9gwFrZWFH12mN", "hello", "world"], 
  "id": 1
}
```

> 输入参数

* 调用账户
* 合约地址
* 方法名
* 合约方法参数

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "hello world"
}
```

> 返回值

返回值由每个合约开发者自行定义。请参考具体合约接口文档。