const Insurance = artifacts.require("Insurance")

module.exports = function (deployer) {
    deployer.deploy(Insurance, "0x33312a27FBD848802421fEc986f32c38e4B9F8d6")
}

module.exports.tags = ["all", "insurance"]
