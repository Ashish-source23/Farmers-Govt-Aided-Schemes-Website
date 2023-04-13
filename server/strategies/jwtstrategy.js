var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const mongoose = require("mongoose");
const mykey = require("../setup/myurl").secret;
const Person = mongoose.model("PersonDB");

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = mykey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Person.findById(jwt_payload.id)
        .then((person) => {
          if (person) {
            return done(null, person);
          }
          return done(null, false);
        })
        .catch((err) => {
          console.log("Error in json webtoken " + err);
        });
    })
  );
};
