const Insurance = artifacts.require("Insurance")

module.exports = function (deployer) {
    deployer.deploy(Insurance, "0x892BEd2afda1D0d3964c7be0c4E3b73cd80342Bc")
}

module.exports.tags = ["all", "insurance"]
