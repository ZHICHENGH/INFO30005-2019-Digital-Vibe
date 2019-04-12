var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_verifyPlace.js');

// Create new verifyPlace
router.post('/api',controller.createVerifyPlace);

module.exports = router;