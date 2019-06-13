gsharpc支持的C#编程语言子集
=================

gsharpc只支持使用C#编程语言的一个子集来编写智能合约，包括了大部分C#的语法和控制结构，另外提供了类似uvm语言的类库的内置函数和类型。本文描述支持的C#子集的语法和类库


# C#的基本语法

参考微软官方文档 https://docs.microsoft.com/zh-cn/dotnet/articles/csharp/programming-guide/index
本文之后会描述哪些特性是支持的


# C#版智能合约格式

格式例如：



    using static UVMCoreLib.UVMCoreFuncs;  // 引用内置全局函数库
    using UVMCoreLib; // 引用其他内置库

    public class Storage  // 这里定义合约的storage的类型
    {
        public string Name { get; set; } // 定义storage的属性
        public int Age { get; set; }
        public string Country; // 用C#的field语法也可以定义storage属性
        public bool IsMale { get; set; }
        // 这里定义string数组类型的storage属性，因为uvm的数组和C#数组用法不兼容，所以用UVMArray来代币uvm中的数组类型
        public UVMArray<string> ArrayDemo { get; set; } 
    }

    // 这是可选的，实现IUVMEventEmitter接口的类型定义了本合约中有哪些event事件需要抛出
    public class MyEventEmitteer : IUVMEventEmitter
    {
        // "Emit"开头的静态方法，且只有一个字符串参数，返回值是void的，代表一种event事件，事件名称是方法名去掉"Emit"前缀
        public static void EmitHello(string eventArg)
        {
             // 这里抛出event事件的方法体，直接C#项目中调试的时候可以用来调试，编译到uvm字节码的时候不包括这里的方法体
            Console.WriteLine("event Hello emited, arg is " + eventArg);
        }
        public static void EmitHello2(string eventArg)
        {
            Console.WriteLine("event Hello2 emited, arg is " + eventArg);
        }
    }

    // 这里是具体的合约类型，类型名自定义，需要符合C#的类型名规范，需要继承UVMContract<T>类型，其中T类型表示合约的storage类型
    public class MyContract : UVMContract<Storage>
    {
        // 合约的构造函数，这个函数内不要添加方法体代码，增加了在编译到uvm字节码后也不会包含，只有C#项目直接运行时起效
        public MyContract() : base(new Storage())
        {
        }

        // 必须实现的init方法，合约注册的时候初始化合约的函数
        public override void init()
        {
            print("contract initing"); // 这里调用的print函数就是文件头using static引用的UVMCoreLib.UVMCoreFuncs中的静态方法
            this.storage.Age = 100; // 合约的storage的属性都需要在init方法中初始化，否则无法成功注册合约到链上
            this.storage.Country = "China";
            this.storage.Name = "C#";
            this.storage.IsMale = true;
            this.storage.ArrayDemo = UVMArray<string>.Create(); // 这里是创建一个空的元素类型是string类型的uvm数组
            this.storage.ArrayDemo.Add("hello"); // 给uvm数组中添加一个元素"hello"
            pprint(this);
            print("this is contract init api");
        }

        // 这里是定义了一个合约中的API，接受一个string类型参数，返回一个string类型对象
        public string GetAge(string arg)
        {
            print("this is contract getAge api");
            return "" + this.storage.Age; // 返回两个对象连接后的字符串，字符串和其他类型用+连接的时候，会自动调用tostring转换成字符串连接
        }

        // 定义一个返回string类型对象的offline接口，offline接口在链上通过call_contract_offline命令调用，调用操作不上链，主要用来定义查询类函数
        public string OfflineGetAge(string arg)
        {
            print("this is contract OfflineGetAge api");
            print("age is " + this.storage.Age); // 这里this.storage读取了本合约的storage对象
            return "" + this.storage.Age;
        }

        public void TestHello(string arg)
        {
            print("this is contract hello api with argument " + arg); // 这里访问了合约API的参数arg
        }
    }

    // 除了合约类型，storage类型外，还需要额外定义一个包含Main方法的类型，作为合约的加载入口
    public class ExampleLibClass
    {
        // 非静态的Main方法作为合约的加载入口，返回类型是定义的合约类型，这个方法会被调用用来加载合约，返回的合约对象就是本文件定义的合约
        public MyContract Main()
        {
            print("start of demo C# contract");
            var contract = new MyContract();
            print("end main");
            return contract; // 必须返回一个合约对象
        }
    }


