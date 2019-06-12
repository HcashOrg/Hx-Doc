# Consensus Random Number

Smart contracts need to obtain a consensus-based random number in order to work. To generate this number, the input data must be using chain related data. Here are two methods for obtaining random numbers:

## Simple random number: 

The contract invokes an interface to obtain a random number, and provides a random number based on the current random seed.

## Complex random number:
The user first specifies a set of consecutive blocks in the contract. The system then uses the prev_secret of the block set as an input to generate a random number. The user can specify a set of blocks that have not been generated to be specified in the contract. After the block set is generated, the random number is determined.

Users can directly invoke the interface in the contract to get a simple random number. For this method, there is a possibility that they can choose not to package the invocation based on the results of random numbers and their own interests, should the stakeholders of execution result are the current block producer and the contract invocation is single use. 

When users want to avoid this situation, they can use complex random numbers. A complex random number takes the 'prev_secret' of a set of continuous blocks as an input. If the block producer wants to generate a random number, the 'prev_secret' of the current block needs to be adjusted according to that of other blocks in the set. However, the 'prev_secret' will have been determined in a previous round of production blocks and cannot be modified, meaning that producers cannot control the generation of random numbers.
