//Les deux premières lignes require() (import) le module express et créent une application Express
const express = require('express');
const app = express();
var cors = require('cors');
const userRouter = require("./api/users/user.router");
require("dotenv").config();
//permet aux requêtes d'accéder aux ressources à partir d'hôtes distants.
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 

}
app.use(cors(corsOptions))

//Imprime un log une fois que le serveur commence à écouter
app.listen(process.env.PORT,()=>{
    console.log("Server Started on port",process.env.PORT)
})

app.use(express.json());
//donne le chemin des routes a l'application
app.use("/",userRouter) ;
