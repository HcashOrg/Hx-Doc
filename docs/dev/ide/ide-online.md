# IDE Contract Test & Deploy online
IDE provide the complete environment of testing and deploying online. The test and deploy method will introduced this chapter. We'll make the HX as example and other chains' operation is mostly similar with HX.

##Start Chain
Click `File`->`Configure` in menu bar to open configure dialog, select the ChainType as HX, select StartChain as Test, click `Confirm` and restart the IDE whenever you want.

![Start IDE](/img/research/test_set.png)

There may some information shown at the start up window  and once you successfully in main window, you can see the HX TEST CHAIN at the title bar and the status of hx-chain at the status bar. If error occures, please close the ide and the remain progress backyard and restart IDE, or get the latest chain software from the official web. 

![Start IDE](/img/research/test_load.png)
![Start IDE](/img/research/test_main.png)

###Backstage of Chain 
Click `Tool`->`Chain Output` in menu bar to browser the output of chain.

![Start IDE](/img/research/test_chain_out.png)

###Console
Click `Tool`->`Console` in menu bar to get the console dialog, use it just like the normal console of wallet.

![Start IDE](/img/research/test_console.png)

###Account
Click `Tool`->`AccountManager` in menu bar to open the account. There may be already one pre-test account named nathan for user to test the contract. Also, you can create new account by clicking `NewAccount` and import account by clciking `ImportKey` to choose priviate key file.

![Start IDE](/img/research/test_account.png)

###Transfer
Click `Tool`->`Transfer` in menu bar to open transfer dialog, input asset number and the receiver address, then click `Confirm` to process transfer.

![Start IDE](/img/research/test_transfer.png)

###Contract Register
Click `Contract`->`Register Contract` in menu bar to open contract register dialog, choose `ContractFile`, input `GasLimit` and `GasPrice` to set the fee of register and there's recommand value which is pre-calculated. Press Confirm to register contract and you can see the result in the tip dialog.

![Start IDE](/img/research/test_contract_register.png)

After register successfully, you can find your registered contract at the `Registered` tab in resource management.

![Start IDE](/img/research/test_contract_register_show.png)

###Contract Upgrade
Click `Contract`->`Upgrade Contract` in menu bar to open contract upgrade dialog, choose `Account` and the `ContractAddress` belog the account you choose, input the `ContractName`, `ContractDes` you want, and give the value of `GasLimit`,`GasPrice`, click `Confirm` to upgrade contract.

![Start IDE](/img/research/test_contract_upgrade.png)

After upgrade successfully, you can find your registered contract at the `Registered` tab in resource management.

![Start IDE](/img/research/test_contract_upgrade_show.png)

###Call Contract
Click `Contract`->`Call Contract` in menu bar to open contract caller dialog, choose `CallerAccount` and the `ContractAddress` belog the account you choose, input the `Function`, `Param` you want, and give the value of `GasLimit`,`GasPrice`, click `Confirm` to call contract api.

![Start IDE](/img/research/test_contract_call.png)

###Contract Deposit
Click `Contract`->`ContractDeposit` in menu bar to open contract deposit dialog, choose `CallerAccount` to decide the payler, select `Asset` and `Ammount`, input `ContratAddress` as destination, and give the value of `GasLimit`,`GasPrice`, click `Confirm` to transfer to contract.

![Start IDE](/img/research/test_contract_transfer.png)

###Deploy on Formal Chain
Actually, there's no difference between test and formal chain, once you tested your contract well, you can repeate your operations on formal chain to deploy. Firstly, you should switch your current ide connection to formal chain, by change the start-up settings. Open `Settings` dialog, choose the `StartType` as `Formal` or `ALL` and restart IDE, you'll find 'Formal' in title bar if you choose `Formal`. If you choose `All`, the default chain is still 'Test', you can switch to formal chain by click `Tool`->`Change To Formal`.<font color="#dd0000">Since there's no password peotection of formal chain, only a few asset should be transfer to formal to deploy your contract</font>.

![Start IDE](/img/research/test_set.png)
