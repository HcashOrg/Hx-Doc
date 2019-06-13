[全局变量表](/language-syntax/global-variables)

# table模块

table.concat(table, sep, start=1, end=table的数组部分长度) 把数组table中从第start项到第end项（包括第end项）每一项用sep分隔连接成一个字符串,返回拼接后的字符串

table.insert(table, pos, value) 在数组table的第pos个位置插入一个值value，如果只传2个参数table和value，则在table的数组部分的最后位置之后插入value，无返回值

table.append(table, value) 在数组的最后位置之后插入value，无返回值

table.length(table)  获取数组的数组部分的长度

table.remove(table, pos=table数组部分长度) 函数删除并返回table数组部分位于pos位置的元素. 其后的元素会被前移. pos参数可选, 默认为table长度, 即从最后一个元素删起，返回被删除的值

table.sort(table) 函数对给定的table进行升序排序.参数table中的元素需要类型一致，无返回值



    > tbl = {"hsrha", "beta", "gamma", "delta"}
    > table.sort(tbl)
    > print(table.concat(tbl, ", "))
    hsrha, beta, delta, gamma

全局函数rawlen  返回table中数组部分元素的个数

# math模块

math.abs(n) 获取参数n的绝对值

math.ceil(n) 返回不小于n的最小整数 

math.floor(n) 返回不超过n的最大整数

math.max(n1,n2,...) 返回参数列表中多个值的最大值，至少需要1个参数

math.maxinteger  常数，支持的最大整数

math.min(n1,n2,...) 返回参数列表中多个值的最小值，至少需一个参数

math.mininteger 常数，支持的最小整数

math.pi 常数，π值，3.1415...

math.sqrt(n) 获取第一个参数的平方根

math.tointeger(n) 把第一个参数str字符串转成整数，如果str本身是整数，直接转成整数，如果无法转换，返回nil

math.type(num) 判断第一个参数num是整数还是浮点数

# string模块

string.split(str, sep) 把str按sep划分成多块，返回一个字符串数组

string.byte(s) 返回字符串首字符对应的ASCII数字

string.char(i1, i2, …) 把多个整数对应的ascii字符构造成字符串返回

string.find(str, pattern, [init=1, [plain=nil]]) 在str字符串中查找模式字符串pattern，从str的第init个字符开始查找，plain表示是否把pattern当成普通文本字符串而不是模式字符串来查找，返会找到的第一个满足条件的子字符串的开始字符索引或者nil

模式字符串在可以用以下符号匹配源字符串中的一些子字符串

* .(点): 与任何字符配对
* %a: 与任何字母配对
* %c: 与任何控制符配对(例如\n)
* %d: 与任何数字配对
* %l: 与任何小写字母配对
* %p: 与任何标点(punctuation)配对
* %s: 与空白字符配对
* %u: 与任何大写字母配对
* %w: 与任何字母/数字配对
* %x: 与任何十六进制数配对
* %z: 与任何代表0的字符配对
* %x(此处x是非字母非数字字符): 与字符x配对. 主要用来处理表达式中有功能的字符(^$()%.[]*+-?)的配对问题, 例如%%与%配对
* [数个字符类]: 与任何[]中包含的字符类配对. 例如[%w_]与任何字母/数字, 或下划线符号(_)配对
* [^数个字符类]: 与任何不包含在[]中的字符类配对. 例如[^%s]与任何非空白字符配对

例如:



    let p1 = "%d%d:%d%d"
    let s = "2016/11/11 11:11"
    let a = string.find(s, p1)  -- a的结果是11，也就是子字符串"11:11"的第一个字符的索引
    let b = string.sub(s, a)    -- b结果是"11:11"
    let c = string.find(s, p1, 3)  -- c结果是12
    let d = string.find(s, p1, 1, true)  -- d结果是nil，因为第四个参数是true，所以把p1当成普通字符串进行匹配


string.format(formatstring, ...args) 类似C语言的sprintf

例如:



    let a = string.format("hello, %s, the number is %d", "China", 123)

string.gmatch(str, pattern) 返回在str字符串中遍历模式字符串pattern的迭代器

例如：



    t = {}
    s = "from=world, to=Lua"
    var k = nil
    var v = nil
    for k, v in string.gmatch(s, "(%w+)=(%w+)") do
       t[k] = v
    end


string.gsub(str, pattern, replacer, [n]) 把str中满足pattern模式的子串投用replacer字符串或者函数进行替换，如果提供了n,只进行前n个符合的字串的替换


