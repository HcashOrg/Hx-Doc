gsharpc支持的C#语法的例子
=============================


# C#版合约例子



    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    using static UVMCoreLib.UVMCoreFuncs;
    using UVMCoreLib;

    namespace DemoContract1
    {
    public class Storage
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Country; // field test
        public bool IsMale { get; set; }
        public UVMArray<string> ArrayDemo { get; set; }
    }

    public class MyEventEmitteer : IUVMEventEmitter
    {
        public static void EmitHello(string eventArg)
        {
        Console.WriteLine("event Hello emited, arg is " + eventArg);
        }
        public static void EmitHello2(string eventArg)
        {
        Console.WriteLine("event Hello2 emited, arg is " + eventArg);
        }
    }

    public class MyContract : UVMContract<Storage>
    {
        public MyContract() : base(new Storage())
        {
        }
        public override void init()
        {
        print("contract initing");
        this.storage.Age = 100;
        this.storage.Country = "China";
        this.storage.Name = "C#";
        this.storage.IsMale = true;
        this.storage.ArrayDemo = UVMArray<string>.Create();
        this.storage.ArrayDemo.Add("hello");
        pprint(this);
        print("this is contract init api");
        }
        public string GetAge(string arg)
        {
        print("this is contract getAge api");
        return "" + this.storage.Age;
        }
        public string OfflineGetAge(string arg)
        {
        print("this is contract OfflineGetAge api");
        print("age is " + this.storage.Age);
        return "" + this.storage.Age;
        }
        public void TestHello(string arg)
        {
        print("this is contract hello api with argument " + arg);
        }
    }

    public class ExampleLibClass
    {
        public MyContract Main()
        {
        print("start of demo C# contract");              
        var contract = new MyContract();       
        print("end main");
        return contract;
        }
    }

    }


# C#中调用调试合约的例子



    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace GsharpDemo1
    {
    class Program
    {
        static void Main(string[] args)
        {
        var contractEntry = new ExampleLibClass();
        var contract = contractEntry.Main();
        contract.storage = new Storage();
        contract.storage.Age = 25;
        contract.storage.Name = "gsharpc";
        contract.storage.IsMale = true;
        contract.storage.Country = "China";
        Console.WriteLine(contract.OfflineGetAge("hello"));
        }
    }
    }



