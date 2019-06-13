内置全局函数
=======


    函数名                  函数类型签名（返回类型  （参数函数列表））       描述

    print:     (...) => nil      标准输出参数，遇到table或者函数，输出 类型名: 0000000000000000

    pprint:     (...) => nil     标准输出参数tojsonstring化后的结果

    type:    (object) => string   根据运行时参数类型输出参数的类型对应的字符串，返回number, string, table, function, boolean，遇到其他类型的参数，返回前面5种中对应的字符串

    比如:



        let a1 = 1
        let a2 = type(a1) -- a2值是'number'，运行时的int和number类型，type函数返回结果都是'number'
        let b1: object = 1
        let b2 = type(b1) -- b2值是'number'，因为使用的是运行时类型
        type Person = {}
        let c1 = Person()
        let c2 = type(c1) -- c2值是'table'，运行时的table和record类型，type函数返回结果都是'table'

    require:    (string) => object   引用其他的模块，不当成合约引用，被引用的模块加载后return的结果作为require函数的结果  

    emit:    (string, string) => nil  抛出event事件，由区块链记录

    exit:    (object) => object  结束本次运行，参数是结束码

    pairs:     (table) => object      返回table的迭代器，遍历顺序是先遍历数组部分再遍历哈希表部分,哈希表部分的数字key在string的key前遍历，同样是string类型的key的，短字符串在长字符串前，同样长度字符串的key，按ASCII字符序从小到大

    ipairs:     (table) => object  返回table的数组部分的迭代器

    error:    (...) => object    报错

    getmetatable:    (table) => table   

    tostring:    (object) => string     把参数转成字符串，对于table和函数，返回 类型名: 0

    tojsonstring:    (object) => string   把参数转成json字符串，对于函数，返回function: 0，对于table中的嵌套table，如果有循环引用，使用'address'替代值.json化时对于哈希表会按key的字符序先按长度从小到大再从左到右依次序比较各字符的字符序。对于空table，返回"[]"

    tonumber:    (object) => number  把参数转成number，遇到字符串，从字符串中读取数字，遇到无法解析的字符串或table或函数，返回nil

    tointeger:    (object) => int  把参数转成整数，遇到字符串，从字符串中读取整数，遇到无法解析的字符串或table或函数，返回nil

    todouble:    (object) => number   把参数转成number类型,遇到无法解析的值返回nil

    toboolean:   (obj) => bool       把参数obj转成一个布尔类型的值，obj如果是false或nil返回false，否则返回true

    totable:     (object) => table  把参数当成table使用，如果参数不是table返回nil，主要用于编译期静态类型转换

    next:       (...) => object  将迭代器递进到下一步

    rawequal:     (object, object) => bool  直接比较两个值是否是同一个值（==比较会优先使用__eq__元函数来比较）

    rawlen:     (object) => int   直接获取一个table的数组部分长度

    rawget:    (object, object) => object  直接获取一个table的某个属性

    rawset:    (object, object, object) => nil  直接设置一个table的某个属性

    select:    (...) => object               当index为数字将返回所有index大于index的参数:如：select(2,"a","b") 返回 "b". 当index为"#"，则返回参数的总个数(不包括index)

    setmetatable:    (table, table) => nil    设置table的元表

    fast_map_get:   (string, string)=>object  获取fast map的storage的值

    fast_map_set:   (string, string, object)=>void  设置fast map的storage的值
