const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GovtschemeSchema = new Schema({
  about: {
    type: String,
    required: true,
  },
  wheretoapply: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Scheme = mongoose.model("GovtScheme", GovtschemeSchema);
