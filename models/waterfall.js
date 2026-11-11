const mongoose = require('mongoose');

const waterfallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  height: { type: Number, required: true }
});

module.exports = mongoose.model('Waterfall', waterfallSchema);
