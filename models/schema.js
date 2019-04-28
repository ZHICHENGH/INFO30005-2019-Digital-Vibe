var mongoose = require('mongoose');

var placeSchema = mongoose.Schema(
    {
        "place_id":String,
        "place_name":String,
        "address":String,
        "lat":String,
        "lng":String,
        "acc_toilet":String,
        "acc_carpark":String,
        "acc_lift":String
    }
);

var userSchema = mongoose.Schema(
    {
        "user_id":String,
        "user_name":String,
        "password":String,
        "email":String
    }
);

var commentSchema = mongoose.Schema(
    {
        "comment_id":String,
        "user_id":String,
        "place_id":String,
        "text":String,
        "timestamp":String
    }
);

var verifyPlaceSchema = mongoose.Schema(
    {
        "place_id":String,
        "user_id":String,
        "acc_type":String
    }
);

mongoose.model('place',placeSchema);
mongoose.model('user',userSchema);
mongoose.model('comment',commentSchema);
mongoose.model('verifyPlace',verifyPlaceSchema);