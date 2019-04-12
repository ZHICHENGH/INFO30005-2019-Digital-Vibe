//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary homepage
app.get('/', (req, res) => res.send('INFO30005 Group - Digital Vibe'));

// Database setup
//require('./models/db.js');

// Routes setup
var routes = require('./routes/route.js');
app.use('/',routes);

// Start the server
app.listen(3000,function(req,res){
    console.log('Express listening on port 3000');
});