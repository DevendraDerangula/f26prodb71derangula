
const express = require('express');
const router = express.Router();

const apiController = require('../controllers/api');
const waterfallController = require('../controllers/waterfall');

// API home
router.get('/', apiController.api);

// Waterfall endpoints
router.get('/waterfalls', waterfallController.waterfall_list);

router.get('/waterfalls/:id', waterfallController.waterfall_detail);

router.post('/waterfalls', waterfallController.waterfall_create_post);

router.delete('/waterfalls/:id', waterfallController.waterfall_delete);

router.put('/waterfalls/:id', waterfallController.waterfall_update_put);

module.exports = router;

