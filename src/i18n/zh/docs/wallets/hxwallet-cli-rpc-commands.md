本指导假设你已经成功启动了hx-node，如果没有请参考： [HyperExchange node配置和启动](/wallets/hxnode-setup.md) ，成功启动了hx-cli，如果没有请参考：[hx-cli启动](/wallets/hxwallet-cli.md).

如果是中间件是自己部署的，请检查是否已经成功启动，请参考[HyperExchange中间件启动](/wallets/middleware-startup.md).

下面将介绍如果使用命令实现下列功能：/充值/提现/货币兑换.(用BTC 兑换 LTC)

---

## 准备工作

1.创建两个hx账户，一个和BTC绑定，一个和LTC绑定，操作之前请确保钱包是unlock状态。
    
    unlocked >>> wallet_create_account hxtest001
    wallet_create_account hxtest001
    1168399ms th_a   wallet.cpp:1082   save_wallet_file ] saving wallet to file wallet.json
    "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu"
    
    unlocked >>> wallet_create_account hxtest002
    wallet_create_account hxtest002
    1680829ms th_a   wallet.cpp:1082   save_wallet_file ] saving wallet to file wallet.json
    "HX8Vx4U1HfPBhHQF8J2z55qyiMCaJBce5gQ"
    
2.分别创建一个BTC地址和一个LTC地址。

    unlocked >>> create_crosschain_symbol BTC
    create_crosschain_symbol BTC
    { "jsonrpc": "2.0", "id" : "45","method" : "Zchain.Addr.importAddr" ,"params" : {"chainId":"btc" ,"addr": "19QmVye31e2QfYXZShBD2VXissoM6QeppM"}}
    1304280ms th_a   wallet.cpp:1082   save_wallet_file ] saving wallet to file wallet.json
    {
      "addr": "19QmVye31e2QfYXZShBD2VXissoM6QeppM",
      "pubkey": "0244d2c2cea8d2324096a0fd2df9d4cc38e4db9e61a896b23fa0ba21d69c274a28",
      "wif_key": "L3tL4hhs1mCFjj6zJqJqF6qPpxZvmSm7cHzakMfTmq8MWBDEfBPJ"
    }
    unlocked >>> create_crosschain_symbol LTC
    create_crosschain_symbol LTC
    { "jsonrpc": "2.0", "id" : "45","method" : "Zchain.Addr.importAddr" ,"params" : {"chainId":"ltc" ,"addr": "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8"}}
    1688432ms th_a   wallet.cpp:1082   save_wallet_file ] saving wallet to file wallet.json
    {
      "addr": "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8",
      "pubkey": "0201115d04f29783acab2ce61fefd5e71678f3b99a1bb029e59600da1b67806b29",
      "wif_key": "T4GPU51McSfjJFtD8NKWnJj1qDWtef2452SjvMvsnqexcs7odn6E"
    }

“addr”表示地址，“wif_key”表示私钥。

