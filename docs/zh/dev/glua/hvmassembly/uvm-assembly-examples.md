uvm assembly language examples
==================

    .upvalues 1  ;L1;  comment test

    ; comment here
    .func main 5 0 2 ; source: @test.lua ; maxstacksize: 5, params: 0, vararg: 2 (declared vararg)
    .begin_const
    "asd"
    "Hello\nabc"
    " world!"
    .end_const


    .begin_upvalue
    1 0
    .end_upvalue


    .begin_code
    loadk %0 const "asd"
    closure %1 subroutine_2

    move %2 %1
    loadk %3 const "Hello\nabc"  ;L10; this is a line position comment
    loadk %4 const " world!"
    call %2 3 1
    return %0 1
    .end_code


    .func subroutine_2 5 0 1 ; maxstacksize: 5, params: 0, vararg: 1 (uses vararg)
    .begin_const
    "table"
    "concat"
    ","
    "print"
    .end_const


    .begin_upvalue
    0 0
    .end_upvalue


    .begin_code
    gettabup %0 @0 const "table" ; debug name: _ENV
    gettable %0 %0 const "concat"
    newtable %1 0 0
    vararg %2 0
    setlist %1 0 1
    loadk %2 const ","
    call %0 3 2
    closure %1 subroutine_3
    move %2 %1
    gettabup %3 @0 const "print" ; debug name: _ENV
    move %4 %0
    tailcall %2 3 0
    return %2 0
    return %0 1
    .end_code


    .func subroutine_3 4 2 0 ; maxstacksize: 4, params: 2, vararg: 0 (does not use varag)
    .begin_const
    .end_const


    .begin_upvalue
    .end_upvalue


    .begin_code
    move %2 %0
    move %3 %1
    tailcall %2 2 0
    return %2 0
    return %0 1
    .end_code