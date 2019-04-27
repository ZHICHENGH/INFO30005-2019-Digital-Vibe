var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_user.js');

//create a new user
router.post('/creatusers/',controller.createuser);
//get all users
router.get('/getusers',controller.findAllusers);
//get user by id
router.get('/userid/:id',controller.findOneuser);
//get user by name
router.get('/username/:name',controller.finduserByName);
//user login
router.post('/login',controller.userLogin);


module.exports = router;