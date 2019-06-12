# 资产再抵押模型

HyperExchange 上独创的资产质押再抵押模型，可以配合智能合约，衍生出一系列复杂的交易逻辑。

1、Tourist 给 Citizen 提供的质押资产，可以通过智能合约再抵押给其他用户参与链上其他金融业务，例如向其他用户进行抵押借贷。

2、质押在 Citizen 的资产不能被同时重复再抵押。

3、Tourist A 用自己的质押在 Citizen 那里的资产进行再抵押时，通过智能合约向 Tourist B 借资产后，如果发生 Tourist A 不偿还或者偿还不足的情况，自动从 Tourist A 质押在 Citizen 那里的资产中支付相应资产给Tourist B 用作赔付。

4、Tourist A 在将质押在 Citizen 那里的资产再抵押时，此部分 Citizen资产的区块收益权和分配奖励权依然属于 Tourist A，直到发生赔付为止。

5、具体的借贷合约逻辑在智能合约中实现。Tourist 可以开发功能多样的金融衍生交易合约。

Citizen 质押资产再抵押的流程图如下：

<img class="hx-icon" src="/img/re-pledging-of-asset-model.svg" />

 

