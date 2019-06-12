# HyperExchange Witness-node Startup Guide

Last updated for v1.0.7

---
 

After Building, the witness_node can be launched with:

    ./programs/witness_node/witness_node

The node will automatically create a data directory including a config file. It may take several hours to fully synchronize the blockchain. After syncing, you can exit the node using Ctrl+C and setup the command-line wallet by editing `witness_node_data_dir/config.ini` as follows:

    rpc-endpoint = 127.0.0.1:8090
**IMPORTANT:** By default the witness node will start in reduced memory ram mode by using some commands. In order to run a full node with all the account history you need to remove **partial-operations** and **max-ops-per-account** from your config file. Please note that currently(2018-07-02) a full node will need more than 100GB of RAM to operate and required memory is growing fast. 

After starting the witness node again, in a separate terminal you can run:

    ./programs/cli_wallet/cli_wallet

Set your inital password:

    >>> set_password <PASSWORD>
    >>> unlock <PASSWORD>
To import your initial balance:

    >>> import_balance <ACCOUNT NAME> [<WIF_KEY>] true
If you send private keys over this connection, `rpc-endpoint` should be bound to localhost for security.

Use `help` to see all available wallet commands. 



---