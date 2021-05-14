require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        kovan: {
            host: 'localhost',
            port: 8545,
            network_id: 42,
            gasPrice: 10000000000, // 10 gwei
            gas: 6900000,
            from: process.env.ETH_FROM,
        },
        mumbai: {
            // eslint-disable-next-line max-len
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`),
            network_id: 80001,
            gasPrice: 3000000000, // 3 gwei
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
        polygon: {
            // eslint-disable-next-line max-len
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`),
            network_id: 137,
            gasPrice: 3000000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
    // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: 'byzantium',
            },
        },
    },
};
