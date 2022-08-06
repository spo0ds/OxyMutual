const validators = artifacts.require("Validators")
const insurance = artifacts.require("Insurance")

module.exports = function (deployer) {
    deployer.deploy(insurance, "0x33312a27FBD848802421fEc986f32c38e4B9F8d6", validators.address)
}

module.exports.tags = ["all", "insurance"]
