var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller_comment.js');



// create new comment
router.post('/createcomment', controller.createcomment);

//get all comments
router.get('/getcomments',controller.findAllcomments);

// Get a specific comment by place id
router.get('/placeid/:place_id', controller.findcommentByplaceid);

// delete comment by commentid
router.get('/user/:user_id', controller.findcommentByuserid);

// get comment by userid
router.delete('/commentid/:comment_id', controller.deletecommentBycommentId);


module.exports = router;
