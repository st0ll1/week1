// Подключить Express
var express = require('express');
var app = express();
// Подключить файл с маршрутами
require('./routes')(app);