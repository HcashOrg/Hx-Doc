# hx_node Usage

Last updated for v1.2.0.

This guide assumes you have already set up a hyperexchange witness-node using [HyperExchange Witness-node Setup](/wallets/hxnode-setup.md),hx midware has startup and connect with oterh blockchain(BTC/LTC...),Following will introduce all arguments of witness-node.

---

You can specified arguments after `witness-node` or config in file `config.ini`.


## Config

**File config.ini template:**

     track-address = "HXFynbZPgLeF5GfMXs9CCuEAreLGWSU4HK6"    
     track-address = "HX7vBsFkAtgmhULMkHNkDVLoSR3kGbEfDvi"
     
     # Endpoint for P2P node to listen on    
     # p2p-endpoint = 
     
     # P2P nodes to connect to on startup (may specify multiple times)    
     # seed-node = 
     
     # JSON array of P2P nodes to connect to on startup    
     # seed-nodes = 
     
     # Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.    
     # checkpoint = 
     
     # Endpoint for websocket RPC to listen on    
     # rpc-endpoint = 
     
     # Endpoint for TLS websocket RPC to listen on    
     # rpc-tls-endpoint = 
     
     # The TLS certificate file for this server    
     # server-pem = 
     
     # Password for this certificate    
     # server-pem-password = 
     
     # File to read Genesis State from    
     genesis-json = "E:\link_mytest\genesis.json"
     
     # Block signing key to use for init mineres, overrides genesis file    
     # dbg-init-key = 
     
     # JSON file specifying API permissions    
     api-access = "E:\link_mytest\api-access.json"
     
     # Miner in this node would not pack contract trx which gas price to low    
     # min_gas_price = 
     
     # Enable block production, even if the chain is stale.    
     enable-stale-production = true
     
     # Percent of miners (0-99) that must be participating in order to produce blocks    
     required-participation = false
     
     # ID of miner controlled by this node (e.g. "1.6.5", quotes are required, may specify one times)
     
     miner-id = "1.6.1"
     miner-id = "1.6.2"
     miner-id = "1.6.3"
     miner-id = "1.6.4"
     miner-id = "1.6.5"
     miner-id = "1.6.6"
     miner-id = "1.6.7"
     miner-id = "1.6.8"
     miner-id = "1.6.9"
     miner-id = "1.6.10"
     miner-id = "1.6.11"
     miner-id = "1.6.12"
     miner-id = "1.6.13"
     miner-id = "1.6.14"
     miner-id = "1.6.15"
     miner-id = "1.6.16"
     miner-id = "1.6.17"
     miner-id = "1.6.18"
     miner-id = "1.6.19"
     miner-id = "1.6.20"
     miner-id = "1.6.21"
     miner-id = "1.6.22"
     miner-id = "1.6.23"
     miner-id = "1.6.24"
     miner-id = "1.6.25"
     
     # Tuple of [PublicKey, WIF private key] (just append)
     private-key = [["HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"],["HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77","5JZDdTiLcahFtZo7M95ybDjT5VufrsYWfxiaQfJoP1zfbw8PmRA"],["HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1","5K8mFWgAf2bd5AG8hKzjc9BgXKrnwqNT7PaUbJ7oWjHjQPwz8zF"],["HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn","5K4RZCLQ6kUFps1eUncFkAJ7iUEsRXm694aD2W6tMxhFqzmWdD3"],["HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa","5JiDkVAXi6vpE6aEiDRh7WAwcGwr1ivrsN8Yh7eDwFbmz5BFCTz"],["HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY","5J5uekBwLhENsKGNShqBDoJdbHDaZMMrStVimGTfJ9V2vbAKpo9"],["HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS","5KCmKbz9mD8ndbA5UBLC6kUVENCDkmHf9dpZ7ExKnB8LFWWyTmw"],["HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB","5JLvURaky1ryswgY785sQ4TiR3MrEon9ryKX71NatdJJ3AvtC2b"],["HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc","5HvjWASwH2mYNodoMDdibW8tHW3u8HFQYS7vD3BtpeenCny1h2Q"],["HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ","5JDkmfS8YMWapcSCntX7wygJZPtELATJHMpPCvidTA19SF8Xo5u"],["HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x","5HzByVyqvtXWXb9HM3TFS8mvrCf3NaDM1GRZQHuaiDgJG739a83"],["HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h","5KdAjgrJ7gwnbwQVK8vMXQJ5BW5PfMr5BtA5DpsQwCtCVGNqM8V"],["HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ","5KbUi2Efd2bscQKtQ3a4RBvn4bVuaMfpCZwHpskWrUokRc3NXA1"],["HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp","5K67sdMmoynLXK3Y3EiZ3Gfjw9Qn5UY9dQrGKed5V5DiZHzun7G"],["HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk","5JCBhwpxBSo7ABJweuNamtGoWbnbVJvGf4KAyKCgFFWTKGWD1vD"],["HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1","5JyKyz1JJZTzN1a4ruvbykLia1WMM46TEJShhgLzWfsGQJVcHSK"],["HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE","5Hy5KPpkAoU2r9uaiqw4SECwNYyZMaR78BkuhbeLpw6tVBB66gn"],["HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7","5JP1tX4BRrgZctxTmkAbam9m53DardLM6TrQtDS1EdgohGp6mtJ"],["HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC","5KkHjoSC1u5GhBdaNbGmTptwEg22AqtEk4ECQ8XQXfMFqXhDnHk"],["HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN","5KjdpdNzwcx9A5XZGNquHWzqVcPvMPF9EXsDkY2STsvDQeNroZn"],["HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q","5KfshkiRmYvAvbf5rg8HXWZSifrTtR7htQyox7aVrCsw5t4Xgbk"],["HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4","5JZ46AjQN7kCz7igUcQ3wGUFAviBDvBkxZ7xS6Pf5DHPQvFspwr"],["HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts","5JHa4RNxzehYdCMtVoqh55a5vNzAmENXtoGwXFxmNwtvTrduGHy"],["HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy","5J1HrKVzNQBwKXiTdMYaY6eVknm15mCeyV84Wt3TDMwwCLHxyWv"],["HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9VHEZzsopu5mMHuGqRxkfeC","5JtrnVGscfoYC8Hftk36hwXYUZjKBzL6fv8JBTeo6MbKgSL2vF1"],["HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN","5J3oHnGEze3gwidWjoznyTGgyJqFm3h8cFWg2DZaP55Rd1tUXVr"],["HX6pNcaS3ZFuo3gzwvxcFxTnNhbcbtLodEMPvAtSDQXLkRqNjNTo","5JZe9Hv7twngWSEZzvvvDXP5RG1LJGixSz6WJ4D8te9x45kvDuG"],["HX5ZyfuVbqjTJ44VkzVqt7yLZoJuV15agjUkMXwsapC1xNqwkdZ5","5JQT9vqrFW26817PELM7D3w6rqbZ5GDW43knB2bP5kBALQ2BRDi"],["HX5P6vSL3cG8wdiiSvcHmsfAoxqWGkSMd65TibbrjG9qAfY7g9Ka","5Je6RMyd39B3W7QsC6XPHXFaTP31QmrtfiBxnmXDbeFz1pHE8CB"],["HX6pf6v2N4VNX65eQCwf6gVNUhe2UurUVKsyyRWEoyEoDop5TXHK","5JhS8VntvNPKPU1ByiUMhUeu7HutUK9PfCyAUXGvqLB1dym7Hgt"],["HX6oVVvTQni6EfiN4h4oyxTQ4ACW6eP15fEpZTCeS8JcXWwBUbXR","5JmaB7uQVGN6nKH1YyU4hSF6TmfCGJKoywimbJsRVkykF9swp1D"],["HX5Qd3TyKic1t73dn5EDVJZ3WmszcKRz5GHaB8dVujCURsTTtYaN","5JPYHwjeHETE6xzMUo2TunSCpdfdAUjLBBUH2Jy2DuGQcdS2ism"],["HX59JXtoH3eW8YmrGUfWAX58W7RWFY8Wp1Nbz2zQ4xRarNSNVSuq","5KLAzVUNPPci2JhQUQRpy1zsbjvyHQaRTATfLYk6jMnjrKZhx8U"]]
     
     # hyperexchange midware ip and port
     crosschain-ip = 192.168.1.195
     
     crosschain-port = 5005
     
     #  chain-type for crosschains  (e.g. ["BTC"], quotes are required,  specify one times)
     chain-type = ["BTC","LTC","UB","HC"]
     
     # Account ID to track history for (may specify multiple times)
     # track-account = 
     
     # Keep only those operations in memory that are related to account history tracking
     # partial-operations = 
     
     # Maximum number of operations per account will be kept in memory
     # max-ops-per-account = 
     
     # address to track history for (may specify multiple times)
     # track-address = 
     
     # guard-id = 
     
     # declare an appender named "stderr" that writes messages to the console
     [log.console_appender.stderr]
     stream=std_error
     
     # declare an appender named "p2p" that writes messages to p2p.log
     [log.file_appender.p2p]
     filename=logs/p2p/p2p.log
     # filename can be absolute or relative to this config file
     
     # route any messages logged to the default logger to the "stderr" logger we
     # declared above, if they are info level are higher
     [logger.default]
     level=info
     appenders=stderr
     
     # route messages sent to the "p2p" logger to the p2p appender declared above
     [logger.p2p]
     level=info
     appenders=p2p
 
 

