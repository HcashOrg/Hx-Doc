# HX-Indicator使用问题

Q：HX-Indicator如何升级

A：在左下角，点击“帮助”->“软件更新”，点击检查更新，如果有发布的新版本，会自动下载，点击立即更新，之后会自动重启钱包，成功后会显示钱包界面。

Q：升级的时候，点击立即更新，一直提示钱包正在关闭或者一直提示钱包正在loading

A：如果等待时间很久，打开任务管理器，结束进程hx_node.exe、hx_cli.exe、HXIndicator.exe，从官网下载最新版本，找到HXIndicator.exe文件双击，成功后会提示输入钱包密码。

Q：启动HXIndicator.exe的时候一直显示loading或者启动的时候提示启动hx_node.exe失败

A：可以等待10多分钟，如果还是显示loading，则需要打开任务管理器，结束进程hx_node.exe、hx_cli.exe、HXIndicator.exe，找到hx的数据路径，将blockchain文件夹移到回收站，其他的文件不要删除，再次找到HXIndicator.exe文件双击，成功后会提示输入钱包密码。

Q：提示区块无法同步

A：点击电脑右下角的时间，找到Internet时间->更改设置->立即更新，重新打开HXIndicator.exe，开始同步。

Q：充值HC多久到账

A：正常需要8个区块确认时间到Tunnel账户，然后“划转”后等待4个区块到HX链上

Q：合约注册提示失败

A：注意HXIndicator.exe所在路径不能包含中文。

