# Security

POV is an extremely secure protocol that has the ability to safeguard against various malicious attacks and unexpected situations, providing a highly secure network and ensuring extensive asset protection. The following are some extreme situations which are able to be mitigated when using a POV consensus mechanism:

---

* In the HyperExchange network, Citizens play an important role in maintaining the stability of the system. Assuming that some randomly chosen Citizens fail to carry out their duties, and as long as not all 25 elected Citizens default on their obligations, the stability of the chain will not be affected. Only one Citizen needs to be online in order to generate the 25 allotted blocks. Therefore, even in this extremely unlikely situation, the network can still operate effectively until new Citizens are selected. Under normal circumstances, if a Citizen does not generate a block for 5 consecutive rounds, then their participation rate will be reduced, which in turn will reduce their chances of being re-elected as a block node in the future. The calculation of a Citizen pledged asset amount will be adjusted by their participation rate based on the formula: Citizen final pledge amount of HX = User pledge amount of HX multiply by participation rate (0-100%). Therefore, Citizens are extremely incentivised to remain acting as a high-quality node, further ensuring that the probability of all 25 Citizens going offline is extremely unlikely to occur.

---

* Another extreme situation could be where a Citizen maliciously generates 2 different blocks at the same time and subsequent Citizens continue to generate blocks based on that malicious block. Here, when the current round of block generation ends, the network will automatically transfer to whichever chain is longer. In such a scenario, as long as the block receives more than 17 confirmations, a double spending [12] attack can be avoided.

    In the case where a mining pool holds a large amount of assets on the blockchain, but less than 51%, and assuming that the pool's asset allocation is perfect, this still does not guarantee that in each block production round that pool will hold more than 50% of block generation nodes. Hence, receiving more than 17 confirmations for each block still allows the network to avoid double spending attacks. 


---

* In the case of mining pools jointly holding more than 51% of assets on the blockchain, problems such as transaction rollbacks can occur. However, HX and HIOU assets can be used to mine in a pool, and this risk can be mitigated further when considering that HIOUs are managed by Senator consensus. 

    However, if the mining pools are jointly harming the system, they will face the following repercussions:
    
    1) The participation rate of all miners involved will be reduced to 0% according to the consensus model (i.e. no matter how many assets are pledged, their chances of being re-elected as a block node in the future will be reduced to 0)
    
    2) All HIOUs that have been pledged in mining pools by miners will be frozen and restricted until further notice. Whether or not these frozen assets will be released depends on the amount of harm caused by that pool. 
    
    All involved mining pools will face the loss of their registration fee and all HIOU assets pledged in the pool, while users who have pledged assets to miners in that pool will need to enter an appeal process. From here, a Senator consensus will decide whether or not to unfreeze their assets.


---

