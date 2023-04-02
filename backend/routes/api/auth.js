const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jsonwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../setup/myurl").secret;

//Importing User Schema
const Person = require("../../models/Person");

//@type     GET
//@route    /
//@desc     route for testing
//@access   PUBLIC
router.get("/", (req, res) => {
  res.send("Hello auth");
});

//@type     POST
//@route    api/auth/register
//@desc     route for registering user
//@access   PUBLIC
router.post("/register", (req, res) => {
  Person.findOne({ mobileNo: req.body.mobileNo })
    .then((person) => {
      if (person) {
        return res
          .status(404)
          .json({ registrationError: "user already registered" });
      } else {
        const newPerson = new Person({
          name: req.body.name,
          mobileNo: req.body.mobileNo,
          email: req.body.email,
          password: req.body.password,
        });
        //Encrypting the password
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newPerson.password, salt, (err, hash) => {
            if (err) throw err;
            newPerson.password = hash;
            newPerson
              .save()
              .then((person) => res.json(person))
              .catch((err) => {
                console.log("Error in saving the password " + err);
              });
          });
        });
      }
    })
    .catch((err) => {
      console.log("Error in registering the user " + err);
    });
});

//@type     POST
//@route    api/auth/login
//@desc     route for logining user
//@access   PUBLIC
router.post("/login", (req, res) => {
  const mobileNo = req.body.mobileNo;
  const pass = req.body.password;
  Person.findOne({ mobileNo })
    .then((person) => {
      if (!person) {
        res.status(404).json({
          LoginError: "User not found with the following mobile number",
        });
      }
      bcrypt
        .compare(pass, person.password)
        .then((isVerified) => {
          if (isVerified) {
            // res.json({ success: "Logged IN successfully" });
            //Generate a token
            const payload = {
              id: person.id,
              mobileNo: person.mobileNo,
              name: person.name,
              isAdmin: person.isAdmin,
            };

            jsonwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            });
          } else {
            res.status(404).json({ fail: "Incorrect password" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("Error in finding the mobile number in our database " + err);
    });
});

//@type     GET
//@route    /api/auth/profile
//@desc     route for user profile
//@access   PRIVATE
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req);
    res.json({
      id: req.body.id,
      name: req.user.name,
      mobileNo: req.user.mobileNo,
    });
  }
);

module.exports = router;
