gsharpc使用指南
===================

因为gsharpc不是直接将C#源代码编译到uvm字节码，所以需要安装Visual Studio 2017(有免费的社区版)或者.Net Framework SDK来将C#源码编译到.Net字节码文件先，
然后再使用gsharpc编译.Net字节码文件dll文件转换到uvm字节码，推荐安装Visual Studio 2017

可以按照以下步骤配置开发环境:

1. 请安装Visual Studio 2017 Community，安装时请确保其中的C#开发环境选中安装。

2. 新建C#类库项目(.Net Framework)，在项目的“引用”中加入gsharpc的几个.dll文件。这个项目就是用来写智能合约或者链上脚本的项目，最终我们就是要把这个项目编译到uvm字节码

3. 参照demo中例子，Class1.cs是支持的主要语法的例子。DemoContract1.cs是智能合约的例子。修改新建项目的Class1.cs(建议改为其他文件名)

4. 在同一个Visual Studio解决方案下，添加创建一个新的C#控制台项目(.Net Framework)，在项目的“引用”中加入gsharpc的几个.dll文件,并在项目引用中添加刚刚创建的类库项目。
   这个项目是用来直接在Visual Studio中调试调用智能合约C#代码用的，将此项目设置为解决方案的启动项目

5. 在第4步创建的C#控制台项目中，可以运行项目对第2步创建的类库项目进行调试运行

6. 编译整个解决方案，在第2步创建的类库项目的bin/Debug或者bin/Release文件夹下（根据是Debug还是Release模式区分）找到 "{项目名}.dll"，这就是项目产生的.dll文件

7. 执行`gsharpc -gpc 第6步产生的文件路径.dll` 产生"项目名.gpc"，这是目标的合约.gpc文件

8. 使用产生的.gpc文件来做注册合约，调用合约，注册脚本等后续行为

9. 如果是不是要写合约上链，只是要执行代码，需要在第5步中，使用gsharpc -c 文件路径.dll 来产生 "项目名.out"文件，这是uvm字节码文件，然后可以用`uvm 文件路径.out`来直接执行这个字节码文件

10. 暂时尽量不要用Release模式编译C#项目。Release模式会把一些null值优化成0，而在uvm中0和uvm是不一致的，目前gsharpc不支持Release模式编译产生的dll