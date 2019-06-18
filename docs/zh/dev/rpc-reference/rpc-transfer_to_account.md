# transfer_to_address

transfer_to_address 命令向指定的账户进行资产转账。转入账户可以是本地账户，也可以是链上注册账户。如果是本地账户但不在一个钱包内，则无法找到转账地址，转账会失败。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "transfer_to_account", 
  "params": ["nathan","test","23","HX","hello world",true], 
  "id": 1
}
```

> 输入参数

* 转出账户名
* 接收账户名
* 转账金额
* 资产符号(HX, HC, BTC, ETH, LTC, BCH, USDT, ERCPAX, ERCELF)
* 备注，可为空
* 是否广播交易 (true / false)

> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "ref_block_num": 52149,
        "ref_block_prefix": 3772745964,
        "expiration": "2019-06-17T07:13:45",
        "operations": [
            [
                0,
                {
                    "fee": {
                        "amount": 201,
                        "asset_id": "1.3.0"
                    },
                    "from": "1.2.0",
                    "to": "1.2.0",
                    "from_addr": "HXTNa5ZMhvFYXSYN4E2sAKqDVBKZgU9AGEBfZ",
                    "to_addr": "HXTNiRFXW8qpvfNGU4ewhKQEngiVHNTngxYyb",
                    "amount": {
                        "amount": 2300000,
                        "asset_id": "1.3.0"
                    },
                    "memo": {
                        "from": "HX1111111111111111111111111111111114T1Anm",
                        "to": "HX1111111111111111111111111111111114T1Anm",
                        "nonce": 0,
                        "message": "0000000068656c6c6f20776f726c64"
                    },
                    "extensions": []
                }
            ]
        ],
        "extensions": [],
        "signatures": [
            "2038dad36cc5cf74522255cc953c9d90253d8fcacbcd614e9028f79f62a73aadff72bd5b835eab4aa90370b0cd54694cfb25648b82c12282cb1b17f929d74b2cf7"
        ],
        "block_num": 0,
        "trxid": "8705b6dec10349488cb3ae629ce56fc381db2564"
    }
}
```

> 返回值

- **expiration**: 交易过期时间
- **operations**: 交易操作列表
  - **fee**: 手续费
  - **from_addr**: 转出地址
  - **to_addr**: 接收地址
  - **amount**: 金额
  - **memo**: 备注
- **trxid**: 交易id
- **block_num**: 确认块，此时为0， 如打包成功可在区块链浏览器查找
- **signatures**: 交易签名
