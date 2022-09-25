const {createPool} = require('mysql');
//La configuration de base de données mysql 
const pool =createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.MYSQL_DB,
    password:process.env.DB_PASS     
});
module.exports = pool;