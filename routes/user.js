'use strict';
var express = require('express');
var router = express.Router();
// var client = require('../db'); // remember automatically checks for index.js file by default

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// // replaced this hard-coded route with general static routing in app.js
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });

module.exports = router;
