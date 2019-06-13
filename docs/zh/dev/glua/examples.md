示例
=======


    -- Hello, this is a example contract

    -- 这里是定义合约的storage的类型
    type Storage = {
        name: string,
        age: int,
        money: number,
        is_man: bool,
        int_table: Map<int>,
        int_array: Array<int>
    }

    -- 声明一个合约类型的变量M
    let M = Contract<Storage>()

    -- 给合约定义一个初始化函数，这里M代表合约的变量
    function M:init() 
        pprint('contract demo init')
        self.storage['name'] = 'zhangsan'  -- 这里是给合约的storage各属性进行初始化操作，下面代码类似
        self.storage['age'] = 16
        self.storage['money'] = 1.1345
        self.storage['is_man'] = true
        self.storage['int_table'] = {a: 1,b: 2, c: 3,d: 4}
        self.storage['int_array'] = [5,6,7,8]
    end

    -- 给合约定义一个名为set的API，参数是名为name的字符串类型的参数
    function M:set(name: string) 
        pprint('contract demo set')
        self.storage['name'] = 'lisi'
        self.storage['age'] = 14
        self.storage['money'] = 5.3456
        self.storage['is_man'] = false   
        self.storage['int_table'].a = 15
        self.storage['int_table'].f = 10
        table.remove(self.storage['int_array'], 1)
        pprint('after remove')
        self.storage['int_array'][1] = 99
        pprint('after set array by index')
        pprint(self.storage.int_array)
        self.storage.int_array[#self.storage.int_array+1] = 20
        table.insert(self.storage['int_array'], 19)
        pprint('insert value to array')
        -- 执行从合约账户转账到用户账户的操作
        transfer_from_contract_to_address(user_address_here, get_system_asset_symbol(), 10000)
    end

    function M:get(arg: string)
        pprint('test3 contract demo get')
        pprint(self.storage['name'])  -- 这里是读取合约的storage中属性为name的值并输出
        pprint(self.storage['age'])
        pprint(self.storage['money'])
        pprint(self.storage['is_man'])
        pprint(self.storage['int_table'])
        pprint(self.storage['int_array'])
    end

    return M
