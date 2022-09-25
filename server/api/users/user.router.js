//Les fonctions de rappel 
const {login, voting,result}= require("./user.controller");
const router= require("express").Router();
//les méthodes router.post et router.get spécifient une fonction de rappel qui sera invoquée chaque fois qu'il y a une requête HTTP GET ou HTTP  POST avec un chemin ('/') relatif à la racine du site.
router.post("/login",login);
router.post("/voting",voting);
router.get("/Result",result);
module.exports = router;