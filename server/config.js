//Nous ajouterons CONTACT ABI et CONTACT ADDRESS à config.js pour utiliser la fonctionnalité de contrat web3 à laquelle je me connecte avec smart contract
const CONTACT_ADDRESS = '0xB515d7de8a2d1F1Da6Dde8c81623cE1c68A94cDf';

const CONTACT_ABI =  [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "voter",
          type: "address"
        },
        {
          indexed: false,
          internalType: "string",
          name: "candidate",
          type: "string"
        }
      ],
      name: "Vote",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_voter",
          type: "address"
        },
        {
          internalType: "string",
          name: "_candidate",
          type: "string"
        }
      ],
      name: "vote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_candidate",
          type: "string"
        }
      ],
      name: "getVote",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    }
];

module.exports = {
        CONTACT_ABI,
        CONTACT_ADDRESS,
};