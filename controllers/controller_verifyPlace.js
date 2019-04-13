var mongoose = require('mongoose');
var VerifyPlace = mongoose.model('verifyPlace');

var createVerifyPlace = function(req,res){
    var verifyPlace = new VerifyPlace({
        "place_id":req.body.place_id,
        "user_id":req.body.user_id,
        "acc_type":req.body.acc_type,
        "value":req.body.value
    });
    verifyPlace.save(function(err,newVerifyPlace){
        if(!err){
            res.send(newVerifyPlace);
        }else{
            res.sendStatus(400);
        }
    });
};

module.exports.createVerifyPlace = createVerifyPlace;
