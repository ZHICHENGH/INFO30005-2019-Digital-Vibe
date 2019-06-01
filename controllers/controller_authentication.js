var passport = require('passport');
var User = mongoose.model('user');



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

module.exports = passport;