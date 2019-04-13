var mongoose = require('mongoose');
var  User= mongoose.model('user');

var createuser = function(req,res){
    var user = new User({
        "user_id":"HZC",
        "name":"zhichengh",
        "passport":"1111",
        "email":"1111@gmail.com"
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};
var findAllusers = function(req,res){
    User.find(function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};
var findOneuser = function(req,res){
    var userInx = req.params.id;
    User.findById(userInx,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};
var finduserByName = function(req, res){
    var userName = req.params.name;
    User.find({name:userName},function(err,user){
        if(!err){
            res.send(userName);
        }else{
            res.sendStatus(404);
        }
    });
};
var deleteuserById =function(req, res){
    var userInx = req.params.id;
    Cafe.find({name:cafeName},function(err,cafe){
        if(!err){
            res.send(userName);
        }else{
            res.sendStatus(404);
        }
    });
};


module.exports.createuser = createuser;
module.exports.findAllusers = findAllusers;
module.exports.findOneuser = findOneuser;
module.exports.finduserByName = finduserByName;