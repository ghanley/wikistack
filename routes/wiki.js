'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
// var client = require('../db'); // remember automatically checks for index.js file by default

router.get('/', function(req, res , next) {
    Page.findAll()
    .then(function(result){
        res.render('index', {pages: result});
    })
});

router.post('/', function(req, res, next) {
    
    // var page = Page.build({
    //     title: req.body.title,
    //     content: req.body.content
    // });

    // User.findOrCreate({where: {name: req.body.name, email: req.body.email}}); 
    // page.save().then(function(pageData) {
    //     res.redirect(pageData.route);
    // });
    User.findOrCreate({
        where: {
            name: req.body.name,
            email: req.body.email
        }
    })
    .then(function (values) {

    var user = values[0];

    var page = Page.build({
        title: req.body.title,
        content: req.body.content
        });

    return page.save()
    .then(function (page) {
        return page.setAuthor(user);
    });
    })
    .then(function (page) {
    res.redirect(page.route);
    })
    .catch(next);

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next) {
    Page.findOne({
        where: {
            urlTitle: req.params.urlTitle
        }
    })
    .then(function(queryResult) {
        var authorUser = Page.getAuthor(queryResult.authorId);
        res.render('wikipage', {content: queryResult, author: authorUser});
    })
    .catch(next);
});

// // replaced this hard-coded route with general static routing in app.js
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });

module.exports = router;
