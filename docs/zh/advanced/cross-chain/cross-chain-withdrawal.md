# 跨链提现流程

用户发起提现交易，交易中包含其他资产链的提现地址，Citizen 打包交易并在链上广播。

Senator 收到提现交易后，对交易进行验证并签名，在网络中广播，Citizen 收集所有 Senator 对该交易的签名。当轮到某个 Citizen 要出块时，判断当前是否收集到不少于 2/3 的 Senator 的签名，如符合条件则将该交易及所有收集到的签名打包进块，否则该交易将不会打包进块，由后面的Citizen 负责处理。

交易被打包进块后，用户所拥有的对应 HIOU（比如 HXBTC、HXLTC 等）即销毁。Senator 验证后先判断多重签名热钱包的余额是否充足，如充足则
在此资产链上发出从 Senator 管理的多重签名冷热钱包到提现地址转账的签名，满足多重签名条件后则提现完成。如果余额不足，即从多重签名冷钱包中提取资产到多重签名热钱包，等热钱包里的资产充足后 Citizen 再发起转账流程。
跨链提现分为两步:

1. 用户在 HyperExchange 上发起提现申请，等待 Citizen 打包后（平均2.5 秒），等待收集不低于 2/3 的 Senator 对该提现请求的签名。若有超过 1/3 的 Senator 不认可该请求，则该交易作废。

2. 当被打包的交易收集到不低于 2/3 的 Senator 的签名后，将会生成一笔对应资产链的出账交易，由 Citizen 广播到对应资产链确认后（需
等待相应的块数），HyperExchange 上 Citizen 打包提现完成交易，当该交易被 HyperExchange 上认可时，即算完成提现交易。

具体技术实现过程为：用户发起提现申请后，Citizen 发起对应的从多重签名地址转账到用户目标地址的原始交易，将原始交易包装到src_trx 中广播到 HyperExchange 上。Senator 同步到 src_trx 然后验证后，将对 src_trx 的签名包装到 sig_trx 并由 Citizen 记账到
HyperExchange 上。当全网收集到足够的 Senator 签名后，Citizen 把收集的签名打包后生成完整的提现交易，然后在 Indicator 内置的对应的资产链轻钱包组件中调用相应资产链的交易广播接口，广播到相应资产链的网络中去。

跨链提现的底层操作流程图如下：


<img class="hx-icon" src="/img/cross-chain-withdraw.svg" />
