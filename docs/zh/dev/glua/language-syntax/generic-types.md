泛型
---------------------

* 支持在record类型定义时使用泛型来定义，在属性的类型中当做类型来使用。

* 带有泛型的record类型需要用实际类型实例化后才可以用来声明变量类型


* 定义新record类型时支持泛型，支持多个泛型参数


语法 



    type RecordName <GenericName1, … > = { PropName: TypeName, … }

例如：



    type G1<T1, T2, T3> = {   -- 这里T1，T2，T3是泛型的类型变量，这里定义了个泛型类型G1，具体使用时可以用具体类型分别替代T1，T2，T3，产生一个新类型
        id: string,
        a: T1,
        b: T2,
        c: T3
    }

* 泛型类型部分实例化和类型重定义


* 带有泛型的record类型，可以不使用全部泛型的类型变量，只替换其中部分类型变量产生新泛型类型


语法 



    type RecordName {<GenericName1, … > } = RecordNameExisted { <TypeName1, … >  }


例如：



    type G2<T> = G1<int, T, string>        -- 定义一个有类型变量T的新泛型G2，这个泛型是用int,T,string分别替代G1泛型中的三个类型变量产生的新类型
    type G3 = G2<string>                   -- 定义一个新类型G3，这个类型是用string替代G2泛型中的类型变量产生的新类型

* 泛型的实例化指用具体类型替代泛型中的类型变量，比如G2<string>就是对G2泛型的实例化

* 泛型实例化后可以直接在变量/函数参数的类型声明中使用，也可以直接用在构造函数中

比如:



    type G2<T> = { name: string, info: T }
    let a1: G2<string> = { name: 'uvm', info: 'hello' }
    let a2 = G2<int>({ name: 'uvm', info: 123 })