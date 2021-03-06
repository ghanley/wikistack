'use strict';
const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/users', userRouter);
// var client = require('../db'); // remember automatically checks for index.js file by default

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// // replaced this hard-coded route with general static routing in app.js
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });

module.exports = router;
