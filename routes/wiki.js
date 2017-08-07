'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;
// var client = require('../db'); // remember automatically checks for index.js file by default

router.get('/', function(req, res , next) {
    res.redirect('/');
});

router.post('/', function(req, res, next) {
    var page = Page.build({
        title: req.body.title,
        content: req.body.content
    });
    page.save().then(function(pageData) {
        res.redirect(`/wiki/${pageData.urlTitle}`);
    });
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
        // res.json(queryResult);)
        res.render('wikipage', {content: queryResult});
    })
    .catch(next);
});

// // replaced this hard-coded route with general static routing in app.js
// router.get('/stylesheets/style.css', function(req, res, next){
//   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
// });

module.exports = router;
