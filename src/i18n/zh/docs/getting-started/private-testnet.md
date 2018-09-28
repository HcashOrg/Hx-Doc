# 私有链使用指导

上次更新版本 v1.0.7

在这个页面中。我们主要讨论让每个开发人员可以轻松部署的私有链。

## 前提条件

We assume that you have both `witness_node` and `cli_wallet` already compliled (or downloaded from the offical respository).you have deployed hx middleware successfully.if not yet,please refer [Middleware Startup](/wallets/middleware-startup.md) to deploy.
我们假设你有已经有了hx_node和hx_cli，如果没有，可以在<https://github.com/HcashOrg/HyperExchange/releases>中下载最新的发布版本，或者可以参考[编译](/wallets/hx-building.md)自己编译。假设你已经成功部署了hx中间件。如果还没有，请参考[中间件启动](/wallets/middleware-startup.md)。

## 目录结构

在您喜欢的任何位置创建一个新文件夹（我们将其称为 `[Testnet-Home]`) ，然后拷贝 `witness_node` 和 `cli_wallet` 到这个文件夹。 该 `[Testnet-Home]` 文件夹将包含与testnet相关的所有文件和文件夹。

打开命令提示符窗口并将当前目录切换到 `[Testnet-Home]`。

## GENESIS文件

genesis文件定义了网络的初始状态。如下：

> 默认genesis

graphene代码库具有集成的默认genesis包括所有的senators, citizens 和一个 `nathan` 账户，该账户的私钥如下:

    5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
阅读以下内容以了解如何使用此密钥，并继续了解如何定义自己的genesis文件

> 定制genesis文件

我们通过运行以下命令创建一个名为my-genesis.json的新genesis json文件：

    $ witness_node --create-genesis-json=my-genesis.json

该`my-genesis.json`文件将在`[Testnet-Home]`文件夹中创建。完成此任务后，见证节点将自行终止。

如果要自定义网络的初始状态，请编辑新创建的`my-genesis.json` 文件。允许您控制诸如以下内容：

* genesis中存在的帐户，他们的名字和公钥
* 资产及其初始状态（包括核心资产）
* 链参数的初始值（包括费用）

