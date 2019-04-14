var mongoose = require('mongoose');
var VerifyPlace = mongoose.model('verifyPlace');

//create a verify place
var createVerifyPlace = function(req,res){
    var verifyPlace = new VerifyPlace({
        "place_id":req.body.place_id,
        "user_id":req.body.user_id,
        "acc_type":req.body.acc_type
    });
    verifyPlace.save(function(err,newVerifyPlace){
        if(!err){
            res.send(newVerifyPlace);
        }else{
            res.sendStatus(400);
        }
    });
};

//find a verify place
var findOneVerifyPlace = function(req,res){
    var req_place_id = req.params.place_id;
    var req_user_id = req.params.user_id;
    var req_acc_type = req.params.acc_type;

    VerifyPlace.find({
            place_id:req_place_id,
            user_id:req_user_id,
            acc_type:req_acc_type
    },function(err,verifyPlace){
        if(!err){
            res.send(verifyPlace);
        }else{
            res.sendStatus(404);
        }
    });
};


//find a verify place by its acc type
var findVerifyPlaceByPlaceAccType = function(req,res){
    var req_place_id = req.params.place_id;
    var req_acc_type = req.params.acc_type;

    VerifyPlace.find({
        place_id:req_place_id,
        acc_type:req_acc_type
    },function(err,verifyPlace){
        if(!err){
            res.send(verifyPlace);
        }else{
            res.sendStatus(404);
        }
    });
};

//get all verifyplace
var findAllVerifyPlace = function(req,res){
    VerifyPlace.find({},function(err,verifyPlace){
        if(!err){
            res.send(verifyPlace);
        }else{
            res.sendStatus(404);
        }
    });
};

//delete one verify place
var deleteOneVerifyPlace = function(req,res){
    var req_place_id = req.body.place_id;
    var req_user_id = req.body.user_id;
    var req_acc_type = req.body.acc_type;

    VerifyPlace.deleteOne({
        place_id:req_place_id,
        user_id:req_user_id,
        acc_type:req_acc_type},function(err,updatedVerifyPlace){
        if(!err){
            res.send(updatedVerifyPlace);
        }else{
            res.sendStatus(400);
        }
    });
};

//export functions
module.exports.createVerifyPlace = createVerifyPlace;
module.exports.findOneVerifyPlace = findOneVerifyPlace;
module.exports.findVerifyPlaceByPlaceAccType = findVerifyPlaceByPlaceAccType;
module.exports.findAllVerifyPlace = findAllVerifyPlace;
module.exports.deleteOneVerifyPlace = deleteOneVerifyPlace;