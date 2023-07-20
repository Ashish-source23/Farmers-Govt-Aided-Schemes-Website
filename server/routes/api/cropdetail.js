const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

const DIR = "./public/";

//database initializing
const Crop = require("../../models/Crop");
const File = require("../../models/Image");

// Configuring destination for the images

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + filename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

//@type     GET
//@route    /api/crop/
//@desc     route for getting all the crops
//@access   PUBLIC
router.get("/", async (req, res) => {
  await Crop.find()
    .sort({ date: -1 })
    .then((crops) => res.json(crops))
    .catch((err) => console.log("Error in getting all the questions " + err));
});

//@type     POST
//@route    /add
//@desc     route for posting crop details
//@access   PRIVATE
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newCrop = new Crop({
      user: req.user.id,
      title: req.body.title,
      category: req.body.category,
      info: req.body.info,
      price: req.body.price,
      symptoms: req.body.symptoms,
      favourableconditions: req.body.favourableconditions,
      cure: req.body.cure,
      img: req.body.img,
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
  }
);

//@type   POST
//@route  /add-photos
//@desc   route for uploading the pictures of the crop
//@access PRIVATE

router.post("/add-photos", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const newfile = new File({
    _id: new mongoose.Types.ObjectId(),
    imageFile: url + "/public" + req.file.filename,
  });
  user.save().then((file) => {
    res.status(201).json({
      message: "Image Uploaded",
      imageUploaded: {
        _id: file._id,
        imageFile: file.imageFile,
      }.catch((err) => {
        console.log(err), res.status(500).json({ error: err });
      }),
    });
  });
});

// router.post(
//   "/add/photos",
//   passport.authenticate("jwt", { session: false }),
//   upload.single("post"),
//   async (req, res) => {
//     try {
//       await File.create({
//         // user: req.user.id,
//         name: req.file.filename,
//       });
//       res.status(200).json(File);
//     } catch (error) {
//       console.log("Error in saving the photo :", error);
//     }
//   }
// );

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
    if (req.body.symptoms) cropUpdate.symptoms = req.body.symptoms;
    if (req.body.favourableconditions)
      cropUpdate.favourableconditions = req.body.favourableconditions;
    if (req.body.cure) cropUpdate.insecticides = req.body.cure;

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