# 内置库

通过 importModule(string moduleName) 函数可以引用内置模块库，比如 string, table, json模块等

内置了一些全局函数，列表如下：



    bool and(bool a, bool b) 布尔与
    bool or(bool a, bool b) 布尔或
    number div(number a, number b) 浮点除法
    int idiv(number a, number b) 整数除法
    number neg(number a) 数值取反
    bool not(bool a) 布尔取反
    void print(object obj) 输出对象字符串化后结果
    string tostring(object obj) 把对象转成字符串返回
    string tojsonstring(object obj) 把对象转成json字符串返回
    void pprint(object obj) 把对象json字符串化后的结果输出
    int? tointeger(object obj) 把对象转换成整数返回，如果转换失败，返回null
    float? tonumber(object obj) 把对象转换成浮点数返回，如果转换失败，返回null
    T importContract<T>(string contractName) 引用其他合约，返回合约的对象，调用时需要制定合约的接口类型T
    T importModule<T>(string moduleName) 引用内置模块，返回模块的对象，调用时需要制定模块的类型
    void Debug() 调试用，用来输出模拟C#的evaluate stack
    string Type(object value) 返回参数的类型的字符串
    void Exit(int exitCode) 用某个错误码报错退出调用
    void Error(string errorMsg) 携带某个错误信息字符串退出调用
    UVMMap<object> getmetatable(UVMTable table) 获取table的元表
    void setmetatable(UVMTable table, UVMTable metatable) 设置table的元表
    bool toboolean(object value) 把参数转换成布尔类型
    UVMTable totable(object value) 把参数转换成table类型，如果原来就是table类型，保持不变，否则返回null
    bool rawequal(object a, object b) 比较a和b两个对象是否相等
    long rawlen(object value) 获取参数的长度（数组部分长度或字符串长度）
    object rawget(object table, object key) 获取table的某个属性key
    void rawset(object table, object key, object value) 设置table的某个属性key值为value
    int transfer_from_contract_to_address(string address,
      string assetName, long amount) 从合约转账到地址
    void set_mock_contract_balance_amount(string contractAddress, 
      string assetName, long amount) 模拟设置合约的余额，方便测试用
    long get_contract_balance_amount(string contractAddress, string assetName) 获取合约的余额
    long get_chain_now() 获取链上时间
    long get_chain_random() 获取链上随机数
    long get_header_block_num() 获取链上块号
    long get_waited(long num) 获取第num个块上某个数字（可用未来数来模拟随机数）
    string get_current_contract_address() 获取当前合约地址
    string caller() 当前调用者的公钥
    string caller_address() 当前调用者的地址
    long get_transaction_fee() 获取交易手续费，10万精度
    long transfer_from_contract_to_public_account(string to_account_name, string assertName,
      long amount) 从合约转账到账户


# 支持的C#语法



    类型定义和使用

    类型的属性和字段定义和使用

    类型的成员方法，静态方法定义和使用

    函数调用，函数参数，函数返回值的支持

    类型继承

    数值操作

    字符串连接（通过+连接的方式只支持2个对象进行字符串连接）

    布尔操作

    变量声明和赋值

    this对象的使用

    if/else if/else控制流结构

    for控制流结构

    uvm的Map和Array类型的创建和修改

    uvm的Map和Array类型的遍历（迭代器遍历）

    while控制流结构

    continue和break语句的支持

    比较操作符

    内置函数和库的调用

    new 新类型

    emit event

    引用内置模块

    引用合约
    