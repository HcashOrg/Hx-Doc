HX Core RPC Reference
=====================


应用介绍
--------
HX Core 项目发布两个应用程序，分别是HX_node和HX_wallet。

* HX_node为节点程序，用来同步区块链数据以及验证交易。
* HX_wallet为客户端程序，通过访问HX_node获得相关信息。

HX_node启动时需要指明是否允许HX_wallet方式启动，否则启动节点将不允许HX_wallet链接。
如果需要支持rpc，应以如下方式进行启动::

    HX_node.exe --data-dir E:\coding\data --rpc-endpoint 1.1.1.1:1111 (如果不指明ip端口，默认位127.0.0.1:8090)
    hx_wallet.exe -s "ws://1.1.1.1:1111" (如果不指明ws网址，默认为127.0.0.1:8090)，该字段用来链接HX_node.exe
    hx_wallet.exe -s "ws://1.1.1.1:1111"  --rpc-endpoint 0.0.0.0:8091 ,--rpc-endpoint 用来指明hx_wallet允许用户进行rpc调用，rpc监听地址为0.0.0.0:8091


相关接口
--------

基本接口
^^^^^^^^

#. info
    :功能: 返回HX 链当前信息，块号等

#. wallet_create_account  [name]
    :功能: 在钱包创建账户，返回账户地址
    :参数: 
        :name: 账户名称

#. dump_private_key [name]
    :功能: 获取钱包内账户的私钥，会返回地址+私钥
    :参数: 
        :name: 账户名称

#. import_key [name] [private_key]
    :功能: 导入私钥
    :参数: 
        :name: 账户名称
        :private_key: 私钥

#. register_account [name] [true]
    :功能: 注册该账户名至链上
    :参数: 
        :name: 账户名称
        :true: XXX

#. transfer_to_address [from] [to] [amount] [symbol] [memo] [true]
    :功能: 转账到某地址
    :参数: 
        :from: 发起地址
        :to: 目的地址
        :amount: 转账总额
        :symbol: 资产类型
        :memo: 信息
        :true: XXX

#. get_transaction [trxid]
    :功能: 根据交易id，获取本次交易全部信息，只有上链交易才能被查询到
    :参数: 
        :trxid: transaction id
    
#. get_block [blocknum]
    :功能: 根据块号，返回该块详细信息
    :参数: 
        :blocknum: 块号

#.get_miner [name]
    :功能: 根据用户名返回citizen详细信息，如果该账户不是citizen，返回空
    :参数: 
        :name: XXX

#. get_guard_member [name]
    :功能: 根据用户名返回senator详细信息，如果账户不是senator，返回空
    :参数: 
        :name: XXX

#. create_miner [name] [url] [true]
    :功能: 注册为citizen，有机会参与出块
    :参数: 
        :name: 账户名
        :url: 网页地址
        :true: XXX

#. create_crosschain_symbol [symbol]
    :功能: 创建特定资产地址，返回地址
    :参数:
        :symbol: 资产类型

#. bind_tunnel_account [account] [tunnel_account] [symbol] [true]
    :功能: 绑定tunnel账户，其他链上地址与当前账户奖励绑定关系建立，tunnel_account私钥需要存在
    :参数:
        :account: XXX
        :tunnel_account: XXX
        :symbol: XXX
        :true: XXX

#. unbind_tunnel_account [account] [tunnel_account] [symbol] [true]
    :功能: 解除绑定tunnel账户，其他链上地址与当前账户奖励绑定关系接触，tunnel_account私钥需要存在
    :参数: 
        :account:        账户名
        :tunnel_account: 特定资产地址
        :symbol:         资产类型

#. get_binding_account [account] [symbol]
    :功能: 查询特定资产的tunnel账户
    :参数: 
        :account: 当前账户名
        :symbol: 资产类型

#. get_multisig_account_pair [symbol]
    :功能: 获取当前链上特定资产多签地址，包含历史多签

#. get_current_multi_address [symbol]
    :功能: 获取当前链上特定资产当前实际多签地址

#. withdraw_cross_chain_transaction [account] [amount] [symbol] [crosschain_addr] [memo] [true]
    :功能: 发起提现请求
    :参数: 
        :account: 提现请求发起方
        :amount:  提现数量
        :symbol: 提现资产类型
        :crosschain_addr: 特定资产目的地址
        :memo:    附加信息
        :true: XXX

#. refund_request [refund_acount] [txid] [true]
    :功能: 发起取消跨链提现申请
    :参数: 
        :runfund_account: 账户名
        :txid:  希望取消提现的交易id

