const express = require("express");
const router = express.Router();
const passport = require("passport");

//database initializing
const Crop = require("../../models/Crop");

//@type     GET
//@route    /
//@desc     route for getting all the crops
//@access   PUBLIC
router.get("/", (req, res) => {
  Crop.find()
    .sort({ date: -1 })
    .then((crops) => res.json(crops))
    .catch((err) => console.log("Error in getting all the questions " + err));
});

//@type     POST
//@route    /details
//@desc     route for posting crop details
//@access   PRIVATE
router.post(
  "/details",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newCrop = new Crop({
      user: req.user.id,
      title: req.body.title,
      category: req.body.category,
      info: req.body.info,
      price: req.body.price,
      pesticides: req.body.pesticides,
      fertilizers: req.body.fertilizers,
      insecticides: req.body.insecticides,
    });
    //save this new object to the crop database
    newCrop
      .save()
      .then((crop) => {
        res.json(crop);
      })
      .catch((err) => {
        console.log("Error in saving the deatils of the crop " + err);
      });

    //upload images to the IamgeDB
  }
);

//@type     POST
//@route    /edit
//@desc     route for updating/posting crop details with crop id ie c_id
//@access   PRIVATE
router.post(
  "/edit/:c_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const cropUpdate = {};
    if (req.body.title) cropUpdate.title = req.body.title;
    if (req.body.category) cropUpdate.category = req.body.category;
    if (req.body.info) cropUpdate.info = req.body.info;
    if (req.body.price) cropUpdate.price = req.body.price;
    if (req.body.pesticides) cropUpdate.pesticides = req.body.pesticides;
    if (req.body.fertilizers) cropUpdate.fertilizers = req.body.fertilizers;
    if (req.body.insecticides) cropUpdate.insecticides = req.body.insecticides;

    Crop.findOne({ _id: req.params.c_id })
      .then((crop) => {
        if (crop) {
          Crop.findOneAndUpdate(
            { _id: req.params.c_id },
            { $set: cropUpdate },
            { new: true }
          )
            .then((crop) => res.json(crop))
            .catch((err) => {
              console.log("Error in updating the crop " + err);
            });
        }
      })
      .catch((err) =>
        console.log(
          `Error in finding the crop with crop id :${req.params.c_id}`
        )
      );
  }
);

module.exports = router;
