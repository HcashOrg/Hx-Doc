(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{272:function(t,e,i){"use strict";i.r(e);var n=i(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"安全性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安全性","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全性")]),t._v(" "),i("p",[t._v("POV 拥有极高的系统安全性，足以防范各种恶意攻击和突发情况，确保网络和资产安全。我们亦可以防范以下极端情况：")]),t._v(" "),i("p",[t._v("1、Citizen 是维护系统稳定的重要角色，假设随机选出的一部分 Citizen不工作，那么只要不是选出的所有 25 个 Citizen 都不工作，并不会影响链的稳定性。只要选中的 25 个 Citizen 中有一位上线，它就能连续出 25 个块。在这种极端异常情况下，依靠链上的激励还是可以过渡到下一轮调整。在正常情况下如果有 Citizen 每连续 5 次不出块，那么将会降低该 Citizen 的参与率，参与率会以系数方式降低 Citizen 的质押资产数量，其计算公式为Citizen 最终质押 HX 金额 = 用户质押 HX 金额 X 参与率（0~100%）。因此，最终所有的 Citizen 都会是优质的节点，上述极端场景在实际环境中几乎不会出现。")]),t._v(" "),i("p",[t._v("2、假设有 Citizen 恶意在同一时间点产出 2 个不同的区块。后续的Citizen 将会依据他们收到的块按序继续出块。当本轮产块结束，\nHyperExchange 将会根据两条链的长度进行自动切换，以长的为准。在这样的场景下只要保证 17 个块的确认数，就可以避免双花攻击[12]。")]),t._v(" "),i("p",[t._v("3、假设有矿池占据了链上很多资源，但不足 51%。在这种场景下假设矿池的资产配置完美，那么他也不能保证每轮都占有超过 50%的产块节点。因\n此在超过 17 个块的确认数基础上，也很难造成双花攻击。")]),t._v(" "),i("p",[t._v("4、假设矿池联合占据超过 51%的资源。在这种极端场景下，矿池是有可能造成链上数据回滚问题。但因为矿池的资产不只是 HX 还有很多 HIOU，而\nHIOU 由 Senator 共识管理。矿池联合作恶，那么矿池将会面临以下几种情况：")]),t._v(" "),i("p",[t._v("（1）本次参与作恶所有矿池参与率将被共识下降到 0%(即无论质押多少资产都等于 0)。")]),t._v(" "),i("p",[t._v("（2）矿池上质押的 HIOU 将会被冻结，限制使用。冻结是否解冻取决于造成的影响。作恶意味着矿池将面临损失注册手续费和自己质押在矿池上的 HIOU，支持该矿池的用户将需要进入申诉流程，由 Senator 共识决定是否为该用户解冻资产。")]),t._v(" "),i("p",[t._v("综上所述，在 POV 共识机制的保障下，Citizen 作恶获得的潜在利益和承担的风险相比完全不占优势。")])])},[],!1,null,null,null);e.default=r.exports}}]);