承兑单相关
^^^^^^^^^^
    账户做交易时，需要消耗HX作为手续费，但是如果账户没有HX，就需要使用本账户内实际拥有的代币来支付手续费

#. create_guarantee_order [account] [asset_orign] [asset_target] [symbol] [true]
    :功能: 创建承兑单. 该操作用于账户下有HX，但是想要把HX利用承兑来换为其他代币，例如btc
    :参数: 
        :account: 为承兑单创建者
        :asset_orign: 为该账户下用于承兑的HX数量
        :asset_target: 想要承兑目的代币的数量
        :symbol:    目的代币数字资产类型
        :true: XXX

#. list_guarantee_order [symbol] [all]
    :功能: 返回符合条件的承兑单队列
    :参数: 
        :symbol: 资产类型
        :all: true/false是否列出所有承兑单，包含已经结束的

#. get_my_guarantee_order [account] [all]
    :功能: 返回该地址创建的承兑单
    :参数: 
        :account: 地址
        :all: 是否包含已经结束的承兑单

#. set_guarantee_id [guarantee_id]
    :功能: 设置需要的承兑单，该设置不会上链，只是用于当前即将执行的交易，该交易执行之后不论是否成功，本次设置都会失效
    :参数: 
        :guarantee_id: 承兑单id

senator相关
^^^^^^^^^^^
    senator 用于对跨链资产管理，大部分操作都是投票相关

#. create_guard_member  [proposer_account] [account] [url] [expiration_time] [true]
    :功能: 创建一个提案用于将特定账户变为候选senator
    :参数: 
        :proposer_account: 提案账户名
        :account: 待候选senator
        :url:    网址
        :expiration_time: 超时时间

#. update_guard_formal [proposer_account] [formal] [expiration_time] [true]
    :参数: 
        :proposer_account: 提案发起人以及成为正式senator账户名
        :formal: 默认为true,将senator变为正式senator
        :expiration_time: XXX
        :true: XXX

#. guard_appointed_publisher [proposer] [publisher] [symbol] [expiration_time] [true]
    :功能: 对某一资产指明喂价人
    :参数: 
        :proposer: 提案人
        :publisher: 喂价人accountid
        :symbol: 喂价资产类型
        :expiration_time: XXX
        :true: XXX

#. miner_appointed_crosschain_fee [proposer] [fee] [symbol] [expiration_time] [true]
    :功能: 发起一个提案，指明特定资产类型跨链提现手续费
    :参数: 
        :fee: 跨链提现手续费
        :symbol: 跨链资产类型
        :expiration_time: XXX
        :true: XXX

#. miner_appointed_lockbalance_guard [proposer] [lockbalance] [expiration_time] [true]
    :功能: 发起一个提案，修改senator需要质押的保证金极其资产类型
    :参数: 
        :proposer: XXX
        :lockbalance: 为map<string,asset>类型，指明senator需要质押的保证金极其资产类型
        :expiration_time: XXX
        :true: XXX

#. update_asset_private_keys [account] [symbol] [true]
    :功能: 用于生成一对特定资产的私钥，并将该私钥对所对应的公钥广播到链上. HX链会根据收到的公钥生成一对新的多签地址，冷热钱包
    :参数: 
        :account: 交易发起账户
        :symbol: 资产类型
        :true: XXX

#. account_change_for_crosschain [proposer] [symbol] [hot] [cold] [expiration_time] [true]
    :功能: 发起一个提案，使得hot和cold 在链上确认生效
    :参数: 
        :proposer: XXX
        :symbol: 资产类型
        :hot: 热钱包地址
        :cold: 冷钱包地址
        :expiration_time: XXX
        :true: XXX

#. get_proposal_for_voter [account]
    :功能: 获取需要该账户签名的所有提案
    :参数: 
        :account: 当前账户名

#. approve_proposal [account] [proposal_id] [delta] [true]
    :功能: 同意提案
    :参数: 
        :account: 投票人
        :proposal_id: 提案id
        :delta: 投票内容,类似如下{"key_approvals_to_add":[addr]，“key_approvals_to_remove”：[addr]}
        :true: XXX

#. get_crosschain_transaction [type]
    :功能: 返回对应状态下提现交易及状态
    :参数: 
        :type: 状态 0,1,2,3,4
            + 0: 提现请求状态
            + 1，2: 交易等待签名或签名中状态
            + 3: 交易签名结束广播
            + 4: 对应资产链已打包该交易

#. guard_sign_crosschain_transaction [trxid] [senator]
    :功能: 对提现交易进行签名操作
    :参数: 
        :trxid: 提现交易id，状态1下
        :senator: senator账户名
