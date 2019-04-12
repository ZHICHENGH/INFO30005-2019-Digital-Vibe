var mongoose = require('mongoose');
var VerifyPlace = mongoose.model('verifyPlace');

var createVerifyPlace = function(req,res){
    var verifyPlace = new VerifyPlace({
        "place_id":"PlaceID01",
        "user_id":"alexa01",
        "acc_type":"Toilet",
        "value":"3"
    });
    verifyPlace.save(function(err,newVerifyPlace){
        if(!err){
            res.send(newVerifyPlace);
        }else{
            res.sendStatus(400);
        }
    });
};
