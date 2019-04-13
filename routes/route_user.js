var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_user.js');

// Create new verifyPlace
router.post('/api',controller.createuser);
//get all users
router.get('/api',controller.findAllusers);
//get user by id
router.get('/api/id/:id',controller.findOneuser);
//get user by name
router.get('/api/name/:name',controller.finduserByName);
//delete user by ID
router.get('/api/id/:id',controller.deleteuserById);

module.exports = router;