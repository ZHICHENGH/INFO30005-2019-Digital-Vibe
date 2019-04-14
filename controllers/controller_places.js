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

// Add a new place
const createPlace = (req, res) => {
  var place = new Place({
    "place_id":req.body.place_id,
    "place_name":req.body.place_name,
    "address":req.body.address,
    "coordinate":req.body.coordinate,
    "acc_toilet":req.body.acc_toilet,
    "acc_carpark":req.body.acc_carpark,
    "acc_life":req.body.acc_life
  });
  place.save(function (err, newPlace) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(newPlace);
    }
  });
};


// Update a place
const updatePlaceById = (req, res) => {
    Place.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, place){
        if (err){
            res.sendStatus(500);
        } else {
            res.send(place);
        }
    });
};


// export the callbacks
module.exports.createPlace = createPlace;
module.exports.getAllPlaces = getAllPlaces;
module.exports.getPlaceByName = getPlaceByName;
module.exports.updatePlaceById = updatePlaceById;