//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Temporary homepage
app.get('/', (req, res) => res.send('INFO30005 Group - Digital Vibe'));

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/route_verifyPlace');
app.use('/',routes);

var places_route = require('./routes/routes_places');
app.use('/places', places_route);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
