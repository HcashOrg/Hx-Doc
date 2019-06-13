storage操作
=============

# storage简单介绍
每个智能合约在区块链中可以存储查询一些状态数据，这个功能称作storage。

在一个合约中的API函数中，可以用self.storage获取到当前合约的storage对象，import_contract加载的合约，禁止直接读写其storage

storage对象可以类似table操作，读取属性，写入属性，但是只能嵌套最多一层table，并且storage[某个属性名]值为某个类型的话，修改这个属性的值只能改为同类型的值，如果storage[某个属性名]值为table的话，这个table中不同属性的值的类型要一样，比如都是整数或者都是字符串。

对storage的修改操作不会立刻提交，而是在当前lua堆栈关闭的时候，如果没有发生过错误，就自动提交storage的变更（只提交变更而不是storage本身）


# storage的基本类型

storage中各属性的类型可以使用`int`, `number`, `bool`, `string`, `Stream`, `Map<int>`, `Map<number>`, `Map<bool>`, `Map<string>`, 
`Array<int>`, `Array<number>`, `Array<bool>`, `Array<string>`这些类型


storage操作比如：



    self.storage.name = "hi"
    self.storage.age = 123
    self.storage.name = 456 -- 错误，类型不能改变
    let abc = self.storage.age -- 正确，读取storage属性值
    self.storage.tt = {name: "hi", age: 2} -- 错误，嵌套table的属性值的类型要一样
    self.storage.tt = {name: {name: "hi"}} -- 错误，storage中嵌套table多层不允许
    self.storage.tt = {name: "hi", age: "2"} -- 正确

# fast map storage

storage中的map/array类型会在使用时直接加载整个map/array到内存，只适用于较小的map/array。如果要使用较大的map/array，请使用fast map类型的storage

fast map类型的storage不直接在storage类型定义中定义，而是直接用`fast_map_get`和`fast_map_set`函数来读写。使用fast map来读写的时候，内存中只会加载访问的那一项，从而在fast map很大的时候也只需要占用较小的内存.

比如:

    print("test_fastmap begin")

    var a1 = fast_map_get('balances', 'user1')
    print("a1: ", a1)

    fast_map_set('balances', 'user1', 123)
    var a2 = fast_map_get('balances', 'user1')
    print("a2: ", a2)


    fast_map_set('balances', 'user1', 234)
    var a3 = fast_map_get('balances', 'user1')
    print("a3: ", a3)

    fast_map_set('balances', 'user2', 'world')
    var b1 = fast_map_get('balances', 'user2')
    print('b1: ', b1)

    fast_map_set('balances', 'user2', nil)
    var b3 = fast_map_get('balances', 'user2')
    print('b3: ', b3)


    fast_map_set('balances', 'user1', 'hello')


    var a4 = fast_map_get('balances', 'user1')
    print("a4: ", a4)

    print("test_fastmap end")
