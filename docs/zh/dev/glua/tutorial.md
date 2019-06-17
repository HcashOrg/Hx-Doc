# 入门Tutorial

[[toc]]

## 开发流程

![Start IDE](/zh/img/smart_contract_dev_process.png)

通常我们在测试链上进行开发调试，当开发测试完成后，再部署到正式链使用。

你需要什么：

1. IDE 开发环境
2. 正式链账户及一定数量的代币


## 1. 开发环境

1. 首先下载最新版 [AnyChain IDE](https://github.com/AnyChainOrg/AnyChainIDE/releases/download/v1.0.21/AnyChainIDE_win_1.0.21.zip)
2. 解压后直接运行 `AnyChain.exe` 程序，打开IDE。
3. 第一次启动时会提示设置数据目录的路径，根据自己实际情况选择合适的路径即可。
4. 进入 IDE 主界面后选择 "文件" -> "配置" 菜单，可以设置语言为中文，启动类型设置为"测试链"。点击"确认"按钮后重启 IDE。
5. 再次进入 IDE 后测试链已经运行，其中有一个默认的账户，存放足够的代币用于测试。


## 2. 你的第一个glua程序

进入 IDE 主界面后点击工具栏第一个图标，新建一个程序文件，此时会弹出对话框，在对话框内选择合适的文件路径并输入文件名。然后点击确认按钮。
此时一个默认的合约模板会自动生成。你可以直接使用模板代码，也可以输入下面的例子代码：


    type Storage = {
        -- insert new storage properties here
    }

    var M = Contract<Storage>()

    function M:init()
        print("初始化")
        -- insert init code of contract here
    end

    -- 这里使用 offline 关键字表示 API 执行结果无需上链，具体参考"智能合约定义"一章。
    offline function M:hello(arg: string)
        emit hello(arg)
        return("hello "..arg)
    end


## 3. 编译、注册及调用

1. 点击工具栏的"编译"按钮完成代码编译，生成".gpc"文件并输出该文件所在路径。
2. 点击工具栏的"注册"按钮把编译好的合约代码注册上链。注意在弹出的对话框选择正确的合约代码文件。记录下返回信息中的 `contract_id`。
3. 点击工具栏的"控制台"按钮，执行以下语句(请替换`contract_id`为实际值)。
```
    invoke_contract_offline "nathan" "contract_id" "hello" "123"
```
4. 控制台输出如下：

```
    >>>invoke_contract_offline "nathan" "HXTCQtETHn1MUjN3hJNTmWKe9gwFrZWFH12mN" "hello" "123"
    {
        "id": 2192,
        "jsonrpc": "2.0",
        "result": "hello 123"
    }
```

通过以上简单几步，我们就创建了一个智能合约，并注册到测试链上。最后通过调用该智能合约的接口，我们获得了想要的输出。

## 4. 开始用glua编写智能合约

通过以上简单的例子我们有了一个直观的感受。智能合约的开发过程非常简单。而开发实际的应用则需要复杂的业务逻辑，也可能要用到更为复杂的数据结构和控制流程。这里可以参考具体的语法参考文档。

[语言参考](/zh/dev/glua/language-reference)


## 5. 编写应用

仅仅开发智能合约并不能完全满足用户的需求。对于普通用户来说，简单易用的界面是必需的，因此除了开发智能合约，一个产品化的DAPP还需要一个产品话的应用端。
对于应用端程序来说，通过标准的RPC接口就可以访问智能合约的API。具体请参考[RPC 命令参考](/zh/dev/rpc-reference/rpc-introduce)。
也可以参考一个实际的[DAPP例子](/zh/dev/dapp)。