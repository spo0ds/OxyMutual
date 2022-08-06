const validatorsInstance = artifacts.require("Validators")

module.exports = function (deployer, accounts) {
    const validatorsAddress = [
        "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73",
        "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
        "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
        "0xE9Bb328c53ae572851Ddc33e8B25965477999e3b",
    ]
    // deployer.deploy(validatorsInstance, [accounts[2], accounts[1], accounts[3], accounts[4]], 3)
    // deployer.deploy(
    //     validatorsInstance,
    //     [
    //         "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73",
    //         "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
    //         "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
    //         "0xE9Bb328c53ae572851Ddc33e8B25965477999e3b",
    //     ],
    //     "3"
    // )
}

module.exports.tags = ["all", "validators"]
