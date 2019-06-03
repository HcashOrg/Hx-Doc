# IDE 合约测试上链

IDE提供了完整的合约测试、上链环境，本章以HX为例，介绍合约测试、上链方式。

##开启链

点击 `文件`->`配置`打开配置窗，选择链类型为HX，启动类型为测试链，点击确定，关闭重启提示框后，选择合适的时机，重启IDE。

![Start IDE](/img/research/test_set.png)

打开时，可从初始化界面看到链的加载过程，进入ide后，状态栏显示当前测试链数据，标题栏显示当前链类型，如果后台启动失败，请尝试重启并关闭残余进程，或者去该链对应的官网下载最新版本的文件。

![Start IDE](/img/research/test_load.png)
![Start IDE](/img/research/test_main.png)

###链后台查看

点击 `工具`->`后台输出`查看当前链的后台输出情况。

![Start IDE](/img/research/test_chain_out.png)

###控制台工具
点击 `工具`->`控制台`呼出控制台，可以输出控制台指令，与链钱包进行交互。

![Start IDE](/img/research/test_console.png)

###钱包账户
点击 `工具`->`账户`打开账户窗口，ide默认建立nathan测试账户，用于测试合约使用。可以新建账户，或者从私钥文件导入。

![Start IDE](/img/research/test_account.png)

###转账
点击 `工具`->`转账`打开转账窗口，输入转账金额、对方地址，点击确认转账。

![Start IDE](/img/research/test_transfer.png)

###合约注册
点击 `合约`->`合约注册`打开合约注册窗口，选择`合约文件`，选择`账户地址`，输入`调用步数`，`基本费用`，IDE提供了参考的费用计算，可直接使用默认值。点击确定，弹出注册结果提示框。

![Start IDE](/img/research/test_contract_register.png)
![Start IDE](/img/research/test_contract_register_finish.png)

点击`左侧资源管理界面`的`已注册合约`，即可查看已经注册的合约。

![Start IDE](/img/research/test_contract_register_show.png)

###合约升级
点击`合约`->`合约升级`打开合约升级界面，选择`升级账户`，`合约地址`，输入`合约名称` `合约描述`，输入费用，点击确定即可。

![Start IDE](/img/research/test_contract_upgrade.png)

点击`左侧资源管理界面`的`已注册合约`，即可查看合约升级后的显示状态。

![Start IDE](/img/research/test_contract_upgrade_show.png)

###合约调用
点击`合约`->`调用合约`打开合约调用界面，选择`调用者账户`，`合约地址`，输入`函数名` `参数`，输入`调用步数` `基本费用`，点击确定即可。

![Start IDE](/img/research/test_contract_call.png)

###合约充值
点击`合约`->`合约充值`打开合约充值界面，选择`调用者账户`，`资产类型`，输入`合约地址`，输入`数量`，输入`调用步数``基本费用`，点击确定即可。

![Start IDE](/img/research/test_contract_transfer.png)

###正式上链
点击 `文件`->`配置`打开配置窗，选择链类型为HX，启动类型为正式链，点击确定，关闭重启提示框后，选择合适的时机，重启IDE。或者选择同时启动测试链正式链，在IDE内部进行切换。

![Start IDE](/img/research/test_set.png)

正式链与测试链操作相同，建议在测试链上测试通过后，切换到正式链，<font color="#dd0000">正式链并未做密码保护，建议仅转入少量资产，即用即销。</font>