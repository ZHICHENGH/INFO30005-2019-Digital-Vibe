var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller_comment.js');



// create new comment
router.post('/commentAPI', controller.createComment);

//get all comments
router.get('/commentAPI',controller.getAllComments);

// findcomment by userid
router.get('/commentAPI/userid/:user_id', controller.getCommentByuserid);

// find comment by place id
router.get('/commentAPI/placeid/:place_id', controller.getCommentByplaceid);

// find comment by comment id
router.get('/commentAPI/commentid/:comment_id', controller.getCommentBycommentid);

// delete comment by commentid
router.post('/commentAPI/deleteid/:comment_id', controller.deleteCommentBycommentid)

module.exports = router;
