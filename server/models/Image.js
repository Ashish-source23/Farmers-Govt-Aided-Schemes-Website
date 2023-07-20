const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CropDB",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageFile: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
});

module.exports = File = mongoose.model("FileDB", fileSchema);
