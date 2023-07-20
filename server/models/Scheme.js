const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GovtschemeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    // required: true,
  },
  duration: {
    type: String,
    // required: true,
    // default: "N / A",
  },
  benefits: {
    type: String,
    // required: true,
    // default: "N / A",
  },
  eligibility: {
    type: String,
    // required: true,
    // default: "N / A",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Scheme = mongoose.model("GovtScheme", GovtschemeSchema);
