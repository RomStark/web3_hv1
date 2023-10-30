const web3 = require('./config');  


const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "removeUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "UserAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "UserRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; 


const contract = new web3.eth.Contract(abi, contractAddress);

const account = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';  
const privateKey = 'f3076e34f4474eacb0f6131340b884af'; 

const data = contract.methods.addUser('Alice', 30, true).encodeABI();

const tx = {
  to: contractAddress,
  data,
  gas: 2000000
};

web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
  web3.eth.sendSignedTransaction(signed.rawTransaction)
    .then(receipt => {
      console.log("Transaction receipt: ", receipt);
    })
    .catch(err => {
      console.log("Transaction error: ", err);
    });
})
.catch(err => {
  console.log("Signing error: ", err);
});
