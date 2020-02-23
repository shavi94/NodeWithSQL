var mysql = require('mysql');

function getconnection(){

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'testdb'
    });

    con.connect(function(err){
        if(err){
            console.log("db not connected" + err);
        }else{
            console.log("db connection success..!");
        }
    });

    return con;
}

module.exports = getconnection();