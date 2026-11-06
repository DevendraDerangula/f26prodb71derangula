var express = require('express');
var router = express.Router();

var vOne = 123;
var vTwo = 60;

router.get('/', function(req, res, next) {
  if (vOne > vTwo) {
    vOne = vOne - vTwo;
  } else {
    vTwo = vTwo - vOne;
  }

  res.send('Values are: ' + vOne + ' and ' + vTwo);
});

module.exports = router;