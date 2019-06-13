基本类型
-----------------

* 包括nil, string, boolean, number, integer, function, table, Map, Array, Stream 几种基本类型
* nil: 表示空数据
* string: 字符串，代码里字面量用双引号或者单引号或者[[和 ]]包围起来，比如"hello world"，'hello'，[[hello world]]。[[和 ]]包括起来的是跨行字符串
* boolean: 布尔类型，表示真或者假，true或者false
* integer: 整数类型，比如123,45这样的，支持64bit整数，整数范围 ``-9223372036854775808`` 到 ``9223372036854775807``
* number: 浮点数类型，表示小数，实现是64bit的double类型，值的范围是 ``-2^1024`` 到 ``2^1024`` ，精度15位小数.
  同时编译期integer类型可以隐式转换成number类型，number类型不能隐式转换成integer类型
* function: 函数类型，函数可以作为变量的值，可以作为参数和返回值，支持闭包，使用起来类似其他类型的值，但是可以调用

* Map<T>: 哈希表类型，T代表哈希表的值类型，是一个键值对，键的类型是string类型，每一个键值对的值类型都是T代表的类型, Map<T>类型是table类型的子类型

  Map<T>类型可以通过table模块中的函数进行操作，可以通过中括号下标或者点号加属性名进行读写访问，比如a['name'], a.name等

* Array<T>: 列表类型，T代表列表的值类型，列表中每一项都是T代表的类型，Array<T>类型是table类型的子类型

  Array<T>类型可以通过table模块中的函数进行操作，可以通过中括号下标进行读写访问，比如a[1]等

* Stream 二进制字节流类型，表示一个二进制比特的流

比如



    let a = {}                    -- 这是一个空哈希表, a变量的类型自动推导为Map<object>
    a['name'] = 'uvm'          -- 修改a指向的哈希表中的键值对
    let b = { age: 2 }               -- b变量类型是Map<int>
    let c={ ['name']='China', age=5000, address: 'China' }            -- c变量类型是Map<object>类型，因为值类型有多种不同类型，所以自动推导为Map<object>
    let d = [ 1, 2, 3 ]              -- d变量是一个包含3个值的列表，类型是Array<int>

* record: 编译期的自定义数据结构，类似C语言的struct结构体，里面可以自定义属性，程序编译完成，在运行时record类型的变量表现相当于table类型

比如


    type Person = {
        name: string,
        age: int default 24,
        age2: int = 24  -- record属性默认值既可以用default也可以用=区分
    }

* table: Map<T>和Array<T>以及record类型的父类型，可以将其他三种类型隐式转换或者通过totable函数显式转换成table类型，也可以将table类型隐式转换成具体子类型，Map类型可以转换成record类型， 其他不同子类型之间不能直接互相转换

* union: 表示在编译期可能是几种不同类型中的某一种类型，比如 let a : int | string | number 表示是int或string或number类型

* literal type: Literal Type类型是一种枚举类型，可以将多个字符串或者数字或者布尔值或者nil字面量作为枚举类型的每一项，
给枚举类型赋值时必须用兼容的枚举类型或者枚举类型中的字面量值，否则编译期报错

比如



    type Gender = "male" | "female" 
    var gender: Gender
    gender = "male"    -- Correct
    gender = "Chinese" -- Error: 编译错误

* object: 编译期类型，是所有类型的父类型，变量被声明为object可以被赋值给任何类型的值，并且访问object类型的变量的属性是在编译期允许的。
比如



    var a: object = 1
    a = "hello"
    pprint(a.name)  -- 编译期通过，运行时失败