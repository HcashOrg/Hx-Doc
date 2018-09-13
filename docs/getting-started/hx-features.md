# HyperExchange Features

HyperExchange takes the lead in implementing inter-blockchain value interconnection via a Blockchain Multi Tunnel (BMT) protocol.
The realisation of cross-chain functionality has significant implications for the field of blockchain technology as:
 
*	It allows value to be transmitted between blockchains;
*	It dissolves barriers between independent blockchains to provide a foundation for building a globally interoperable blockchain ecosystem;
*	It allows existing blockchains to expand beyond their constraints;
*	It connects existing internet infrastructure to blockchain systems.


---

## 100% Reserve Ratio

In order to ensure the stability and safety of the HCASH ecosystem, the reserve amount of HyperExchange to HCASH will be kept at 100%. Each HIOU will have its corresponding asset (such as BTC, ETH, etc) placed into hot or cold multi-signature wallets [7] on the original chain. Those addresses will then be managed by a RPPOM consensus mechanism. This ensures that all assets on the HyperExchange network will not be modified or destroyed without reason, and that increases or decreases in assets always correspond to users' deposit or withdrawal activities.

---

## Efficiency

In accordance with the RPPOM consensus mechanism, the HyperExchange network produces a block every 5 seconds, resulting in significantly faster transaction confirmation speeds. This is illustrated best when compared to BTC, which produces a block every 10 minutes, or LTC, which produces a block every 2.5 minutes. The performance of a BTC or LTC asset transfer or trading on the HyperExchange network is approximately 120 times that of the BTC network and 30 times that of the LTC network. 

Overall, HyperExchange's theoretical TPS (transactions per second) can reach 10,000, which is enough to carry high-load transactions on multiple chains.

A table containing comparisons to the HyperExchange with other networks can be seen below:


| Blockchain| Block time | Size of block | Theoretical TPS |
| ---------:|:----:|:---------:|:------:|
| HX      | 5s     | 20M           | 10000   |
| BTC     | 10 min | 1M            | 7       |
| ETH     | 17s    | No upper limit  (800 million gas) | 22      |
| LTC     | 2.5 min| 1M            | 28      |
| NEO     | 20S    | No upper limit| 1000    |
| EOS     | 1.5S   | No upper limit| Millions|

From this table, we can see that the HyperExchange network has significantly improved performance over BTC, LTC, ETH, NEO [8] and other chains when comparing production rate, block size, and theoretical TPS.

Although there is a gap when comparing the theoretical million-level TPS of EOS [9] to that of HyperExchange, EOS block producers require a very stable network connection between servers, meaning they have high-performance requirements. The block producing mechanism of EOS requires 21 block producers, each of whom produce blocks in order. It therefore has the risk of being exposed to DNS fraud and DDOS attacks.

In contrast, HyperExchanges server and network requirements are less demanding, more adaptable, and can easily interface with other blockchains. Also, its generation node is randomly selected from all Citizens, meaning it is more difficult to target. Therefore, the risk of network attacks can be circumvented to the greatest degree and partial nodes can be attacked completely without affecting the stability of the entire network.

---

## Smart Contracts 

By using Turing-complete smart contracts, HyperExchange users can flexibly extend and customise complex business transactions and financial contracts. This can be done without modifying and updating the code of the original chain itself, and so, a dynamic expansion function with limitations is realised. For example, on the HyperExchange, smart contracts can be implemented, some of which include: token contracts, trading contracts, lock-up contracts, various DAPP [10] contracts, and so on. Limitations mean that not all code can run on the HyperExchange chain. Instead, they need to follow the criteria of smart contracts. For example, only pre-defined functions from libraries can be executed, and out-of-chain data, such as weather conditions and game results cannot be obtained directly.  Dynamic expansion refers to the fact that there is no need to modify the original chain's underlying code, nor does it require hard forking.

When the operational environment changes, HyperExchange users can react accordingly by modifying smart contracts. For example, if a pending order changes, or if a change to the pending order contract logic needs to be made (such as changing the trading logic to a minimum transaction of 100 tokens, or setting a time-limit for trading, etc.), only smart contracts in the new transaction need to be modified.

Each time a smart contract is executed on the HyperExchange blockchain, a separate lightweight execution environment is initialised. This can be executed easily, by searching for the corresponding contract bytecode on the chain and then conducting the execution, with native API also being able to be utilised. HyperExchange provides native APIs for common operations that improve the performance of smart contracts in most scenarios.
										
Each smart contract stores its own independent state under 'storage'. The execution of any contract transaction which results in a data change in the state storage area of the smart contract ('storage' change), does not retain the full backup of all historical 'storage' data, but only saves the current state of the 'storage', along with the changed parameters. For example: if a 'storage' containing an array of three numbers '1,2,3', and when it changes to an array of four numbers '1,2,3,4', and then changes to an array of two numbers '1,2', only the current value of '1' and '2', and changes made will be recorded (the addition of 4, removal of 3 and subsequently 4).

With this setting, when a user wants to obtain the execution result of a smart contract, the current value of the 'storage' can easily be obtained without reading all data, which greatly reduces the user's workload and the data storage required by a node. This also saves system resources, improves the processing efficiency of the system, and calculates the gas on demand according to the actual change of 'storage'. At the same time, the user can also restore or roll back changes made to values in 'storage'.


---

## Fee Flexibility

The transaction fee on the HyperExchange chain can be paid using HX and a variety of HIOU payments. If the user has any HX or HIOU, they can directly trade without having to worry about fees.
 
The exchange rate on the HyperExchange is not a fixed ratio but is determined by market dynamics. As the price of Hyper Assets fluctuate, the HIOU required to facilitate a transaction will also fluctuate accordingly.

---

