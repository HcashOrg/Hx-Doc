# get_account

get_account 命令通过账户名获取账户信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "get_account", 
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
    "result": {
        "id": "1.2.38",
        "membership_expiration_date": "1970-01-01T00:00:00",
        "registrar": "1.2.4",
        "referrer": "1.2.0",
        "lifetime_referrer": "1.2.0",
        "network_fee_percentage": 2000,
        "lifetime_referrer_fee_percentage": 3000,
        "referrer_rewards_percentage": 0,
        "name": "nathan",
        "addr": "HXTNa5ZMhvFYXSYN4E2sAKqDVBKZgU9AGEBfZ",
        "owner": {
            "weight_threshold": 1,
            "account_auths": [],
            "key_auths": [
                [
                    "HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                    1
                ]
            ],
            "address_auths": []
        },
        "active": {
            "weight_threshold": 1,
            "account_auths": [],
            "key_auths": [
                [
                    "HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                    1
                ]
            ],
            "address_auths": []
        },
        "options": {
            "memo_key": "HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
            "voting_account": "1.2.5",
            "num_witness": 0,
            "num_committee": 0,
            "votes": [],
            "miner_pledge_pay_back": 10,
            "extensions": []
        },
        "statistics": "2.9.38",
        "whitelisting_accounts": [],
        "blacklisting_accounts": [],
        "whitelisted_accounts": [],
        "blacklisted_accounts": [],
        "owner_special_authority": [
            0,
            {}
        ],
        "active_special_authority": [
            0,
            {}
        ],
        "top_n_control_flags": 0,
        "online": "true"
    }
}
```

> 返回值

- **id**: 账户 id
- **addr**: 账户地址
- **name**: 账户名

