合约定义
============

# 一个基本的合约的格式



    type Storage = {
        -- 合约中storage的各属性定义在这里，比如 name: string
    }

    var M = Contract<Storage>()

    function M:init()
        -- 这里加入合约初始化逻辑
        -- 合约的storage必须在这个函数里进行初始化
    end

    function M:on_deposit(num: int)
        -- 可选的转账到合约的回调函数(单资产链模式），当用户转账到合约的时候会触发这个回调,这个函数如果不需要可以不用写
    end

    function M:on_deposit_asset(arg: string)
        -- 可选的转账到合约的回调函数(多资产链模式)，参数是"资产标识,不带精度的转账金额", 当用户转账到合约的时候会触发这个回调,这个函数如果不需要可以不用写
    end

    function M:on_destroy()
        -- 可选的合约被销毁时触发的回调函数
    end

    function M:on_upgrade()
        -- 可选的合约升级到正式合约时触发的回调函数
    end

    function M:demoApi1(arg1: string)
        -- 这里是示例的用户自定义API函数，一个合约可以有多个自定义API函数，demoApi1是这里的函数名，自定义API函数自带一个self变量表示当前合约，
        -- 另外可以有0个参数或者有一个string类型的参数
    end

    return M   -- 这里是必须的，表示使用哪个对象代表本合约


# 合约全局变量

合约中可以通过caller和caller_address全局变量分别访问本次发起合约调用的用户的公钥和地址


# 合约全局方法

* [contract api reference](/contract-api-reference)


# 如何在合约中调用一个链上已经存在的合约

可以通过import_contract/import_contract_from_address函数引用其他的链上正式合约，返回代表这个被引用的合约的对象，从而可以通过这个返回的对象调用这个被引用的用户自定义API。

但是不能直接访问被引用合约的init/on_deposit/on_destroy/on_upgrade以及storage对象，只能通过调用API访问


比如:


    let demo = import_contract 'demo'
    demo:hello("China")  -- 这里调用了名称为demo的正式合约的hello函数API，使用"China"作为参数


# 合约的内置模块的使用

合约中可以直接使用内置库的模块，不需要进行require

[默认引入库](/auto-import-libs)


# 一个合约的整个生命周期流程

* 编写合约

* 编译合约

* 注册合约到区块链上成为临时合约

* 升级合约成为正式合约/销毁临时合约

* 调用合约API

* 转账到合约


# 合约定义的约束

* 合约作为一个特殊的模块，合约中不能定义全局变量，不能修改_ENV, _G的值，可以通过import_contract '合约名称'来加载合约，
  返回加载的合约模块信息，合约必须返回一个record类型的对象，表示合约的api，其中必须包含一个init函数。合约有id, name, storage等内置属性，注意不要用这些名字的API，否则会被覆盖掉。

* 合约代码中，合约对象作为一个record类型，必须在合约代码结尾return这个record对象,return的这个对象代表了本合约，如果合约中用到了合约的storage，因为语法有静态类型检查，所以需要给合约的storage属性声明一个类型

* 合约的id/name/storage这三个属性都是在执行时由区块链提供值的，并且这三个属性本身是只读的，但是storage属性的内容是可以改变的

* 合约的storage需要声明为record类型，storage的record类型的各属性的类型只能是int, number, bool, string, Map<int>, Map<number>, Map<bool>, Map<string>, Array<int>, Array<number>, Array<bool>, Array<string> 其中某一种

* 内置库有一个Contract<T>泛型可以作为合约类型的基类，具体使用时可以将合约要return的变量声明为Contract的实例类型（需要提供一个record类型作为合约storage的类型，作为Contract的类型变量）

比如



    type Storage = {               -- 这里声明一个record类型，用来作为合约的storage的类型，名称自定义
        name: string,                    -- 这里只是类型声明，合约的self.storage还是要给每一项初始化赋值才能使用
        age: int,
        age2: int default 24,                -- 这里的default值，对于合约的storage初始值不起作用，因为合约的storage是由区块链进行初始化的
        error_property: int | string         -- 这个属性会导致编译错误，因为storage的record类型的属性有类型限制
    }
    
    let M = Contract<Storage>()    --- 这里声明合约的类型是Contract<Storage>，而Contract<T>是一个泛型类型，其中泛型参数类型T是其中record属性的类型
    
    function M:init()                    -- 因为M变量是record类型，声明M的成员函数，只能用function M:funcName的方式，不能用function M.funcName的方式
        pprint("contract init running"，self.id, self.name)        -- 这里的self指当前对象也就是这里的合约对象的值
        self.storage.name = 'hi'        -- 因为这里的storage的name属性作为string类型使用，所以上面的Storage类型的name属性要声明为string类型
        let storage = self.storage
        storage.age = 100                -- 即使把self.storage赋值给其他变量，storage的类型依然是上面声明的Storage类型，编译期会检查类型
    end

    function M:testSomeLogic()
        let contract2 = import_contract 'contract2'   -- 这里需要引用已经上链的合约名字，如果使用不存在的合约名字，编译期会报错
        contract2.storage.name = 'uvm' -- 这会编译期报错，因为合约中不能直接操作引用的其他合约的storage
        self.storage.age = self.storage.age + 1
        if self.storage.age < 100 then
            transfer_from_contract_to_address('这里填入目标地址', 'HSR', 10000000)
        end
        self.name = 'hello'            -- 报错，合约的id/name/storage属性都是只读的属性，不可修改
    end

    function M:query()
        pprint('query demo')
    end

    return M

* 合约中不能直接操作引用的其他合约的storage，也不能调用合约本身或者其他合约的init,on_deposit,on_upgrade,on_destroy的API，编译期会报错

* 合约代码在编译时，会加载一次合约API外的代码，所以如果合约API外代码有运行时问题也会在编译合约时报错
