var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller_comment.js');



// Get all places
router.post('/commentAPI', controller.createComment);

// Get a specific place by name
router.get('/comentAPI/:place_id', controller.getcommentsbyplaceid);

// Create a new place
router.delete('/placeAPI/:place_id/:user_id/:comment_id', controller.deletecomment);

// update a place
router.get('/placeAPI/:user_id', controller.getcommentsbyuserid);


module.exports = router;
