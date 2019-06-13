RPC Tutorial
===============


# JsonRpc的支持

支持两种JsonRpc模式

- Tcp-JsonRpc模式
- Http-JsonRpc模式


# 如何启动RPC服务端监听

- 启动Tcp-JsonRpc模式



    node.exe --rpcuser RPC用户名 --rpcpassword RPC密码 --rpcport 监听端口 --server --data-dir 数据目录
    

示例：


    node.exe --rpcuser admin --rpcpassword 123456 --rpcport 10086 --server --data-dir chain_data
    

- 启动Http-JsonRpc模式



    Unode.exe --rpcuser RPC用户名 --rpcpassword RPC密码 --httpdendpoint 监听Endpoint --server --data-dir 数据目录
    

示例：


    node.exe --rpcuser admin --rpcpassword 123456 --httpdendpoint 127.0.0.1:8080 --server --data-dir chain_data
    


# 如何进行一次有效的RPC交互

- 在Tcp-JsonRpc模式下

1. 发起一个TCP连接

#. 将RPC请求做为数据流，发送登录(login)的RPC请求，并接收到正确的RPC返回

#. 进行RPC交互

#. 连接断开


- 在Http-JsonRpc模式下

1. 新增一个http header，key为Authorization，value为随机6个字节 + base64(rpcuser:rpcpassword)

#. 将RPC请求做为HTTP包的包体，发起一个HTTP POST请求

#. 获取HTTP返回，包体内容就是RPC的返回



# 简单DEMO示例

Python 2.7简单示例

- 在Tcp-JsonRpc模式下

SimpleTcpJsonRpc.py



    #!/usr/bin/env python 
    # encoding: utf-8
    
    
    import socket
    
    def is_receive_complete(data):
        if data is None or data == '':
            return False
        json_start = False
        json_tag_count = 0
        for c in data:
            if c == '{':
                if not json_start:
                    json_start = True
                json_tag_count += 1
            elif c == '}':
                json_tag_count -= 1
            if json_start and json_tag_count == 0:
                return True
        return False
    
    def recv_until_json_complete(sd):
        left_data = ""
        while not is_receive_complete(left_data):
            data = sd.recv(4096)
            left_data += data
        return left_data
    
    
    login_payload = ''' { "jsonrpc": "2.0", "params": [ "admin", "123456" ], "id": "1", "method": "login" } '''
    get_info_payload = ''' { "jsonrpc": "2.0", "params": [], "id": "2", "method": "get_info" } '''
    
    RpcServerEndpoint = "127.0.0.1:10086"
    conn_tuple = RpcServerEndpoint.split(":")
    endpoint_tuple = (conn_tuple[0], int(conn_tuple[1]))
    
    sd = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sd.connect(endpoint_tuple)
    
    sd.sendall(login_payload)
    recv_data = recv_until_json_complete(sd)
    print recv_data
    
    sd.sendall(get_info_payload)
    recv_data = recv_until_json_complete(sd)
    print recv_data
    
    sd.close()



- 在Http-JsonRpc模式下

SimpleHttpJsonRpc.py



    #!/usr/bin/env python 
    # encoding: utf-8
    
    
    import base64
    from requests import Request, Session
    
    get_info_payload = {"jsonrpc": "2.0", "params": [], "id": "2", "method": "info"}
    
    rpc_auth = "000000" + base64.b64encode("%s:%s" % ("admin", "123456"))
    auth_headers = {'Content-Type': 'application/json', 'Authorization': rpc_auth}
    post_url = "http://127.0.0.1:8080/rpc"
    
    s = Session()
    req = Request('POST', post_url, json=get_info_payload, headers=auth_headers)
    prepped = req.prepare()
    resp = s.send(prepped)
    
    print resp.text
