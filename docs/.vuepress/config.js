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
                        '/zh/dev/rpc-reference',
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