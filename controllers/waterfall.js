
const Waterfall = require('../models/waterfall');

// GET all waterfalls
exports.waterfall_list = async function(req, res) {
  try {
    const results = await Waterfall.find();
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to retrieve waterfalls'
    });
  }
};

// GET one waterfall
exports.waterfall_detail = function(req, res) {
  res.send('Waterfall detail endpoint');
};

// POST create waterfall
exports.waterfall_create_post = function(req, res) {
  res.send('Waterfall create endpoint');
};

// DELETE waterfall
exports.waterfall_delete = function(req, res) {
  res.send('Waterfall delete endpoint');
};

// PUT update waterfall
exports.waterfall_update_put = function(req, res) {
  res.send('Waterfall update endpoint');
};

