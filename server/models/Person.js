const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: true,
  },
  mobileNo: {
    type: String,
    default: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    default: true,
  },
  username: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = Person = mongoose.model("PersonDB", userSchema);
