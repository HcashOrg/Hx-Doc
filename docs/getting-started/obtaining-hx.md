# Obtaining HX in mainnet

---

## Dual-token

Tokens produced by HyperCash and HyperExchange are named HC and HX, respectively. To facilitate the creation of the HyperExchange network and to maintain a liquid environment, the Foundation will propose a one-time swap plan for HC and HX, where HX holders will receive a 1:100 exchange rate (1 HC for 100 HX).
 
(Please refer to the upcoming official announcement for further information regarding this.)

---

## HC

HC is the asset that will be distributed through the HC chain and a 1:1 conversion swap ratio from HSR will take place. HC is the value token that maintains the ecological stability of the HCASH network. HC can be used as an asset on the HC chain to participate in its governance, and can also be used as a pledged asset to participate in the production of HX tokens on the HyperExchange chain.
 
(Please refer to the upcoming official announcement regarding conversion details).

---

## HX

HX is a functional token on the HyperExchange chain. HX will temporarily take the form of an ERC20 token before the launch of the HyperExchange. After the launch, the ERC20 token will be swapped into a network-based token (non-ERC20). 

(Please refer to the upcoming official announcement for redemption details).

The total circulating amount of HX is 8.4 billion, of which 4.2 billion will be reserved for the HSR/HC swap. When the swap period ends, un-swapped HX will be transferred and managed by all HX holders and will be used for HCASH ecosystem investments via consensus. All rewards will then be shared amongst HX holders according to their stake weight.
 
Of the total 8.4 billion tokens, 2.1 billion will be managed by the Foundation for follow-up technological development and community incentives.
 
The remaining 2.1 billion tokens will be allocated for block generation rewards. (Which will be reduced once every four years for 100 years, see the attached table).

| period| proportion to total output | proportion to last output | total output each year | period block reward | token output for this period |
| ---------:|:----:|:---------:|:------:|:------:|:------:|
| 1      | 0.3031  | 0   | 159129485.8 | 25.58   | 10000   |
| 2      | 0.21456 | 0.71| 112644862.8 | 18.11   | 10000   |
| 3      | 0.16078 | 0.75| 84408550.45 | 13.57   | 10000   |
| 4      | 0.16078 | 1   | 84408550.45 | 13.57   | 10000   |
| 5      | 0.16078 | 1   | 84408550.45 | 13.57   | 10000   |
||||                                   | Total  | 2100000000|

---

## Incentive Systems

There are three types of incentives on the HyperExchange:

*	Block rewards;
*	Block transaction fees (including general and contract transaction fees) using HX; and
*	Withdrawal of contract fees, including various types of asset HIOUs (HXBTC, HXLTC, HX, etc.), with a transaction fee of 0.01%, decided and changeable by Senator consensus. Senators receive 20% of the total contract withdrawal fee, with the remaining amount divided equally between all users based on the amount of HX they hold.

Table: User Comparison Incentive Table

|                          | Tourist | Citizen Supporter | Citizen | Senator | Remarks |
| ---------:|:----:|:---------:|:------:|:---------:|:------:|
| Citizen Registration Fee| NO    | NO          | NO       | NO | Tokens destroyed|
| Normal Transaction Fee  | NO    | YES         | YES      | NO | Transaction Fee in HX|
| Block Reward            | NO    | YES         | YES      | YES| Block Rewards in HX|
| Contract Transaction Fee| NO    | YES         | YES      | NO |Transaction Fee in HX|
| Contract withdrawal Fee (for side-chain Assets)| YES     | YES| YES      | YES         | Transaction Fee in HIOU|

**NOTICE: Citizen Supporter: this refers to users who participate in mining and obtain mining rewards by pledging assets with Citizens. After Citizens obtain their block rewards, a pre-set mining pool management fee will be deducted, and the remaining rewards will be distributed to all users who pledged their assets, according to their weighting.

## Tourists

As a basic user of the HyperExchange, Tourists can obtain rewards from contract withdrawal fees. Typically, rewards are made every 100,000 blocks. Rewards are allocated based on the amount of HX held. The formula is as follows:

Sigma((The total amount of a single type of asset transaction fee-Citizen Rewards-SenatorRewards)/(Total amount of HX))

## Citizens

In the HyperExchange ecosystem, Tourists earn block rewards by becoming a Citizen or through pledging assets. A Tourist can pay 10,000 HX to register as a candidate Citizen. From here, the user can pledge their own assets or encourage other users to pledge their assets on the Candidate Citizens behalf. The user then has the ability to compete for the right to become a Citizen, which will enable them to participate in block production and to obtain block rewards.

The rewards for Citizens and Citizen Supporters are the corresponding percentage of rewards that come from the mining pool, block rewards, and contract withdrawal transaction fees.

Mining Pool Block Reward = Fixed Block Reward + Normal Transaction Fee Reward + Contract Transaction Fee Reward

The formula for block rewards received by a Citizen and its referred users is:

Citizen Initiated User Block Reward=Mining Pool Block Reward *(0%~20%)*+Asset Collateral Reward=(Block Fixed Reward*70%+NormalTransaction Fee Reward+Contract Processing Fee)*(0%~20%)+AssetCollateral Reward

*In order to incentivize Citizens, they will obtain 0-20% of the pool reward (the ratio is set by itself, the system default is 10%) as a mining pool management fee.

A Citizens collateral rewards are evenly divided according to the weighting of their individually held collateral assets.  The formula is:

Asset Collateral Reward = (Fixed block reward*70%) * (100%-80%) * HX weight of collateral asset

Citizen Supporters can receive asset collateral rewards. 

To hold Citizens accountable, penalties also need to be introduced. If a Citizen misses 5 blocks in a row, the chain reduces the Citizen's participation rate, which reduces the future probability that their node will be elected as a block node.

## Senators

Senators equally share 30% of block rewards and get a 20% bonus reward from all contract withdrawal fees.
