const insurance = artifacts.require("Insurance");
const insured = artifacts.require("Insured");

module.exports = function (deployer, accounts) {
    // deployer.deploy(insurance)
    const insuranceAmount = web3.utils.toWei("10", "ether");
    const interval = Date.now();
    const timeToPay = interval + 1000;
    const insuredAmountPerSession = web3.utils.toWei("1", "ether");
    deployer.deploy(
        insured,
        insuranceAmount,
        interval,
        timeToPay,
        insurance.address,
        insuredAmountPerSession
    );
};

module.exports.tags = ["all", "insured"];
