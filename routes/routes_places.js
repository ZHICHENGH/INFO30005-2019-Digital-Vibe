const express = require('express');
const controller = require('../controllers/controller.js');

const places_router = express.Router();

// Get all places
places_router.get('/api', controller.getAllPlaces);

// Get a specific place by name
places_router.get('/api/name/:name', controller.getPlaceByName);

// Create a new place
places_router.post('/', controller.createPlace);

// update a place
places_router.put('/', controller.updatePlace);



// Note that the common "/users" prefix of these routes appears in app.js where the router is used

module.exports = places_router;

