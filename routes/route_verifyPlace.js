var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_verifyPlace.js');

// Create new verifyPlace
router.post('/verifyPlaceAPI',controller.createVerifyPlace);

// Find all verifyPlace
router.get('/verifyPlaceAPI',controller.findAllVerifyPlace);

// Find one verifyPlace
router.get('/verifyPlaceAPI/:place_id/:user_id/:acc_type',controller.findOneVerifyPlace);

// Find verifyPlaces by Place and Acc_Type
router.get('/verifyPlaceAPI/:place_id/:acc_type',controller.findAllVerifyPlace);

// Delete one verifyPlace
router.delete('/verifyPlaceAPI/',controller.deleteOneVerifyPlace);

module.exports = router;