内置库
========

require 加载某个模块，比如local math = require 'math'

内置模块有string, table, math, time, json, safemath，使用时不需要require

另外，非合约模式下还可以使用更多内置模块os, net, io, http, jsonrpc等

[默认引入库](/language-syntax/auto-import-libs)

# os模块

os.clock()   返回执行该程序CPU花去的时钟秒数

os.date(format, time)  参数时间戳可选，如果没有给出时间用当前时间，返回格式化的字符串或table类型的时间信息  

os.difftime(t2, t1)    返回时间戳t2-t1的差值

os.execute(command)    执行系统命令command

os.exit(code, close)    退出进程，code是错误码，close表示是否退出当前虚拟堆栈

os.getenv(varname)      获取环境变量

os.remove(filename)     删除文件或空文件夹

os.rename(oldname, newname)     重命名文件

os.setlocale(locale, category)   设置当前程序的时区，category可选默认值all，表示locale作用的范围

os.time(table)      table表示时间信息的table，默认是当前时间的信息，返回时间戳

os.tmpname()        返回一个临时文件名称

# io模块

io.close(file)     关闭文件

io.flush()         flush输出缓冲区

io.input(file)     读取模式打开文件

io.lines(filename)    读取模式打卡文件并返回遍历文件内容中各行的迭代器

io.open(filename, mode)    按指定模式打开文件，mode可选值为读取模式'r', 写入模式'w', 添加模式'a', 保留旧内容更新模式'r+', 抛弃旧内容更新模式'w+', 保留旧内容并且只能文件尾添加的更新模式'a+'，默认是'r'

io.read(read_mode)      读取当前打开输入文件的内容并返回，参数read_mode可以有多个可选值，不同值的作用如下：



    "*all"    读取整个文件
    "*line"    读取下一行
    "*number"    读取一个数字
    <num>    读取一个不超过<num>个字符的字符串


io.seek(pos ?: int) 设置或获取当前打开文件的读写位置,如果提供pos参数，就是修改当前打开文件的读写位置，如果不提供pos参数，则是返回当前打开文件的读写位置


io.write(content: string)  把content的内容写入当前打开的文件

例如:



    let io = require 'io';
    let lines = io.lines("test/in.txt")     -- 读取文件内容，每行文本内容放入lines(table类型)
    let text = table.concat(lines, ',')    
    io.open("test/out.txt", "w")            -- 写入模式打开文件（然后当前的打开文件是test/out.txt)
    io.write(text)                          -- 把text内容写入当前打开的文件（也就是test/out.txt)
    let cur_pos = io.seek()                 -- 当前打开文件的读写位置是cur_pos
    io.close()                              -- 关闭当前打开的文件

# net模块

net.listen(address, port)   TCP监听address地址的port端口，监听所有地址的port端口用'0.0.0.0', 返回TcpServer对象

net.connect(address, port)  发起TCP连接

net.accept(server: TcpServer)          tcp监听端阻塞等待TCP客户端连接，返回TcpSocket

net.accept_async(server: TcpServer, handler: Function)    tcp异步监听TCP客户端连接，当出现新连接时，使用连接socket触发handler函数

net.start_io_loop(server: TcpServer)       启动TCP异步服务端事件循环，如果使用accept_async异步TCP服务，需要之后调用这个函数

net.read(socket, count)     从socket中读取count个字节

net.read_until(socket, end: string) 从socket读取字节流直到遇到end，返回结果包含end     

net.write(socket, data)     把字节流或字符串写入socket

net.close_socket(socket)    关闭socket连接

net.close_server(server)    关闭TcpServer

net.shutdown()              关闭整个IO事件循环        

例如:



    let server = net.listen("127.0.0.1", 3000)
    while true do
        let ctx = net.accept(server)
        let data = net.read(ctx, 10)
        pprint(data)
    end

# http模块

http.listen(address: string, port: int)   监听address地址的PORT端口的HTTP请求

http.connect(address: string, port: int)  连接到HTTP服务器端（一般不需要直接用）

http.request(method: string, url: string, body: string, headers: table)  发送http请求，返回http回复

http.close(ctx)          关闭http请求上下文

http.accept(server: HttpServer)          等待http请求，返回http请求上下文ctx

http.accept_async(server: HttpServer, handler: Function)  异步监听http请求，当接收到新http请求时，使用HttpContext对象作为参数调用handler函数 

http.start_io_loop(server: HttpServer)  启动http异步服务端事件循环，如果使用accept_async异步TCP服务，需要之后调用这个函数

http.get_req_header(ctx, key: string)    获取http请求中的头信息中key的值

http.get_res_header(ctx, key: string)    获取Http回复中头信息中key的值

http.get_req_http_method(ctx)            获取http请求中的HTTP方法（字符串）

http.get_req_path(ctx)               获取http请求中的path部分

http.get_req_http_protocol           获取http请求的HTTP协议（字符串）

http.get_req_body(ctx)       获取http请求中的body内容

http.set_res_header(ctx, key: string, value: string)     设置http回复中的头信息

http.write_res_body(ctx, data: string)           向http回复中追加写入数据

http.set_status(ctx, status_code: int, status_message: string)   设置http回复中的状态码和信息

http.get_status(ctx)             获取http回复的状态码

http.get_status_message(ctx)     获取http回复中的状态信息（字符串）

http.get_res_body(ctx)           获取http回复中的body内容

http.finish_res(ctx)            把http回复内容传给客户端，必须调用这个函数才会实际回复

下面给出一个最简单的阻塞式HTTP模块的使用例子（注意这只是阻塞式API的代码例子，不建议直接使用）:



    let http = require 'http'
    let net = require 'net'

    let res = http.request('GET', "http://www.gov.cn/", '', {
        Accept="text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        ["User-Agent"]="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
    })
    pprint(http.get_res_header(res, "Content-Length"))
    pprint(http.get_res_body(res))
    http.close(res)

    let server = http.listen("0.0.0.0", 3000)

    pprint("listening on 0.0.0.0:3000\n")

    -- async api

    let function handler(ctx)
        let net = require 'net'
        pprint("got new connection", ctx)
        -- pprint('get req body', http.get_req_body(ctx), '\n')
        net.write(ctx, "HTTP/1.1 200 OK\r\nContent-Type:text/html; utf-8\r\nContent-Length:5\r\n\r\nhello")
        net.close_socket(ctx)
    end

    net.accept_async(server, handler)
    net.start_io_loop(server)

    pprint("starting sync http server")

    while true do
        let ctx = http.accept(server)
        pprint('get req body', http.get_req_body(ctx), '\n')
        http.write_res_body(ctx, "hello world")
        http.set_status(ctx, 200, 'OK')
        http.set_res_header(ctx, "Content-Type", "text/html; utf-8")
        http.finish_res(ctx)
        http.close(ctx)
    end




[全局变量表](/language-syntax/global-variables)

# 一些合约相关的API

* [contract api reference](/language-syntax/contract-api-reference)