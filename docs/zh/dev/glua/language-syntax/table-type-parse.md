table,record,Map<T>,Array<T> 类型间的转换
------------------------------------------------


* table作为以上三个类型的父类型, Map<?>类型要可以用来初始化record类型

两边类型完全一样肯定接受



    ==================     ==============================================  ======================
        左值类型                      右值类型                                 是否接受

        table                          record                                   true
        table                          Map<T>                                   true
        table                          Array<T>                                 true
        record                         table                                    true
        record                         Map<T>                                   true
        record                         Array<T>                                 false
        record                         其他类型的record                          false
        Map<T1>                        table                                    true
        Map<T1>                        record                                   false
        Map<T1>                       空Map<object>                             true
        Map<T1>                        Map<T2 where T2 extends T1>              true
        Map<T1>                        Map<T2 where T1 extends T2>              false
        Map<T1>                        Array<?>                                 false
        Array<T1>                      table                                    true
        Array<T1>                      空Map<object>                            true
        Array<T1>                      record                                   false
        Array<T1>                      Array<T2 where T2 extends T1>            true
        Array<T1>                      Array<T2 where T1 extends T2>            false
        Array<T1>                      Map<?>                                   false
    ==================     ==============================================  ======================
