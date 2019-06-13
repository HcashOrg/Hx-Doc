词法规则
============

* 整数：64位有符号整数，格式比如

3   345   0xff   0xBEBADA

* 浮点数：64位浮点数，格式比如

3.0     3.1416     314.16e-2     0.31416E1     34e1

0x0.1E  0xA23p-4   0X1.921FB54442D18P+1


* 变量名：字母或下划线开头，内容包括字母或下划线或者数字，并且不能是关键字符号

* 字符串：行内字符串可以用2个单引号或者2个双引号前后包围，其中可以使用反斜杠’\’转义一些特殊字符，跨行或者行内字符串可以用[[和]]包围。

比如：



    a = 'alo\n123"'
    a = "alo\n123\""
    a = '\97lo\10\04923"'
    a = [[alo
    123"]]
    a = [==[
    alo
    123"]==]


* 关键字：



    and       break     do        else      elseif    end
    false     for       function  goto      if        in
    local     nil       not       or        repeat    return
    then      true      until     while    offline

* true/false/nil字面量

* 标点符号：



    +     -     *     /     %     ^     #
    &     ~     |     <<    >>    //
    ==    ~=    <=    >=    <     >     =
    (     )     {     }     [     ]     
    ;     :     ,     .     ..    ...
