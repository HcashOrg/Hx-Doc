# IDE 合约调试

ide目前仅支持uvlua合约的调试，调试前请确保合约可以成功编译，合约的调试以函数为调试主体。

调试前请先打开合约，点击代码编辑区左侧的行号栏，设置至少一个断点。

![Start IDE](/img/research/debug_set_break.png)

点击`调试`->`开始调试`，开始进入调试模式。

![Start IDE](/img/research/debug_in.png)

在弹出的调试窗口选择需要调试的函数，输入函数参数，点击确认开始调试。由于合约数据每次调试都会保存，可点击重置测试数据进行清空。

![Start IDE](/img/research/debug_function.png)

开始调试后，可进入调试状态，调试器默认停在第一个断点位置，右边栏上部为程序变量，下方为程序堆栈追踪。

![Start IDE](/img/research/debug_pause.png)

##调试命令

###逐步调试
点击 `调试`->`逐步`或F10进行逐步调试。

![Start IDE](/img/research/debug_step.png)

###逐句调试
点击 `调试`->`逐句`或F11进入函数逐句调试。

![Start IDE](/img/research/debug_step_in.png)

###切换断点
点击 `调试`->`切换断点`或F9在当前行添加或删除断点，点击`调试`->`清空断点`或Ctrl+Shift+F9清空当前所有断点。

![Start IDE](/img/research/debug_break_change.png)

###停止调试
点击 `调试`->`停止调试`或Shift+F5停止当前调试。

![Start IDE](/img/research/debug_stop.png)
