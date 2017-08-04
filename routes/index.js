'use strict';
var express = require('express');
var router = express.Router();
// var client = require('../db'); // remember automatically checks for index.js file by default

module.exports = function makeRouterWithSockets (io) {
    router.get('/', function(req, res, next) {
        res.render('index');
    });
//   router.get('/', respondWithAllTweets);
//   router.get('/tweets', respondWithAllTweets);

  // single-user page
//   router.get('/users/:username', function(req, res, next){
//     client.query('SELECT content, users.name FROM tweets LEFT JOIN users ON user_id=users.id WHERE users.name=$1', [req.params.username], function(err, result) {
//       if (err) return next(err);
//       var tweets = result.rows;
//       res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
//     });
//   });

  // single-tweet page
//   router.get('/tweets/:id', function(req, res, next){
//     client.query('SELECT content, users.name FROM tweets LEFT JOIN users ON user_id=users.id WHERE tweets.id=$1', [req.params.id], function(err, result) {
//       if (err) return next(err);
//       var tweets = result.rows;
//       res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true })
//     });
//   });

  // create a new tweet asynchronously using nested client.query instead of nested sql search like first attempt below
//   router.post('/tweets', function(req, res, next){
//     client.query('SELECT id FROM users WHERE name=$1', [req.body.name], function(err, result) {
//       if (err) return next(err);
//       if (!result.rows[0]) {
//         client.query('INSERT INTO users (name) VALUES ($1)', [req.body.name], function(err, result) {
//           if (err) return next(err);
//         });
//       }
//       const userID = result.rows[0].id;
//       client.query('INSERT INTO tweets (user_id, content) VALUES ($1, $2)', [userID, req.body.content], function(err, result) {
//         if (err) return next(err);
//         res.redirect('/');
//       });
//     });
//   });
  // create a new tweet
  // router.post('/tweets', function(req, res, next){
  //   client.query('INSERT INTO tweets (user_id, content) VALUES ((SELECT id FROM users WHERE name=$1), $2)', [req.body.name, req.body.content], function(err, result) {
  //     if (err) return next(err);
      // io.sockets.emit('new_tweet', newTweet);
    //   res.redirect('/');
    // });
    
    // var newTweet = tweetBank.add(req.body.name, req.body.content);
    // io.sockets.emit('new_tweet', newTweet);
    // res.redirect('/');
  // });

  // // replaced this hard-coded route with general static routing in app.js
  // router.get('/stylesheets/style.css', function(req, res, next){
  //   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  // });

  return router;
}
