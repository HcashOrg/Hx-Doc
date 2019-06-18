# network_get_info

network_get_info 命令获取本地 hx_node 运行时网络信息。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "network_get_info", 
  "params": [""], 
  "id": 1
}
```


> 响应

```
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "listening_on": "0.0.0.0:47517",
        "node_public_key": "033ab7ab451706f97416a4d7b75fafa94016326b964e16d1bbf8ff661dbc8fc5fa",
        "node_id": "479ddbfcb1dfd0522b837d645f7eb65e2c70c553d3605fb52c1b15aade330b1168",
        "firewalled": "unknown",
        "connections": 0,
        "current_block_height": 65713,
        "target_block_height": 65713,
        "connection_count": 0
    }
}
```

> 返回值

- **listening_on**: hx_node 监听端口
- **node_public_key**: hx_node 公钥
- **node_id**: hx_node 唯一 id
- **firewalled**: 是否有防火墙
- **connections**: 链接数量
- **current_block_height**: 本地块高度
- **target_block_height**: 目标块高度
- **connection_count**: 链接数量

