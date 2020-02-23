var express = require('express');
var app = express();

var UserRoutes = require('./User');

app.use('/user',UserRoutes);

module.exports = app;