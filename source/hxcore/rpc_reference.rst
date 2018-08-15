HX Core CLI Reference
=====================


Applications Intro
------------------

HX Core project releases two applications - **HX_node** and **HX_wallet**.

* **HX_node** is blockchain node which is going to sync all blockchain data and validate transactions / blocks.
* **HX_wallet** is the user client CLI. It connects to **HX_node** to access blockchain data and manages local wallet.

HX_node can run with RPC enabled. Only when the RPC is enabled the HX_wallet can connect to HX_node.
By default the RPC endpoint is 127.0.0.1:8090.
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

#. register_account [name] [true]
    :FUNCTION: register the account name to blockchain.
    :PARAMETERS: 
        :name: account name
        :true: XXX
    :RETURN: XXX

#. transfer_to_address [from] [to] [amount] [symbol] [memo] [true]
    :FUNCTION: transfer asset to other user.
    :PARAMETERS: 
        :from: sender address
        :to: receiver address
        :amount: amount to transfer
        :symbol: asset symbol
        :memo: memo of this transaction
        :true: XXX
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

#. create_miner [name] [url] [true]
    :FUNCTION: register to be a citizen.
    :PARAMETERS: 
        :name: account name
        :url: 网页地址
        :true: XXX
    :RETURN: XXX

#. create_crosschain_symbol [symbol]
    :FUNCTION: create a new asset.
    :PARAMETERS:
        :symbol: asset symbol
    :RETURN: XXX

#. bind_tunnel_account [account] [tunnel_account] [symbol] [true]
    :FUNCTION: bind a HX account with a tunnel account. the private key of both accounts should be existed.
    :PARAMETERS:
        :account: HX account name
        :tunnel_account: account of IOU chain
        :symbol: IOU asset symbol
        :true: XXX
    :RETURN: XXX

#. unbind_tunnel_account [account] [tunnel_account] [symbol] [true]
    :FUNCTION: unbind tunnel account and HX account. the private key of both accounts should be existed.
    :PARAMETERS: 
        :account: HX account name
        :tunnel_account: account of IOU chain
        :symbol: IOU asset symbol

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

#. withdraw_cross_chain_transaction [account] [amount] [symbol] [crosschain_addr] [memo] [true]
    :FUNCTION: initiate a withdraw request
    :PARAMETERS: 
        :account: withdraw HX account
        :amount: withdraw amount
        :symbol: asset symbol
        :crosschain_addr: target address of original chain
        :memo: memo
        :true: XXX
    :RETURN: XXX

#. refund_request [refund_acount] [txid] [true]
    :FUNCTION: cancel withdraw request
    :PARAMETERS: 
        :runfund_account: withdraw HX account
        :txid:  transaction id to be canceled
    :RETURN: XXX

承兑单相关
^^^^^^^^^^
    账户做交易时，需要消耗HX作为手续费，但是如果账户没有HX，就需要使用本账户内实际拥有的代币来支付手续费

#. create_guarantee_order [account] [asset_orign] [asset_target] [symbol] [true]
    :FUNCTION: 创建承兑单. 该操作用于账户下有HX，但是想要把HX利用承兑来换为其他代币，例如btc
    :PARAMETERS: 
        :account: 为承兑单创建者
        :asset_orign: 为该账户下用于承兑的HX数量
        :asset_target: 想要承兑目的代币的数量
        :symbol:    目的代币数字资产类型
        :true: XXX

#. list_guarantee_order [symbol] [all]
    :FUNCTION: 返回符合条件的承兑单队列
    :PARAMETERS: 
        :symbol: 资产类型
        :all: true/false是否列出所有承兑单，包含已经结束的

#. get_my_guarantee_order [account] [all]
    :FUNCTION: 返回该地址创建的承兑单
    :PARAMETERS: 
        :account: 地址
        :all: 是否包含已经结束的承兑单

#. set_guarantee_id [guarantee_id]
    :FUNCTION: 设置需要的承兑单，该设置不会上链，只是用于当前即将执行的交易，该交易执行之后不论是否成功，本次设置都会失效
    :PARAMETERS: 
        :guarantee_id: 承兑单id

senator相关
^^^^^^^^^^^
    senator 用于对跨链资产管理，大部分操作都是投票相关

#. create_guard_member  [proposer_account] [account] [url] [expiration_time] [true]
    :FUNCTION: 创建一个提案用于将特定账户变为候选senator
    :PARAMETERS: 
        :proposer_account: 提案账户名
        :account: 待候选senator
        :url:    网址
        :expiration_time: 超时时间

#. update_guard_formal [proposer_account] [formal] [expiration_time] [true]
    :PARAMETERS: 
        :proposer_account: 提案发起人以及成为正式senator账户名
        :formal: 默认为true,将senator变为正式senator
        :expiration_time: XXX
        :true: XXX

#. guard_appointed_publisher [proposer] [publisher] [symbol] [expiration_time] [true]
    :FUNCTION: 对某一资产指明喂价人
    :PARAMETERS: 
        :proposer: 提案人
        :publisher: 喂价人accountid
        :symbol: 喂价资产类型
        :expiration_time: XXX
        :true: XXX

#. miner_appointed_crosschain_fee [proposer] [fee] [symbol] [expiration_time] [true]
    :FUNCTION: 发起一个提案，指明特定资产类型跨链提现手续费
    :PARAMETERS: 
        :fee: 跨链提现手续费
        :symbol: 跨链资产类型
        :expiration_time: XXX
        :true: XXX

#. miner_appointed_lockbalance_guard [proposer] [lockbalance] [expiration_time] [true]
    :FUNCTION: 发起一个提案，修改senator需要质押的保证金极其资产类型
    :PARAMETERS: 
        :proposer: XXX
        :lockbalance: 为map<string,asset>类型，指明senator需要质押的保证金极其资产类型
        :expiration_time: XXX
        :true: XXX

#. update_asset_private_keys [account] [symbol] [true]
    :FUNCTION: 用于生成一对特定资产的私钥，并将该私钥对所对应的公钥广播到链上. HX链会根据收到的公钥生成一对新的多签地址，冷热钱包
    :PARAMETERS: 
        :account: 交易发起账户
        :symbol: 资产类型
        :true: XXX

#. account_change_for_crosschain [proposer] [symbol] [hot] [cold] [expiration_time] [true]
    :FUNCTION: 发起一个提案，使得hot和cold 在链上确认生效
    :PARAMETERS: 
        :proposer: XXX
        :symbol: 资产类型
        :hot: 热钱包地址
        :cold: 冷钱包地址
        :expiration_time: XXX
        :true: XXX

#. get_proposal_for_voter [account]
    :FUNCTION: 获取需要该账户签名的所有提案
    :PARAMETERS: 
        :account: 当前账户名

#. approve_proposal [account] [proposal_id] [delta] [true]
    :FUNCTION: 同意提案
    :PARAMETERS: 
        :account: 投票人
        :proposal_id: 提案id
        :delta: 投票内容,类似如下{"key_approvals_to_add":[addr]，“key_approvals_to_remove”：[addr]}
        :true: XXX

#. get_crosschain_transaction [type]
    :FUNCTION: 返回对应状态下提现交易及状态
    :PARAMETERS: 
        :type: 状态 0,1,2,3,4
            + 0: 提现请求状态
            + 1，2: 交易等待签名或签名中状态
            + 3: 交易签名结束广播
            + 4: 对应资产链已打包该交易

#. guard_sign_crosschain_transaction [trxid] [senator]
    :FUNCTION: 对提现交易进行签名操作
    :PARAMETERS: 
        :trxid: 提现交易id，状态1下
        :senator: senator账户名
