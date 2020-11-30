export const Playyyer_address = '0x0f786b09bA2bcBf302268E0aec165b94e0474068' 

export const Playyyer_abi = [
	{
		"inputs": [],
		"name": "createEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pseudo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nameEvent",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceEvent",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "extra",
				"type": "string"
			}
		],
		"name": "registerEvent",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pseudo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nature",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isAdmin",
				"type": "bool"
			}
		],
		"name": "registerGuest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_isAdmin",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_priceEvent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_capacity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_extras",
				"type": "string"
			}
		],
		"name": "setEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "eventList",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAdmin",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "nameEvent",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceEvent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "capacity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "extras",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "guestAddr",
				"type": "address"
			}
		],
		"name": "getGuest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "pseudo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nature",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isAdmin",
						"type": "bool"
					}
				],
				"internalType": "struct Playyyer.Guest",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
