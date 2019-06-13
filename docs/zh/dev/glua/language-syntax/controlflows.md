控制流语法
===============

可以使用两个减号表示--后面的当前行内容是注释，也就是不作为代码处理

# if/else

条件判断语法，后面跟着真假值，比如nil/false都是假值，其他的值都是真值，else表示不满足情况下执行的代码，是可选的语句，例如



    var a = {}
    if false then       
        print('false')
    elseif nil then
        print('ni')
    elseif 2 > 1 then
        print('2>1')
    elseif a then
        print('a')
    else
        print('else')
    end

    或者
    if a then
        print('a')
    end


# for

循环遍历语句，

有2种for语法，第一种是for v = e1, e2, e3 do block end 形式，其中e1是v的初始值，e2是v的结束值（v超过e2时结束循环)，e3是每次遍历对v的增加的值，e3可以是负数，e3是可选的，默认是1

比如



    for v=1,10,2 do
        print(v)
    end

还有一种for语法是for var_1, ···, var_n in f, step do block end 这种形式的，
var_1到var_n是若干个用来循环的变量名，
每次遍历都把step和var_1到var_n的值作为参数传给函数f，结果赋值给var_1,..., var_n.一直循环直到f(step, var_1, ..., var_n)的返回值是nil为止,
比如



    var a

    let f = function(s: number, v: number)
        if not v then
            return 1
        elseif v > 10 then
            return nil
        else
            return v + s
        end
    end

    for a in f, 2 do
        print(a)
    end

    let t1 = [1,2,3]
    for k: int, v: int in pairs(t1) do   -- 这里的pairs的用来遍历Map<T>, Array<T>, table的全局函数，按key排序遍历
        pprint(k, v)
    end

# while/break

语法结构while exp do block end，满足exp条件就可以继续执行block的代码块，其中也可以使用break语句来跳出循环

比如



    var a = 1
    while a < 10 do
        a = a + 1
        print(a)
        if a > 8 then
            break
        end
    end


# repeat

语法结构repeat block until exp，重复执行block的代码块，直到满足exp为真值，其中也可以使用break语句来跳出循环

比如



    local a = 1
    repeat
        a = a + 1
        print(a)
    until a >= 10

# goto

可以通过 labelName的语法定义label，然后函数中其他位置通过goto labelName进行跳转，从而实现控制流的无条件转移.

比如



    var i = 0 
    s1 
    do
        print(i)
        i = i+1
    end
    if i>3 then
        goto end_of_file
    end

    goto s1

    end_of_file
    print("this is end")
    

# and

逻辑操作符，如果左右2个表达式都是真值，结果才是真值，比如true and false结果是false, true and true结果才是true

# or

逻辑操作符，左右2个表达式有一个是真值，结果就是真值，比如true of false结果是真值，false or false结果是false

# not

逻辑操作符，和右边的表达式的布尔值相反，比如not false值为true
