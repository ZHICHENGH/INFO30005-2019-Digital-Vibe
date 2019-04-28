//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Database setup
require('./models/db.js');

// Routes setup
var verifyPlace_route = require('./routes/route_verifyPlace');
app.use('/verifyPlace',verifyPlace_route);

var places_route = require('./routes/routes_places');
app.use('/places', places_route);

var user_route = require('./routes/route_user');
app.use('/users', user_route);

var comment_route = require('./routes/route_comment');
app.use('/comment', comment_route);

// HTML files
app.get('/', function(request, response){
    response.sendfile('index.html');
});

app.get('/GetAccPlaces', function(request, response){
    response.sendfile('GetAccPlaces.html');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
