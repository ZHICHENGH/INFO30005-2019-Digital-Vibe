var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

var createComment = function(req,res){
    var comment = new Comment({
        "comment_id":req.body.place_id,
        "user_id":req.body.user_id,
        "place_id":req.body.place_id,
        "text":req.body.value,
        "timestamp":req.timestamp
    });
    comment.save(function(err,comment){
        if(!err){
            res.send(newComment);
        }else{
            res.sendStatus(600);
        }
    });
};

var getcommentsbyplaceid = function(req,res){
    var req_place_id = req.params.place_id;

    Comment.find({
            place_id:req_place_id,

    },function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(600);
        }
    });
};

var getcommentsbyuserid = function(req,res){
    var req_place_id = req.params.place_id;

    VerifyPlace.find({
        place_id:req_place_id,
    },function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(404);
        }
    });
};



var deletecomment = function(req,res){
    var req_place_id = req.params.place_id;
    var req_user_id = req.params.user_id;
    var req_comment_id = req.params.comment_id;

    VerifyPlace.deleteOne({
        place_id:req_place_id,
        user_id:req_user_id,
        comment_id:req_comment_id},function(err,comment){
        if(err){
            res.sendStatus(600);
        }
    });
};

module.exports.createComment = createComment;
module.exports.getcommentsbyplaceid = getcommentsbyplaceid;
module.exports.getcommentsbyuserid = getcommentsbyuserid;
module.exports.deletecomment = deletecomment;
