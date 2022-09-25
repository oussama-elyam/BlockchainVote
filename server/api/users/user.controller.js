const {loginuser}= require('./user.service');
const Web3 = require('web3');
const contract = require('@truffle/contract');
const artifacts = require('./../../build/contracts/vote_contract.json');
const CONTACT_ABI = require('./../../config');
const CONTACT_ADDRESS = require('./../../config');
//donner au client un moyen de se connecter à la blockchain. Plus précisément, le protocole de connexion et l'adresse/le port du nœud auquel vous allez vous connecter, et provider actuel s'il est déjà connecter à la blockchain
if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider);
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

module.exports={
    //login :La fonction de rappel qui prend une requête et une réponse en paramètre
    login : (req, res)=>{
        const body = req.body;
        
        loginuser(body.username,body.password,(err,results) =>{
            if(err){
                console.log(err);
                return err;
            }
            // Envoie le corps de la réponse 
                return res.json({
                   data:results,
                 
                }) 
            
        })
    },
    //voting :result :La fonction de rappel qui prend une requête et une réponse en paramètre et prendre en requête le nom de condidate et l'adresse de votant
    voting: async (req,res)=>{
        const body = req.body;
        try {
            const accounts = await web3.eth.getAccounts()
            //connecter avec smart contract
            const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);    
            //le vote se fait en donnant le nom du candidat et l'adresse de votant a la fonction vote() à partir du smart contrat
           await contactList.methods.vote(body.adress, body.cond).send({from: body.adress, gas: '1000000' });
           //Si le votant n'a pas encore voté, le smart contract vas créer un nouvel transaction pour ce nouveau vote
           //et la fonction de vote renvoie le message "thank you for voting"
           Results={result:"thank you for voting"};
           //définir la réponse au format json
           res.json(Results);
           // Envoie le corps de la réponse
               return Results

          }
          catch(error) {
            //sinon la fonction de vote renvoie le message 'you already voted'
            Results={result:'you already voted'}
            //définir la réponse au format json
            res.json(Results);
            // Envoie le corps de la réponse
               return Results
          
        
          }
    },
    //result :La fonction de rappel qui prend une requête et une réponse en paramètre et retourner en reponse la résultat du vote
    result:  async  (request, response)=> {
        const accounts = await web3.eth.getAccounts();
        //connecter avec smart contract
        const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);
                //Nous obtenons le résultat de vote pour chaque candidate à partir du contrat en appelant la fonction getvote()
            var Results =[
                {
                    cond:"fatiha",
                    count:parseInt(await contactList.methods.getVote('fatiha').call())
                },
                {
                    cond:"driss",
                    count:parseInt(await contactList.methods.getVote('driss').call())
                },
                {
                    cond:"oussama",
                    count:parseInt(await contactList.methods.getVote('oussama').call())
                },
                {
                    cond:"fatima",
                    count:parseInt(await contactList.methods.getVote('fatima').call())
                }
            ]
            //définir la réponse au format json
   response.json(Results);
    // Envoie le corps de la réponse
    return Results;
    }
}