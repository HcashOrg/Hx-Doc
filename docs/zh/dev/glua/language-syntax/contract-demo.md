一个简单的互助保险合约
===========================



    type Storage= {
        participant: Array<string>,
        amount: int,
        owner: string
    }

    var M: Contract<Storage> = {}

    function M:init()
        self.storage.participant=[]
        self.storage.amount=0
        self.storage.owner=caller_address --记录创建者
        pprint("contract init")
        emit event("contract init")
    end

    function M:on_deposit(amount: int)
        local in_flag: bool = false  --判断是否已经参与过合约
        for k,v in pairs(self.storage.participant) do
            if caller_address == v then
                in_flag = true
                break
            end
        end

        if in_flag == false then
            self.storage.participant[#self.storage.participant+1] = caller_address  --记录参与者
        end 
        
        self.storage.amount = tointeger(self.storage.amount+amount)              --记录金额
        local deposit_info:string = tostring(caller_address).." transfered in,amount "..tostring(amount)..",sum "..tostring(get_contract_balance_amount()+amount)
        pprint("deposit info: ", deposit_info) 
        emit event(deposit_info)
    end

    function M:handle(address:string)
        if self.storage.owner ~= caller_address then --只允许创建者进行理赔
            pprint("caller_address is not the contract owner")
            pprint("caller_address: " , caller_address, " contract_owner_address: ", self.storage.owner)
            return
        end
    
        local in_flag: bool = false
        for k,v in pairs(self.storage.participant) do  --遍历参与者列表，只对在参与者列表中的地址进行理赔
            if address == v then
                in_flag = true
                local amount:int = math.floor(self.storage.amount/2)
                if amount > 10000000 then   --最高赔付100HSR
                    amount = 10000000
                end
                local res=transfer_from_contract_to_address(address,"HSR",amount)
                self.storage.amount =self.storage.amount-amount
                pprint("amount: ", amount)             
                local pay_info = "pay to "..address..""..tostring(amount)
                pprint("pay info: ", pay_info)
                emit event("pay to "..address..""..tostring(amount))
            end
        end
        
        if in_flag == false then
            pprint("caller ", caller_address, " did not take part in this contract")
        end
    end

    function M:get_balance()
        pprint("contract balance: ", self.storage.amount)
    end

    function M:get_participator()
        pprint("contract participator:")
        for k,v in pairs(self.storage.participant) do
            pprint(v) 
        end
    end

    return M