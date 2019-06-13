类型声明
----------------------------

声明变量和声明函数的参数时可以同时声明变量类型，函数参数如果不显示声明类型则默认是object类型


例如：



    let a: string = "123"
    var b: G1                          -- G1是某个record类型
    let b: int | string | Person     --   Person是某个record类型，这种声明表示b是int或string或Person类型，也就是union类型
    let c ?: int                       --  这种表示声明的变量c是int或nil类型的，相当于 int | nil的union类型

    let function add(a: number, b: number, c ?: Array<number>)
        return a + b
    end

声明类型时也可以声明函数类型，函数的签名类型语法是 (ArgTypeName1, … ) => RetTypeName


例如



    let a: (int, int, int) => string

还可以将变量或者函数参数的类型声明为Function，表示这个变量/参数的类型是函数，能接受任何函数类型的值，不论参数数量，参数类型和返回值类型。
例如



    let function add(a: number, b: number)
        return a + b
    end
    let add2: Function = add
    let r = add2('123')    -- 这段代码编译期类型没问题，但是运行时会报类型错误
