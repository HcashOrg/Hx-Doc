HX Core CLI Reference
=====================


Applications Intro
------------------

HX Core project releases two applications - **HX_node** and **HX_wallet**.

* **HX_node** is blockchain node which is going to sync all blockchain data and validate transactions / blocks.
* **HX_wallet** is the user client CLI. It connects to **HX_node** to access blockchain data and manages local wallet.

HX_node can run with RPC enabled. Only when the RPC is enabled the HX_wallet can connect to HX_node.
By default the RPC endpoint is *127.0.0.1:8090*.
On Windows please start HX_node with RPC by the following command::

    HX_node.exe --data-dir E:\coding\data --rpc-endpoint


Then we can start the HX_wallet by the following command::

    HX_wallet.exe -s


CLI Commands Reference
----------------------

In this document we talk about the commands of HX_wallet. When both HX_node and HX_wallet start by the above commands user can input command in the HX_wallet shell.

Basic Command
^^^^^^^^^^^^^

#. info
    :FUNCTION: Return HX chain summary information.

#. wallet_create_account  [name]
    :FUNCTION: create a new account.
    :PARAMETERS: 
        :name: 账户名称
    :RETURN: account name

#. dump_private_key [name]
    :FUNCTION: get private key of indicated account.
    :PARAMETERS: 
        :name: account name
    :RETURN: address and private key

#. import_key [name] [private_key]
    :FUNCTION: import private key to account.
    :PARAMETERS: 
        :name: account name for imported key
        :private_key: private key
    :RETURN: XXX

#. register_account [name] [broadcast]
    :FUNCTION: register the account name to blockchain.
    :PARAMETERS: 
        :name: account name
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. transfer_to_address [from] [to] [amount] [symbol] [memo] [broadcast]
    :FUNCTION: transfer asset to other user.
    :PARAMETERS: 
        :from: sender address
        :to: receiver address
        :amount: amount to transfer
        :symbol: asset symbol
        :memo: memo of this transaction
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. get_transaction [trxid]
    :FUNCTION: get confirmed transaction details by transaction id.
    :PARAMETERS: 
        :trxid: transaction id
    :RETURN: transaction details
    
#. get_block [blocknum]
    :FUNCTION: get block details by block number.
    :PARAMETERS: 
        :blocknum: block number
    :RETURN: block details

#.get_miner [name]
    :FUNCTION: get details of citizen by account name.
    :PARAMETERS: 
        :name: account name
    :RETURN: details of citizen or null if it is not a citizen

#. get_guard_member [name]
    :FUNCTION: get dtails of senator by account name.
    :PARAMETERS: 
        :name: account name
    :RETURN: details of senator or null if it is not a senator

#. create_miner [name] [url] [broadcast]
    :FUNCTION: register to be a citizen.
    :PARAMETERS: 
        :name: account name
        :url: 网页地址
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. create_crosschain_symbol [symbol]
    :FUNCTION: create a new asset.
    :PARAMETERS:
        :symbol: asset symbol
    :RETURN: XXX

#. bind_tunnel_account [account] [tunnel_account] [symbol] [broadcast]
    :FUNCTION: bind a HX account with a tunnel account. the private key of both accounts should be existed.
    :PARAMETERS:
        :account: HX account name
        :tunnel_account: account of IOU chain
        :symbol: IOU asset symbol
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. unbind_tunnel_account [account] [tunnel_account] [symbol] [broadcast]
    :FUNCTION: unbind tunnel account and HX account. the private key of both accounts should be existed.
    :PARAMETERS: 
        :account: HX account name
        :tunnel_account: account of IOU chain
        :symbol: IOU asset symbol
        :broadcast: true/false broadcast or not

#. get_binding_account [account] [symbol]
    :FUNCTION: query tunnel_account
    :PARAMETERS: 
        :account: HX account name
        :symbol: IOU asset symbol
    :RETURN: XXX

#. get_multisig_account_pair [symbol]
    :FUNCTION: get historical multisig addresses managed by senator
    :PARAMETERS: 
        :symbol: IOU asset symbol
    :RETURN: XXX

#. get_current_multi_address [symbol]
    :FUNCTION: get current multisig address managed by senator
    :PARAMETERS: 
        :symbol: IOU asset symbol
    :RETURN: XXX

#. withdraw_cross_chain_transaction [account] [amount] [symbol] [crosschain_addr] [memo] [broadcast]
    :FUNCTION: initiate a withdraw request
    :PARAMETERS: 
        :account: withdraw HX account
        :amount: withdraw amount
        :symbol: asset symbol
        :crosschain_addr: target address of original chain
        :memo: memo
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. refund_request [refund_acount] [txid] [broadcast]
    :FUNCTION: cancel withdraw request
    :PARAMETERS: 
        :runfund_account: withdraw HX account
        :txid:  transaction id to be canceled
        :broadcast: true/false broadcast or not
    :RETURN: XXX

承兑单相关
^^^^^^^^^^

    This part introduce fee acceptance order operations. Actually the fee acceptance order is trading between HX and other IOU asset. Here we call the other IOU asset *target asset*.

