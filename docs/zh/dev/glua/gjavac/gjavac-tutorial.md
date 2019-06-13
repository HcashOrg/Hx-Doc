gjavac 使用指南
===================

因为gjavac 不是直接将Java/Kotlin源代码编译到uvm字节码，所以需要先安装Jetbrains IDEA(有免费的社区版)或者Java SDK来将Java/Kotlin源码编译到Java字节码文件，
然后再使用gjavac编译Java字节码文件.class文件转换到uvm字节码，推荐安装Jetbrains IDEA

可以按照以下步骤配置开发环境:

* 请按照Java SDK 8+ 并正确配置环境变量

* 请安装Jetbrains IDEA Community

2. 新建Java或Kotlin项目，在项目的“引用”中加入gjavac的几个.jar文件。这个项目就是用来写智能合约或者链上脚本的项目，最终我们就是要把这个项目编译到uvm字节码

3. 参照demo中例子，DemoContract1.java和DemoContract.kt是智能合约的例子。修改新建项目的源代码

4. 在同一个Java/Kotlin项目下或者新建一个引用刚才项目的新项目。
   这个项目是用来直接在Jetbrains IDEA中调试调用智能合约Java/Kotlin代码用的，将此项目设置为解决方案的启动项目

5. 在第4步创建的项目中，可以运行项目对智能合约进行模拟调试运行

6. 编译整个项目，在第2步创建的项目的target/classes或者classes文件夹下（根据IDE和项目管理方式可能不同）找到此项目产生的各.class文件

7. 执行`gjavac 第6步产生的合约相关的各class文件 -o result.ass`产生uvm汇编文件`result.ass`和合约元信息文件`result.meta.json`，然后使用`uvm_assembler -g result.ass result.meta.json`得到`result.gpc`文件，这是目标项目的合约.gpc文件

8. 使用产生的.gpc文件来做注册合约，调用合约，注册脚本等后续行为

9. 如果是不是要写合约上链，只是要执行代码，需要在第7步中，改用`uvm_assembler -c result.ass result_meta.json` 来产生 "result.out"文件，这是uvm字节码文件，然后可以用`uvm 文件路径.out`来直接执行这个字节码文件
