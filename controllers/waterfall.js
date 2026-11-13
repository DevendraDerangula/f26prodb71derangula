
const mongoose = require('mongoose');
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

// GET one waterfall by MongoDB ID - Assignment 12 Part 1
exports.waterfall_detail = async function(req, res) {
  try {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: 'Invalid waterfall ID'
      });
    }

    const waterfall = await Waterfall.findById(id);

    if (!waterfall) {
      return res.status(404).json({
        error: 'Waterfall not found'
      });
    }

    res.json(waterfall);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to retrieve waterfall'
    });
  }
};

// POST create a waterfall - Assignment 11
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

// DELETE waterfall - placeholder for later
exports.waterfall_delete = function(req, res) {
  res.send('Waterfall delete endpoint');
};

// PUT update a waterfall by MongoDB ID - Assignment 12 Part 2
exports.waterfall_update_put = async function(req, res) {
  try {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        error: 'Invalid waterfall ID'
      });
    }

    const updatedWaterfall = await Waterfall.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        country: req.body.country,
        height: req.body.height
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedWaterfall) {
      return res.status(404).json({
        error: 'Waterfall not found'
      });
    }

    res.json(updatedWaterfall);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: 'Failed to update waterfall',
      details: err.message
    });
  }
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
