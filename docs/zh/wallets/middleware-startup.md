## HyperExchange中间件设置指导


---

`HyperExchange中间件`用来采集存储和管理其他资产链上的数据;处理各种跨链的操作(充值、提现等).

---

## 下载和安装

可以在[https://github.com/HcashOrg/HyperExchange/releases/tag/v0.1)下载中间件的最新版本。目前仅支持在Linux系统上安装。

部署的时候需要mongo 和 ubuntu镜像, docker会自动下载这些镜像。

> 配置文件

在启动中间件之前，需要配置一些参数：mongo/log/local rpc server/其他资产的rpc server...

例如:

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
    
> 启动中间件

进入中间件目录，找到文件docker_op.sh，然后执行下面的命令：

`./docker_op.sh `   






