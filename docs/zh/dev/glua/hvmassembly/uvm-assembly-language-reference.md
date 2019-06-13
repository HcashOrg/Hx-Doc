uvm assembly lanugage reference
===========

uvm assembly language是uvm的伪汇编语言，可以用来生成uvm字节码，较uvm字节码更可读和维护。uvm上部分编程语言是先编译生成uvm assembly然后再生成uvm字节码的

# Features

* 一条指令占一行，除非是字符串的跨行
* 字符串需要支持转义
* 除字符串里内容外，分号后当前行内容是 可选的 'L'+行号+';' + 当前行注释
* 一行指令的开头可以有若干空白，指令名和指令参数之间可以隔着若干个空白
* .local varname  声明变量名
* 声明常量语法

```
  .begin_const
     "asd"
     "Hello"
     " world!"
  .end_const
```

* 声明upvalues语法

```
  .begin_upvalue
     1 0
  .end_upvalue
```

* 声明代码段语法

```
.begin_code
   loadk %0 const "asd"    ;L12;  %0表示slot 0
   closure %1 subroutine_2
   move %2 %1
   loadk %3 const "Hello"
   loadk %4 const " world!"
   call %2 3 1
   return %0 1
.end_code
```

* .upvalues 数量   声明upvalues的数量
* .func 函数名 maxstacksize params_count use_vararg 声明proto的开始，以及proto的参数输入返回值数量等
* loadk, setglobal, return, move等指令对应相应的Lua字节码指令，后面跟着对应参数
* .end_func 结束一个proto的声明
* 一个"do end"块生成唯一一条return指令


# 指令列表

```

  MOVE Copy a value between registers
  LOADK Load a constant into a register
  LOADBOOL Load a boolean into a register
  LOADNIL Load nil values into a range of registers
  GETUPVAL Read an upvalue into a register
  GETTABLE Read a table element into a register
  SETUPVAL Write a register value into an upvalue
  SETTABLE Write a register value into a table element
  NEWTABLE Create a new table
  SELF Prepare an object method for calling
  ADD Addition operator
  SUB Subtraction operator
  MUL Multiplication operator
  DIV Division operator
  MOD Modulus (remainder) operator
  POW Exponentiation operator
  UNM Unary minus operator
  NOT Logical NOT operator
  LEN Length operator
  CONCAT Concatenate a range of registers
  JMP Unconditional jump
  EQ Equality test
  LT Less than test
  LE Less than or equal to test
  TEST Boolean test, with conditional jump
  TESTSET Boolean test, with conditional jump and assignment
  CALL Call a closure
  TAILCALL Perform a tail call
  RETURN Return from function call
  FORLOOP Iterate a numeric for loop
  FORPREP Initialization for a numeric for loop
  TFORLOOP Iterate a generic for loop
  SETLIST Set a range of array elements for a table
  CLOSURE Create a closure of a function prototype
  VARARG Assign vararg function arguments to registers

```