示例文件：

    {
      "initial_timestamp": "2018-07-31T02:35:00",
      "max_core_supply": "840000000000000",
      "initial_parameters": {
    "current_fees": {
      "parameters": [[
      0,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      1,{
    "fee": 500
      }
    ],[
      2,{
    "fee": 0
      }
    ],[
      3,{
    "fee": 2000
      }
    ],[
      4,{
    "fee": 0
      }
    ],[
      5,{
    "basic_fee": 500000,
    "premium_fee": 200000,
    "price_per_kbyte": 100
      }
    ],[
      6,{
    "fee": 200000000,
    "price_per_kbyte": 100
      }
    ],[
      7,{
    "fee": 300000
      }
    ],[
      8,{
    "membership_annual_fee": 200000,
    "membership_lifetime_fee": 1000000
      }
    ],[
      9,{
    "fee": 50000
      }
    ],[
      10,{
    "fee": 50000
      }
    ],[
      11,{
    "fee": 50000
      }
    ],[
      12,{
    "fee": 50000
      }
    ],[
      13,{
    "symbol3": 50000000,
    "symbol4": 30000000,
    "long_symbol": 500000,
    "price_per_kbyte": 10
      }
    ],[
      14,{
    "fee": 50000,
    "price_per_kbyte": 10
      }
    ],[
      15,{
    "fee": 50000
      }
    ],[
      16,{
    "fee": 50000
      }
    ],[
      17,{
    "fee": 2000,
    "price_per_kbyte": 100
      }
    ],[
      18,{
    "fee": 2000
      }
    ],[
      19,{
    "fee": 100
      }
    ],[
      20,{
    "fee": 10000
      }
    ],[
      21,{
    "fee": 50000
      }
    ],[
      22,{
    "fee": 100
      }
    ],[
      23,{
    "fee": 100
      }
    ],[
      24,{
    "fee": 400000
      }
    ],[
      25,{
    "fee": 2000
      }
    ],[
      26,{
    "fee": 0
      }
    ],[
      27,{
    "fee": 0
      }
    ],[
      28,{
    "fee": 2000,
    "price_per_kbyte": 10
      }
    ],[
      29,{
    "fee": 2000,
    "price_per_kbyte": 10
      }
    ],[
      30,{
    "fee": 100
      }
    ],[
      31,{
    "fee": 100
      }
    ],[
      32,{
    "fee": 100
      }
    ],[
      33,{
    "fee": 2000,
    "price_per_kbyte": 10
      }
    ],[
      34,{
    "fee": 0
      }
    ],[
      35,{
    "fee": 300000
      }
    ],[
      36,{
    "fee": 2000
      }
    ],[
      37,{
    "fee": 100
      }
    ],[
      38,{
    "fee": 350000
      }
    ],[
      39,{
    "fee": 100
      }
    ],[
      40,{
    "fee": 2000
      }
    ],[
      41,{
    "fee": 450000
      }
    ],[
      42,{
    "fee": 100,
    "price_per_kbyte": 10
      }
    ],[
      43,{
    "fee": 100
      }
    ],[
      44,{}
    ],[
      45,{
    "fee": 2000,
    "price_per_kbyte": 10
      }
    ],[
      46,{
    "fee": 2000
      }
    ],[
      47,{
    "fee": 2000
      }
    ],[
      48,{
    "fee": 500,
    "price_per_output": 500
      }
    ],[
      49,{
    "fee": 500,
    "price_per_output": 500
      }
    ],[
      50,{
    "fee": 500
      }
    ],[
      51,{}
    ],[
      52,{
    "fee": 2000
      }
    ],[
      53,{}
    ],[
      54,{
    "fee": 100
      }
    ],[
      55,{
    "fee": 2000
      }
    ],[
      56,{
    "fee": 2000
      }
    ],[
      57,{
    "fee": 2000
      }
    ],[
      58,{
    "fee": 2000
      }
    ],[
      59,{
    "fee": 2000
      }
    ],[
      60,{
    "fee": 2000
      }
    ],[
      61,{
    "fee": 2000
      }
    ],[
      62,{
    "fee": 2000
      }
    ],[
      63,{
    "fee": 2000
      }
    ],[
      64,{
    "fee": 2000
      }
    ],[
      65,{
    "fee": 2000
      }
    ],[
      66,{
    "fee": 2000
      }
    ],[
      67,{
    "fee": 2000
      }
    ],[
      68,{
    "fee": 2000
      }
    ],[
      69,{
    "fee": 2000
      }
    ],[
      70,{
    "fee": 2000
      }
    ],[
      71,{
    "fee": 2000
      }
    ],[
      72,{
    "fee": 2000
      }
    ],[
      73,{
    "fee": 2000
      }
    ],[
      74,{
    "fee": 2000
      }
    ],[
      75,{
    "fee": 2000
      }
    ],[
      76,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      77,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      78,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      79,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      80,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      81,{
    "fee": 2000,
    "price_per_kbyte": 1000
      }
    ],[
      82,{
    "fee": 2000
      }
    ],[
      83,{
    "fee": 2000
      }
    ],[
      84,{
    "fee": 2000
      }
    ],[
      85,{
    "fee": 2000
      }
    ],[
      86,{
    "fee": 2000
      }
    ],[
      87,{
    "fee": 2000
      }
    ],[
      88,{
    "fee": 2000
      }
    ],[
      89,{
    "fee": 2000
      }
    ]
      ],
      "scale": 10000
    },
    "block_interval": 5,
    "maintenance_interval": 900,
    "maintenance_skip_slots": 3,
    "committee_proposal_review_period": 1209600,
    "maximum_transaction_size": 2048,
    "maximum_block_size": 2048000000,
    "maximum_time_until_expiration": 86400,
    "maximum_proposal_lifetime": 2419200,
    "maximum_asset_whitelist_authorities": 10,
    "maximum_asset_feed_publishers": 10,
    "maximum_miner_count": 1001,
    "maximum_guard_count": 15,
    "minimum_guard_count": 7,
    "maximum_authority_membership": 10,
    "reserve_percent_of_fee": 2000,
    "network_percent_of_fee": 2000,
    "lifetime_referrer_percent_of_fee": 3000,
    "cashback_vesting_period_seconds": 31536000,
    "cashback_vesting_threshold": 10000,
    "count_non_member_votes": true,
    "allow_non_member_whitelists": false,
    "miner_pay_per_block": 1000,
    "worker_budget_per_day": 50000000,
    "max_predicate_opcode": 1,
    "fee_liquidation_threshold": 10000,
    "accounts_per_fee_scale": 1000,
    "account_fee_scale_bitshifts": 4,
    "max_authority_depth": 2,
    "min_pay_back_balance": 50000000,
    "min_pay_back_balance_other_asset": [],
    "extensions": []
      },
      "initial_accounts": [{
      "name": "miner0",
      "owner_key": "HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77",
      "active_key": "HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77",
      "is_lifetime_member": true
    },{
      "name": "miner1",
      "owner_key": "HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1",
      "active_key": "HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1",
      "is_lifetime_member": true
    },{
      "name": "miner2",
      "owner_key": "HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn",
      "active_key": "HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn",
      "is_lifetime_member": true
    },{
      "name": "miner3",
      "owner_key": "HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa",
      "active_key": "HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa",
      "is_lifetime_member": true
    },{
      "name": "miner4",
      "owner_key": "HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY",
      "active_key": "HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY",
      "is_lifetime_member": true
    },{
      "name": "miner5",
      "owner_key": "HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS",
      "active_key": "HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS",
      "is_lifetime_member": true
    },{
      "name": "miner6",
      "owner_key": "HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB",
      "active_key": "HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB",
      "is_lifetime_member": true
    },{
      "name": "miner7",
      "owner_key": "HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc",
      "active_key": "HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc",
      "is_lifetime_member": true
    },{
      "name": "miner8",
      "owner_key": "HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ",
      "active_key": "HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ",
      "is_lifetime_member": true
    },{
      "name": "miner9",
      "owner_key": "HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x",
      "active_key": "HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x",
      "is_lifetime_member": true
    },{
      "name": "miner10",
      "owner_key": "HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h",
      "active_key": "HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h",
      "is_lifetime_member": true
    },{
      "name": "miner11",
      "owner_key": "HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ",
      "active_key": "HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ",
      "is_lifetime_member": true
    },{
      "name": "miner12",
      "owner_key": "HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp",
      "active_key": "HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp",
      "is_lifetime_member": true
    },{
      "name": "miner13",
      "owner_key": "HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk",
      "active_key": "HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk",
      "is_lifetime_member": true
    },{
      "name": "miner14",
      "owner_key": "HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1",
      "active_key": "HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1",
      "is_lifetime_member": true
    },{
      "name": "miner15",
      "owner_key": "HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE",
      "active_key": "HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE",
      "is_lifetime_member": true
    },{
      "name": "miner16",
      "owner_key": "HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7",
      "active_key": "HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7",
      "is_lifetime_member": true
    },{
      "name": "miner17",
      "owner_key": "HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC",
      "active_key": "HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC",
      "is_lifetime_member": true
    },{
      "name": "miner18",
      "owner_key": "HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN",
      "active_key": "HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN",
      "is_lifetime_member": true
    },{
      "name": "miner19",
      "owner_key": "HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q",
      "active_key": "HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q",
      "is_lifetime_member": true
    },{
      "name": "miner20",
      "owner_key": "HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4",
      "active_key": "HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4",
      "is_lifetime_member": true
    },{
      "name": "miner21",
      "owner_key": "HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts",
      "active_key": "HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts",
      "is_lifetime_member": true
    },{
      "name": "miner22",
      "owner_key": "HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy",
      "active_key": "HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy",
      "is_lifetime_member": true
    },{
      "name": "miner23",
      "owner_key": "HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9VHEZzsopu5mMHuGqRxkfeC",
      "active_key": "HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9VHEZzsopu5mMHuGqRxkfeC",
      "is_lifetime_member": true
    },{
      "name": "miner24",
      "owner_key": "HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN",
      "active_key": "HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN",
      "is_lifetime_member": true
    },{
      "name": "guard0",
      "owner_key": "HX6pNcaS3ZFuo3gzwvxcFxTnNhbcbtLodEMPvAtSDQXLkRqNjNTo",
      "active_key": "HX6pNcaS3ZFuo3gzwvxcFxTnNhbcbtLodEMPvAtSDQXLkRqNjNTo",
      "is_lifetime_member": true
    },{
      "name": "guard1",
      "owner_key": "HX5ZyfuVbqjTJ44VkzVqt7yLZoJuV15agjUkMXwsapC1xNqwkdZ5",
      "active_key": "HX5ZyfuVbqjTJ44VkzVqt7yLZoJuV15agjUkMXwsapC1xNqwkdZ5",
      "is_lifetime_member": true
    },{
      "name": "guard2",
      "owner_key": "HX5P6vSL3cG8wdiiSvcHmsfAoxqWGkSMd65TibbrjG9qAfY7g9Ka",
      "active_key": "HX5P6vSL3cG8wdiiSvcHmsfAoxqWGkSMd65TibbrjG9qAfY7g9Ka",
      "is_lifetime_member": true
    },{
      "name": "guard3",
      "owner_key": "HX6pf6v2N4VNX65eQCwf6gVNUhe2UurUVKsyyRWEoyEoDop5TXHK",
      "active_key": "HX6pf6v2N4VNX65eQCwf6gVNUhe2UurUVKsyyRWEoyEoDop5TXHK",
      "is_lifetime_member": true
    },{
      "name": "guard4",
      "owner_key": "HX6oVVvTQni6EfiN4h4oyxTQ4ACW6eP15fEpZTCeS8JcXWwBUbXR",
      "active_key": "HX6oVVvTQni6EfiN4h4oyxTQ4ACW6eP15fEpZTCeS8JcXWwBUbXR",
      "is_lifetime_member": true
    },{
      "name": "guard5",
      "owner_key": "HX5Qd3TyKic1t73dn5EDVJZ3WmszcKRz5GHaB8dVujCURsTTtYaN",
      "active_key": "HX5Qd3TyKic1t73dn5EDVJZ3WmszcKRz5GHaB8dVujCURsTTtYaN",
      "is_lifetime_member": true
    },{
      "name": "guard6",
      "owner_key": "HX59JXtoH3eW8YmrGUfWAX58W7RWFY8Wp1Nbz2zQ4xRarNSNVSuq",
      "active_key": "HX59JXtoH3eW8YmrGUfWAX58W7RWFY8Wp1Nbz2zQ4xRarNSNVSuq",
      "is_lifetime_member": true
    },{
      "name": "nathan",
      "owner_key": "HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
      "active_key": "HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
      "is_lifetime_member": false
    }
      ],
      "initial_assets": [],
      "initial_balances": [{
      "owner": "HXFAbAx7yuxt725qSZvfwWqkdCwp9ZnUama",
      "asset_symbol": "HX",
      "amount": "620000000000000"
    }
      ],
      "initial_vesting_balances": [],
      "initial_active_miners": 25,
      "initial_miner_candidates": [{
      "owner_name": "miner0",
      "block_signing_key": "HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77"
    },{
      "owner_name": "miner1",
      "block_signing_key": "HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1"
    },{
      "owner_name": "miner2",
      "block_signing_key": "HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn"
    },{
      "owner_name": "miner3",
      "block_signing_key": "HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa"
    },{
      "owner_name": "miner4",
      "block_signing_key": "HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY"
    },{
      "owner_name": "miner5",
      "block_signing_key": "HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS"
    },{
      "owner_name": "miner6",
      "block_signing_key": "HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB"
    },{
      "owner_name": "miner7",
      "block_signing_key": "HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc"
    },{
      "owner_name": "miner8",
      "block_signing_key": "HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ"
    },{
      "owner_name": "miner9",
      "block_signing_key": "HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x"
    },{
      "owner_name": "miner10",
      "block_signing_key": "HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h"
    },{
      "owner_name": "miner11",
      "block_signing_key": "HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ"
    },{
      "owner_name": "miner12",
      "block_signing_key": "HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp"
    },{
      "owner_name": "miner13",
      "block_signing_key": "HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk"
    },{
      "owner_name": "miner14",
      "block_signing_key": "HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1"
    },{
      "owner_name": "miner15",
      "block_signing_key": "HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE"
    },{
      "owner_name": "miner16",
      "block_signing_key": "HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7"
    },{
      "owner_name": "miner17",
      "block_signing_key": "HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC"
    },{
      "owner_name": "miner18",
      "block_signing_key": "HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN"
    },{
      "owner_name": "miner19",
      "block_signing_key": "HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q"
    },{
      "owner_name": "miner20",
      "block_signing_key": "HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4"
    },{
      "owner_name": "miner21",
      "block_signing_key": "HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts"
    },{
      "owner_name": "miner22",
      "block_signing_key": "HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy"
    },{
      "owner_name": "miner23",
      "block_signing_key": "HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9VHEZzsopu5mMHuGqRxkfeC"
    },{
      "owner_name": "miner24",
      "block_signing_key": "HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN"
    }
      ],
      "initial_guard_candidates": [{
      "owner_name": "guard0"
    },{
      "owner_name": "guard1"
    },{
      "owner_name": "guard2"
    },{
      "owner_name": "guard3"
    },{
      "owner_name": "guard4"
    },{
      "owner_name": "guard5"
    },{
      "owner_name": "guard6"
    }
      ],
      "initial_worker_candidates": [],
      "initial_chain_id": "aa34045518f1469a28fa4578240d5f039afa9959c0b95ce3b39674efa691fb21",
      "immutable_parameters": {
    "min_guard_count": 7,
    "min_miner_count": 25,
    "num_special_accounts": 0,
    "num_special_assets": 0
      }
    }

