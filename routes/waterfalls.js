
const express = require('express');
const router = express.Router();

const waterfallController = require('../controllers/waterfall');

router.get('/', waterfallController.waterfall_view_all_Page);

module.exports = router;
