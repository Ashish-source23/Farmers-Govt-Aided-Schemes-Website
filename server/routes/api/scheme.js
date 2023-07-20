const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Initilzing the Govt Schemes Database
const GovtScheme = require("../../models/Scheme");

//@type     GET
//@route    api/scheme/
//@desc     route for getting all the schemes
//@access   PUBLIC
router.get("/", async (req, res) => {
  await GovtScheme.find()
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
      title: req.body.title,
      about: req.body.about,
      duration: req.body.duration,
      benefits: req.body.benefits,
      eligibility: req.body.eligibility,
      website: req.body.website,
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
    if (req.body.title) schemeUpdate.title = req.body.title;
    if (req.body.about) schemeUpdate.about = req.body.about;
    if (req.body.duration) schemeUpdate.duration = req.body.duration;
    if (req.body.benefits) schemeUpdate.benefits = req.body.benefits;
    if (req.body.eligibility) schemeUpdate.eligibility = req.body.eligibility;
    if (req.body.website) schemeUpdate.website = req.body.website;

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
  "/delete",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const s_id = req.body.s_id;
    GovtScheme.findOne({ _id: s_id })
      .then((govtScheme) => {
        if (govtScheme) {
          const check_id = req.body.check_id;
          if (!check_id) {
            res
              .status(404)
              .json({ Error: "Enter the id of the scheme you want to delete" });
          } else if (s_id === check_id) {
            GovtScheme.findOneAndDelete({ _id: check_id })
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
          } else {
            res
              .status(404)
              .json({ Error: "Id dosen't match. PLEASE PROVIDE A CORRECT ID" });
          }
        }
      })
      .catch((err) => {
        console.log("Error in finding the scheme " + err);
      });
  }
);

module.exports = router;
