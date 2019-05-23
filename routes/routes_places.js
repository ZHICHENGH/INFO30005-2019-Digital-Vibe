const express = require('express');
const controller = require('../controllers/controller_places.js');

const places_router = express.Router();

// Get all places
places_router.get('/placeAPI', controller.getAllPlaces);

// Get a specific place by name
places_router.get('/placeAPI/place_name/:place_name', controller.getPlaceByName);

// Get a specific place by place_id
places_router.get('/placeAPI/place_id/:place_id', controller.getPlaceByID);

// Create a new place
places_router.post('/placeAPI', controller.createPlace);

//update a place
places_router.post('/placeAPI/update', controller.updatePlaceById);


module.exports = places_router;

