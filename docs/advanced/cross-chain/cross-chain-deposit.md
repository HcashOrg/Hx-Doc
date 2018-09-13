In addition to a HyperExchange account, users will also have a number of associated tunnel accounts. Through the HyperExchange bundled light wallet component derived from other asset chains, users can deposit assets from other asset chains or from centralised exchanges directly to their bounded tunnel account.

If a Citizen on the HyperExchange detects a transfer to a user's associated multi-signed deposit address, they wait for the blocks to reach a certain amount of confirmations. After this, the associated HyperExchange account will be indexed through the 'from' address of the deposit, and credited a corresponding amount of HIOU (HXBTC/HXLTC, etc) tokens through consensus on the HyperExchange. After this, these credited tokens will be frozen (block m) until the block reaches a certain height (for example, m+17). From here, these assets 'unfreeze' and become 'available' to be transacted.
Depositing assets in the HyperExchange is divided into the following sections:		
	
a.	The user deposits assets into their associated tunnel account. This transaction confirmation depends on the confirmation time on the original asset chain. For example, BTC would require 6 blocks of confirmation, while LTC would require 12.
	
b.	The process of transferring funds from a tunnel account to the corresponding multi-signature wallet is managed by Senator consensus. This transaction confirmation also relies on the confirmation time on the original asset chain. For example, BTC would require 6 blocks of confirmation, while LTC would require 12.

c.	On the HyperExchange network, a Citizen generates corresponding HIOU tokens, which are then distributed to the user through consensus - this requires 17 confirmed blocks.

The operational flow chart for this process is as follows:

<img class="hx-icon" src="/img/cross-chain-deposit.svg" />

During its operation, the Indicator will simplify human to computer interaction by packaging the majority of processes. The user only needs to follow simple steps to complete cross-chain transactions.