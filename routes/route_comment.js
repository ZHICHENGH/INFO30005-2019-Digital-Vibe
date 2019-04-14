var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller_comment.js');



// create new comment
router.post('/createcomment', controller.createComment);

//get all comments
router.get('/getcomments',controller.findAllcomments);

// Get a specific comment by place id
router.get('/placeid/:place_id', controller.getcommentsbyplaceid);

// delete comment by commentid
router.delete('/deletecomment/:comment_id', controller.deletecomment);

// get comment by userid
router.get('/user/:user_id', controller.getcommentsbyuserid);


module.exports = router;
