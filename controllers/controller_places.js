const mongoose = require('mongoose');
const Place = mongoose.model('place');


// Get list of all places
const getAllPlaces = (req, res) => {
  Place.find({}, (err, places) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(places);
    }
  });
};

// Get one place by name
var getPlaceByName = function(req, res){
    var placeName = req.params.place_name;
    Place.find({place_name:placeName},function(err,place){
        if(!err){
            res.send(place);
        }else{
            res.sendStatus(500);
        }
    });
};

// Get one place by place_id
var getPlaceByID = function(req, res){
    var place_id = req.params.place_id;
    Place.find({place_id:place_id},function(err,place){
        if(!err){
            res.send(place);
        }else{
            res.sendStatus(500);
        }
    });
};

// Add a new place
const createPlace = (req, res) => {
  var place = new Place({
    "place_id":req.body.place_id,
    "place_name":req.body.place_name,
    "address":req.body.address,
    "lat":req.body.lat,
    "lng":req.body.lng,
    "acc_toilet":req.body.acc_toilet,
    "acc_carpark":req.body.acc_carpark,
    "acc_lift":req.body.acc_lift,
    "created_by":req.body.created_by,
    "last_mod_by":req.body.last_mod_by
  });

  place.save(function (err, newPlace) {
    if (err) {
      res.sendStatus(500);
      alert("updatePlaceByID error: " + err);
    } else {
      res.send(newPlace);
    }
  });
};


// Update a place by place_id
const updatePlaceById = (req, res) => {
    var req_place_id = req.body.place_id;
    var req_toilet = req.body.toilet;
    var req_carpark = req.body.carpark;
    var req_lift = req.body.lift;
    var req_last_mod_by = req.body.last_mod_by;

    Place.findOneAndUpdate(
        {"place_id": req_place_id},
        {
            $set: {
                "acc_toilet": req_toilet,
                "acc_carpark": req_carpark,
                "acc_lift": req_lift,
                "last_mod_by": req_last_mod_by
            }, returnNewDocument: true
        }, function(err,doc) {
            if (err) {
                res.sendStatus(500);
                alert("updatePlaceByID error: " + err);
            } else {
                res.send(doc);
            }
        }
    );
};


// export the callbacks
module.exports.createPlace = createPlace;
module.exports.getAllPlaces = getAllPlaces;
module.exports.getPlaceByName = getPlaceByName;
module.exports.getPlaceByID = getPlaceByID;
module.exports.updatePlaceById = updatePlaceById;
