合约的特殊交互类型event
==============================


# 合约event简单介绍

合约中可以emit抛出事件，抛出的事件记录到区块链上，区块链网络上的节点同步到这些事件时，可以根据本地配置触发相应一些脚本。
  emit中的参数对应本地回调脚本执行时的几个全局变量，truncated（emit抛出的参数是否被截断）, param（emit时抛出的字符串格式的参数）,
  contract_id（emit触发代码所在的合约ID），event_type(字符串格式的事件类型)。
  

# 触发合约event的方法

可以使用emit关键字的语法来触发合约event，每次执行到emit语句时触发一个这种事件类型的合约event


语法是:


    emit EventName(EventArg)

比如:



    emit hello("uvm")  -- hello是emit抛出的事件名称，"uvm"是参数
    EventName最长支持49个字节长的字符串，EventArg最长支持1024个字节，超长截断
