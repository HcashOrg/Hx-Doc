# HVM

The implementation of the smart contract virtual machine is completed by using a Turing Complete bytecode which is specifically designed for blockchain smart contracts. Compilers that implement statically-typed high-level programming languages (such as C#, Java, TypeScript, etc) will compile smart contract bytecode from high-level languages.

##	Smart contract virtual machine: 
The smart contract virtual machine is implemented as a Turing-complete bytecode virtual machine. It can be deterministic in runtime, has controllable execution logic and monitorable status changes.

##	Smart contract language:
A subset of the main features of existing programming languages such as C#, Java, TypeScript and other popular languages are used as the programming language for smart contracts, which is compiled to bytecodes that can be used by users who build these contracts.

## Built-in library for smart contracts: 
The built-in libraries for smart contracts include common numeric operations and string operations, etc., as well as querying, trading, etc. These libraries can be invoked when writing these contracts.

##	Smart calls to each other:
After a smart contract is deployed on the chain, it can call other smart contracts/built-in native contracts or be invoked by other smart contracts in addition to being directly invoked by the user or accessing assets.

Some of the functional logic can be implemented by smart contracts and deployed on the chain as a third-party library to be used by other smart contracts on the chain, and function as a blockchain extension.

## Functional scope and restrictions of smart contracts: 

Smart contracts use Turing complete programming language to write business logic, query data on the chain, access the state of the contract storage in a deterministic nature, call other smart contracts/native contracts, and output return information to the caller.
Restrictions: Cannot read out-of-chain data; cannot non-deterministically generate inconsistent logic for each node; the number of execution instructions and the amount of memory used are controlled by the blockchain; the blockchain can terminate the execution of smart contracts at any time, such as when the cost exceeds the budget.

##	Status of storage of smart contracts: 

Each smart contract has a separate storage space called 'storage'. The storage format of 'Storage' is an unstructured data structure. Instead of storing the latest 'storage' on the chain each time, the chain stores the changes to the 'storage' of the smart contracts. For example, when invoking a smart contract, if the contracts 'storage' is changed from {"name": "chain" } to {"name": "chain", "count": 123 }, then only the changed part: {"count": 123 } is stored, and even if when calculating the fee for contract invoking, the 'storage' section charges only the size of the changed part rather than the size of the full storage. Therefore, even if the storage space of a smart contract is relatively large, as long as the amount of changes in each call contract is not large, the incremental data on the chain and the processing fee will not be high.

##	Smart contract status query:

The smart contract can directly query the 'storage' value, and can also retrieve data in the nested data structure through SQL-like programming language. When smart contract 'storage' is large, the data load can be reduced in this way to increase the query speed, avoid a full table scan, and increase upper limit data access. For example: The 'storage' structure of a smart contract is similar to:
{
 "name": "blockchain",
 "userBalances": [
 { "userAddress": "a", "amount": 10000, "freeze": false },
 { "userAddress": "b", "amount": 20000, "freeze": true },
 { "userAddress": "c", "amount": 30000, "freeze": false }, ...Continue this for a few hundred thousand lines
 ]
}

You can use the SQL syntax like var freezedUsers = storage.query ("select userBalance.userAddress from userBalances as userBalance where freeze=true") to query out addresses of all accounts in the smart contracts. This greatly reduces the amount of data reading and writing, and avoids a full table scan. In addition, this can meet requirements in business scenarios that store more data in the smart contract, with each read consisting only of a small amount of data. For example, this can be utilised in a smart contract to achieve simple Push exchanges, realise smart contract assets, for contract insurance, etc.
