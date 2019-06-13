# HyperExchange hx-node启动指导

最新版本 v1.0.7

---
 

编译完成后，hx_node可以使用下面的命令启动:
```
    ./hx_node
```
hx-node会自动生成一个data路径，里面包含了config.ini文件，之后会进行区块数据的同步，大概需要几个小时， 同步完成后，你可以使用Ctrl+C退出hx-node，编辑`witness_node_data_dir/config.ini`:

    rpc-endpoint = 127.0.0.1:8090

重新启动hx-node节点，在另一个命令窗口启动hx-cli：
```
    ./hx_client
```
设置密码：
```
    >>> set_password <PASSWORD>
    >>> unlock <PASSWORD>
```
导入账户：
```
    >>> import_balance <ACCOUNT NAME> [<WIF_KEY>] true
```
使用`help`可以看到hx-node的所有参数。



---