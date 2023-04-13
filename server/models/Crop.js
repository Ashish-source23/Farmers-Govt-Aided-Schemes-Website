const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CropSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "PersonDB",
  },
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  pesticides: {
    type: String,
    required: true,
  },
  fertilizers: {
    type: String,
    required: true,
  },
  insecticides: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Crop = mongoose.model("CropDB", CropSchema);
