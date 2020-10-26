// Подключить Express
var express = require('express');
var app = express();

app.get('/sample/', function (request, response) {
    response.send('This example');
})
