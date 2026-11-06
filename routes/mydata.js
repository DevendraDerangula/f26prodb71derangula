var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Devendra Janardhan Maharaj Derangula' });
});

module.exports = router;