# network_get_connected_peers

network_get_connected_peers 命令输出当前 hx_node 连接到的其他节点信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "network_get_connected_peers", 
  "params": [""], 
  "id": 1
}
```
> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": [
        {
            "version": 0,
            "host": "117.78.44.37:9034",
            "info": {
                "addr": "117.78.44.37:9034",
                "addrlocal": "192.168.1.155:54766",
                "services": "00000001",
                "lastsend": 1560395365,
                "lastrecv": 1560395362,
                "bytessent": 61584,
                "bytesrecv": 42176,
                "conntime": "2019-06-13T02:55:03",
                "pingtime": "",
                "pingwait": "",
                "version": "",
                "subver": "BlockLinks Reference Implementation",
                "inbound": false,
                "firewall_status": "not_firewalled",
                "startingheight": "",
                "banscore": "",
                "syncnode": "",
                "fc_git_revision_sha": "0505034dea3f54ee4d09232b0d51461874c3547b (same as ours)",
                "fc_git_revision_unix_timestamp": "2019-05-29T03:29:14",
                "fc_git_revision_age": "15 days ago (same as ours)",
                "platform": "linux",
                "current_head_block": "0034f8d719c9968996a4680060be5483b16344fb",
                "current_head_block_number": 3471575,
                "current_head_block_time": "2019-06-13T03:09:05"
            }
        },
        {
            "version": 0,
            "host": "118.25.97.92:62871",
            "info": {
                "addr": "118.25.97.92:62871",
                "addrlocal": "192.168.1.155:54766",
                "services": "00000001",
                "lastsend": 1560395365,
                "lastrecv": 1560395355,
                "bytessent": 6528,
                "bytesrecv": 10480,
                "conntime": "2019-06-13T03:02:23",
                "pingtime": "",
                "pingwait": "",
                "version": "",
                "subver": "BlockLinks Reference Implementation",
                "inbound": false,
                "firewall_status": "not_firewalled",
                "startingheight": "",
                "banscore": "",
                "syncnode": "",
                "fc_git_revision_sha": "0505034dea3f54ee4d09232b0d51461874c3547b (same as ours)",
                "fc_git_revision_unix_timestamp": "2019-05-29T03:29:14",
                "fc_git_revision_age": "15 days ago (same as ours)",
                "platform": "win32",
                "current_head_block": "0034f8d719c9968996a4680060be5483b16344fb",
                "current_head_block_number": 3471575,
                "current_head_block_time": "2019-06-13T03:09:05"
            }
        }
    ]
}
```

> 返回参数

- **version**: ~~暂时未用到~~
- **host**: 对端IP和端口信息
- **info.addr**: 对端IP和端口信息
- **info.addrlocal**: 本地IP和端口信息
- **info.services**: ~~暂时未用到~~
- **info.lastsend**: 最后发送时间戳
- **info.lastrecv**: 最后接收时间戳
- **info.bytessent**: 发送字节数
- **info.bytesrecv**: 接收字节数
- **info.conntime**: 连接时间
- **info.pingtime**: ~~暂时未用到~~
- **info.pingwait**: ~~暂时未用到~~
- **info.version**: ~~暂时未用到~~
- **info.subver**: ~~暂时未用到~~
- **info.inbound**: 接收字节数
- **info.firewall_status**: 对端防火墙状态
- **info.startingheight**: ~~暂时未用到~~
- **info.banscore**: ~~暂时未用到~~
- **info.syncnode**: ~~暂时未用到~~
- **info.fc_git_revision_sha**: fc 库版本 hash
- **info.fc_git_revision_unix_timestamp**: fc 库构建时间
- **info.fc_git_revision_age**: fc 库构建距今时间
- **info.platform**: 对端平台
- **info.current_head_block**: 对端最新块 hash
- **info.current_head_block_number**: 对端最新块高度
- **info.current_head_block_time**: 对端最新块时间
