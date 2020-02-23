var express = require('express');
var app = express();

var controller = require('../Controller/User');

app.get('/getall',function(req,res){
    controller.getAllUsers().then(function(response){
        res.status(response.status).send(response.message);
    })
});

module.exports = app;