语法规则
==========



    chunk = block

    block = {stat} [retstat]

    type = Name |
            '(' {type} [‘,’ type] ‘)’  ‘=>’ type

    record = ‘type’ Name {‘<’ { Name [‘,’ Name ] } ‘>’} ‘=’ 
                        ‘{‘ {  Name ‘:’ type [  ‘,’  Name ‘:’ type  ]  } ‘}’

    typedef =  ‘type’ Name {‘<’ { Name [‘,’ Name ] } ‘>’} ‘=’  Name {‘<’ { Name [‘,’ Name ] } ‘>’}

    stat =  ‘;’ | 
         varlist ‘=’ explist | 
         functioncall | 
         label | 
         break | 
         goto Name | 
         record |
         typedef |
         do block end | 
         while exp do block end | 
         repeat block until exp | 
         if exp then block {elseif exp then block} [else block] end | 
         for Name ‘=’ exp ‘,’ exp [‘,’ exp] do block end | 
         for namelist in explist do block end | 
         function funcname funcbody | 
         local function Name funcbody | 
         local namelist [‘=’ explist] 

    retstat = return [explist] [‘;’]

    label = ‘’ Name ‘’

    funcname = Name {‘.’ Name} [‘:’ Name]

    varlist = var {‘,’ var}

    var =  Name | prefixexp ‘[’ exp ‘]’ | prefixexp ‘.’ Name 

    name = Name {‘:’ type } || Name

    namelist = name {‘,’ name}

    explist = exp {‘,’ exp}

    exp =  nil | false | true | Numeral | LiteralString | ‘...’ | functiondef | 
         prefixexp | tableconstructor | exp binop exp | unop exp 

    prefixexp = var | functioncall | ‘(’ exp ‘)’

    functioncall =  prefixexp args | prefixexp ‘:’ Name args 

    args =  ‘(’ [explist] ‘)’ | tableconstructor | LiteralString      

    functiondef = function funcbody

    funcbody = ‘(’ [parlist] ‘)’ block end

    parlist = namelist [‘,’ ‘...’] | ‘...’

    tableconstructor = ‘{’ [fieldlist] ‘}’

    fieldlist = field {fieldsep field} [fieldsep]

    field = ‘[’ exp ‘]’ ‘=’ exp | Name ‘=’ exp | exp

    fieldsep = ‘,’ | ‘;’

    binop =  ‘+’ | ‘-’ | ‘*’ | ‘/’ | ‘//’ | ‘^’ | ‘%’ | 
         ‘&’ | ‘~’ | ‘|’ | ‘>>’ | ‘<<’ | ‘..’ | 
         ‘<’ | ‘<=’ | ‘>’ | ‘>=’ | ‘==’ | ‘~=’ | 
         and | or

    unop = ‘-’ | not | ‘#’ | ‘~’
