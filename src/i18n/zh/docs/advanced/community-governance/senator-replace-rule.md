在 HyperExchange 的链上治理和运行中，Citizen 作为社区治理者之一 将参与 Senator 的更替，流程分别如下：

---

## Senator正常退出和增补

Senator欲退出时需将此申请广播到链上，随后基金会发起增补 Senator竞选公告，选出的增补Senator由现有任意一位Senator发起增补Senator 的候选提案，此候选提案收到不低于 2/3 的现有 Senator 的签名同意后，转换为增补 Senator 的正式提案。
增补 Senator 的正式提案由 Citizen 进行投票，Citizen 的投票权重由Citizen 的质押金比例决定，当正式提案收到不低于 2/3 的 Citizen 的共识投票后，提案通过。
增补 Senator 当选，退出 Senator 卸任，责任保证金退还。(退出和增补细则以基金会公告为准)。

---

## 不称职 Senator 退出和增补

当发现某一个 Senator 有不称职行为时，可由任意一个现有 Senator 发起 Senator 不称职提案。此提案收到不低于 2/3 的现有 Senator 的签名同意后，转为正式提案，然后由 Citizen 进行投票，Citizen 的投票权重由 Citizen 的质押金比例决定，当正式提案收到不低于 2/3 的 Citizen的共识投票后，提案通过。（若该不称职 Senator 的退出导致 Senator 总人数少于 7 个，则发起增补流程。）
若该 Senator 有作恶行为时，将依照 Senator 惩罚机制，由任意一个Senator 发起惩罚提案。此提案收到不低于 2/3 的现有 Senator 的签名
同意后，转为正式提案，然后由 Citizen 进行投票，Citizen 的投票权重由 Citizen 的质押金比例决定，当正式提案收到不低于 2/3 的 Citizen的共识投票后，提案通过。

---

## 新增 Senator

Senator 总数不满 15 个时，可随时由任意一个现有 Senator 发起新增Senator 的候选提案（此 Senator 需交纳 50 万个 HC 的责任保证金），此候选提案收到不低于 2/3 的现有 Senator 的签名同意后，转换为新增Senator 的正式提案。新增 Senator 的正式提案由 Citizen 进行投票，Citizen 的投票权重由 Citizen 的质押金比例决定，当正式提案收到不低于 2/3 的 Citizen 的共识投票后，提案通过。若投票不通过，24 小时内原路返回交纳的责任保证金。

---

## Senator 更替规则如下：

*	每一次 Senator 变更请求需要最小间隔 25000 块才能发起。每次 Senator变更请求会无条件重置 Senator 变更请求间隔。
*	每次变更 Senator 的数量不能超过当前 Senator 人数的 1/5。
*	任意 Senator 的变更必须在 10000 块后生效。
*	变更 Senator 产生的相关变动必须在 10000 块内完成。
*	新增或退出 Senator 提案生效后需要重新创建对应的多重签名钱包，并在 HyperExchange 上广播共识。原有钱包内的资产需要原 Senator 共识转移到新的多重签名钱包中。旧的充值地址将在 20000 块后废弃，在废弃前旧地址的充值同样会进行入账，并且旧冷热多重签名钱包的资产在
发生变化后会触发往新冷热多重签名钱包的入账。

---

