module.exports = {
    locales: {
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'HyperExchange',
          description: 'Collection of HX documentations'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'HyperExchange',
          description: 'HX 文档'
        }
    },
    themeConfig: {
        displayAllHeaders: true,
        locales: {
            lastUpdated: 'Last Updated',
            '/': {
              selectText: 'Languages',
              label: 'English',
            //   editLinkText: 'Edit this page on GitHub',
              sidebar: [
                ['/', 'What\'s HyperExchange'],
                {
                    title: 'Getting Started',
                    children: [
                        '/getting-started/beginner-guide',
                        '/getting-started/hx-features',
                        '/getting-started/hx-distribution',
                        '/getting-started/private-testnet',
                        '/getting-started/public-testnet',
                        '/getting-started/using-the-block-explorer'
                    ]
                },
                {
                    title: 'Wallet',
                    children: [
                        '/wallets/hx-building',
                        '/wallets/hx-docker-deploy',
                        '/wallets/hxindicator-using-account',
                        '/wallets/hxindicator-using-advance',
                        '/wallets/hxindicator-using-citizen',
                        '/wallets/hxindicator-using-contacts',
                        '/wallets/hxindicator-using-contract',
                        '/wallets/hxindicator-using-senator',
                        '/wallets/hxnode-setup',
                        '/wallets/hxnode-usage',
                        '/wallets/hxwallet-cli-commands',
                        '/wallets/hxwallet-cli',
                        '/wallets/middleware-startup'
                    ]
                },
                {
                    title: 'Advanced',
                    children: [
                        {
                            title: 'Decentralized Governance',
                            children: [
                                '/advanced/community-governance/community-overview',
                                '/advanced/community-governance/community-advantages',
                                '/advanced/community-governance/select-senator',
                                '/advanced/community-governance/senator-penalties',
                                '/advanced/community-governance/senator-replace-rule',
                                '/advanced/community-governance/senator-right',
                            ]
                        },
                        {
                            title: 'Cross Chain',
                            children: [
                                '/advanced/cross-chain/account-creation',
                                '/advanced/cross-chain/bmt-protocol',
                                '/advanced/cross-chain/cross-chain-deposit',
                                '/advanced/cross-chain/cross-chain-withdrawal',
                                '/advanced/cross-chain/financial-balance',
                                '/advanced/cross-chain/fund-rebalance',
                                '/advanced/cross-chain/hx-axis',
                                '/advanced/cross-chain/indicator',
                                '/advanced/cross-chain/init-process',
                                '/advanced/cross-chain/asset-block-import-model',
                            ]
                        },
                        {
                            title: 'POV',
                            children: [
                                '/advanced/pov/asset-voting',
                                '/advanced/pov/consensus-protocol',
                                '/advanced/pov/network-role',
                                '/advanced/pov/POV',
                            ]
                        },
                        {
                            title: 'Smart Contract',
                            children: [
                                '/advanced/smart-contract/about-smart-contract',
                                '/advanced/smart-contract/purchase-rule',
                                '/advanced/smart-contract/smart-contract-fee',
                                '/advanced/smart-contract/smart-contract-feetype',
                                '/advanced/smart-contract/smart-contract-template',
                                '/advanced/smart-contract/consensus-random-number',
                                '/advanced/smart-contract/contract-virtual-machine',
                                '/advanced/smart-contract/event-rollback',
                                '/advanced/smart-contract/offline-api',
                                    ]
                        },
                    ]
                },
                {
                    title: 'Development',
                    children: [
                        '/dev/rpc-reference',
                        {
                            title: 'IDE',
                            children: [
                                '/dev/ide/ide-introduce',
                                '/dev/ide/ide-using',
                                '/dev/ide/ide-edit',
                                '/dev/ide/ide-compile',
                                '/dev/ide/ide-debug',
                                '/dev/ide/ide-online'
                            ]
                        },
                    ]
                },
                {
                    title: 'FAQ',
                    children: [
                        '/faq/wallet-usage',
                    ]
                },
                {
                    title: 'Research',
                    children: [
                        '/research/hip',
                        '/research/re-pledging-of-asset-model',
                        '/research/concurrency-model',
                    ]
                }
              ]
            },
            '/zh/': {
            lastUpdated: '最后更新',
              // 多语言下拉菜单的标题
              selectText: '选择语言',
              // 该语言在下拉菜单中的标签
              label: '简体中文',
              // 编辑链接文字
            //   editLinkText: '在 GitHub 上编辑此页',
              sidebar: [
                ['/zh/', '什么是HyperExchange'],
                {
                    title: '开始使用',
                    children: [
                        '/zh/getting-started/beginner-guide',
                        '/zh/getting-started/hx-features',
                        '/zh/getting-started/hx-distribution',
                        '/zh/getting-started/private-testnet',
                        '/zh/getting-started/public-testnet',
                        '/zh/getting-started/using-the-block-explorer'
                    ]
                },
                {
                    title: '钱包',
                    children: [
                        '/zh/wallets/hx-building',
                        '/zh/wallets/hx-docker-deploy',
                        '/zh/wallets/hxindicator-using-account',
                        '/zh/wallets/hxindicator-using-advance',
                        '/zh/wallets/hxindicator-using-citizen',
                        '/zh/wallets/hxindicator-using-contacts',
                        '/zh/wallets/hxindicator-using-contract',
                        '/zh/wallets/hxindicator-using-senator',
                        '/zh/wallets/hxnode-setup',
                        '/zh/wallets/hxnode-usage',
                        '/zh/wallets/hxwallet-cli-commands',
                        '/zh/wallets/hxwallet-cli',
                        '/zh/wallets/middleware-startup'
                    ]
                },
                {
                    title: '高级',
                    children: [
                        {
                            title: '社区自治',
                            children: [
                                '/zh/advanced/community-governance/community-overview',
                                '/zh/advanced/community-governance/community-advantages',
                                '/zh/advanced/community-governance/select-senator',
                                '/zh/advanced/community-governance/senator-penalties',
                                '/zh/advanced/community-governance/senator-replace-rule',
                                '/zh/advanced/community-governance/senator-right',
                            ]
                        },
                        {
                            title: '跨链实现',
                            children: [
                                '/zh/advanced/cross-chain/account-creation',
                                '/zh/advanced/cross-chain/bmt-protocol',
                                '/zh/advanced/cross-chain/cross-chain-deposit',
                                '/zh/advanced/cross-chain/cross-chain-withdrawal',
                                '/zh/advanced/cross-chain/financial-balance',
                                '/zh/advanced/cross-chain/fund-rebalance',
                                '/zh/advanced/cross-chain/hx-axis',
                                '/zh/advanced/cross-chain/indicator',
                                '/zh/advanced/cross-chain/init-process',
                            ]
                        },
                        {
                            title: '投票挖矿',
                            children: [
                                '/zh/advanced/pov/asset-voting',
                                '/zh/advanced/pov/consensus-protocol',
                                '/zh/advanced/pov/network-role',
                                '/zh/advanced/pov/POV',
                            ]
                        },
                        {
                            title: '智能合约',
                            children: [
                                '/zh/advanced/smart-contract/about-smart-contract',
                                '/zh/advanced/smart-contract/purchase-rule',
                                '/zh/advanced/smart-contract/smart-contract-fee',
                                '/zh/advanced/smart-contract/smart-contract-feetype',
                                '/zh/advanced/smart-contract/smart-contract-template',
                                '/zh/advanced/smart-contract/consensus-random-number',
                                '/zh/advanced/smart-contract/contract-virtual-machine',
                                '/zh/advanced/smart-contract/event-rollback',
                                '/zh/advanced/smart-contract/offline-api'
                            ]
                        },
                    ]
                },
                {
                    title: '开发指南',
                    children: [
                        {
                            title: 'RPC 命令参考',
                            children: [
                                '/zh/dev/rpc-reference/rpc-introduce',
                                '/zh/dev/rpc-reference/rpc-about',
                                ['/zh/dev/rpc-reference/rpc-get_account_addr', 'get_account_addr'],
                                ['/zh/dev/rpc-reference/rpc-get_account_balances', 'get_account_balances'],
                                ['/zh/dev/rpc-reference/rpc-get_account_count', 'get_account_count'],
                                ['/zh/dev/rpc-reference/rpc-get_asset', 'get_asset'],
                                ['/zh/dev/rpc-reference/rpc-get_first_contract_address', 'get_first_contract_address'],
                                ['/zh/dev/rpc-reference/rpc-get_global_properties', 'get_global_properties'],
                                ['/zh/dev/rpc-reference/rpc-get-ntp-info', 'get_ntp_info'],
                                '/zh/dev/rpc-reference/rpc-help',
                                '/zh/dev/rpc-reference/rpc-info',
                                '/zh/dev/rpc-reference/rpc-is-locked',
                                ['/zh/dev/rpc-reference/rpc-network_get_connected_peers', 'network_get_connected_peers'],
                                ['/zh/dev/rpc-reference/rpc-ntp_update_time', 'ntp_update_time'],
                                ['/zh/dev/rpc-reference/rpc-wallet-create-account', 'wallet_create_account'],
                                ['/zh/dev/rpc-reference/rpc-witness_node_stop', 'witness_node_stop'],
                            ]
                        },
                        {
                            title: '智能合约开发',
                            children: [
                                {
                                    title: 'glua 语言',
                                    children: [
                                        ['/zh/dev/glua/intro', '简介'],
                                        ['/zh/dev/glua/tutorial', '入门教程'],
                                        {
                                            title: '数据类型',
                                            children: [
                                                ['/zh/dev/glua/language-syntax/basic-types', '基本类型'],
                                                ['/zh/dev/glua/language-syntax/static-type-system', '静态类型系统'],
                                                ['/zh/dev/glua/language-syntax/local-variable', '全局变量和局部变量'],
                                                ['/zh/dev/glua/language-syntax/type-declare', '类型声明'],
                                                ['/zh/dev/glua/language-syntax/record', 'record自定义类型'],
                                                ['/zh/dev/glua/language-syntax/literal-type', '枚举类型'],
                                                ['/zh/dev/glua/language-syntax/generic-types', '泛型'],
                                                ['/zh/dev/glua/language-syntax/array', '数组类型'],
                                                ['/zh/dev/glua/language-syntax/map', 'map类型'],
                                                ['/zh/dev/glua/language-syntax/table', 'table类型'],
                                                ['/zh/dev/glua/language-syntax/table-type-parse', '复杂类型转换'],
                                                ['/zh/dev/glua/language-syntax/system-records', '内置record类型'],
                                            ]
                                        },
                                        ['/zh/dev/glua/language-syntax/statement', '语句'],
                                        ['/zh/dev/glua/language-syntax/keywords', '关键字'],
                                        ['/zh/dev/glua/language-syntax/operators', '操作符'],
                                        ['/zh/dev/glua/language-syntax/function', '函数'],
                                        ['/zh/dev/glua/language-syntax/controlflows', '控制流语法'],
                                        ['/zh/dev/glua/language-syntax/global-variables', '全局函数'],
                                        ['/zh/dev/glua/language-syntax/module', '模块'],
                                        ['/zh/dev/glua/library-reference', '库函数参考'],
                                        {
                                            title: '智能合约',
                                            children: [
                                                ['/zh/dev/glua/language-syntax/contract-intro', '智能合约介绍'],
                                                ['/zh/dev/glua/language-syntax/contract-demo', '智能合约例子'],
                                                ['/zh/dev/glua/language-syntax/contract-def', '智能合约定义'],
                                                ['/zh/dev/glua/language-syntax/storage-operations', 'storage操作'],
                                                ['/zh/dev/glua/language-syntax/contract-event', '智能合约event'],
                                                ['/zh/dev/glua/language-syntax/contract-api-reference', '智能合约API参考'],
                                            ]
                                        },
                                        ['/zh/dev/glua/language-syntax/local-scripts', '本地脚本'],
                                        ['/zh/dev/glua/examples', '例子'],
                                        ['/zh/dev/glua/howtos', 'HOWTO'],
                                        ['/zh/dev/glua/token-syntax', '词法规则'],
                                        ['/zh/dev/glua/parser-syntax', '语法规则'],
                                        ['/zh/dev/glua/FAQs', '常见问题'],
                                    ]
                                },
                                {
                                    title: '使用 C# to 编写智能合约',
                                    children: [
                                        ['/zh/dev/glua/gsharpc/gsharpc-intro', 'gsharpc介绍'],
                                        ['/zh/dev/glua/gsharpc/gsharpc-tutorial', 'gsharpc使用指南'],
                                        ['/zh/dev/glua/gsharpc/csharp-language-reference', 'gsharpc支持的C#编程语言子集'],
                                        ['/zh/dev/glua/gsharpc/gsharpc-examples', '例子'],
                                    ]
                                },
                                {
                                    title: '使用 Java/Kotlin 编写智能合约',
                                    children: [
                                        ['/zh/dev/glua/gjavac/gjavac-intro', 'gjavac介绍'],
                                        ['/zh/dev/glua/gjavac/gjavac-tutorial', 'gjavac 使用指南'],
                                        ['/zh/dev/glua/gjavac/gjavac-examples', '例子'],
                                    ]
                                },
                                {
                                    title: '使用汇编语言编写智能合约',
                                    children: [
                                        ['/zh/dev/glua/hvmassembly/hvm-assembly-language-reference', '汇编语言参考'],
                                        ['/zh/dev/glua/hvmassembly/hvm-assembly-examples', '例子'],
                                    ]
                                },
                                ['/zh/dev/glua/license', '源代码许可'],
                            ]
                        },
                        '/zh/dev/dapp',
                        '/zh/dev/docking-exchange',
                        {
                            title: 'IDE',
                            children: [
                                '/zh/dev/ide/ide-introduce',
                                '/zh/dev/ide/ide-using',
                                '/zh/dev/ide/ide-edit',
                                '/zh/dev/ide/ide-compile',
                                '/zh/dev/ide/ide-debug',
                                '/zh/dev/ide/ide-online'
                            ]
                        }
                    ]
                },
                {
                    title: 'FAQ',
                    children: [
                        '/zh/faq/wallet-usage',
                    ]
                },
                {
                    title: '研究',
                    children: [
                        '/zh/research/hip',
                        '/zh/research/re-pledging-of-asset-model',
                        '/zh/research/concurrency-model',
                    ]
                }
              ]
            }
        }
    }
}