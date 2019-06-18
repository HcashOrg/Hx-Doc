# transfer_to_address

transfer_to_address 命令向指定的地址进行资产转账。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "transfer_to_address", 
  "params": ["nathan","HXTNiRFXW8qpvfNGU4ewhKQEngiVHNTngxYyb","23","HX","hello world",true], 
  "id": 1
}
```

> 输入参数

* 转出账户名
* 接收地址
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
        "ref_block_num": 52072,
        "ref_block_prefix": 1645038450,
        "expiration": "2019-06-17T07:07:20",
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
            "2047cf318e4715b7a2f251eb53db4a1d9d608eca0d25207ea07600e3317f42a29b6c062247e86aef5917873132cacf3c5c2b3a66a06304df8a02d78617b27f4309"
        ],
        "block_num": 0,
        "trxid": "78fdd4ed7c828d0f71d536c163b30e19dfd3d411"
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
