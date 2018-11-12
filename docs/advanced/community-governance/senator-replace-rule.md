As a part of the governance and operation of the HyperExchange chain, Citizens are involved in the replacement of Senators. The replacement process is as follows:

---

## 5 fixed Senators

The 5 Senators are replaced by the process as following:

1.	new Senator registers as an on-chain user(need spend 5HX)
2.	register to be a senator(need spend 10000HX)
3.	Any random existing Senator initiates a proposal to nominate the new Senator and the Senator to be replaced. 
4.	the rest 4 Senators confirm such a proposal
5.	Senator  the new Senator becomes candidate Senator after 2/3 signatures confirmation
6.	the new 15 Senators launch cross-chain wallet replacement process
7.	New Senator officially becomes a Senator after wallet replacement process finished. The Senator who just has been replaced loses its identity. 
8.	New Senator begins to get mining reward and other reword, the Senator who just has been replaced becomes ordinary registered user. 

---

## 10 campaigns Senator

These 10 Senator replacement processes is more complicated, please find it as following:

1.new Senator registers and becomes on-chain user

2.Any Citizen initiates a replacement proposal, the process is as follows:

- during the period of such a proposal, there should be a normal state of Senator without any campaign 
- maximum nomination amount for Senators replacement is 3, in order to keep a secure system
- After the proposal is initiated by any Citizen, the entire chain is in collection period, lasting 16,000 blocks (about 1 day), which is part of the election cycle.
- All Citizen proposals are screened in the following order of priority (prior to the previous conditions), and finally only one proposal is confirmed

       i. The maximum amount of the campaign payment in the proposal is given priority

       Ii. The maximum amount citizen pledge assets is given priority

       Iii. Earlier proposal block confirmation is given priority

       Iv. Earlier Packing within the same block is given priority


3.After the end of the proposal collection period, the sole proposal should be selected and voting period started.

- This cycle lasts for 80,000 blocks (approximately 5 days)
- All Citizen can initiate voting during this period
- Take all Citizens pledged assets as total weight, proposal is passed when more than 2/3 weight of citizens confirm.
- If the voting period does not meet the conditions of proposal, the proposal becomes invalid

4.When the proposal for voting period is passed, it will enter replacement period.

- During this period, the new Senator is required to submit cross-chain asset management information (ie public key, all cross-chain assets, and initiate asset transfer transactions)
- This cycle lasts for 80,000 blocks (approximately 5 days)
- If asset is  successfully transferred during this period, replacement of old Senator by new Senator is completed. 
- if unable to provide till the end of this period, proposal becomes invalid. 

5.the entire chain finishes election cycle after voting period, which means new replacement nomination can be initiated.

---

## The campaign cycle

The campaign cycle starts since confirmation of the first on-chain proposal, finishes when new Senator completes asset wallet replacement and gets reward. Campaign cycle is a one-line process that cannot be paralleled, which ensuring that no excessive states will be generated, avoid causing unnecessary coding errors.

![senator replace rule](/img/senator-replace-rule.png)

The four states described in the process has been explained in details in the campaign process, please see summary as below: 

1. No campaign status – no replace proposal is going on in this status, any proposal could be initiated in this status. HX chain should always be in this status apart from election cycle.
2. Proposal Collection – When HX chain is in “no campaign” status and any proposal initiated by Citizen is confirmed in blocks, the block has entered into the proposal collection status, which lasts 16,000 blocks and ends immediately after 16,000 blocks.
3. Voting Collection –Proposal collection status is initiated by a proposal, in which case at least one (and only one) proposal will enter voting collection phase. All Citizens have to vote on this proposal in such status. This status lasts for 80,000 blocks and ends immediately after 80,000 blocks.
4. Senator replacement status – it will be Senator Replacement stage if there is enough Citizens to vote (2/3) in voting collection status, otherwise it will return directly to “no campaign” status. In such status, all Senators initiate asset multi-sign address change transaction and enter “no campaign” status after all transactions have been completed. At this point, the new Senator replaces the old Senator and begins to receive reward. This status lasts for 80,000 blocks and ends immediately after 80,000 blocks. It enters "no campaign" status, proposal becomes invalid, original Senators remain unchanged.

---

## cost of proposal

Proposal can be initiated by any Citizen, multiple proposals may be initiated during proposal collection status. Here is a description of the cost of proposal:

1. Every proposal has a cost, that is, the initiation of proposal requires a certain fee, minimum 100HX, no upper limit.
2. Proposal fee can be increased, but each increase must be an integer multiple of 100HX.
3. This fee is not charged by anyone but will be destroyed immediately. That is to say, as long as a proposal is packaged into a block, the fee in the proposal has been destroyed.
4. Even a proposal is not confirmed as a voting proposal by the end of the proposal collection period, fee will not be returned.
The reason of having cost of proposal is to prevent initiating the proposal endlessly by malicious node. A normal node does not need to pay too much fee when initiating a proposal. Even is not selected in one election, it can be used for the next time election.
Meanwhile, after proposal confirmation, voting phase remains. Even if malicious node wins the right to confirm the proposal, if there is not enough Citizen voting support, it will still fail to be elected with unnecessary consumption of HX.


---



