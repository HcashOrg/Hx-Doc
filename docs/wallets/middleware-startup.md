## HyperExchange Middleware Setup Guide

Last updated for v1.0.7.

---

`HyperExchange Middleware` Used to collect/store and manage other blockchain data;Handle various operations of acrosschain (deposit/withdraw, etc.).

---

## Download and Install

The latest version of HyperExchange Middleware can be downloaded from [https://github.com/HcashOrg/HyperExchange/releases/tag/v0.1).Now just support install on linux system.

When deployed, mongo and ubuntu images are used, and docker automatically downloads the image, so there is no active pull.

> Config File

Before start middleware,need to config parameters of mongo/log/local rpc server/other chain rpc server...

For example:

    #!/usr/bin/env python 
    # encoding: utf-8
    
    __author__ = 'hasee'
    
    import logging
    
    class CollectorConfig(object):
    # DB configure
    DB_POOL_SIZE = 10
    CONNECT_TIMEOUT = 50
    MONGO_HOST = '127.0.0.1'
    MONGO_PORT = 27017
    MONGO_NAME = 'chaindb'
    MONGO_USER = 'chaindb_user'
    MONGO_PASS = 'yqr.1010'
    
    # LOG configure
    LOG_LEVEL = logging.INFO
    LOG_FORMAT = '%(asctime)-15s %(levelname)s %(funcName)s %(message)s'
    LOG_FILENAME = "btc_data_collector.log"
    
    # SYNC configure
    SYNC_BLOCK_PER_ROUND = 10000
    
    class BKCollectorConfig(CollectorConfig):
    # RPC SERVER configure 
    ASSET_SYMBOL = "BK"
    RPC_HOST = '192.168.1.152'
    RPC_PORT = 8093
    SYNC_STATE_FIELD = "bksyncstate"
    SYNC_BLOCK_NUM = "bksyncblocknum"
    SAFE_BLOCK_FIELD = "bksafeblock"
    CONTRACT_CALLER = "lktest001"
    
    class BTCCollectorConfig(CollectorConfig):
    ASSET_SYMBOL = "BTC"
    RPC_HOST = '192.168.1.121'
    RPC_PORT = 60022
    SYNC_STATE_FIELD = "btcsyncstate"
    SYNC_BLOCK_NUM = "btcsyncblocknum"
    SAFE_BLOCK_FIELD = "btcsafeblock"
    
    class LTCCollectorConfig(CollectorConfig):
    ASSET_SYMBOL = "LTC"
    RPC_HOST = '192.168.1.124'
    RPC_PORT = 60014
    SYNC_STATE_FIELD = "ltcsyncstate"
    SYNC_BLOCK_NUM = "ltcsyncblocknum"
    SAFE_BLOCK_FIELD = "ltcsafeblock"
    
    class UBCollectorConfig(CollectorConfig):
    ASSET_SYMBOL = "UB"
    RPC_HOST = '192.168.1.124'
    RPC_PORT = 60011
    SYNC_STATE_FIELD = "ubsyncstate"
    SYNC_BLOCK_NUM = "ubsyncblocknum"
    SAFE_BLOCK_FIELD = "ubsafeblock"
    
> Start Middleware

Enter directory of middleware,find file docker_op.sh,then excute command:

`./docker_op.sh `   






