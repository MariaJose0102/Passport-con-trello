const passport = require('passport');
const TrelloStrategy = require('passport-trello').Strategy;
  
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new TrelloStrategy({
    clienteID:"mariajoseramoserazo48@gmail.com", // Your Credentials here.
    clientPassword:"Majo1234.", // Your Credentials here.
    callbackURL:"http://localhost:4000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));