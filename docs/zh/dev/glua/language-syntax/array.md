数组类型
----------------------

* uvm中数组类型是用动态数组实现的，长度可变

* 数组类型是可以存储若干个同类型值的数据结构，类型声明语法是Array<T>，其中T用具体某个类型替换，

* 数组字面量语法是

    [ value1, value2, … ]


例如：


    let a: Array<int> = [ 1, 2, 3 ]     -- 注意，这里``>``和``=``两个符号不能连接在一起
    let b: int = a[1]    


* 数组类型和数组字面量支持嵌套和保护table字面量

例如:


    type Person = { name: string, age: int default 0 }

    let p1 = Person({name='p1'})
    let p2 = Person({name='p2', age=24})
    let persons: Array<Array<Person> > = [ [p1, p2], [p2, p3], [p3] ]       -- 注意，这里``>``和``>``不能连接在一起，否则会被识别为``>>``


* Array<T>类型的值的增删改查可以使用内置模块table模块来操作

例如:


    var a = [1,2,3]
    table.append(a, 4)  -- 添加值到数组
    a[3] = 100  -- 修改数组第3个元素
    let array_length1 = table.length(a)  -- 获取数组长度
    let array_length2 = #a  -- 另一种获取数组长度的方式
    table.remove(a, 2)  -- 删除a数组中第2个元素（1-based索引)

    var k: int, v: int = 0, 0
    for k, v in pairs(a) do
        pprint(k, v)  -- 遍历数组a，k和v分别是a中每一项的索引和值，索引从1开始
    end