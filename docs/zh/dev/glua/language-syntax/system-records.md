内置record类型
=======

* `Contract<S>`类型，用于声明合约变量类型,S使用当前合约的storage类型替换

内置的Contract类型的代码实现如下：



    type Contract<S> = {
        id: string,
        name: string,
        storage: S
    }

使用例子如下：



    type Storage = {
        author_name: string,
        age: int
    }
    let M: Contract<Storage> = {}
    function M:init()
        self.storage.age = 100
        self.storage.author_name = 'uvm'
        -- 这里self.id和self.name, self.storage.author_name是字符串类型，self.storage.age 是整数
        
    end
    return M

* Stream类型，用于作为字节流类型使用，是一个内置的record类型，但是Stream类型的对象访问其中的成员函数只能用冒号不能用点号的形式

内置的Stream的类型签名如下：



    type Stream = {
        pos: () => int,  -- 获取字节流中当前位置
        eof: () => bool, -- 获取字节流是否到结尾
        current: () => int,  -- 获取当前字节（转成int类型)，如果已经读取结束了无法读取当前字节，返回-1
        next: () => bool,    -- 如果字节流还没有到结尾，pos递进1步，返回true，否则返回false
        reset_pos: () => nil,   -- 重组字节流的当前读取位置到起始位置
        size: () => int,        -- 获取字节流的长度
        push: (int) => nil,     -- 把参数取最后一字节（转成C风格的char类型），加入字节流
        push_string: (string) => nil  -- 把参数字符串中每一个字节加入字节流
    }

使用例子如下：



    let a1 = Stream()
    a1:push(123)    -- 对于Stream类型，不能使用a1.push(a1, 123)这种点号访问成员函数的方法
    a1:push_string('abc')
    let s1 = a1:size()
    pprint("a1 size is ", s1)
    pprint('a1 is ', tostring(a1), tojsonstring(a1))
    pprint('a1 pos is', a1:pos())

    var c = a1:pos()

    var s = ''
    while c < a1:size() do
        s = s .. tostring(a1:current())
        pprint("a1[", c, "]=", a1:current())  -- 应该依次输出 a1[0]=123   a1[1]=97    a1[2]=98      a1[3]=99
        c = c + 1
        a1:next()
    end
