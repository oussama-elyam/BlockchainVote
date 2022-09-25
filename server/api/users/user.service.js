const pool = require("../../config/database");
module.exports = {
    //La fonction de vérification dans la base de données si l'utilisateur a correctement saisi ces informations
    // si la fonction retourner en résultat les information d'utilisateur et error=null
    loginuser : (username,password , callBack)=>{
pool.query(`SELECT * FROM voter WHERE username =? AND password =?`,
[username,
password],(error,results,fields)=>{
    if(error){
        // Sinon la fonction retourner en error variable une message d'erreur
        return callBack(error);
    }
    return callBack(null ,results[0]);
}
);
    }
}