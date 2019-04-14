const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

// new comment
const createComment = (req, res) => {
  const comment = new Comment({
    "comment_id":req.body.comment_id,
    "place_id":req.body.place_id,
    "user_id":req.body.user_id,
    "text":req.body.text,
    "timestamp":req.body.timestamp
  });
  comment.save(function(err, newComment) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(newComment);
    }
  });
};
// Get list of all comments
const getAllComments = (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(comments);
    }
  });
};

// find comment by userid
var getCommentByuserid = function(req, res){
    var userid = req.params.user_id;
    Comment.find({user_id:userid},function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(500);
        }
    });
};

// find comment by placeid
var getCommentByplaceid = function(req, res){
    var placeid = req.params.place_id;
    Comment.find({place_id:placeid},function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(500);
        }
    });
};

var getCommentBycommentid = function(req, res){
    var commentid = req.params.comment_id;
    Comment.find({comment_id:commentid},function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(500);
        }
    });
};

var deleteCommentBycommentid = function(req, res){
    var commentid = req.params.comment_id;
    Comment.deleteOne({comment_id:commentid},function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(500);
        }
    });
};

module.exports.createuser = createuser;
module.exports.findAllusers = findAllusers;
module.exports.findOneuser = findOneuser;
module.exports.finduserByName = finduserByName;
