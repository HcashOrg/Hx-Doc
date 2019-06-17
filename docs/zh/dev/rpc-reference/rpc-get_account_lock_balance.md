# get_account_lock_balance

get_account_lock_balance 命令通过账户名获取投票信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_account_lock_balance", 
  "params": ["abc"], 
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
    "result": [
        {
            "id": "1.17.203932",
            "lockto_miner_account": "1.6.94",
            "lock_balance_account": "1.2.2088",
            "lock_balance_contract_addr": "InvalidAddress",
            "lock_asset_id": "1.3.0",
            "lock_asset_amount": "5000000000"
        },
        {
            "id": "1.17.203933",
            "lockto_miner_account": "1.6.45",
            "lock_balance_account": "1.2.2088",
            "lock_balance_contract_addr": "InvalidAddress",
            "lock_asset_id": "1.3.0",
            "lock_asset_amount": "9964800000"
        },
        {
            "id": "1.17.203934",
            "lockto_miner_account": "1.6.81",
            "lock_balance_account": "1.2.2088",
            "lock_balance_contract_addr": "InvalidAddress",
            "lock_asset_id": "1.3.3",
            "lock_asset_amount": "579998989000"
        }
    ]
}
```

> 返回值

返回投票给不同 Citizen 的信息集合，以数组方式呈现。每个数组元素是一个对象，其内容含义如下：

- **id**: 投票信息 id
- **lockto_miner_account**: 接收投票的 Citizen 的账户 id
- **lock_balance_account**: 投票账户 id
- **lock_balance_contract_addr**: 投票合约地址
- **lock_asset_id**: 投票资产 id
- **lock_asset_amount**: 投票数量

