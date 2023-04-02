const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "PersonDB",
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  desc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Image = mongoose.model("ImageDB", ImageSchema);
