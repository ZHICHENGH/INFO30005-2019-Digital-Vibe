var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_user.js');

// Create new verifyPlace
router.post('/creatusers',controller.createuser);
//get all users
router.get('/getusers',controller.findAllusers);
//get user by id
router.get('/userid/:id',controller.findOneuser);
//get user by name
router.get('/username/:name',controller.finduserByName);
//delete user by ID
router.get('/deletebyid/:id',controller.deleteuserById);

module.exports = router;