
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('waterfalls', {
    title: 'Search Results Waterfalls'
  });
});

module.exports = router;
