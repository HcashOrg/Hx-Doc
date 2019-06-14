# 函数

## 函数定义

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


## 函数调用

* 函数调用的语法有两种，一是函数对象或者变量后跟着()，可以传入若干个参数，比如 

    var result = sayHi('glua', 123)

* 另一种函数调用语法是，如果函数调用只有一个参数并且这个参数是字符串字面量或者table字面量，则可以省略此处小括号,比如

    var result = print 'hello'
    var result2 = pprint {hello: 2}

* 函数调用中如果return了返回值，会返回给调用者，比如上面例子中就是把返回值赋值给result。

* 函数可能在函数体代码中的不同分支分别有return语句，运行时会根据实际运行结果返回第一个return的值。
  编译期会返回各return语句的值的编译期类型进行union分析出这个函数的返回类型。比如:

    let function hello(n: number)   -- 因为这个函数的函数体内的各return语句的返回值分别是int,string,int，所以这个函数的返回类型是 int | string
        if n > 10 then
            return n            -- 这条return语句返回int类型
        elseif n > 3 then
            return 'hello'      -- 这条return语句返回string类型
        else 
            return 0            -- 这条return语句返回int类型
        end
    end
    

* 函数定义时有个语法，比如function M:init() print(self.name) end，这种冒号语法，相当于用点号，但是自动加上一个self参数表示M对象，
  调用这样函数时也是类似，M:init()调用，运行时会自动把M对象作为self参数放入M.init函数的第一个参数中。但是要注意，合约的API函数定义，只支持用冒号语法。 比如

    var t1 = {name: 'glua'}
    function t1:sayHello()

* 函数调用时需要函数定义时的参数类型和实际调用时使用的变量或者值的类型一致，否则会报错

