By distributing smart contract transactions to concurrent execution pipelines, it is possible to increase the ability of a large number of contract transactions to execute concurrently and shorten overall transaction execution time.

* All smart contracts that need to be executed within a block time will be divided into different pipelines for execution. Pipelines refer specifically to the contract handler, which means that different pipelines can perform contract execution simultaneously in different threads.

* Pipes are divided into serial pipes and parallel pipes. Parallel pipes can be executed in parallel. Serial pipes cannot be executed in parallel with other pipes. There is only one serial pipe at any given time.

* After a pipeline starts, the smart contract transaction is executed serially.

* First execute a smart contract in the serial pipeline and then parallelly execute it in multiple parallel pipes.

* The list of read or modified accounts/contract addresses is referred to as the list of dependent addresses in a transaction. Smart contract transactions can be pre-executed in the client to obtain this list. Ordinary transactions also rely on these lists. Conflicting transactions that rely on address lists cannot be placed on different channels.

* Transactions that are not pre-attached to the dependent address lists can enter the serial pipeline, but their fees will increase.

* When the list of dependent addresses of a contract statement conflicts with the actual executed list of dependent addresses, the execution fails, a penalty fee is collected and a blank transaction is packaged.

* When executing pipelines in parallel, contract transactions under most scenarios can be significantly improved (by a factor of at least 4).
