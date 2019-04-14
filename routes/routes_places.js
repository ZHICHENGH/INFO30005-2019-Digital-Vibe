const express = require('express');
const controller = require('../controllers/controller_places.js');

const places_router = express.Router();

// Get all places
places_router.get('/placeAPI', controller.getAllPlaces);

// Get a specific place by name
places_router.get('/placeAPI/name/:place_name', controller.getPlaceByName);

// Create a new place
places_router.post('/placeAPI', controller.createPlace);

// update a place
places_router.put('/placeAPI/id/:place_id', controller.updatePlaceById);


module.exports = places_router;

