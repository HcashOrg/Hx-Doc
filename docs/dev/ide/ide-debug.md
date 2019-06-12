# IDE Contract Debug
Uvlua is now the only supported language of debugger, please make sure the contract can be compiled successfully.It should be known that the debugging unit is the single function in contract.

Before debugging contract, open the contract and set at least one breakpoint by click beside the line clutter.

![Start IDE](/img/research/debug_set_break.png)

Click `Debug`->`Debug` in menu bar or Press F5 to start the debugger.

![Start IDE](/img/research/debug_in.png)

The debugger confirm dialog will immediately pop up and you should choose the exact function and input the params of function, then click confirm to start it. Since the data of debugging is saved locally each time of debugging, we provide the `RestTestData` button to clear the old data.

![Start IDE](/img/research/debug_function.png)

Once enter the debugging state, the compiler will pause at the first breakpoint you set in the function, please press F5 or restart the compiler if that not happen. Right top of main window shows the local viariable and right bottom show the stack trace.

![Start IDE](/img/research/debug_pause.png)

##Debug Command
###Debug Step
Click `Debug`->`Step` in menu bar or press F10 to step the debugging.

![Start IDE](/img/research/debug_step.png)

###Debug StepInto
Click `Debug`->`StepInto` in menu bar or press F11 to step into the function.

![Start IDE](/img/research/debug_step_in.png)

###Brekpoint 
Click `Debug`->`TabBreak` in menu bar or press F9 to add or delete a breakpoint an current line.
To clear all the breakpoint of current file, click `Debug`->`ClearBreak` in menu bar or press Ctrl+Shift+F9.

![Start IDE](/img/research/debug_break_change.png)

###Stop Debug
Click `Debug`->`Stop` in menu bar or press Shift+F5, the compiler will run like there is no breakpoint.

![Start IDE](/img/research/debug_stop.png)
