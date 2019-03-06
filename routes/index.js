var express = require('express');
var router = express.Router();
var pug = require('pug');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

module.exports = router;
