var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("Server is started...");
    }
});
