var mongoose = require('mongoose');
var  Comment= mongoose.model('comment');

var createcomment = function(req,res){
    var comment = new Comment({
      "comment_id":req.body.place_id,
      "user_id":req.body.user_id,
      "place_id":req.body.place_id,
      "text":req.body.text,
      "timestamp":req.timestamp
    });
    user.save(function(err,newComment){
        if(!err){
            res.send(newComment);
        }else{
            res.sendStatus(400);
        }
    });
};
var findAllcomments = function(req,res){
    User.find(function(err,user){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(404);
        }
    });
};

var findcommentByuserid = function(req,res){
    var commentInx = req.params.user_id;
    User.find({user_id:commentInx},function(err,comment){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(404);
        }
    });
};

var findcommentByplaceid = function(req, res){
    var placeid = req.params.place_id;
    User.find({place_id:placeid},function(err,user){
        if(!err){
            res.send(comment);
        }else{
            res.sendStatus(404);
        }
    });
};
var deletecommentBycommentId =function(req,res){
    var commentInx = req.params.comment_id;
    User.remove({'comment_id':commentInx});
    if(!err){
            res.send("delete success!");
        }
        else
        res.send("fail to delete");
};


module.exports.createcomment = createcomment;
module.exports.findAllcomments = findAllcomments;
module.exports.findcommentByuserid = findcommentByuserid;
module.exports.findcommentByplaceid = findcommentByplaceid;
module.exports.deletecommentBycommentId = deletecommentBycommentId;