## 获取BLOCKCHAIN ID

区块链id是genesis的哈希。所有交易签名仅对单个区块链ID有效。因此，编辑genesis文件将更改区块链ID，并使您无法与所有现有链同步。

运行此命令：
    
    witness_node --data-dir=data   # to use the default genesis, or
    witness_node --data-dir=data --genesis-json=my-genesis.json   # your own genesis block
当这样的消息出现时：

    3501235ms th_a main.cpp:165 main] Started witness node on a chain with 0 blocks.
    3501235ms th_a main.cpp:166 main] Chain ID is 8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824
… 表示初始化已完成。使用ctrl-c关闭见证节点。

您应该获得两个结果：

*  产生一个`data`路径，在该路径下生成一个新的`config.ini`文件。
* 您的区块链ID现在已知 - 它显示在上面的消息中。

**请注意，您的区块链ID将与上例中使用的区别链ID不同。将此ID复制到某处，因为稍后您将需要它。

## config.ini配置例子

    track-address = "HXFynbZPgLeF5GfMXs9CCuEAreLGWSU4HK6"
    track-address = "HX7vBsFkAtgmhULMkHNkDVLoSR3kGbEfDvi"
    
    # Endpoint for P2P node to listen on
    # p2p-endpoint = 
    
    # P2P nodes to connect to on startup (may specify multiple times)
    # seed-node = 
    
    # JSON array of P2P nodes to connect to on startup
    # seed-nodes = 
    
    # Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
    # checkpoint = 
    
    # Endpoint for websocket RPC to listen on
    # rpc-endpoint = 
    
    # Endpoint for TLS websocket RPC to listen on
    # rpc-tls-endpoint = 
    
    # The TLS certificate file for this server
    # server-pem = 
    
    # Password for this certificate
    # server-pem-password = 
    
    # File to read Genesis State from
    genesis-json = "E:\link_mytest\genesis.json"
    
    # Block signing key to use for init mineres, overrides genesis file
    # dbg-init-key = 
    
    # JSON file specifying API permissions
    api-access = "E:\link_mytest\api-access.json"
    
    # Miner in this node would not pack contract trx which gas price to low
    # min_gas_price = 
    
    # Enable block production, even if the chain is stale.
    enable-stale-production = true
    
    # Percent of miners (0-99) that must be participating in order to produce blocks
    required-participation = false
    
    # ID of miner controlled by this node (e.g. "1.6.5", quotes are required, may specify one times)
    
    miner-id = "1.6.1"
    miner-id = "1.6.2"
    miner-id = "1.6.3"
    miner-id = "1.6.4"
    miner-id = "1.6.5"
    miner-id = "1.6.6"
    miner-id = "1.6.7"
    miner-id = "1.6.8"
    miner-id = "1.6.9"
    miner-id = "1.6.10"
    miner-id = "1.6.11"
    miner-id = "1.6.12"
    miner-id = "1.6.13"
    miner-id = "1.6.14"
    miner-id = "1.6.15"
    miner-id = "1.6.16"
    miner-id = "1.6.17"
    miner-id = "1.6.18"
    miner-id = "1.6.19"
    miner-id = "1.6.20"
    miner-id = "1.6.21"
    miner-id = "1.6.22"
    miner-id = "1.6.23"
    miner-id = "1.6.24"
    miner-id = "1.6.25"
    
    # Tuple of [PublicKey, WIF private key] (just append)
    private-key = [["HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"],["HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77","5JZDdTiLcahFtZo7M95ybDjT5VufrsYWfxiaQfJoP1zfbw8PmRA"],["HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1","5K8mFWgAf2bd5AG8hKzjc9BgXKrnwqNT7PaUbJ7oWjHjQPwz8zF"],["HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn","5K4RZCLQ6kUFps1eUncFkAJ7iUEsRXm694aD2W6tMxhFqzmWdD3"],["HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa","5JiDkVAXi6vpE6aEiDRh7WAwcGwr1ivrsN8Yh7eDwFbmz5BFCTz"],["HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY","5J5uekBwLhENsKGNShqBDoJdbHDaZMMrStVimGTfJ9V2vbAKpo9"],["HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS","5KCmKbz9mD8ndbA5UBLC6kUVENCDkmHf9dpZ7ExKnB8LFWWyTmw"],["HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB","5JLvURaky1ryswgY785sQ4TiR3MrEon9ryKX71NatdJJ3AvtC2b"],["HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc","5HvjWASwH2mYNodoMDdibW8tHW3u8HFQYS7vD3BtpeenCny1h2Q"],["HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ","5JDkmfS8YMWapcSCntX7wygJZPtELATJHMpPCvidTA19SF8Xo5u"],["HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x","5HzByVyqvtXWXb9HM3TFS8mvrCf3NaDM1GRZQHuaiDgJG739a83"],["HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h","5KdAjgrJ7gwnbwQVK8vMXQJ5BW5PfMr5BtA5DpsQwCtCVGNqM8V"],["HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ","5KbUi2Efd2bscQKtQ3a4RBvn4bVuaMfpCZwHpskWrUokRc3NXA1"],["HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp","5K67sdMmoynLXK3Y3EiZ3Gfjw9Qn5UY9dQrGKed5V5DiZHzun7G"],["HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk","5JCBhwpxBSo7ABJweuNamtGoWbnbVJvGf4KAyKCgFFWTKGWD1vD"],["HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1","5JyKyz1JJZTzN1a4ruvbykLia1WMM46TEJShhgLzWfsGQJVcHSK"],["HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE","5Hy5KPpkAoU2r9uaiqw4SECwNYyZMaR78BkuhbeLpw6tVBB66gn"],["HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7","5JP1tX4BRrgZctxTmkAbam9m53DardLM6TrQtDS1EdgohGp6mtJ"],["HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC","5KkHjoSC1u5GhBdaNbGmTptwEg22AqtEk4ECQ8XQXfMFqXhDnHk"],["HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN","5KjdpdNzwcx9A5XZGNquHWzqVcPvMPF9EXsDkY2STsvDQeNroZn"],["HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q","5KfshkiRmYvAvbf5rg8HXWZSifrTtR7htQyox7aVrCsw5t4Xgbk"],["HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4","5JZ46AjQN7kCz7igUcQ3wGUFAviBDvBkxZ7xS6Pf5DHPQvFspwr"],["HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts","5JHa4RNxzehYdCMtVoqh55a5vNzAmENXtoGwXFxmNwtvTrduGHy"],["HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy","5J1HrKVzNQBwKXiTdMYaY6eVknm15mCeyV84Wt3TDMwwCLHxyWv"],["HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9VHEZzsopu5mMHuGqRxkfeC","5JtrnVGscfoYC8Hftk36hwXYUZjKBzL6fv8JBTeo6MbKgSL2vF1"],["HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN","5J3oHnGEze3gwidWjoznyTGgyJqFm3h8cFWg2DZaP55Rd1tUXVr"],["HX6pNcaS3ZFuo3gzwvxcFxTnNhbcbtLodEMPvAtSDQXLkRqNjNTo","5JZe9Hv7twngWSEZzvvvDXP5RG1LJGixSz6WJ4D8te9x45kvDuG"],["HX5ZyfuVbqjTJ44VkzVqt7yLZoJuV15agjUkMXwsapC1xNqwkdZ5","5JQT9vqrFW26817PELM7D3w6rqbZ5GDW43knB2bP5kBALQ2BRDi"],["HX5P6vSL3cG8wdiiSvcHmsfAoxqWGkSMd65TibbrjG9qAfY7g9Ka","5Je6RMyd39B3W7QsC6XPHXFaTP31QmrtfiBxnmXDbeFz1pHE8CB"],["HX6pf6v2N4VNX65eQCwf6gVNUhe2UurUVKsyyRWEoyEoDop5TXHK","5JhS8VntvNPKPU1ByiUMhUeu7HutUK9PfCyAUXGvqLB1dym7Hgt"],["HX6oVVvTQni6EfiN4h4oyxTQ4ACW6eP15fEpZTCeS8JcXWwBUbXR","5JmaB7uQVGN6nKH1YyU4hSF6TmfCGJKoywimbJsRVkykF9swp1D"],["HX5Qd3TyKic1t73dn5EDVJZ3WmszcKRz5GHaB8dVujCURsTTtYaN","5JPYHwjeHETE6xzMUo2TunSCpdfdAUjLBBUH2Jy2DuGQcdS2ism"],["HX59JXtoH3eW8YmrGUfWAX58W7RWFY8Wp1Nbz2zQ4xRarNSNVSuq","5KLAzVUNPPci2JhQUQRpy1zsbjvyHQaRTATfLYk6jMnjrKZhx8U"]]
    
    crosschain-ip = 117.78.44.37
    
    crosschain-port = 5005
    
    #  chain-type for crosschains  (e.g. ["BTC"], quotes are required,  specify one times)
    chain-type = ["BTC","LTC","UB","HC"]
    
    # Account ID to track history for (may specify multiple times)
    # track-account = 
    
    # Keep only those operations in memory that are related to account history tracking
    # partial-operations = 
    
    # Maximum number of operations per account will be kept in memory
    # max-ops-per-account = 
    
    # address to track history for (may specify multiple times)
    # track-address = 
    
    # guard-id = 
    
    # declare an appender named "stderr" that writes messages to the console
    [log.console_appender.stderr]
    stream=std_error
    
    # declare an appender named "p2p" that writes messages to p2p.log
    [log.file_appender.p2p]
    filename=logs/p2p/p2p.log
    # filename can be absolute or relative to this config file
    
    # route any messages logged to the default logger to the "stderr" logger we
    # declared above, if they are info level are higher
    [logger.default]
    level=info
    appenders=stderr
    
    # route messages sent to the "p2p" logger to the p2p appender declared above
    [logger.p2p]
    level=info
    appenders=p2p

