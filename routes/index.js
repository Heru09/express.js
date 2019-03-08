var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.render('index');
});

module.exports = router;
