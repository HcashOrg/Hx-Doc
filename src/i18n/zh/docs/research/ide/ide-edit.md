# IDE 合约编辑

IDE中合约以工程形式存在，其中，顶层文件夹为csharp、java、kotlin、uvlua四个创世文件夹，不可修改。各创世文件夹根目录下的文件夹即为合约工程，合约工程下的所有文件都属于该合约。

本页以uvlua为例，介绍合约的新建、导入、编辑、删除、查找等操作，其他语言操作类似。

##新建合约

点击菜单栏`文件`->`新建合约`->`新建uvlua合约`，或者右键资源管理栏`uvlua`->`新建合约`，打开合约新建框。

![Start IDE](/img/research/contract_new_in.png)

在新建合约窗口中，输入合约英文名称，可从IDE提供的模板中选择需要的合约模板，点击`确认`创建合约。

![Start IDE](/img/research/contract_new.png)

##导入合约

点击菜单栏`文件`->`导入合约`->`导入uvlua合约`，或者右键资源管理栏`uvlua`->`导入合约`，打开合约新建框。

![Start IDE](/img/research/contract_import_in.png)
![Start IDE](/img/research/contract_import_in1.png)

在导入合约文件选择窗口中，选择希望导入的合约文件，合约文件必须以uvlua为后缀。

![Start IDE](/img/research/contract_import.png)

##删除合约

右键要删除的合约文件或文件夹，点击删除即可。

![Start IDE](/img/research/contract_del.png)

##代码编辑

单击合约文件，在中央编辑区可进行代码编辑，单击`帮助`，可查看编辑器操作帮助或者合约操作帮助。

![Start IDE](/img/research/contract_edit.png)

##代码查找

代码查找需要将鼠标焦点放在中央编辑区，有两种方式进行查找。

1、按ctrl+F呼出临时查找框，回车定位第一个查找对象，ctrl+G继续查找，shift+ctrl+G查找上一个。

2、按Alt+F呼出永久查找框，回车进行查找，shift+回车查找上一个。

![Start IDE](/img/research/contract_find.png)

##代码替换

将鼠标焦点放在中央编辑区，Shift+Ctrl+R打开替换框，输入被替换内容，回车后输入替换内容，再回车进行替换。搜索或替换框内使用正则时，请用"/"包裹(eg: /正则表达式/ )

![Start IDE](/img/research/contract_replace.png)

##撤销与恢复

菜单栏点击`编辑`->`撤销`或Ctrl+Z撤销操作，`编辑`->`恢复`或Ctrl+Y恢复操作,代码编辑区的标签页显示红色时，表示当前有未保存的修改。

![Start IDE](/img/research/contract_redo.png)

##文件保存

菜单栏点击`文件`->`保存`保存当前编辑的文件，`文件`->`保存全部`保存所有打开的文件。

![Start IDE](/img/research/contract_save.png)