## 启动hx-node

    witness_node --data-dir=data

## hx-cli使用

我们现在准备将CLI连接到您的testnet见证节点。让您的见证节点保持运行，并在另一个命令提示符窗口中运行此命令：
    
    cli_wallet --wallet-file=my-wallet.json --chain-id=8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824 --server-rpc-endpoint=ws://127.0.0.1:8090

**注意：请务必使用您自己的区块链ID替换上面的区块链ID 8b7bd36a ... 4294824。传递给CLI的区块链ID需要匹配见证节点生成和使用的id。

如果您收到set_password提示，则表示您的CLI已成功连接到testnet见证节点。

> 创建一个新钱包

首先，您需要为钱包创建一个新密码。此密码用于加密钱包中的所有私钥。在本教程中，我们将使用密码`supersecret`你也可以使用下面的命令创建密码：

    >>> set_password supersecret
现在您可以解锁新创建的钱包：

    unlock supersecret


> 导入 senator/citizen账户

如果你想自己产块，请将my-genesis.json文件中`"initial_accounts"` (`账户名在my-genesis.json,私钥在config.ini`)导入进来。

> 获取HX进行测试

在Hyper Exchange链上，余额保存在账户里。要将帐户导入钱包，您需要知道的只是其名称和私钥。我们现在将 `nathan`账户使用 import_key 命令导入到钱包:

    import_key nathan 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

**NOTE:
注意：请注意，`nathan`是genesis文件中定义的帐户名称。如果您创建了my-genesies.json文件后编辑了文件，则可以在其中添加其他名称。另请注意，这`5KQwrPbwdL...P79zkvFD3`是`config.ini`文件中定义的私钥。

现在您已经拥有足够的HX，如果您想在其他帐户中使用HX，请从帐户转移`nathan`到另一个帐户。

---