3.将创建的BTC地址和账户 `hxtest001`绑定,LTC地址和 `hxtest002绑定。

    unlocked >>> bind_tunnel_account hxtest001 19QmVye31e2QfYXZShBD2VXissoM6QeppM BTC true
    bind_tunnel_account hxtest001 19QmVye31e2QfYXZShBD2VXissoM6QeppM BTC true
    {
      "ref_block_num": 633,
      "ref_block_prefix": 3017921153,
      "expiration": "2018-09-05T06:44:05",
      "operations": [[
      10,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "crosschain_type": "BTC",
    "addr": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "account_signature": "2002cc5bcd46ef8359e7fd4383fad68b5e583aa57c3a3e0e79d045af54f161aa334f370531646cb48d783005bec6306c63ef7f1fd4b1e3f9f4d16ec8c7964682b9",
    "tunnel_address": "19QmVye31e2QfYXZShBD2VXissoM6QeppM",
    "tunnel_signature": "HyLo47ghpBGKoWzmhzz5urzJ3WlFSoq2beHtrFwBDOpIeDfqWs+7sP8aNRhwztMboi2CjubDsz8dWoPJ0ABwtzc="
      }
    ]
      ],
      "extensions": [],
      "signatures": [
    "1f4eb80b086c2598621bfa2463913ed061d05825302c320db600fad3aec2f5f5c70e76e3056f2cc29a44efeaa81a7f8c42fee277a391e68926f5cdc39e83be90d7"
      ],
      "block_num": 0,
      "trxid": "0cfffec187b994fc6a4f2ff6b5cdadff17fd2c7c"
    }
    
    unlocked >>> bind_tunnel_account hxtest002 LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8 LTC true
    bind_tunnel_account hxtest002 LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8 LTC true
    {
      "ref_block_num": 644,
      "ref_block_prefix": 1864335149,
      "expiration": "2018-09-05T06:45:00",
      "operations": [[
      10,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "crosschain_type": "LTC",
    "addr": "HX8Vx4U1HfPBhHQF8J2z55qyiMCaJBce5gQ",
    "account_signature": "1f415f619420ec932059322b6a306f9a250309386e9ac8f7d5f1bc511d6ec440e93cf8408e3bb1ea2097d2a11e097a8e76c48354b86379b963191426819f6e6639",
    "tunnel_address": "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8",
    "tunnel_signature": "HydULKgPGMRuRyTLDGjqZCGFkNeSUXU99cRKRK+CxxakGmnA773SkWz8kF6jPwxqKpG0IxpBi5OuO5C4jsXTQrE="
      }
    ]
      ],
      "extensions": [],
      "signatures": [
    "1f060d204b74d7ea171af75cdb4635ac4b510dc4d3416e71ebfc87017961aa09d24e0388a80b8016c2ed7c4f77d391131b81245909d991c29818fcfd8b82fe6f62"
      ],
      "block_num": 0,
      "trxid": "47a0ab550387694d3d5c9068723b44f7954b9281"
    }

4.查询绑定结果。

    get_binding_account hxtest001 BTC
    [{
    "id": "2.6.0",
    "owner": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "chain_type": "BTC",
    "bind_account": "19QmVye31e2QfYXZShBD2VXissoM6QeppM"
      }
    ]
    unlocked >>> get_binding_account hxtest002 LTC
    get_binding_account hxtest002 LTC
    [{
    "id": "2.6.1",
    "owner": "HX8Vx4U1HfPBhHQF8J2z55qyiMCaJBce5gQ",
    "chain_type": "LTC",
    "bind_account": "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8"
      }
    ]

## Senator创建冷热多签钱包地址(用LTC举例)

1.在hx链上创建LTC资产(如果你想通过senator创建新的资产，需要导入senator的私钥).

    unlocked >>> import_key guard0 5JZe9Hv7twngWSEZzvvvDXP5RG1LJGixSz6WJ4D8te9x45kvDuG
    import_key guard0 5JZe9Hv7twngWSEZzvvvDXP5RG1LJGixSz6WJ4D8te9x45kvDuG
    297029ms th_a   wallet.cpp:532copy_wallet_file ] backing up wallet wallet.json to before-import-key-2856e806.wallet
    297035ms th_a   wallet.cpp:1082   save_wallet_file ] saving wallet to file wallet.json
    297040ms th_a   wallet.cpp:532copy_wallet_file ] backing up wallet wallet.json to after-import-key-2856e806.wallet
    true

    unlocked >>> wallet_create_asset  guard0 LTC 8 210000000 100000  true
    wallet_create_asset  guard0 LTC 8 210000000 100000  true
    {
      "ref_block_num": 1698,
      "ref_block_prefix": 965591732,
      "expiration": "2018-09-05T08:16:50",
      "operations": [[
      75,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "issuer": "1.2.31",
    "symbol": "LTC",
    "issuer_addr": "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb",
    "precision": 8,
    "max_supply": 210000000,
    "core_fee_paid": 100000,
    "extensions": []
      }
    ]
      ],
      "extensions": [],
      "signatures": ["1f440c5e0c94bccb8f270efb8e814ea24f66b1b4f5a5a7fd63b1452571af7ffb5e054bedf8b307b428b3dc32e1e624fbf235575798d29b652949840c70b99456d9"],
      "block_num": 0,
      "trxid": "c035858485c926ea915f4945a6c2ff834a7d0e58"
    }
    

2.更新hx链上所有的senators,更新之后，系统会创建一个新的LTC冷热多签钱包地址。

    unlocked >>> update_asset_private_keys  guard0 LTC true
    unlocked >>> update_asset_private_keys  guard1 LTC true
    unlocked >>> update_asset_private_keys  guard2 LTC true
    unlocked >>> update_asset_private_keys  guard3 LTC true
    unlocked >>> update_asset_private_keys  guard4 LTC true
    unlocked >>> update_asset_private_keys  guard5 LTC true
    unlocked >>> update_asset_private_keys  guard6 LTC true

3.查询LTC的冷热多签钱包地址
    
    unlocked >>> get_multisig_account_pair LTC
    get_multisig_account_pair LTC
    [{
    "id": "2.7.2",
    "chain_type": "LTC",
    "bind_account_hot": "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD",
    "redeemScript_hot": "5521023db7379f0761ccbb4628c74eff5b67937bf2f3a3140d11aac56ca8780d33354d2102f0449390eb888b752fecd1f8dd381d95761c31a9a34511d3f992e9a078e170902103dc79cb12340d4d4f5a40a9ca05e058d1f6ff2691ea61aa1b05eb1330de0b39622102ac93a669ba8d75a8cb29e93e89bba6686886e93dac792222f0ee0dae1f4bd64321033a8a01b9c86746c1e24a4212979439a3a882be78fe572880a3f60aa70bc236fb2103c9e8d18f2a7e55088fae8a9e8d733e1bf167cdb4f2bfddbd285a7956cab8df77210312956e995aa696c3da4e34bdbae5a8f02efcff4ec1d51154eafc7ef64e55270757ae",
    "bind_account_cold": "MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z",
    "redeemScript_cold": "5521036cba57ae77502b6e286b9c04f4074683fc5014d9d84773f0db2fb13d7a6b10f7210345156da8779b5a5c012418968e6f45abda30cbffac2c13d9a82f846ffc5bde67210243fe236e6578945ffbe123602d963ec4bcec6b997775463dfe3c17b90f3b69ab210204e31aa757d19b49171eaf4392bfae8a2e167ab9b0d26211e6bf34f9f345da152102ed336e6612a615aeb97a4ecbdd8de8055f5a0516bfcda8483136d3053c213d9c210367aec8c7ce911ba88f94ff6b16943c3688e3d87c384da6926ea28ea7249db44121035ef1d0343c809639e64799e897169f95b7393645402ebc81e63c955c9e9ff6a757ae",
    "effective_block_num": 0,
    "end_block": 4294967295
      }
    ]

4.发起一个使LTC冷热多签钱包地址生效的提案

    unlocked >>> account_change_for_crosschain guard0 LTC MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z 10000 true

    account_change_for_crosschain guard0 LTC MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z 10000 true
    {
      "ref_block_num": 1788,
      "ref_block_prefix": 3124051331,
      "expiration": "2018-09-05T08:24:35",
      "operations": [[
      28,{
    "type": 0,
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "proposer": "1.2.31",
    "fee_paying_account": "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb",
    "expiration_time": "2018-09-05T11:01:16",
    "proposed_ops": [{
    "op": [
      74,{
    "chain_type": "LTC",
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "cold": "MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z",
    "hot": "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD"
      }
    ]
      }
    ],
    "extensions": []
      }
    ]
      ],
      "extensions": [],
      "signatures": ["20157bc57e7816373e294fa901ac5e0171925a5a0904984775af6b3d20cc56cccb3da02dcc289998115e4ee91af01acf0d704bf28d534eab9b04f4cd52ccc5fd72"],
      "block_num": 0,
      "trxid": "b503fa3d5a2513eba3c4e55c59345ec5376e53ec"
    }

5.获取提案ID

    unlocked >>> get_proposal_for_voter guard0
    get_proposal_for_voter guard0
    [{
    "id": "1.10.1",
    "proposer": "1.2.31",
    "expiration_time": "2018-09-05T11:01:16",
    "proposed_transaction": {
      "ref_block_num": 0,
      "ref_block_prefix": 0,
      "expiration": "2018-09-05T11:01:16",
      "operations": [[
      74,{
    "chain_type": "LTC",
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "cold": "MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z",
    "hot": "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD"
      }
    ]
      ],
      "extensions": []
    },
    "required_active_approvals": [],
    "available_active_approvals": [],
    "required_owner_approvals": [],
    "available_owner_approvals": [],
    "available_key_approvals": [],
    "approved_key_approvals": [],
    "disapproved_key_approvals": [],
    "required_account_approvals": [
      "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb",
      "HX3HmP3gqcDqYvHvVq2Hn44nuUDfSSBMU55",
      "HXC3X3WoKyqNQZDyPN3Pq55gX5sLhVJxZNh",
      "HXGu1qvt9pG55W3CfAETgwDFi2NwvWQGV4y",
      "HXHd49CtDZZW7ySYZNQYaUurZNWW76HBnhU",
      "HXMGFZwHXyiFj1MUwCVMoyzqBJ4CuTC7xpX",
      "HXMkBpQ9nj1hHXwEGQvyZdFiRgRK78ixKPA"
    ],
    "type": "committee"
      }
    ]
    
6.对提案进行投票，超过三分之二的senators同意之后，该地址将生效

    unlocked >>> approve_proposal guard0 1.10.1 {"key_approvals_to_add": ["HXC3X3WoKyqNQZDyPN3Pq55gX5sLhVJxZNh", "HXHd49CtDZZW7ySYZNQYaUurZNWW76HBnhU", "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb", "HXMkBpQ9nj1hHXwEGQvyZdFiRgRK78ixKPA", "HX3HmP3gqcDqYvHvVq2Hn44nuUDfSSBMU55"]}  true

    approve_proposal guard0 1.10.1 {"key_approvals_to_add": ["HXC3X3WoKyqNQZDyPN3Pq55gX5sLhVJxZNh", "HXHd49CtDZZW7ySYZNQYaUurZNWW76HBnhU", "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb", "HXMkBpQ9nj1hHXwEGQvyZdFiRgRK78ixKPA", "HX3HmP3gqcDqYvHvVq2Hn44nuUDfSSBMU55"]}  true
    {
      "ref_block_num": 1833,
      "ref_block_prefix": 1461401128,
      "expiration": "2018-09-05T08:28:50",
      "operations": [[
      29,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "fee_paying_account": "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb",
    "proposal": "1.10.1",
    "active_approvals_to_add": [],
    "active_approvals_to_remove": [],
    "owner_approvals_to_add": [],
    "owner_approvals_to_remove": [],
    "key_approvals_to_add": [
      "HXdXPBLRsiUCY1VxcDd4gGrkDcgCV3Jegb",
      "HX3HmP3gqcDqYvHvVq2Hn44nuUDfSSBMU55",
      "HXC3X3WoKyqNQZDyPN3Pq55gX5sLhVJxZNh",
      "HXHd49CtDZZW7ySYZNQYaUurZNWW76HBnhU",
      "HXMkBpQ9nj1hHXwEGQvyZdFiRgRK78ixKPA"
    ],
    "key_approvals_to_remove": [],
    "extensions": []
      }
    ]
      ],
      "extensions": [],
      "signatures": ["204e95fa9b4f43955e43e3c577d4f262ffc1897e7de31268b5440bbdd4231a20ca46754f39c3e854d811f3684f1a750354edc7bd2c08c046319067f3c6136e4f1f", "1f3e55e7e23ef965fcc91c0637bb2550914d4d9d5a1708e71da6989769c767de0f2cd655083bb371e075ca2d8ffabaf0535d2bbc1b73842446d02988b1a9aa0254","2073a6c02b2bb3bc0d317cca87b192362b643b948df5a738a3a2c666f3958f67617ede3cfc01fcf3fc831cf057dc31e02886d7b431d6c623dbb1caa67265646e27","207d03876702431521094afc59e8635441ef05e0f7f670190608af71db343740d511ec7bc8d76bcfb14be2708b07b2c599f3e582ecb4c0776f9ead9f89714f15d0","20015ef8677508aefdf0a8591779c2befb58d226860d6f1ac4b536da809d4380e74499ee44528db9a536814d3b5d35d1e3e7c1028b9b98172cc85da5cc53a37afd"],
      "block_num": 0,
      "trxid": "ab889c45010eea6768ccff2d0d678c6ddcd71418"
    }

7.查询冷热多签钱包地址，如果"effective_block_num"不是0，说明已经生效了

    unlocked >>> get_multisig_account_pair LTC
    get_multisig_account_pair LTC
    [{
    "id": "2.7.2",
    "chain_type": "LTC",
    "bind_account_hot": "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD",
    "redeemScript_hot": "5521023db7379f0761ccbb4628c74eff5b67937bf2f3a3140d11aac56ca8780d33354d2102f0449390eb888b752fecd1f8dd381d95761c31a9a34511d3f992e9a078e170902103dc79cb12340d4d4f5a40a9ca05e058d1f6ff2691ea61aa1b05eb1330de0b39622102ac93a669ba8d75a8cb29e93e89bba6686886e93dac792222f0ee0dae1f4bd64321033a8a01b9c86746c1e24a4212979439a3a882be78fe572880a3f60aa70bc236fb2103c9e8d18f2a7e55088fae8a9e8d733e1bf167cdb4f2bfddbd285a7956cab8df77210312956e995aa696c3da4e34bdbae5a8f02efcff4ec1d51154eafc7ef64e55270757ae",
    "bind_account_cold": "MUC25gBfgyrUrUX241dT3BfU32AQGaZ19z",
    "redeemScript_cold": "5521036cba57ae77502b6e286b9c04f4074683fc5014d9d84773f0db2fb13d7a6b10f7210345156da8779b5a5c012418968e6f45abda30cbffac2c13d9a82f846ffc5bde67210243fe236e6578945ffbe123602d963ec4bcec6b997775463dfe3c17b90f3b69ab210204e31aa757d19b49171eaf4392bfae8a2e167ab9b0d26211e6bf34f9f345da152102ed336e6612a615aeb97a4ecbdd8de8055f5a0516bfcda8483136d3053c213d9c210367aec8c7ce911ba88f94ff6b16943c3688e3d87c384da6926ea28ea7249db44121035ef1d0343c809639e64799e897169f95b7393645402ebc81e63c955c9e9ff6a757ae",
    "effective_block_num": 1843,
    "end_block": 4294967295
      }
    ]


## 充值

确保BTC/LTC的地址在各自的主链上的余额不是0.有两种方法充值BTC/LTC到 hx 链上.

1.将hx链上BTC/LTC的地址的私钥导入到BTC/LTC的主链钱包里。然后通过transfer转入到hx链上。

> 充值BTC到账户`hxtest001`

在btc主链的钱包里transfer BTC到`hot address` : `"35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd"`.等待大约40分钟，账户 hxtest001 将会受到BTC.用以下命令查询账户hxtest001的余额，说明已经到账。
    
    unlocked >>> get_account_balances hxtest001
    get_account_balances hxtest001
    [{
    "amount": 1000000000,
    "asset_id": "1.3.1"
      }
    ]

> 充值LTC到账户`hxtest002`

在ltc主链钱包里transfer LTC 到 `hot address` : `MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD`，等待大于10分钟，账户hxtest002汇受到LTC，使用以下命令查询账户hxtest002的余额，说明已经到账。
    
    unlocked >>> get_account_balances hxtest002
    get_account_balances hxtest002
    [{
    "amount": "84899552000",
    "asset_id": "1.3.2"
      }
    ]
   
2.在hx-cli中使用命令充值

> 充值BTC到账户`hxtest001`

(1)createrawtransaction:发送地址/接收地址/充值金额/充值资产符号
    
    unlocked >>> createrawtransaction 19QmVye31e2QfYXZShBD2VXissoM6QeppM  35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd 10 BTC
    createrawtransaction 19QmVye31e2QfYXZShBD2VXissoM6QeppM  35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd 10 BTC
    { "jsonrpc": "2.0", "id" : "45","method" : "Zchain.Trans.createTrx" , "params" : {"chainId":"btc" ,"from_addr": "19QmVye31e2QfYXZShBD2VXissoM6QeppM","dest_info":{"35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd":1}}}
    {
      "hex": "02000000010b2b180e1aa5bfc150fea349e1090ccc1721b01e2887c4c25ff9ca96afe6d1ef0000000000ffffffff02c038c023000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000",
      "scriptPubKey": [
    "76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"
      ],
      "trx": {
    "hash": "8332e34ef216c792bcc03750defbd8f2298a939c8d5eaf35448dbfdc8b21d252",
    "locktime": 0,
    "size": 117,
    "txid": "8332e34ef216c792bcc03750defbd8f2298a939c8d5eaf35448dbfdc8b21d252",
    "version": 2,
    "vin": [{
        "scriptSig": {
          "asm": "",
          "hex": ""
        },
        "sequence": 4294967295,
        "txid": "efd1e6af96caf95fc2c487281eb02117cc0c09e149a3fe50c1bfa51a0e182b0b",
        "vout": 0
      }
    ],
    "vout": [{
        "n": 0,
        "scriptPubKey": {
          "addresses": [
            "19QmVye31e2QfYXZShBD2VXissoM6QeppM"
          ],
          "asm": "OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac",
          "reqSigs": 1,
          "type": "pubkeyhash"
        },
        "value": "5.99800000000000022"
      },{
        "n": 1,
        "scriptPubKey": {
          "addresses": [
            "35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd"
          ],
          "asm": "OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL",
          "hex": "a91431d9622f9e40a979433b7026a760dce5bdacef8e87",
          "reqSigs": 1,
          "type": "scripthash"
        },
        "value": "10.00000000"
      }
    ],
    "vsize": 117
      }
    }

(2)signrawtransaction:发送地址/充值资产的符合/执行createrawtransaction命令返回的结果/是否广播

    unlocked >>> signrawtransaction 19QmVye31e2QfYXZShBD2VXissoM6QeppM BTC {"hex":"020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b5940000000000ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000","scriptPubKey":["76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"],"trx":{"hash":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","locktime":0,"size":117,"txid":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","version":2,"vin":[{"scriptSig":{"asm":"","hex":""},"sequence":4294967295,"txid":"94b5043cc971d88e5da2a578b32b0befbe67653cbfa3fbea7cdedb15a52b5463","vout":0}],"vout":[{"n":0,"scriptPubKey":{"addresses":["19QmVye31e2QfYXZShBD2VXissoM6QeppM"],"asm":"OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac","reqSigs":1,"type":"pubkeyhash"},"value":"6.99899999999999967"},{"n":1,"scriptPubKey":{"addresses":["QR9Zdmi94TkX4tvuQBCgZxXHTpCFTU358v"],"asm":"OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL","hex":"a91431d9622f9e40a979433b7026a760dce5bdacef8e87","reqSigs":1,"type":"scripthash"},"value":"10.00000000"}],"vsize":117}} true
    signrawtransaction 19QmVye31e2QfYXZShBD2VXissoM6QeppM BTC {"hex":"020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b5940000000000ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000","scriptPubKey":["76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"],"trx":{"hash":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","locktime":0,"size":117,"txid":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","version":2,"vin":[{"scriptSig":{"asm":"","hex":""},"sequence":4294967295,"txid":"94b5043cc971d88e5da2a578b32b0befbe67653cbfa3fbea7cdedb15a52b5463","vout":0}],"vout":[{"n":0,"scriptPubKey":{"addresses":["19QmVye31e2QfYXZShBD2VXissoM6QeppM"],"asm":"OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac","reqSigs":1,"type":"pubkeyhash"},"value":"6.99899999999999967"},{"n":1,"scriptPubKey":{"addresses":["35ymUk9NfK4izhgp55Nphqd6dcgsvQYNfd"],"asm":"OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL","hex":"a91431d9622f9e40a979433b7026a760dce5bdacef8e87","reqSigs":1,"type":"scripthash"},"value":"10.00000000"}],"vsize":117}} true
    "020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b594000000006b483045022100f19d516c64d7d4acbda6af9b7b3cc4dbacc5cc8e98e669d032740a612d6f2977022044487e5e0b68ab7fdda74d3d0d8d5ac3ee10c55162cb9894329e60270fe270ac012103556af2f0ca77d324abfb49ad3d78ddb9cb3fbc4da3c53af933d6b567527b9022ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000"

(3)查询账户hxtest001的余额。
    
    unlocked >>> get_account_balances hxtest001
    get_account_balances hxtest001
    [{
    "amount": 1000000000,
    "asset_id": "1.3.1"
      }
    ]

> 充值LTC到账户`hxtest002`

(1)createrawtransaction:发送地址/接受地址/充值金额/充值资产符合
    
    unlocked >>> createrawtransaction LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8  MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD 849 LTC
    createrawtransaction LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8  MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD 849 LTC
    { "jsonrpc": "2.0", "id" : "45","method" : "Zchain.Trans.createTrx" , "params" : {"chainId":"ltc" ,"from_addr": "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8","dest_info":{"MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD":1}}}
    {
      "hex": "02000000010b2b180e1aa5bfc150fea349e1090ccc1721b01e2887c4c25ff9ca96afe6d1ef0000000000ffffffff02c038c023000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000",
      "scriptPubKey": [
    "76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"
      ],
      "trx": {
    "hash": "8332e34ef216c792bcc03750defbd8f2298a939c8d5eaf35448dbfdc8b21d252",
    "locktime": 0,
    "size": 117,
    "txid": "8332e34ef216c792bcc03750defbd8f2298a939c8d5eaf35448dbfdc8b21d252",
    "version": 2,
    "vin": [{
        "scriptSig": {
          "asm": "",
          "hex": ""
        },
        "sequence": 4294967295,
        "txid": "efd1e6af96caf95fc2c487281eb02117cc0c09e149a3fe50c1bfa51a0e182b0b",
        "vout": 0
      }
    ],
    "vout": [{
        "n": 0,
        "scriptPubKey": {
          "addresses": [
            "LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8"
          ],
          "asm": "OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG",
          "hex": "76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac",
          "reqSigs": 1,
          "type": "pubkeyhash"
        },
        "value": "5.99800000000000022"
      },{
        "n": 1,
        "scriptPubKey": {
          "addresses": [
            "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD"
          ],
          "asm": "OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL",
          "hex": "a91431d9622f9e40a979433b7026a760dce5bdacef8e87",
          "reqSigs": 1,
          "type": "scripthash"
        },
        "value": "848.99552000"
      }
    ],
    "vsize": 117
      }
    }

(2)signrawtransaction:发送地址/充值资产的符合/执行createrawtransaction命令返回的结果/是否广播

    unlocked >>> signrawtransaction LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8 LTC {"hex":"020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b5940000000000ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000","scriptPubKey":["76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"],"trx":{"hash":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","locktime":0,"size":117,"txid":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","version":2,"vin":[{"scriptSig":{"asm":"","hex":""},"sequence":4294967295,"txid":"94b5043cc971d88e5da2a578b32b0befbe67653cbfa3fbea7cdedb15a52b5463","vout":0}],"vout":[{"n":0,"scriptPubKey":{"addresses":["LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8"],"asm":"OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac","reqSigs":1,"type":"pubkeyhash"},"value":"6.99899999999999967"},{"n":1,"scriptPubKey":{"addresses":["QR9Zdmi94TkX4tvuQBCgZxXHTpCFTU358v"],"asm":"OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL","hex":"a91431d9622f9e40a979433b7026a760dce5bdacef8e87","reqSigs":1,"type":"scripthash"},"value":"10.00000000"}],"vsize":117}} true
    signrawtransaction LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8 BTC {"hex":"020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b5940000000000ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000","scriptPubKey":["76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac"],"trx":{"hash":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","locktime":0,"size":117,"txid":"0fed58465fc05311c032f9e76898f05d663823f5d339911f81bd5af3e3d30033","version":2,"vin":[{"scriptSig":{"asm":"","hex":""},"sequence":4294967295,"txid":"94b5043cc971d88e5da2a578b32b0befbe67653cbfa3fbea7cdedb15a52b5463","vout":0}],"vout":[{"n":0,"scriptPubKey":{"addresses":["LPFnwvJFXziSzk35fXn3tj2JYQe4iHLLY8"],"asm":"OP_DUP OP_HASH160 09babeff4dd30c4e3227b5e0c091080dfc08538a OP_EQUALVERIFY OP_CHECKSIG","hex":"76a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac","reqSigs":1,"type":"pubkeyhash"},"value":"6.99899999999999967"},{"n":1,"scriptPubKey":{"addresses":["MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD"],"asm":"OP_HASH160 31d9622f9e40a979433b7026a760dce5bdacef8e OP_EQUAL","hex":"a91431d9622f9e40a979433b7026a760dce5bdacef8e87","reqSigs":1,"type":"scripthash"},"value":"10.00000000"}],"vsize":117}} true
    "020000000163542ba515dbde7ceafba3bf3c6567beef0b2bb378a5a25d8ed871c93c04b594000000006b483045022100f19d516c64d7d4acbda6af9b7b3cc4dbacc5cc8e98e669d032740a612d6f2977022044487e5e0b68ab7fdda74d3d0d8d5ac3ee10c55162cb9894329e60270fe270ac012103556af2f0ca77d324abfb49ad3d78ddb9cb3fbc4da3c53af933d6b567527b9022ffffffff0260a0b729000000001976a91409babeff4dd30c4e3227b5e0c091080dfc08538a88ac00e1f5050000000017a91431d9622f9e40a979433b7026a760dce5bdacef8e8700000000"

(3)查询账户hxtest002的余额。
    
    unlocked >>> get_account_balances hxtest002
    get_account_balances hxtest002
    [{
    "amount": "84899552000",
    "asset_id": "1.3.2"
      }
    ]


## 兑换流程

> 兑换合约

自己在hx-ide中编译一个兑换合约，然后编译成gpc文件,将合约注册部署到hyperexchange链上.(确保`hxtest001`账户有足够的`HX`)

    unlocked >>> register_contract hxtest001 0.001 10000 "E:/link_mytest/blocklink_e
    xchange.lua.gpc"
    
    "contract_id": "CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s"

> 货币兑换

1.hxtest001账户充值1 BTC到合约里.

    unlocked >>> transfer_to_contract hxtest001 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s
     1 "BTC" "" 0.001 10000 true
    transfer_to_contract hxtest001 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s 1 "BTC" "" 0
    .001 10000 true
    {
      "ref_block_num": 3030,
      "ref_block_prefix": 4031504198,
      "expiration": "2018-09-05T10:13:20",
      "operations": [[
      81,{
    "fee": {
      "amount": 12000,
      "asset_id": "1.3.0"
    },
    "invoke_cost": 10000,
    "gas_price": 100,
    "caller_addr": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "caller_pubkey": "039541c82bb4cd832ff4c11e39b894609b3c035add4b133d55a6d5
    b72c4ac28ad6",
    "contract_id": "CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s",
    "amount": {
      "amount": 100000000,
      "asset_id": "1.3.1"
    },
    "param": ""
      }
    ]
      ],
      "extensions": [],
      "signatures": [
    "2027af412ac03384b9a4ac1d6d81ca1e3947cb6a2e3b18144e0d242b5e09f5bb22754e9b115
    55bf33a22f84576be7b95f1cb0d69fb43e0fc006b701468b8be5f6e"
      ],
      "block_num": 0,
      "trxid": "2f3b7e9b8bc48b158030b27a44e40a4e2ac8b061"
    }

2.发送兑换挂单到挂单中心.用1BTC换2.5LTC

    unlocked >>> invoke_contract hxtest001 0.001 10000 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s putOnSellOrder "BTC,100000000,LTC,250000000"
    invoke_contract hxtest001 0.001 10000 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s putOn
    SellOrder "BTC,100000000,LTC,250000000"
    {
      "ref_block_num": 3059,
      "ref_block_prefix": 4003603969,
      "expiration": "2018-09-05T10:15:45",
      "operations": [[
      79,{
    "fee": {
      "amount": 12000,
      "asset_id": "1.3.0"
    },
    "invoke_cost": 10000,
    "gas_price": 100,
    "caller_addr": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "caller_pubkey": "039541c82bb4cd832ff4c11e39b894609b3c035add4b133d55a6d5b72c4ac28ad6",
    "contract_id": "CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s",
    "contract_api": "putOnSellOrder",
    "contract_arg": "BTC,100000000,LTC,250000000",
    "offline": false
      }
    ]
      ],
      "extensions": [],
      "signatures": ["1f76a6144438f6c571607304348307d3c087b332b3548f50154d864932ccca63815c7d357c51f5a67799deed95af070fad416a022e9f058768d08207ebd55baaf0"],
      "block_num": 0,
      "trxid": "9d141aa4782e97187f152031135d1bdc10ef7306"
    }

3.hxtest002账户调用合约接口发送一个兑换单用10LTC换1BTC。

    unlocked >>> transfer_to_contract hxtest002 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s
     10 "LTC" "BTC,100000000" 0.001 10000 true
    transfer_to_contract hxtest002 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s 10 "LTC" "BTC,100000000" 0.001 10000 true
    {
      "ref_block_num": 13361,
      "ref_block_prefix": 2405013881,
      "expiration": "2018-09-06T01:15:00",
      "operations": [[
      81,{
    "fee": {
      "amount": 12000,
      "asset_id": "1.3.0"
    },
    "invoke_cost": 10000,
    "gas_price": 100,
    "caller_addr": "HX8Vx4U1HfPBhHQF8J2z55qyiMCaJBce5gQ",
    "caller_pubkey": "034317fbda4543caa127aa82a0558194c213066762b6ce15c5215d756ff301efaf",
    "contract_id": "CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s",
    "amount": {
      "amount": 1000000000,
      "asset_id": "1.3.2"
    },
    "param": "BTC,100000000"
      }
    ]
      ],
      "extensions": [],
      "signatures": ["1f6f51e1b0406931a47910734b8d8ee2d3a7b1bf9ff7767cf7a8d427a1120534250b5c9fbaeffb1b48d5df9fb6fb46d81bdefaadca19099aa80d58eed1f064e000"],
      "block_num": 0,
      "trxid": "d4ef8b05a42e2cff7a6443902aa4b6cc3d647851"
    }

4.查询账户hxtest002的余额."asset_id"是"1.3.1"的Amount是1*precision。
    
    unlocked >>> get_account_balances hxtest002
    get_account_balances hxtest002
    [{
    "amount": 999995100,
    "asset_id": "1.3.0"
      },{
    "amount": 100000000,
    "asset_id": "1.3.1"
      },{
    "amount": "84649552000",
    "asset_id": "1.3.2"
      }
    ]

5.将2.5 LTC提现到账户hxtest001.

    unlocked >>> invoke_contract hxtest001 0.001 10000 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s withdrawAsset "LTC,250000000"
    invoke_contract hxtest001 0.001 10000 CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s withdrawAsset "LTC,250000000"
    {
      "ref_block_num": 13430,
      "ref_block_prefix": 452881267,
      "expiration": "2018-09-06T01:21:00",
      "operations": [[
      79,{
    "fee": {
      "amount": 12000,
      "asset_id": "1.3.0"
    },
    "invoke_cost": 10000,
    "gas_price": 100,
    "caller_addr": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "caller_pubkey": "039541c82bb4cd832ff4c11e39b894609b3c035add4b133d55a6d5b72c4ac28ad6",
    "contract_id": "CHX4W971o4Q84ihbAMJ9xbaBMAVwtVJRbP7s",
    "contract_api": "withdrawAsset",
    "contract_arg": "LTC,250000000",
    "offline": false
      }
    ]
      ],
      "extensions": [],
      "signatures": ["2052608a77d042af3020341aa6d0e5b965dc8e9447ac17b22302b7fbac2d20c65375cdbf184adf94e39863e043d0f301bf7058745f55dcb8d61aa0556213d47cf1"],
      "block_num": 0,
      "trxid": "7d56c9545a42729ed6e55df43448c53734d72efe"
    }

6.查询账户hxtest001的余额,"asset_id"的"1.3.2"的amount是2.5*precision which .

    unlocked >>> get_account_balances hxtest001
    get_account_balances hxtest001
    [{
    "amount": 999984290,
    "asset_id": "1.3.0"
      },{
    "amount": 900000000,
    "asset_id": "1.3.1"
      },{
    "amount": 250000000,
    "asset_id": "1.3.2"
      }
    ]

## 提现流程

1.提现到litecoin主链地址，会生成一个跨链交易。

    unlocked >>> withdraw_cross_chain_transaction hxtest001 2.5 LTC LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA "" true

    withdraw_cross_chain_transaction hxtest001 2.5 LTC LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA "" true
    {
      "ref_block_num": 14011,
      "ref_block_prefix": 2913418489,
      "expiration": "2018-09-06T02:24:15",
      "operations": [[
      61,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "withdraw_account": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "amount": "2.5",
    "asset_symbol": "LTC",
    "asset_id": "1.3.2",
    "crosschain_account": "LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA",
    "memo": ""
      }
    ]
      ],
      "extensions": [],
      "signatures": ["1f73948075b5403e9d99d26bf6cd2c461f46d7844df7bc1ea0dbf107535678add57a836bd947c701a14a13b876939a217ae0c3062e262bc527ec458c550b014251"],
      "block_num": 0,
      "trxid": "9b2df1bc9376fd649d569bf4345165bd4523883a"
    }

2.查询产生的跨链交易

    unlocked >>> get_crosschain_transaction 1
    get_crosschain_transaction 1
    [[
    "977b443566b1105a2a2159cb7a4d9a023dd44f92",{
      "ref_block_num": 14011,
      "ref_block_prefix": 2913418489,
      "expiration": "2018-09-06T02:14:45",
      "operations": [[
      62,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "ccw_trx_ids": [
      "9b2df1bc9376fd649d569bf4345165bd4523883a"
    ],
    "withdraw_source_trx": {
      "hex": "020000000196aa8d21549926bb0a2b2c163e91c1ff783ff06158756c33f5b4758057c860770000000000ffffffff02e02be50e000000001976a914f542d013712017a417defd6a29615b2e1a2b84a288ac803125450200000017a9144c4691c0f89c01775330e84d307e45f1a4f101478700000000",
      "scriptPubKey": [
    "a9144c4691c0f89c01775330e84d307e45f1a4f1014787"
      ],
      "trx": {
    "hash": "6f9885fae162d1b492cc2e764d48d44c37df6fac7018411f54109f485a7fbd4d",
    "locktime": 0,
    "size": 117,
    "txid": "6f9885fae162d1b492cc2e764d48d44c37df6fac7018411f54109f485a7fbd4d",
    "version": 2,
    "vin": [{
    "scriptSig": {
      "asm": "",
      "hex": ""
    },
    "sequence": 4294967295,
    "txid": "7760c8578075b4f5336c755861f03f78ffc1913e162c2b0abb269954218daa96",
    "vout": 0
      }
    ],
    "vout": [{
    "n": 0,
    "scriptPubKey": {
      "addresses": [
    "LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA"
      ],
      "asm": "OP_DUP OP_HASH160 f542d013712017a417defd6a29615b2e1a2b84a2 OP_EQUALVERIFY OP_CHECKSIG",
      "hex": "76a914f542d013712017a417defd6a29615b2e1a2b84a288ac",
      "reqSigs": 1,
      "type": "pubkeyhash"
    },
    "value": "2.49900000000000011"
      },{
    "n": 1,
    "scriptPubKey": {
      "addresses": [
    "MErU8FfsLhXPvkzgE2BRKTyeJQExTMiZMD"
      ],
      "asm": "OP_HASH160 4c4691c0f89c01775330e84d307e45f1a4f10147 OP_EQUAL",
      "hex": "a9144c4691c0f89c01775330e84d307e45f1a4f1014787",
      "reqSigs": 1,
      "type": "scripthash"
    },
    "value": "97.50000000000000000"
      }
    ],
    "vsize": 117
      }
    },
    "miner_broadcast": "1.6.4",
    "miner_address": "HX2WbZT9ZgYQC92BdUGAqkbHXpmYqgxXdex",
    "asset_id": "1.3.2",
    "asset_symbol": "LTC",
    "crosschain_fee": {
      "amount": 0,
      "asset_id": "1.3.2"
    }
      }
    ]
      ],
      "extensions": [],
      "signatures": ["2073f66bb19fd429246d16f377794707461fd9a6efe7264b72eb4b128ebabe6a454adbcf879f0eaaa5c72b124e5ae1b1e0b4b7d339cd5e077c44081366b5c5d286"]
    }],[
    "9b2df1bc9376fd649d569bf4345165bd4523883a",{
      "ref_block_num": 14011,
      "ref_block_prefix": 2913418489,
      "expiration": "2018-09-06T02:24:15",
      "operations": [[
      61,{
    "fee": {
      "amount": 0,
      "asset_id": "1.3.0"
    },
    "withdraw_account": "HXNUZSB27eoKGki79mioGrS5YyKxdXEzvQu",
    "amount": "2.5",
    "asset_symbol": "LTC",
    "asset_id": "1.3.2",
    "crosschain_account": "LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA",
    "memo": ""
      }
    ]
      ],
      "extensions": [],
      "signatures": ["1f73948075b5403e9d99d26bf6cd2c461f46d7844df7bc1ea0dbf107535678add57a836bd947c701a14a13b876939a217ae0c3062e262bc527ec458c550b014251"]
    }
      ]
    ]

3.超过三分之二的的senator签名之后，该交易才会成功广播。

    unlocked >>> senator_sign_crosschain_transaction 977b443566b1105a2a2159cb7a4d9a023dd44f92 guard0
    unlocked >>> senator_sign_crosschain_transaction 977b443566b1105a2a2159cb7a4d9a023dd44f92 guard1
    unlocked >>> senator_sign_crosschain_transaction 977b443566b1105a2a2159cb7a4d9a023dd44f92 guard2
    unlocked >>> senator_sign_crosschain_transaction 977b443566b1105a2a2159cb7a4d9a023dd44f92 guard3
    unlocked >>> senator_sign_crosschain_transaction 977b443566b1105a2a2159cb7a4d9a023dd44f92 guard4

4.查询账户hxtest001的余额, "asset_id" is "1.3.2"的amount会变成0.

    unlocked >>> get_account_balances hxtest001
    get_account_balances hxtest001
    [{
    "amount": 999984290,
    "asset_id": "1.3.0"
      },{
    "amount": 900000000,
    "asset_id": "1.3.1"
      },{
    "amount": 0,
    "asset_id": "1.3.2"
      }
    ]

5.在litecoin的主链钱包里查询提现地址"LhamrSpU9E55VEfgmKNxuX7VnWNZLdw8uA"的余额,是2.49900000(手续费0.001).

## 多签地址

> 实现

利用HX 公钥可以无限衍生的特点，对一系列HX 公钥组合成一个有序的队列之后，生成一个公钥，该公钥对应的地址即为多签地址（与普通地址暂时无法肉眼区分），最多支持15个公钥组成多签地址

> 创建多签地址

    create_multisignature_address(const string& account, const fc::flat_set<public_key_type>& pubs, int required, bool broadcast)

该操作为上链操作，如果链上已经有该多签地址详细信息，使用相同的地址+公钥重复创建将会失败。

![multi-sig address](/img/wallets/create-multisig-addr.png)

> 通过私钥获取公钥

    public_key_type wallet_api::get_pubkey_from_priv(const string& privkey)

> 通过钱包内账户名获取公钥，账户需要在本钱包中存在

    public_key_type wallet_api:: get_pubkey_from_account (const string& acc_name)

> 查询多签地址的详细信息，返回多签地址详细信息，地址组成以及最少签名个数

    variant_object wallet_api::get_multisig_address(const address& addr)

> 多签地址转账操作

* 首先创建一个离线交易，该交易超时时间大概为一天；

转账接口：

    signed_transaction transfer_from_to_address(string from, string to, string amount, string asset_symbol, string memo)

![multi-sig address](/img/wallets/multisig-transfer.png)

* 生成该多签地址的地址用户分别对该交易单进行签名；

签名接口：

    signed_transaction wallet_api::sign_multisig_trx(const address& addr, const signed_transaction& trx)

![multi-sig address](/img/wallets/multisig-sign.png)

* 采集签名，combine之后进行广播，只有达到required广播才会成功。

合并广播接口：

    full_transaction wallet_api::combine_transaction(const vector<signed_transaction>& trxs, bool broadcast)

![multi-sig address](/img/wallets/multisig-combine.png)

> base58字符串解析，可以用来解析一个生成交易的base58字符串，看到交易体中详细信息，包括签名数量。

![multi-sig address](/img/wallets/decode-multisig-trx.png)

## ETH 和 ERC20资产

> 创建eth资产和创建其他的资产方式相同，创建erc20资产接口如下：

    full_transaction wallet_create_erc_asset(string issuer,发行者
		  string symbol,标识(必须带有ERC开头)
	uint8_t precision,精度
	share_type max_supply,最大供应量
	share_type core_fee_paid,使用手续费
	std::string erc_address,(erc20的合约地址和erc20合约实际精度，用’|’进行分割)
	bool broadcast = false);
    例子：
    wallet_create_erc_asset guard0 ERCEOS 8 210000000 100000 "0x1fb22d0eb45d1bc4ef6a9cb9a8db6972ce886f65|18" true

> 以太(eth和ERC)senator多签账户创建流程；

普通资产流程(请参考上面hx链上创建LTC资产部分的流程)：
update_asset_private_keys –>查询创建出的多签地址->创建提案->查询提案->确认提案->多签账户生效
ETH资产流程：
update_asset_private_keys->查询创建出的多签合约->对未签名的多签合约进行签名并广播到以太链上->查询创建出的多签地址->创建提案->查询提案->通过提案->多签账户生效
相关接口：
查询多签合约交易:

    get_eth_multi_account_trx(const int & mul_acc_tx_state);
添加的查询类型，查询创建出的多签地址的冷热钱包地址都需要有一定的eth用于eth和erc20相关交易的手续费：

![eth and erc20](/img/wallets/eth-state.png)

对未签名的多签合约进行签名：

    senator_sign_eths_multi_account_create_trx(const string& tx_id, const string& senator);
两个参数分别是未签名的交易的交易id，通过上个接口查询0状态获得，和签名的senator(在钱包中有该senator的私钥)。

> eth和erc20提现流程

普通资产流程(具体流程请参考上面的提现流程)：

	用户发起跨链转账(状态变为0)->citizen创建未签名的多签交易(1)->senator签名状态1的交易(2)-> citizen合并签名并广播(3)->链确认交易并通过采集告诉HX链(4)
Eth资产流程：

    用户发起跨链转账(状态变为0)-> citizen创建未签名的以太坊调用参数交易(1)-> senator签名状态1的交易(2)-> citizen合并调用参数并创建未签名的ETH交易(7)->指定senator签名状态7的交易(8)->链确认交易通过采集告诉HX链(4)
相关接口：
指定senator签名交易:
    senator_sign_eths_final_trx(const string& tx_id, const string& senator);

> eth和erc20冷热钱包互转流程

流程和eth和erc20提现流程相同，指定senator签名交易的接口不同，如下：

    senator_sign_eths_coldhot_final_trx(const string& trx_id, const string & senator)

**> 注意:**如果要做eth和erc20的相关操作，需要在中间件的config.ini中添加ETH和erc20的代币名称：

![eth and erc20](/img/wallets/eth-conf.png)

## 命令列表

> 基本命令

1.info

    返回HX 链当前信息，块号等
2.wallet_create_account  name

    在钱包创建账户，返回账户地址
3.dump_private_key name

    获取钱包内账户的私钥，会返回地址+私钥
4.import_key name private_key

    导入私钥，账户名为name
5.register_account name true
    
    注册该账户名至链上
6.transfer_to_address from to amount symbol memo true

    转账到某地址: 
    from:发起地址
    to：目的地址
    amount： 转账总量 
    symbol:资产类型 
    memo: 信息

7.get_transaction trxid

trxid:交易id

    根据交易id，获取本次交易全部信息，只有上链交易才能被查询到

8.get_block blocknum

    根据块号，返回该块详细信息
    blocknum: 块号
9.get_citizen name

    根据用户名返回citizen详细信息，如果该账户不是citizen，返回空

10.get_senator_member name


    根据用户名返回senator详细信息，如果账户不是senator，返回空
11.create_citizen name url true

    注册为citizen，有机会参与出块
    name:账户名 
    url: 网页地址 
12.create_crosschain_symbol symbol

    创建特定资产地址，返回地址
    symbol: 资产类型
13.bind_tunnel_account account tunnel_account symbol true

    绑定tunnel账户，其他链上地址与当前账户建立绑定关系，tunnel_account私钥需要存在
    account: 账户名
    tunnel_account: 特定资产地址
    symbol：资产类型
14.unbind_tunnel_account account tunnel_account symbol true
    
    去绑定tunnel账户，其他链上地址与当前账户建立绑定关系，tunnel_account私钥需要存在
15.get_binding_account account symbol 

    查询特定资产的tunnel账户
    account: 当前账户名
    symbol: 资产类型
16.get_multisig_account_pair symbol 
    
    获取当前链上特定资产多签地址，包含历史多签
    symbol: 资产类型
17.get_current_multi_address symbol

    获取当前链上特定资产当前实际多签地址
    symbol: 资产类型
18.withdraw_cross_chain_transaction account amount symbol crosschain_addr memo true

    发起提现请求
    account: 提现请求发起方
    amount:  提现数量
    symbol： 提现资产类型
    crosschain_addr: 特定资产目的地址
    memo: 附加信息
19.refund_request refund_acount txid true
    
    发起取消跨链提现申请
    runfund_account: 账户名
    txid: 希望取消提现的交易id

> 承兑单相关的命令

1.create_guarantee_order account asset_orign asset_target symbol true

    创建承兑单，该操作用于账户下有HX，但是想要把HX利用承兑来换为其他代币，例如btc

    account:为承兑单创建者
    asset_orign : 为该账户下用于承兑的HX数量
    asset_target : 想要承兑目的代币的数量
    symbol:目的代币数字资产类型
2.list_guarantee_order symbol all

    返回符合条件的承兑单队列
    symbol: 资产类型
    all true/false,是否列出所有承兑单，包含已经结束的账户做交易时，需要消耗HX作为手续费，但是如果账户没有HX，就需要使用本账户内实际拥有的代币来支付手续费

3.get_my_guarantee_order account all

    返回该地址创建的承兑单
    account: 账户地址
    all：是否包含已经结束的承兑单
4.set_guarantee_id guarantee_id
    
    设置需要的承兑单，该设置不会上链，只是用于当前即将执行的交易，该交易执行之后不论是否成功，本次设置都会失效
    guarantee_id : 承兑单id
 

> Senator相关的命令:

senator 用于对跨链资产管理，大部分操作都是投票相关

1.create_senator_member  proposer_account account url expiration_time true

    创建一个提案用于将特定账户变为候选senator
    proposer_account: 提案账户名
    account：待候选senator
    url : 网址
    expiration_time: 超时时间
2.update_senator_formal proposer_account formal expiration_time  true
    
    提案发起人以及成为正式senator账户名
    formal :默认为true,将senator变为正式senator
3.senator_appointed_publisher proposer publisher symbol expiration_time true

    对某一资产指明喂价人
    proposer: 提案人
    publisher: 喂价人accountid
    symbol: 喂价资产类型
4.citizen_appointed_crosschain_fee proposer fee symbol expiration_time true

    发起一个提案，指明特定资产类型跨链提现手续费
    fee： 跨链提现手续费
    symbol： 跨链资产类型
5.citizen_appointed_lockbalance_senator proposer lockbalance expiration_time true

    发起一个提案，修改senator需要质押的保证金极其资产类型
    lockbalance: 为map<string,asset>类型，指明senator需要质押的保证金极其资产类型
6.update_asset_private_keys account symbol true

    用于生成一对特定资产的私钥，并将该私钥对所对应的公钥广播到链上HX链会根据收到的公钥生成一对新的多签地址，冷热钱包

    account:交易发起账户
    symbol：资产类型
7.account_change_for_crosschain proposer symbol hot cold  expiration_time true

    发起一个提案，使得hot和cold 在链上确认生效
    symbol：资产类型
    hot：热钱包地址
    cold:冷钱包地址
8.get_proposal_for_voter account
    
    获取需要该账户签名的所有提案
    account：当前账户名
9.approve_proposal account proposal_id delta true
    
    account: 投票人
    proposal_id: 提案id
    delta: 投票内容,类似如下{"key_approvals_to_add":[addr]，“key_approvals_to_remove”：[addr]}
10.get_crosschain_transaction type

    返回对应状态下提现交易及状态
    type：状态 0,1,2,3,4 
      0： 提现请求状态
      1,2： 交易等待签名或签名中状态 
      3： 交易签名结束广播
      4： 对应资产链已打包该交易

11.senator_sign_crosschain_transaction trxid senator

    对提现交易进行签名操作
    trxid: 提现交易id，状态需要是1 
    senator：senator账户名

>  合约相关：

1.invoke_contract_testing caller_account_name contract_address_or_name contract_api contract_arg

    caller_account_name: 调用者本地账户名
    contract_address_or_name: 被调用合约地址/合约名称
    contract_api: 被调用合约API名称
    contract_arg: 被调用合约参数（字符串格式）

2.transfer_to_contract_testing from to amount asset_symbol param

    from: 出账地址
    to: 目标合约地址
    amount: 转账金额
    asset_symbol: 转账的资产符号
    param: 转账备注

3.register_contract_testing  caller_account_name contract_filepath

    caller_account_name: 调用者本地账户名
    contract_filepath: 合约文件路径

4.register_native_contract_testing caller_account_name native_contract_key

    caller_account_name: 调用者本地账户名
    native_contract_key: native合约模板标识

5.upgrade_contract_testing caller_account_name contract_address contract_name contract_desc

    caller_account_name: 调用者本地账户名
    contract_address: 合约地址
    contract_name: 新合约名称（需链上唯一）
    contract_desc: 新合约文字描述

6.get_contract_registered  block_num

    block_num: 块高度

7.get_contract_storage_changed block_num

    block_num: 块高度

8.create_contract_transfer_fee_proposal proposer fee_rate  expiration_time  broadcast

    proposer: 提案标识字符串
    fee_rate: 费率
    expiration_time: 提案过期时间 
    broadcast: 是否广播到链上

9.register_contract caller_account_name  gas_price gas_limit contract_filepath

    caller_account_name: 调用者本地账户名
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制 
    contract_filepath: 合约文件路径

10.register_native_contract caller_account_name gas_price gas_limit native_contract_key

    caller_account_name: 调用者本地账户名
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制
    native_contract_key: native合约模板标识

11.register_contract_like caller_account_name gas_price gas_limit base

    caller_account_name: 调用者本地账户名
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制
    base: 模板合约地址

12.invoke_contract caller_account_name gas_price gas_limit contract_address_or_name contract_api contract_arg

    caller_account_name: 调用者本地账户名
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制
    contract_address_or_name: 被调用合约地址或合约名称 
    contract_api: 被调用合约API名称 
    contract_arg: 调用参数字符串

13.invoke_contract_offline caller_account_name  contract_address_or_name contract_api contract_arg

    caller_account_name: 调用者本地账户名
    contract_address_or_name: 被调用合约地址或合约名称 
    contract_api: 被调用合约API名称 
    contract_arg: 调用参数字符串

14.upgrade_contract caller_account_name gas_price gas_limit contract_address contract_name contract_desc

    caller_account_name: 调用者本地账户名
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制
    contract_address: 合约地址
    contract_name: 合约新名称
    contract_desc: 合约文字描述

15.get_contract_info contract_address_or_name

    contract_address_or_name: 合约地址或合约名称

16.get_simple_contract_info contract_address_or_name

    contract_address_or_name: 合约地址或合约名称

17.transfer_to_contract from to amount asset_symbol param gas_price gas_limit broadcast

    from: 来源地址 
    to: 目标合约地址 
    amount: 转账金额 
    asset_symbol: 转账资产标识 
    param: 转账参数 
    gas_price: gas价格，单位HX
    gas_limit: 本次交易gas数量限制
    broadcast: 是否广播到链上

18.get_contract_balance contract_address

    contract_address: 合约地址

19.get_contract_addresses_by_owner addr

    addr: 合约创建人用户地址

20.get_contracts_by_owner addr

    addr: 合约创建人用户地址

21.get_contracts_hash_entry_by_owner addr

    addr: 合约创建人用户地址

22.get_contract_events addr

    addr: 合约地址

23.get_contract_events_in_range addr start range

    addr: 合约地址
    start: 开始块高度
    range: 扫描块数量

24.get_contract_history contract_id  start end

    contract_id: 合约地址
    start: 开始块高度
    end: 结束块高度

---