//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');


// Database setup
require('./models/db.js');

var passport = require('passport');
var User = mongoose.model('user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS in order to facilitate localhost testing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
var fs = require("fs");
var path = require("path");
console.log(path.join(__dirname, "public"))

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/index.html"))
})
app.get("/login", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/page-login.html"))
})
app.get("/signup", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/page-register.html"))
})

app.get('/GetAccPlaces', function(request, response){
    response.sendfile('GetAccPlaces.html');
});

//login

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));
  
// Passport init
app.use(passport.initialize());
app.use(passport.session());

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({
        email:email
    }, function(err, user){
        if (err) {
            return done(err);
        } 
        if (!user){
            return done(null, false);
        }
        if (user.password != password){
            return done(null, false);
        }
        return done(null, user);
    })
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      cb(err, user);
    });
});

app.post('/login',
  passport.authenticate('local', {
      succcessRedirect: '/',
      failureRedirect: '/login'
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
