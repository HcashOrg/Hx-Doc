# Financial Balance

If assets in the hot multi-signature account exceeds 3 times that of the specified limit, a fund rebalancing process is initiated. During this process, assets will be transferred from the multi-signature hot wallet address to the multi-signature cold wallet address.	
		
The specific technical implementation plan is as follows:	
		
A senator initiates a rebalance process, this triggers a transaction which is packaged on the chain, other Senators will then verify that transaction. After being successfully verified, the signature of the transaction will be broadcasted and packaged by Citizens.
					
When a Citizen receives 2/3 or more of Senators' signatures, the corresponding asset chain transaction producing HIOU tokens will be confirmed, and will be broadcasted to the original chain, thus completing the rebalance process. 
