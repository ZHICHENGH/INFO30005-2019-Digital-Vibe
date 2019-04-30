var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller_user.js');

//create a new user
router.post('/userAPI',controller.createuser);
//get all users
router.get('/userAPI',controller.findAllusers);
//get user by id
router.get('/userAPI/:id',controller.findOneuser);
//get user by name
router.get('/userAPI/:name',controller.finduserByName);
//user login
router.post('/userAPI/：inputname ',controller.userLogin);

module.exports = router;