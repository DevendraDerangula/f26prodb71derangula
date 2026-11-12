
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

// GET waterfall details
exports.waterfall_detail = function(req, res) {
  res.send('Waterfall detail endpoint');
};

// POST - Create and save a new waterfall
exports.waterfall_create_post = async function(req, res) {
  try {
    const waterfall = new Waterfall({
      name: req.body.name,
      country: req.body.country,
      height: req.body.height
    });

    const savedWaterfall = await waterfall.save();

    res.status(201).json(savedWaterfall);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: 'Failed to create waterfall',
      details: err.message
    });
  }
};

// DELETE waterfall
exports.waterfall_delete = function(req, res) {
  res.send('Waterfall delete endpoint');
};

// PUT update waterfall
exports.waterfall_update_put = function(req, res) {
  res.send('Waterfall update endpoint');
};

// Render waterfalls page using MongoDB data
exports.waterfall_view_all_Page = async function(req, res) {
  try {
    const results = await Waterfall.find();

    res.render('waterfalls', {
      title: 'Search Results Waterfalls',
      results: results
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving waterfalls');
  }
};
