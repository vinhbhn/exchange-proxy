/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

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
            provider: () => new HDWalletProvider({ privateKeys: ['4c0acdd4dd280274e048a8a4140e103c9d555fba5fc30a79f7ffa3e61b293421'], providerOrUrl: 'https://rpc-mumbai.maticvigil.com' }),
            network_id: 80001,
            gasPrice: 3000000000, // 3 gwei
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
        polygon: {
            // eslint-disable-next-line max-len
            provider: () => new HDWalletProvider({ privateKeys: ['4c0acdd4dd280274e048a8a4140e103c9d555fba5fc30a79f7ffa3e61b293421'], providerOrUrl: 'https://rpc-mainnet.maticvigil.com' }),
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
