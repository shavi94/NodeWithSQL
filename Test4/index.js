var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var PORT = 8080;

var Routes = require('./Routes/Routes');

app.use(bodyparser.json());
app.use('/',Routes);

app.listen(PORT,"localhost",function(err){
    if(err){
        console.log("server not started");
        process.exit(-1);
    }
    console.log("server listen to port: "+PORT);
});