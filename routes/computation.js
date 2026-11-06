
var express = require('express');
var router = express.Router();

// Computation endpoint
router.get('/', function(req, res, next) {

  // Generate a random number
  var x = Math.random() * 100;

  // Use the query value if provided
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  // Check for invalid input
  if (!Number.isFinite(x)) {
    return res.status(400).send('Please enter a valid number');
  }

  // Calculate the cube root
  var y = Math.cbrt(x);

  // Send the result
  res.send('Math.cbrt applied to ' + x + ' is ' + y);

});

module.exports = router;
