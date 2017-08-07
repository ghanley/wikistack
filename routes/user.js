'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
// var client = require('../db'); // remember automatically checks for index.js file by default

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// // replaced this hard-coded route with general static routing in app.js
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });

router.get('/', function(req, res , next) {
    User.findAll()
        .then(function(resultUsers){
            res.render('userspage', {users: resultUsers});
        })
});

router.get('/:id', function(req, res, next) {
    var userPromise = User.findById(req.params.id);
    var pagePromise = Page.findAll({where: {authorId: req.params.id}});

    Promise.all([userPromise, pagePromise])
        .then(function(jointData) {
            var user = jointData[0];
            var page = jointData[1];

            res.render('user', {users: user, pages: page})
        });
});

module.exports = router;
