本地脚本
==================

# 本地脚本简单介绍

本地回调脚本同样适用本语言和语法，但是不需要遵循合约的格式，不需要脚本结尾返回一个table，也可以定义全局变量。


本地回调脚本执行时会按照脚本中代码顺序依次执行。


# 一个简单的接受合约event的脚本



    pprint("got event ", event_type, " from contract ", contract_id（emit触发代码所在的合约ID）, " param is ", param)
    

# 本地脚本的全局变量



    truncated: emit抛出的参数是否被截断
    param: emit时抛出的字符串格式的参数
    contract_id: emit触发代码所在的合约ID
    event_type: 字符串格式的事件类型


# 本地脚本的模块使用

本地脚本可以通过require函数引入内置库的模块，从而在脚本中使用这些模块的功能

比如


    let http = require 'http'
    http.listen('127.0.0.1', 3000)  -- 在3000端口监听http请求


# 如何将本地脚本绑定到链上合约

在区块链的控制台中或者界面中操作按钮操作。


使用命令"compile_script 脚本源文件路径"来编译


使用命令"add_script 脚本编译后的文件路径 描述字符串"来将本地脚本注册到链上