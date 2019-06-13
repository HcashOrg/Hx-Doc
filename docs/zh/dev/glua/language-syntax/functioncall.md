函数调用
-----------------

* 函数调用的语法有两种，一是函数对象或者变量后跟着()，可以传入若干个参数，比如 


    
    var result = sayHi('uvm', 123)

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



    var t1 = {name: 'uvm'}
    function t1:sayHello()



* 函数调用时需要函数定义时的参数类型和实际调用时使用的变量或者值的类型一致，否则会报错

