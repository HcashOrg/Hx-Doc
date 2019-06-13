Literal Type类型
------------------------

* Literal Type类型是一种枚举类型，可以将多个字符串或者数字或者布尔值或者nil字面量作为枚举类型的每一项，
给枚举类型赋值时必须用兼容的枚举类型或者枚举类型中的字面量值，否则编译期报错。

* 运行期枚举类型表现出的类型和运行时具体的值的类型一致，也就是说，枚举类型是编译期类型，运行期不存在枚举类型

* 枚举类型没有构造函数，这点和record类型不一样

* 语法



    type EnumTypeName = LiteralValue1 | LiteralValue2 ...

    LiteralValue1 可以使用 LiteralString | LiteralNumber | LiteralInteger | LiteralBool | nil 其中任何一种字面量


* 例如



    type Gender = "male" | "female" 
    var gender: Gender
    gender = "male" -- Correct
    gender = "Chinese" -- Error: 编译错误

    function a1(p: true)
    end

    function a2(p: 'Chinese')
    end

    let a3: string = gender -- 枚举类型的变量可以显式降级到枚举值的类型

    -- Literal Type类型也可以拼接
    type Cat = "whiteCat" | "blackCat"
    type Dog = "husky" | "corgi"
    type Pets = Cat | Dog
    -- 等效于 type Pets = "whiteCat" | "blackCat" | "husky" | "corgi"

    type Falsy = "" | 0 | false | nil