#. create_guarantee_order [account] [asset_orign] [asset_target] [symbol] [broadcast]
    :FUNCTION: create fee acceptance order.
    :PARAMETERS: 
        :account: account to create the order
        :asset_orign: amount of HX to accept
        :asset_target: target asset to accept
        :symbol: target asset symbol
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. list_guarantee_order [symbol] [all]
    :FUNCTION: list fee acceptance orders by symbol
    :PARAMETERS: 
        :symbol: target asset symbol
        :all: true/false means if the result include completed order
    :RETURN: XXX

#. get_my_guarantee_order [account] [all]
    :FUNCTION: list all fee acceptance orders create by account
    :PARAMETERS: 
        :account: account name
        :all: true/false means if the result include completed order
    :RETURN: XXX

#. set_guarantee_id [guarantee_id]
    :FUNCTION: 设置需要的承兑单，该设置不会上链，只是用于当前即将执行的交易，该交易执行之后不论是否成功，本次设置都会失效
    :PARAMETERS: 
        :guarantee_id: 承兑单id

Senator COmmand
^^^^^^^^^^^^^^^

    Senator manage cross-chain assets and HX proposals. The following commands can be used to achieve this management.

#. create_guard_member  [proposer_account] [account] [url] [expiration_time] [broadcast]
    :FUNCTION: create a proposal to name an account to be a senator.
    :PARAMETERS: 
        :proposer_account: proposer account name
        :account: named account name
        :url:    网址
        :expiration_time: expiration time
        :broadcast: true/false broadcast or not
    :RETURN: XXX

#. update_guard_formal [proposer_account] [formal] [expiration_time] [broadcast]
    :FUNCTION: XXX
    :PARAMETERS: 
        :proposer_account: 提案发起人以及成为正式senator账户名
        :formal: 默认为true,将senator变为正式senator
        :expiration_time: XXX
        :broadcast: true/false broadcast or not

#. guard_appointed_publisher [proposer] [publisher] [symbol] [expiration_time] [broadcast]
    :FUNCTION: 对某一资产指明喂价人
    :PARAMETERS: 
        :proposer: 提案人
        :publisher: 喂价人accountid
        :symbol: 喂价资产类型
        :expiration_time: XXX
        :broadcast: true/false broadcast or not

#. miner_appointed_crosschain_fee [proposer] [fee] [symbol] [expiration_time] [broadcast]
    :FUNCTION: 发起一个提案，指明特定资产类型跨链提现手续费
    :PARAMETERS: 
        :fee: 跨链提现手续费
        :symbol: 跨链资产类型
        :expiration_time: XXX
        :broadcast: true/false broadcast or not

#. miner_appointed_lockbalance_guard [proposer] [lockbalance] [expiration_time] [broadcast]
    :FUNCTION: 发起一个提案，修改senator需要质押的保证金极其资产类型
    :PARAMETERS: 
        :proposer: XXX
        :lockbalance: 为map<string,asset>类型，指明senator需要质押的保证金极其资产类型
        :expiration_time: XXX
        :broadcast: true/false broadcast or not

#. update_asset_private_keys [account] [symbol] [broadcast]
    :FUNCTION: 用于生成一对特定资产的私钥，并将该私钥对所对应的公钥广播到链上. HX链会根据收到的公钥生成一对新的多签地址，冷热钱包
    :PARAMETERS: 
        :account: 交易发起账户
        :symbol: 资产类型
        :broadcast: true/false broadcast or not

#. account_change_for_crosschain [proposer] [symbol] [hot] [cold] [expiration_time] [broadcast]
    :FUNCTION: 发起一个提案，使得hot和cold 在链上确认生效
    :PARAMETERS: 
        :proposer: XXX
        :symbol: 资产类型
        :hot: 热钱包地址
        :cold: 冷钱包地址
        :expiration_time: XXX
        :broadcast: true/false broadcast or not

#. get_proposal_for_voter [account]
    :FUNCTION: 获取需要该账户签名的所有提案
    :PARAMETERS: 
        :account: 当前账户名

#. approve_proposal [account] [proposal_id] [delta] [broadcast]
    :FUNCTION: approve a proposal
    :PARAMETERS: 
        :account: voter account name
        :proposal_id: proposal id
        :delta: content ,for example {"key_approvals_to_add":[addr]，“key_approvals_to_remove”：[addr]}
        :broadcast: true/false broadcast or not

#. get_crosschain_transaction [type]
    :FUNCTION: query withdraw transaction status
    :PARAMETERS: 
        :type: 0,1,2,3,4
            + 0: request is accepted
            + 1，2: waiting for signatures
            + 3: signing complete and broadcast
            + 4: confirmed by original chain
    :RETURN: XXX

#. guard_sign_crosschain_transaction [trxid] [senator]
    :FUNCTION: sign for withdraw request
    :PARAMETERS: 
        :trxid: withdraw request transaction id
        :senator: senator account name
    :RETURN: XXX
