//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var flash = require('express-flash');
// Database setup
require('./models/db.js');

var passport = require('passport');
var User = mongoose.model('user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
//console.log(path.join(__dirname, "public"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "MDBootstrap")));
app.get("/", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/index.html"))
})

app.get("/indexLogin", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/index-login.html"))
})

app.get("/login", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/page-login.html"))
})

app.get("/loginError", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/page-login-error.html"))
})

app.get("/signup", function(req, res){
    res.writeHead(200, {"content-type": "text/html"});
    res.end(fs.readFileSync(__dirname + "/page-register.html"))
})

app.get('/GetAccPlaces', function(request, response){
    response.sendfile('GetAccPlaces.html');
});

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

//login

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));
  
// Passport init
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      cb(err, user);
    });
});

var LocalStrategy = require('passport-local').Strategy;
passport.use('local-login', new LocalStrategy(
  function(username, password, done) {
    User.findOne({
        user_name:username
    }, function(err, user){
        if (err) {
            return done(err);
        } 
        if (!user){
            return done(null, false, {message: 'Invalid Username or Password'});
        }
        if (user.password != password){
            return done(null, false, {message: 'Invalid Username or Password'});
        }
        return done(null, user);
    })
  }
));

app.post('/login', 
  passport.authenticate('local-login', { 
      failureRedirect: '/loginError',
      failureFlash: true
 }),
  function(req, res) {
    res.redirect('/indexLogin?username=' + req.user.user_name);
  });

//register

passport.use('local-signup', new LocalStrategy(
function(username, password, done) {
    // we are checking to see if the user trying to login already exists
    User.findOne({user_name: username}, function(err, user) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }
        // check to see if theres already a user with that username
        if (user) {
            return done(null, false, {message: 'Username is taken'});
        } else {
            // if there is no user with that email
            // create the user
            // set the user's local credentials
            var user = new User({
                "user_name":username,
                "password":password
            });
            // save the user
            user.save(function(err) {
                if(!err){
                    return done(null, user)
                }else{
                    return done(err);
                }
            });
        }

    });    

}));

app.post('/signup', 
  passport.authenticate('local-signup', { 
      failureRedirect: '/signup', 
      failureFlash: true
 }),
  function(req, res) {
    res.redirect('/indexLogin?username=' + req.user.user_name);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
