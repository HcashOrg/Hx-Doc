Map类型
--------------------

Map<T>类型是内置的一个基本类型,表示哈希表。


字面量语法是{}表示空Map<T>，也可以用形如  { key1 = value1, key2 = value2, key3: value3, ['key4'] = value4, 'key5': value5, ... }的形式初始化一个table值。


Map<T>可以用点操作符或者中括号的方式修改和查询其中某个索引的值，比如:



    let a = { name='uvm', age=1 }      -- 因为'uvm'和1的类型不一样，a变量的类型自动推导为Map<object>类型
    let a1 = { name: 'uvm', age: 1 }   -- 这里a1和a两种初始化Map的方式等价
    let a2 = { name: 'uvm', address: 'China' }   -- 因为'uvm'和'China'的类型都是string，所以a2变量的类型自动推导为Map<string>
    let a3 = {name: 'uvm', 'age': 1 }   -- 这种方式和a，a1等价
    a['abc'] = 'China'    -- 给a插入/修改索引’abc’对应的值
    a.abc = 'China'    -- 效果同a['abc'] = 'China'
    let b1 = a.name     -- 读取a的'name'索引对应的值赋值给新变量b1
    let b2 = a['name']    -- 同 let b2 = a.name


Map<T>类型的值的增删改查可以使用内置模块table模块来操作

例如:



    var a = {name='uvm'}
    let b1 = a.name  -- 获取哈希表a中的'name'这个key映射的值
    let b2 = a['name']  -- 获取哈希表a中的'name'这个key映射的值的另一种方式
    a.name = 'China'  -- 修改或增加哈希表a中'name'这个key映射为'China'
    a['name'] = 'China'  -- 修改或增加哈希表a中'name'这个key映射为'China'的另一种方式
    var k: string, v: string = '', ''
    for k, v in pairs(a) do
        pprint(k, v)  -- 遍历哈希表a，k和v分别是哈希表a的每一项的key和value
    end