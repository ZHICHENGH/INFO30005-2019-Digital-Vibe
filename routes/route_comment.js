const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller_comment.js');



// Get all places
places_router.post('/commentAPI', controller.createComment);

// Get a specific place by name
places_router.get('/comentAPI/:place_id', controller.getcommentsbyplaceid);

// Create a new place
places_router.delete('/placeAPI/:place_id/:user_id/:comment_id', controller.deletecomment);

// update a place
places_router.get('/placeAPI/:user_id', controller.getcommentsbyuserid);


module.exports = router;
