var dbCon = require('../Database/User');

var Controller = function(){
    this.getAllUsers = function(){
        return new Promise (function(resolve,reject){
            dbCon.query("select * from users",function(err,result){
                if(err){
                    console.log(err);
                    resolve({status: 500, message: "error"});
                }else{
                    console.log(result);
                    resolve({status:200,message:result});
                }
            })
        })
    }
}

module.exports = new Controller();