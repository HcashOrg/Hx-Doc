# about

about 命令输出程序编译用到的各个主要的库及版本信息。主要用于开发调试。

> 请求
```
{
  "jsonrpc": "2.0", 
  "method": "about", 
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
        "client_version": "1.2.19-43-g0505034d",
        "graphene_revision": "0505034dea3f54ee4d09232b0d51461874c3547b",
        "graphene_revision_age": "14 days ago",
        "fc_revision": "0505034dea3f54ee4d09232b0d51461874c3547b",
        "fc_revision_age": "14 days ago",
        "compile_date": "compiled on May 29 2019 at 11:37:06",
        "boost_version": "1.64",
        "openssl_version": "OpenSSL 1.0.1g 7 Apr 2014",
        "build": "win32 64-bit"
    }
}
```

> 返回参数

- **client_version**: hx_client 版本号
- **graphene_revision**: graphene 库版本号
- **graphene_revision_age**: graphene 库版本发布距今时间
- **fc_revision**: fc 库版本号
- **fc_revision_age**: fc 库版本发布距今时间
- **compile_date**: 编译日期
- **boost_version**: boost 库版本号
- **openssl_version**: openssl 库版本号
- **build**: 编译平台