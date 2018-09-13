*	Pending orders utilise smart contracts.
*	Matching pending orders are completed through smart contracts, enabling scalability, more complexity in orders (such as transaction discounts) and limiting the minimum number of orders per transaction. 
*	Considering that most of the order entry logic is the same and to avoid transferring new smart contract bytecode each time a contract is created, contracts can be registered in the chain as a template. Each contract template has a unique on-chain address. When creating a contract, you can use information such as the contract template address or the creator's address, instead of using the bytecode, thus saving costs associated with chain storage space.
*	Fully abstract templates significantly reduce the threshold for contract use.
*	The multi-asset transaction on the chain is not linked to the chain, and the user executes a buy or sell order on the chain, and other users actively match the corresponding order. 
