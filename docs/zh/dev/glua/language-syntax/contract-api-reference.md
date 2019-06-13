合约API函数
==========

* 使用全局函数transfer_from_contract_to_address可以从当前合约（这个函数调用代码所在的合约）转账一定数额的某种资产给某个地址，第一个参数是目标地址（字符串），第二个参数是资产名称（比如HSR），第三个参数是转账数量的10万倍（int64类型），要求是正数


    返回值
         0   转账成功
        -1  未知系统异常
        -2  Asset_symbol异常
        -3  合约地址非法
        -4  目标地址非法
        -5  账户余额不足支付转账金额
        -6  转账金额为负数  

* 使用全局函数get_contract_balance_amount可以获取某个合约带精度的余额（精度为100000），第一个参数是合约地址（支持查询其他合约的余额），第二个参数是资产名称（比如HSR），返回带精度的合约余额（int64类型），如果出现错误或者合约不存在返回负数


    返回值
        非负数 合约账户余额
        -1  资产id异常
        -2  合约地址异常


* 使用全局函数get_chain_now可以获取链上的当前时间，没有参数.


    返回值
        正数  时间戳整数
        0     系统异常

* 使用全局函数get_chain_random可以获取链上的一个伪随机数字，但是同一个此链上的operation操作，不同节点不同时间执行返回结果都一样（实际是取操作发生的块上prev_secret_hash和本交易结合后的哈希）


    返回值
        随机结果

* 使用全局函数get_header_block_num，可以获取上一个块的块号


    返回值
        当前链最新块的序号

* 使用全局函数get_waited(num)，表示根据未来块的数据获取伪随机数,num是未来块的块号（但是未来需要再次调用，那个时候第num块已经是过去的块了就能知道结果了）


    返回值
        正整数 结果值
        -1  目标块未到
        -2  设定的目标块不大于1

* 使用全局函数get_current_contract_address可以获取这个函数调用出现位置的合约地址，没有参数

* 全局变量caller存储着调用合约的用户的公钥，全局变量caller_address存储着调用合约的用户的账户地址

* 在转账到合约发生的时候，如果合约中定义了on_deposit_asset(参数是"资产标识,转账金额")这个API，那么在转账发生后会调用这个API，并且保证转账和触发此API是原子性的，如果中途出现错误，整体回滚，转账失败。

* 使用语句emit EventName(arg: string)可以抛出事件，这里emit是关键字，EventName根据需要写入事件名称，由区块链记录下来，其他节点同步到emit触发的event时可以调用本地设置的回调

* 使用全局函数 is_valid_address(arg: string)可以检查一个地址字符串是否是合法的本区块链地址

* 使用全局函数 is_valid_contract_address(arg: string)可以检查一个地址字符串是否是合法的合约地址

* 使用全局函数get_transaction_fee() 可以获取一笔交易的手续费


    返回值
        正整数 结果值
        -1  手续费资产id异常
        -2  系统异常

* 使用全局函数get_transaction_id(): string 可以获取本次交易的交易id

* 使用全局函数transfer_from_contract_to_public_account(to_account_name: string, asset_type: string, amount: int)可以从当前合约中转账到链上的账户名称，返回是否转账的状态 


    返回值
        0   转账成功
       -1  未知系统异常
       -2  Asset_symbol异常
       -3  合约地址非法
       -4  目标地址非法
       -5  账户余额不足支付转账金额
       -6  转账金额为负数 
       -7  不存在指定账户名


* import_contract:    (string) => table   引用合约，参数是合约的名称字符串，返回合约对应的table

* import_contract_from_address: (string) => table  根据合约地址引用合约，返回合约对应的table

* get_prev_call_frame_contract_address: () => string 获取合约调用栈的上一级合约地址（如果上一级合约调用栈不是合约，则返回nil)

* get_prev_call_frame_api_name: () => string 获取合约调用栈的上一级合约API名称（如果上一级合约调用栈不是合约，则返回nil)

* get_contract_call_frame_stack_size: () => int 获取合约调用栈深度

* wait_for_future_random: (int) => int 根据参数的块高度获取根据这个块数据得到的伪随机数，如果这个块高度还没有达到，则返回0

* get_system_asset_symbol: () => string 获取系统基础资产的资产符号

* get_system_asset_precision: () => int 获取系统基础资产的精度，这个值一般是10的若干次方

* hex_to_bytes: (string) => table 把16进制字符串转成字节数组

* bytes_to_hex: (table) => string 把字节数组转成16进制字符串

* sha1_hex: (string) => string 对参数的16进制字符串转换得到的字节数组进行sha1操作然后转成16进制字符串返回

* sha3_hex: (string) => string 对参数的16进制字符串转换得到的字节数组进行sha3-256操作然后转成16进制字符串返回

* sha256_hex: (string) => string 对参数的16进制字符串转换得到的字节数组进行sha256操作然后转成16进制字符串返回

* ripemd160_hex: (string) => string 对参数的16进制字符串转换得到的字节数组进行ripemd160操作然后转成16进制字符串返回

* cbor_encode: (object) => string 把参数按cbor序列化方式序列化成二进制字节数组，并以16进制字符串的形式返回

* cbor_decode: (string) => object 把16进制字符串对应的二进制字节数组按cbor序列化方式来反序列化成uvm对象

* signature_recover: (string, string) => string 从第一个参数的签名（压缩签名格式，65字节，以16进制字符串表示）和第二个参数的原文摘要（32字节，以16进制字符串表示）