## Arguments List

**Graphene Witness Node:**
    
      -h [ --help ] Print this help message and exit.
      -d [ --data-dir ] arg (="witness_node_data_dir")   Directory containing databases,configuration file, etc.
    
      --create-genesis-json arg Path to create a Genesis State at. If a well-formed JSON file exists at the path, it will be parsed and any missing fields in a Genesis State will be added, and any unknown fields will be removed. If no file or an invalid file is found, it will be replaced with an example Genesis State.
      --replay-blockchain   Rebuild object graph by replaying all blocks
      --resync-blockchain   Delete all blocks and re-sync with network from scratch
      --force-validate  Force validation of all transactions
      --genesis-timestamp arg   Replace timestamp from genesis.json with current time plus this many seconds (experts only!)
      --p2p-endpoint argEndpoint for P2P node to listen on
      -s [ --seed-node ] argP2P nodes to connect to on startup (may specify multiple times)
      --seed-nodes arg  JSON array of P2P nodes to connect to on startup
      -c [ --checkpoint ] arg   Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
      --rpc-endpoint [=arg(=127.0.0.1:8090)]  Endpoint for websocket RPC to listen on
      --rpc-tls-endpoint [=arg(=127.0.0.1:8089)]  Endpoint for TLS websocket RPC to listen on
      -p [ --server-pem ] [=arg(=server.pem)] The TLS certificate file for this server
      -P [ --server-pem-password ] arg  Password for this certificate
      --genesis-json argFile to read Genesis State from
      --dbg-init-key argBlock signing key to use for init mineres, overrides genesis file
      --api-access arg  JSON file specifying API permissions
      --min_gas_price arg   Miner in this node would not pack contract trx which gas price to low
    
    Options for plugin miner:
      --enable-stale-production Enable block production, even if the chain is stale.
      --required-participation  Percent of miners (0-99) that must be participating in order to produce blocks
      -w [ --miner-id ] arg ID of miner controlled by this node (e.g. "1.6.5", quotes are required, may specify one times)
      --private-key arg (=[["HX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"],["HX5bqn6zdbs1CFC6ooNBZDRTmWraJjtWBqnst9y1UxSFYtSCzX77","5JZDdTiLcahFtZo7M95ybDjT5VufrsYWfxiaQfJoP1zfbw8PmRA"],["HX69GWR9Xsh74ZcicQicFVZkpNdzUgyeDHZRXM3Dj455Ebkjrch1","5K8mFWgAf2bd5AG8hKzjc9BgXKrnwqNT7PaUbJ7oWjHjQPwz8zF"],["HX4taeGZFJq2kB2cXazJbbjsWQocyTe7M976CkfRzvjtHN9jHXvn","5K4RZCLQ6kUFps1eUncFkAJ7iUEsRXm694aD2W6tMxhFqzmWdD3"],["HX6L97VZfUCWdEjqQpAMw3fRxTnzHbp2mVdQZshHk7E1jkzAHeTa","5JiDkVAXi6vpE6aEiDRh7WAwcGwr1ivrsN8Yh7eDwFbmz5BFCTz"],["HX5LPcQrUGmKfcG3he1hWf5bmuFbBzP1uZXLvNmKoQjSkGppm6XY","5J5uekBwLhENsKGNShqBDoJdbHDaZMMrStVimGTfJ9V2vbAKpo9"],["HX8Ejga5z6gbig3vnPVYdqA9TpcGCX2tJAatjV53xjRDjT6sNgHS","5KCmKbz9mD8ndbA5UBLC6kUVENCDkmHf9dpZ7ExKnB8LFWWyTmw"],["HX51KmAmvETZYW1aaKrf5w1puzv1UzMzca7eLkbET6AaAv19EdPB","5JLvURaky1ryswgY785sQ4TiR3MrEon9ryKX71NatdJJ3AvtC2b"],["HX6A1uvEQ9vA3iWm61XEeE7g9zSHAutoFoqndFiDuAwY2VPTanFc","5HvjWASwH2mYNodoMDdibW8tHW3u8HFQYS7vD3BtpeenCny1h2Q"],["HX5Dxx6J9EeMsYhseQ4Kte6oG5Dj5q25RXSg8uXsiGnGjRv9qMkJ","5JDkmfS8YMWapcSCntX7wygJZPtELATJHMpPCvidTA19SF8Xo5u"],["HX8JLi9shUiLDk1HBPwo3Twej71adUxRVRkJWhHxaVSiivR3LX2x","5HzByVyqvt
    XWXb9HM3TFS8mvrCf3NaDM1GRZQHuaiDgJG739a83"],["HX7nYKaLqUAKbUC8kmJfPWMban7AQMydU6be7PGJCJhTSWLTpb7h","5KdAjgrJ7gwnbwQVK8vMXQJ5BW5PfMr5BtA5DpsQwCtCVGNqM8V"],["HX8C8mVHtxzkZJUaqC1QSUDdXSnFzqx6FAgoB8XtFzi2DxMnFWUQ","5KbUi2Efd2bscQKtQ3a4RBvn4bVuaMfpCZwHpskWrUokRc3NXA1"],["HX7ojjUraz22uHYN86YHxcwwap2wfPiU7RaBJoBJ2xQV7hAx5WFp","5K67sdMmoynLXK3Y3EiZ3Gfjw9Qn5UY9dQrGKed5V5DiZHzun7G"],["HX5mTizLNWbiMF4HgrmUd1jDmjoDbRiQrjWSh3xfGemBF9NTpkzk","5JCBhwpxBSo7ABJweuNamtGoWbnbVJvGf4KAyKCgFFWTKGWD1vD"],["HX5Jw3UUKdE9ocWJEt1S1yco6anZC8oWv9P9o2XFxpbqFsPXQeV1","5JyKyz1JJZTzN1a4ruvbykLia1WMM46TEJShhgLzWfsGQJVcHSK"],["HX6BCoHi5pAbZHyXbVMK6RrxauSatqpn3FkFsr7U7nNRRgWnXdcE","5Hy5KPpkAoU2r9uaiqw4SECwNYyZMaR78BkuhbeLpw6tVBB66gn"],["HX6kvYvHpsJvoHBbaQXMrYAt8KHqWjPHCxfRMznzT6YDxCnGrvj7","5JP1tX4BRrgZctxTmkAbam9m53DardLM6TrQtDS1EdgohGp6mtJ"],["HX6WyKiwnSxCzUN9a8bUeEagz8Sked2zrJ1BabQkbqxog1Nbq9JC","5KkHjoSC1u5GhBdaNbGmTptwEg22AqtEk4ECQ8XQXfMFqXhDnHk"],["HX6qbQbppQUzgHS8TrUcNjyw1wHhUqJbTTZKnHr8u37SoxFSfieN","5KjdpdNzwcx9A5XZGNquHWzqVcPvMPF9EXsDkY2STsvDQeNroZn"],["HX6sQuXCi7znykMcrtabvgtFqFjMCT1hKHdeNttadYkqEqvKiD3Q","5KfshkiRmYvAvbf5rg8HXWZSifrTtR7htQyox7aVrCsw5t4Xgbk"],["HX8UQw5ZprXve3fu4aRbjqs3rfyMKTutvzg9AgJLNF5gKKriGwf4","5JZ46AjQN7kCz7igUcQ3wGUFAviBDvBkxZ7xS6Pf5DHPQvFspwr"],["HX81JvHdNWm5kS4qoiPipNU9EiLgXe2Y8R516Qcg9FgShFoPzsts","5JHa4RNxzehYdCMtVoqh55a5vNzAmENXtoGwXFxmNwtvTrduGHy"],["HX6zBzBSG8mNun1FAi6RYs1XpA11Y31n1YhieaZFrEwaec8ABNFy","5J1HrKVzNQBwKXiTdMYaY6eVknm15mCeyV84Wt3TDMwwCLHxyWv"],["HX6XiMxd7nqyxzozt3UPWdjNNjpRQ9V
    HEZzsopu5mMHuGqRxkfeC","5JtrnVGscfoYC8Hftk36hwXYUZjKBzL6fv8JBTeo6MbKgSL2vF1"],["HX54hh4baLS6fkee9PB6YGjxZaF8rZxwnRs3qL7LbHjtfPL78vFN","5J3oHnGEze3gwidWjoznyTGgyJqFm3h8cFWg2DZaP55Rd1tUXVr"],["HX6pNcaS3ZFuo3gzwvxcFxTnNhbcbtLodEMPvAtSDQXLkRqNjNTo","5JZe9Hv7twngWSEZzvvvDXP5RG1LJGixSz6WJ4D8te9x45kvDuG"],["HX5ZyfuVbqjTJ44VkzVqt7yLZoJuV15agjUkMXwsapC1xNqwkdZ5","5JQT9vqrFW26817PELM7D3w6rqbZ5GDW43knB2bP5kBALQ2BRDi"],["HX5P6vSL3cG8wdiiSvcHmsfAoxqWGkSMd65TibbrjG9qAfY7g9Ka","5Je6RMyd39B3W7QsC6XPHXFaTP31QmrtfiBxnmXDbeFz1pHE8CB"],["HX6pf6v2N4VNX65eQCwf6gVNUhe2UurUVKsyyRWEoyEoDop5TXHK","5JhS8VntvNPKPU1ByiUMhUeu7HutUK9PfCyAUXGvqLB1dym7Hgt"],["HX6oVVvTQni6EfiN4h4oyxTQ4ACW6eP15fEpZTCeS8JcXWwBUbXR","5JmaB7uQVGN6nKH1YyU4hSF6TmfCGJKoywimbJsRVkykF9swp1D"],["HX5Qd3TyKic1t73dn5EDVJZ3WmszcKRz5GHaB8dVujCURsTTtYaN","5JPYHwjeHETE6xzMUo2TunSCpdfdAUjLBBUH2Jy2DuGQcdS2ism"],["HX59JXtoH3eW8YmrGUfWAX58W7RWFY8Wp1Nbz2zQ4xRarNSNVSuq","5KLAzVUNPPci2JhQUQRpy1zsbjvyHQaRTATfLYk6jMnjrKZhx8U"]])  Tuple of [PublicKey, WIF private key] (just append)
      -w [ --crosschain-ip ] arg (=117.78.44.37)
      -w [ --crosschain-port ] arg (=5005)
      -w [ --chain-type ] arg (=["BTC","LTC","UB","HC"])  chain-type for crosschains  (e.g.["BTC"], quotes are required,  specify one times)
    
    Options for plugin account_history:
      --track-account arg   Account ID to track history for (may specify multiple times) --partial-operations arg Keep only those operations in memory that are related to account history tracking
      --max-ops-per-account arg Maximum number of operations per account will be kept in memory
    
    Options for plugin transaction_plugin:
      --track-address arg   address to track history for (may specify multiple times)
    
    Options for plugin crosschain record:
      -w [ --guard-id ] arg
    

---