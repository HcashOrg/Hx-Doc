函数定义
-------------------

可以定义匿名函数，也可以定义命名函数（但是不能定义全局函数名称），也可以创建闭包

比如



    let abc = function(n: number) 
            return n + 1
            end
    let function add2(n: number)
        return n+2
    end

    let M = {}
    function M:sayHi()
        if 2 < 1 then
            return
        end
        print('Hi')
    end

函数的代码块中可以有return语句，表示返回0个或一个值给调用者，也可以没有return语句。但是return语句后同条件分支后面，本函数体不能有其他语句

比如



    let abc = function (n: number)
        return n+1
        pprint(n)             -- 这里会编译报错，return语句后不应该有其他语句
    end


函数的参数声明可以带有参数类型声明，语法形如： (name: string, age: int)，不带类型声明时这个参数的编译期类型是object类型


# 更简化的函数表达式

以上函数定义的语法也可以定义匿名函数，但是有时候一些简单匿名函数写起来不方便，所以提供更简化的函数表达式语法

* 单表达式函数

函数体只能是单表达式，并且必须和函数参数在同一行

语法规则如下

    Args => Expr


比如

    let a1 = (a: number, b: number) => a + b  -- a1类型是(number, number) => number
    let a2 = a1(1, 2) -- result is 3


* 多行表达式函数

函数体可以是多个语句，并且不限制必须在同一行

语法规则如下

    Args => do
        Block
    end

比如

    let a3 = (a: number, b: number) => do  
        pprint(a + b)
        return a + b
    end -- a3类型是(number, number) => number
    let a4 = a3(1, 2) -- 输出3并a4设为3
