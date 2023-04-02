const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

//Port setup
const PORT = process.env.PORT || 3000;

//Middleware configurations
app.use(bodyParser.urlencoded({ extended: false }));

//bringing all the routes
const auth = require("./routes/api/auth");
const cropdetail = require("./routes/api/cropdetail");
const scheme = require("./routes/api/scheme");

//Mongoose Configuration
const db = require("./setup/myurl").mongoURl;

//Mongoose Connect Attempt
mongoose
  .connect(db)
  .then(console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.log("Error in connecting MongoDB " + err);
  });

//Passport intialization
app.use(passport.initialize());

//JWT Strategy configuration
require("./strategies/jwtstrategy")(passport);

//Route for testing
app.get("/", (req, res) => {
  res.send("HELLO");
});

// actual routes
app.use("/api/auth", auth);
app.use("/api/crop", cropdetail);
app.use("/api/scheme", scheme);

//Route for listening
app.listen(PORT, () => {
  console.log(`Server started on "http://localhost:${PORT}`);
});
