table类型
============

table类型是内置的一个基本类型，每个table值包含数组部分和哈希表两个部分，其中数组部分的索引从1开始，record类型在运行时也是表现为table类型。


字面量语法是{}表示空table，也可以用形如  { key1 = value1, key2 = value2, ['key3'] = value3, ... }的形式初始化一个table值。


table可以用点操作符或者中括号的方式修改和查询其中某个索引的值，比如:



    let a = { name='uvm', age=1 }
    a[1] = 123   -- 给a的数组部分加入一个值123
    a['abc'] = 'China'    -- 给a的哈希表部分插入/修改索引’abc’对应的值
    a.abc = 'China'    -- 效果同a[‘abc’]
    let b1 = a.name     -- 读取a的哈希表部分的’name’索引对应的值赋值给新变量b1
    let b2 = a['name']    -- 同 a.name
    let b3 = a[1]             -- 读取a的数组部分的第1个值赋值给新变量b3
