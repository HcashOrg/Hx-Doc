# IDE 合约编译

IDE中合约以工程形式存在，其中，顶层文件夹为csharp、java、kotlin、uvlua四个创世文件夹，不可修改。各创世文件夹根目录下的文件夹即为合约工程，合约工程下的所有文件都属于该合约。

合约编译时，以工程为编译单元，选择工程目录下的任一合约，即可编译该工程。

右键合约文件，选择`编译`，或者点击`调试`->`编译`编译选中的合约文件。

![Start IDE](/img/research/contract_compile_in.png)
![Start IDE](/img/research/contract_compile_in1.png)

合约编译完成后，生成的gpc文件即为需要的合约字节码文件，可单击查看，左下角为该合约拥有的函数，正下方为合约的编译输出。

![Start IDE](/img/research/contract_compile_res.png)

## 环境需求

uvlua合约编译无需额外安装依赖，java、kotlin合约编译需要安装jdk8 环境，并确保java命令能正确执行，csharp合约编译需要安装.net framework4.5及以上版本，并保证dotnet命令可用。