string.len(str) 获取字符串长度


string.match(str, pattern, [init=1]) 在str找到第一个符合模式pattern的子串，从str的第init个字符开始查找
    
    
string.rep(str, n, [sep=’’]) 返回str字符串重复n次的结果，间隔符是字符串sep


string.reverse(str) 返回字符串str的反转


string.sub(str, i, [,j=-1]) 获取str字符串的子字符串，从第i个字符开始，到第j个字符结束（包含第i和第j个字符），i和j可以是负数，表示从str反方向开始的第-i/-j个字符


string.upper(str) 把字符串str各字母字符转成大写后返回
    

# time模块

time.add(timestamp, field, offset) 返回新时间戳，field是year/month/day/hour/minute/second其中某个字符串，offset是变化值，可以是正数、负数、零

time.tostr(timestamp) 把时间戳转成时间字符串， %yy-%m-%d %H:%M:%S格式

time.difftime(timestamp1, timestamp2) 比较2个时间戳的间隔的秒数

# safemath模块

    bigint(int | string): bigint
    add(bigint, bigint): bigint
    sub(bigint, bigint): bigint
    mul(bigint, bigint): bigint
    min(bigint, bigint): bigint
    max(bigint, bigint): bigint
    div(bigint, bigint): bigint
    rem(bigint, bigint): bigint
    pow(bigint, bigint): bigint
    gt(bigint, bigint): bigint
    ge(bigint, bigint): bigint
    lt(bigint, bigint): bigint
    le(bigint, bigint): bigint
    eq(bigint, bigint): bigint
    ne(bigint, bigint): bigint
    toint(bigint): int
    tohex(bigint): string
    tostring(bigint): string

例子:

    a = safemath.bigint('123')
    pprint('a=', a)
    b = safemath.bigint(456)
    pprint('b=', b)
    pprint('hex(a)=', safemath.tohex(a))
    pprint('int(a)=', safemath.toint(a))
    pprint('str(a)=', safemath.tostring(a))
    c = safemath.add(a, b)
    d = safemath.sub(a, b)
    e = safemath.mul(a, b)
    f = safemath.div(b, a)
    g = safemath.pow(a, safemath.bigint(10))
    pprint('c', safemath.tostring(c))
    pprint('d', safemath.tostring(d))
    pprint('e', safemath.tostring(e))
    pprint('f', safemath.tostring(f))
    pprint('g', safemath.tostring(g))

    c1 = safemath.gt(a, b)
    c2 = safemath.ge(a, b)
    c3 = safemath.lt(a, b)
    c4 = safemath.le(a, b)
    c5 = safemath.eq(a, b)
    c6 = safemath.ne(a, b)
    c7 = safemath.eq(a, a)

    pprint(safemath.tostring(a) .. ' > ' .. safemath.tostring(b) .. '=' .. tostring(c1))
    pprint(safemath.tostring(a) .. ' >= ' .. safemath.tostring(b) .. '=' .. tostring(c2))
    pprint(safemath.tostring(a) .. ' < ' .. safemath.tostring(b) .. '=' .. tostring(c3))
    pprint(safemath.tostring(a) .. ' <= ' .. safemath.tostring(b) .. '=' .. tostring(c4))
    pprint(safemath.tostring(a) .. ' == ' .. safemath.tostring(b) .. '=' .. tostring(c5))
    pprint(safemath.tostring(a) .. ' != ' .. safemath.tostring(b) .. '=' .. tostring(c6))
    pprint(safemath.tostring(a) .. ' == ' .. safemath.tostring(a) .. '=' .. tostring(c7))


# json模块

json.dumps(任意lua值) 将lua值转成json字符串

json.loads(字符串) 将json字符串转成lua值，如果失败，返回nil

# utf8模块

utf8.char(...)          接受参数中若干个数字，返回对应的UTF8编码的字节序列

utf8.charpattern         常量，能匹配UTF8字节序列的一个字符串pattern模式

utf8.codes(s)            返回变量s中所有字符的迭代器，按utf8编码

utf8.codepoint(s, i, j)  返回字符串s在索引[i, j]范围内的utf8编码的字符

utf8.len(s, i, j)        返回字符串s在索引[i, j]范围内的按utf8编码的字符长度

utf8.offset(s, n, i)     返回s中第n个字符的从第i个字节开始的字节索引
