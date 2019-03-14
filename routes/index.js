var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
   fs.readFile('./models/handphone.json', (err, data) => {
    let handphone = JSON.parse(data);
    console.log(handphone);
    res.render('index', {showhandphone: handphone});
   });
});

module.exports = router;
