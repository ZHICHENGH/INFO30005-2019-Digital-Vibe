const express = require('express');
const controller = require('../controllers/controller_comment.js');

const comment_router = express.Router();

// Get all places
places_router.get('/commentAPI', controller.createComment);

// Get a specific place by name
places_router.get('/comentAPI/:place_id', controller.getcommentsbyplaceid);

// Create a new place
places_router.post('/placeAPI/:place_id/:user_id/:comment_id', controller.deletecomment);

// update a place
places_router.put('/placeAPI/:user_id', controller.getcommentsbyuserid);


module.exports = comment_router;
