const ExchangeProxy = artifacts.require("ExchangeProxy");
const WETH9 = artifacts.require("WETH9");

module.exports = async function(deployer, network, accounts) {
    if (network == 'development' || network == 'coverage') {
        await deployer.deploy(WETH9);
        await deployer.deploy(ExchangeProxy, WETH9.address);
    } else if (network == 'kovan-fork' || network == 'kovan') {
        deployer.deploy(ExchangeProxy, '0xd0A1E359811322d97991E03f863a0C30C2cF029C');
    } else if (network == 'mumbai') {
       await deployer.deploy(ExchangeProxy, '0x106e4f8A8f19EC7Da1F5CAFe306FeE9fb0159503');
    }
}
