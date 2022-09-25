const Migrations = artifacts.require("vote_contract");
//le scripts de migration 
module.exports = function (deployer) {
    deployer.deploy(Migrations);
}