# C#版更多语法的例子



    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using static UVMCoreLib.UVMCoreFuncs;
    using UVMCoreLib;

    namespace Demo1
    {
    public class Storage
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Country; // field test
        public bool IsMale { get; set; }
    }

    public class HelloContract
    {
        public void SayHello(string arg)
        {
            print("hello, this is hello contract api SayHello with arg " + tostring(arg));
        }
    }

    public class MyEventEmitteer : IUVMEventEmitter
    {
        public static void EmitHello(string eventArg)
        {
            Console.WriteLine("event Hello emited, arg is " + eventArg);
        }
        public static void EmitHello2(string eventArg)
        {
            Console.WriteLine("event Hello2 emited, arg is " + eventArg);
        }
    }

    public class MyContract : UVMContract<Storage>
    {
        public MyContract() : base(new Storage())
        {
        }
        public override void init()
        {
            print("contract initing");
            this.storage.Age = 100;
            this.storage.Country = "China";
            this.storage.Name = "C#";   
            pprint(this);
            print("this is contract init api end");
        }
        public string GetAge(string arg)
        {
            print("this is contract getAge api");
            return "" + this.storage.Age;
        }
        public string OfflineGetAge(string arg)
        {
            print("this is contract OfflineGetAge api");
            print("age is " + this.storage.Age);
            return "" + this.storage.Age;
        }
        public void TestHello(string arg)
        {
           print("this is contract hello api with argument " + arg);
        }
    }

    public class ExampleLibClass
    {
        
        public int SayHi()
        {
            Console.WriteLine("hello,\tCecil");
            var a = 5;
            var b = 100;
            var sum = 3;       

            if (b > 50)
            {
                Console.WriteLine("hello, this is if condition=true branch");
            }
            else if (b > 25)
            {
                Console.WriteLine("hello, this is if elseif condition branch");
            }
            else
            {
                Console.WriteLine("hello, this is if condition=else branch");
            }
            var d = "a " + sum;
            Console.WriteLine(b);
            Console.WriteLine("hello world");
            Console.WriteLine("sum is " + 123);
            Console.WriteLine("sum is " + d);
            Console.WriteLine(a + b);

            print("" + 123);

            return a + b + 1234;
        }

        public void TestIf()
        {
            Console.WriteLine("this is test if function");
            var b = 30;
            if (b > 50)
            {
                Console.WriteLine("hello, this is if condition=true branch");
            }
            else if (b > 25)
            {
                Console.WriteLine("hello, this is if elseif condition branch");
            }
            else
            {
                Console.WriteLine("hello, this is if condition=else branch");
            }
            }            

            public void TestFor()
            {
            int sum = 0;
            for (var i = 0; i < 10; ++i)
            {
                sum += i;
                Console.WriteLine("for loop in");
            }
            Console.WriteLine("test for sum is " + sum); // sum=45
        }

        public void TestWhile()
        {
            int sum = 0;
            int i = 0;
            while (i < 10)
            {
                sum += i;
                Console.WriteLine("while loop in");
                i++;
            }
            Console.WriteLine("test while loop sum is " + sum); // sum=45
            }

            public void TestCompare()
            {
            var a = 5;
            Console.WriteLine("5==5 is " + ((a == 5) ? "true" : "false"));
            Console.WriteLine("4<5 is " + ((4 < a) ? "true" : "false"));

            if (a == 5)
            {
                Console.WriteLine("a==5");
            }
            else
            {
                Console.WriteLine("a!=5");
            }
        }

        public void TestContinue()
        {
            Console.WriteLine("test continue case");
            int sum = 0;
            for (var i = 0; i < 10; ++i)
            {
                if (i == 5)
                {
                Console.WriteLine("continue when i=" + i);
                continue;
                }
                sum += i;
                Console.WriteLine("for loop in");
            }
            Console.WriteLine("test for sum with continue is " + sum); // sum=40
        }

        public void TestBreak()
        {
            Console.WriteLine("test break case");
            int sum = 0;
            for (var i = 0; i < 10; ++i)
            {
                if (i == 5)
                {
                Console.WriteLine("break when i=" + i);
                break;
                }
                sum += i;
                Console.WriteLine("for loop in");
            }
            Console.WriteLine("test for sum with break is " + sum); // sum = 10
            }

            public int TestFuncArg(int a, int b, String name, bool c)
            {
            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine("name=" + name); // name=C#
            Console.WriteLine("c=" + c); // c=true  
            Console.WriteLine("hi " + c); // hi true
            Console.WriteLine("args a + b = " + (a + b)); // a+b=11 when a = 5, b = 6
            a = 10;
            b = 20;
            return a + b; // should be 30
            }

            public void TestMultiConcat()
            {
            int a = 1;
            // 不支持超过2个字符串的字符串连接，因为.net数组是0-based，uvm数组是1-based
            // Console.WriteLine("TestMultiConcat " + a + " and " + a);
        }

        public void TestArithmeticOperators()
        {
            var a = 8;
            var b = 3;
            var c = a - b;
            Console.WriteLine("8-3=" + c); // 8-3=5
            Console.WriteLine("8*3=" + (a * b)); // 8*3=24
            Console.WriteLine("8/3=" + (a / b)); // 8/3=2, 整数除法
            Console.WriteLine("8 div 3=" + div(a, b)); // 8 div 3=2.666, 浮点除法
            Console.WriteLine("8 idiv 3=" + idiv(a, b)); // 8 idiv 3=2 整数除法
            Console.WriteLine("7%3=" + (7 % b)); // 7%3=1
            // 因为0在uvm中是布尔真值，所以暂时用一个单独的函数库做布尔运算
            Console.WriteLine("true && false=" + and(true, false)); // true && false = false
            Console.WriteLine("true || false=" + or(true, false)); // true || false = true
            Console.WriteLine("9&3=" + (9 & b)); // 9&3=1
            Console.WriteLine("9|3=" + (9 | b)); // 9|3=11
            Console.WriteLine("9^3=" + (9 ^ b)); // 9^3=10
            Console.WriteLine("8>>3=" + (a >> b)); // 8>>3=1
            Console.WriteLine("8<<3=" + (a << 3)); // 8<<3=64     
            var t = true;
            print("-8=" + (-a)); // -8=-8        
            print("-8=" + neg(a)); // -8=-8
            print("!true=" + (!t)); // !true=0   这里.net字节码把布尔当0/1 int处理  
            print("!true=" + not(t)); // !true=false        
        }

        public void TestPlainObject()
        {
            var storage = new Storage();
            storage.Name = "C#";
            storage.Age = 100;
            storage.IsMale = true;
            storage.Country = "China";
            Console.WriteLine("storage name is " + storage.Name);
            Console.WriteLine("storage age is " + storage.Age);
            Console.WriteLine("storage isMale is " + storage.IsMale);
            print("storage country is " + storage.Country);
            pprint(storage);
            pprint(null);
        }

        public void TestArray()
        {
            var array1 = UVMArray<int?>.Create();
            array1.Add(1);
            array1.Add(2);
            array1.Add(3);
            array1.Add(4);
            pprint(array1);
            print("array 1 size is " + array1.Count()); // 4      
            array1.Set(4, 2); 
            print("array[4] is " + array1.Get(4)); // 2  
            array1.Pop();
            print("array 1 after changed size is " + array1.Count()); // 3
            print("array[3] is " + array1.Get(3)); // 3      
            for (int i = 1; i <= array1.Count(); ++i)
            {
                var item = array1.Get(i);
                print("index: " + i);
                print("value: " + item);
            }
        }

        public void TestMap()
        {
            var map1 = UVMMap<string>.Create();
            map1.Set("name", "C#");
            map1.Set("country", "China");
            Console.WriteLine("map1's name is " + map1.Get("name"));
            Console.WriteLine("map1's country is " + map1.Get("country"));

            // 遍历map的demo
            var map1PairsIter = map1.Pairs();
            pprint(map1PairsIter);
            var keyValuePair = map1PairsIter(map1, null);
            pprint(keyValuePair);
            print(keyValuePair.Key);
            print(keyValuePair.Value);
            while (keyValuePair.Key != null)
            {
                Console.WriteLine("key: " + tostring(keyValuePair.Key));
                Console.WriteLine("value: " + tostring(keyValuePair.Value));

                if (keyValuePair.Key == "name")
                {
                print("found key==name pair");
                }
                keyValuePair = map1PairsIter(map1, keyValuePair.Key);
            }

        }

        public void TestEmitEvent()
        {
            MyEventEmitteer.EmitHello("hello");
            var a = 3;
            var b = 4;
            MyEventEmitteer.EmitHello2("" + (a + b)); 
        }

        public void TestModules()
        {  
            // 引用string模块，UVMStringModule类型是返回的模块对象的类型，必须用合适的类型来引用合适的模块
            var strModule = importModule<UVMStringModule>("string");
            pprint("string module: " + tojsonstring(strModule));

            // 可以调用string模块的函数来获取字符串长度，也可以用C#的字符串类型的内置Length属性来获取字符串长度
            var helloLength = "hello".Length;
            var helloLength2 = strModule.Len("hello");
            print("hello string length is: " + helloLength);
            print("hello string length2 is: " + helloLength2);

            var tableModule = importModule<UVMTableModule>("table");
            var table1 = UVMArray<string>.Create();
            table1.Add("a");
            tableModule.Append(table1, "b");
            var table1Count = tableModule.Length(table1);
            print("table1 size is: " + table1Count);

            var mathModule = importModule<UVMMathModule>("math");
            var floor1 = mathModule.Floor(3.3);  
            print("floor(3.3) = " + floor1);

            var abs1 = mathModule.Abs(-4);
            print("abs(-4) = " + abs1);

            var pi = mathModule.pi;
            print("pi = " + pi);

            var timeModule = importModule<UVMTimeModule>("time");            
            print("date: " + timeModule.Tostr(1494301754));

            var jsonModule = importModule<UVMJsonModule>("json");
            print("dumps of json module is: " + jsonModule.Dumps(jsonModule));

            var typeOfNumber = Type(123);
            print("type(123) = " + typeOfNumber);

            var array1 = UVMArray<string>.Create();
            array1.Add("a");
            array1.Add("b");
            print("rawlen(['a', 'b'])=" + rawlen(array1));

            print("caller_address = " + tostring(caller_address())); // 非合约中会返回nil

            var array1Iter = array1.Ipairs();
            var array1keyValuePair = array1Iter(array1, 0);
            while(array1keyValuePair.Key != null)
            {                             
                print("key: " + array1keyValuePair.Key);
                print("value: " + array1keyValuePair.Value);
                array1keyValuePair = array1Iter(array1, array1keyValuePair.Key);
            }                                            
        }

        public void TestImportContract()
        {
            var helloContract = importContract<HelloContract>("hello");
            helloContract.SayHello("C#");
        }
        
        /**
        * 这是程序入口，必需，且必须是非static方法.如果是要定义合约，需要返回类型是一个合约类型
        */
        public MyContract Main()
        {
            print("start of demo C# contract \r\n another line");
            
            var result = SayHi();
            Console.WriteLine("SayHi result is " + result);
            TestIf();
            TestFor();
            TestWhile();
            TestContinue();
            TestCompare();
            TestBreak();
            var testFuncArgResult = TestFuncArg(5, 6, "C#", true);
            Console.WriteLine("testFuncArg result is " + testFuncArgResult);
            TestArithmeticOperators();
            TestPlainObject();
            TestArray();
            TestMap();
            TestEmitEvent();
            TestModules();
            
            // TestImportContract();

            var contract = new MyContract();

            contract.storage = new Storage(); 
            contract.init();

            pprint(contract); 
            
            var offlineGetAgeRet = contract.OfflineGetAge("");
            print("OfflineGetAge ret is " + offlineGetAgeRet);    
            
            print("end main");
            return contract;
        }
    }
    }
