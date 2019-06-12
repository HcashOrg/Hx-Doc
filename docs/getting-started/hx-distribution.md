# HX Distribution

---

## HX

HX is a functional token on the HyperExchange chain, which is all obtained by the miners, Mineral award allocation: 20% development team, 30% Senator, 50% Citizen and its supporters, citizen could get no more than 20% bonus (50% of block award). The specific benefits of mining blocks are as follows:

| Time Range(Year) | Period Output | Amount Per Block |
| ---------:|:----:|:---------:|
| 0-10 |330752215|6.9|
| 10-20 |187074130|3.85063|
| 20-30 |111061933|2.23171|
| 30-40 |70735639|1.37222|
| 40-50 |49342448|0.9159|
| 50-60 |37993209|0.67366|
| 60-70 |31972254|0.54504|
| 70-80 |28778828|0.47679|
| 80-90 |27084064|0.44054|
| 90-100 |26072874|0.42129|
| 100-?|0|0|
| Sum |900867494||

From 0 - 2499999 block the reward is 27, so the total supply  will be **968367494**.

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

As a owner of the HyperExchange(at least have 10000hx), Tourists can obtain rewards from contract withdrawal fees. Typically, rewards are made every 100,000 blocks. Rewards are allocated based on the amount of HX held. The formula is as follows:

Sigma((The total amount of a single type of asset transaction fee-Citizen Rewards-SenatorRewards)/(Total amount of HX))

## Tourists

Tourists can receive block rewards through pledged assets.

## Citizens

In the HyperExchange ecosystem, Tourists earn block rewards by becoming a Citizen or through pledging assets. A Tourist can pay 1,000 HX to register as a candidate Citizen. From here, the user can pledge their own assets or encourage other users to pledge their assets on the Candidate Citizens behalf. The user then has the ability to compete for the right to become a Citizen, which will enable them to participate in block production and to obtain block rewards.

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
