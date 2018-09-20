# Private Testnet Using Guide

Last updated for v1.0.7

In this page. We mainly talk about  **private testnet** that every developer could easily deploy .

## PREREQUISITES

We assume that you have both `witness_node` and `cli_wallet` already compliled (or downloaded from the offical respository).you have deployed hx middleware successfully.if not yet,please refer [Middleware Startup](/wallets/middleware-startup.md) to deploy.

## FOLDER STRUCTURE

Create a new folder (we will refer to it as `[Testnet-Home]`) in any location you like and copy `witness_node` and `cli_wallet` there. The `[Testnet-Home]` folder will contain all files and folders related to the testnet.

Open a Command Prompt window and switch the current directory to `[Testnet-Home]`.

## THE GENESIS FILE

The genesis file defines the initial state of the network.Please find it as below:

> Default genesis

The graphene code base has a default genesis block integrated that has all witnesses, committee members and funds and a single account called `nathan` available from a single private key:

    5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
Read below to find how to use this key, and go ahead to learn about how to define your own genesis file

> Customization of the genesis file

We create a new genesis json file named my-genesis.json by running this command:

    $ witness_node --create-genesis-json=my-genesis.json

The `my-genesis.json` file will be created in the `[Testnet-Home]` folder. Once this task is done, the witness node will terminate on its own.

If you want to customize the network’s initial state, edit the newly created `my-genesis.json` file. This allows you to control things such as:

* The accounts that exist at genesis, their names and public keys
* Assets and their initial status (including core asset)
* Initial values of chain parameters (including fees)

Example File:

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

## GET THE BLOCKCHAIN ID

The blockchain id is a hash of the genesis state. All transaction signatures are only valid for a single blockchain id. So editing the genesis file will change your blockchain id, and make you unable to sync with all existing chains .

Run this command:
    
    witness_node --data-dir=data   # to use the default genesis, or
    witness_node --data-dir=data --genesis-json=my-genesis.json   # your own genesis block
and when a message like this shows up:

    3501235ms th_a main.cpp:165 main] Started witness node on a chain with 0 blocks.
    3501235ms th_a main.cpp:166 main] Chain ID is 8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824
… it means the initialization is completed. Use ctrl-c to close witness node.

As a result, you should get two items:

* A directory named `data` has been created with a file named `config.ini` located in it.
* Your blockchain id is now known - it’s displayed in the message above.

**NOTE:Note that your blockchain id will be different than the one used in the above example. Copy this id somewhere as you will be needing it later on.

## WITNESS CONFIGURATION

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

## START WITNESS-NODE

    witness_node --data-dir=data

## CLI USAGE

We are now ready to connect the CLI to your testnet witness node. Keep your witness node running and in another Command Prompt window run this command:
    
    cli_wallet --wallet-file=my-wallet.json --chain-id=8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824 --server-rpc-endpoint=ws://127.0.0.1:8090

**NOTE:
Make sure to replace the above blockchain id 8b7bd36a...4294824 with your own blockchain id. The blockchain id passed to the CLI needs to match the id generated and used by the witness node.

If you get the set_password prompt, it means your CLI has successfully connected to the testnet witness node.

> Create a new wallet

First you need to create a new password for your wallet. This password is used to encrypt all the private keys in the wallet. For this tutorial we will use the password `supersecret` but obviously you are free to come up with your own combination of letters and numbers. Use this command to create the password:

    >>> set_password supersecret
Now you can unlock the newly created wallet:

    unlock supersecret


> Import Miner/Guard accounts.

If you want to produce block,please import miner account in `"initial_accounts"` (`account name in my-genesis.json,private key in config.ini`) of my-genesis.json file.

> Get HX For Testing

On Hyper Exchange chain, balance is kept in account. To import an account into your wallet, all you need to know is its name and its private key.  We will now import into the wallet an account called `nathan` using the import_key command:

    import_key nathan 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

**NOTE:
Note that `nathan` happens to be the account name defined in the genesis file. If you had edited your `my-genesies.json` file just after it was created, you could have put a different name there. Also, note that `5KQwrPbwdL...P79zkvFD3` is the private key defined in the `config.ini` file.

Now you have got enough HX, If you want to use HX in another account, please transfer from account `nathan` to another account.

---
