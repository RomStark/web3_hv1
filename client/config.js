const Web3 = require('web3');

const INFURA_API_KEY = "f3076e34f4474eacb0f6131340b884af";
const NETWORK = "sepolia"; 

const web3 = new Web3(new Web3.providers.HttpProvider(`https://${NETWORK}.infura.io/v3/${INFURA_API_KEY}`));

module.exports = web3;
