const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Initilzing the Govt Schemes Database
const GovtScheme = require("../../models/Scheme");

//@type     GET
//@route    /
//@desc     route for getting all the schemes
//@access   PUBLIC
router.get("/", (req, res) => {
  GovtScheme.find()
    .sort({ date: -1 })
    .then((govtSchemes) => res.json(govtSchemes))
    .catch((err) => {
      console.log("Error in finding all the schemes " + err);
    });
});

//@type     POST
//@route    /add
//@desc     route for posting a schemes
//@access   PRIVATE
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newScheme = new GovtScheme({
      about: req.body.about,
      wheretoapply: req.body.wheretoapply,
    });
    newScheme
      .save()
      .then((govtScheme) => res.json(govtScheme))
      .catch((err) => {
        console.log("Error in posting the new scheme " + err);
      });
  }
);

//@type     POST
//@route    /edit
//@desc     route for updating/editing a scheme with scheme id (s_id)
//@access   PRIVATE
router.post(
  "/edit/:s_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const schemeUpdate = {};
    if (req.body.about) schemeUpdate.about = req.body.about;
    if (req.body.wheretoapply)
      schemeUpdate.wheretoapply = req.body.wheretoapply;

    //Database operations
    GovtScheme.findOne({ _id: req.params.s_id })
      .then((govtScheme) => {
        if (govtScheme) {
          // Govt Scheme exist with the s_id
          GovtScheme.findOneAndUpdate(
            { _id: req.params.s_id },
            { $set: schemeUpdate },
            { new: true }
          )
            .then((govtScheme) => {
              res.json(govtScheme);
            })
            .catch((err) => {
              console.log("Error in updating the scheme " + err);
            });
        }
      })
      .catch((err) => {
        console.log(
          `Error in finding the scheme with the scheme id:${req.params.s_id} ` +
            err
        );
      });
  }
);

//@type     POST
//@route    /delete
//@desc     route for deleting a scheme with scheme id (s_id)
//@access   PRIVATE
router.delete(
  "/delete/:s_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    GovtScheme.findOne({ _id: req.params.s_id })
      .then((govtScheme) => {
        if (govtScheme) {
          GovtScheme.findOneAndDelete({ _id: req.params.s_id })
            .then((govtScheme) => {
              if (govtScheme) {
                res.json({ success: "deleted successfully" });
              }
            })
            .catch((err) => {
              console.log(
                `Error in finding the scheme for deletion with s_id:${req.params.s_id}` +
                  err
              );
            });
        }
      })
      .catch((err) => {
        console.log("Error in finding the scheme " + err);
      });
  }
);

module.exports = router;
