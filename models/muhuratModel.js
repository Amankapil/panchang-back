const mongoose = require("mongoose");

const Muhurat = new mongoose.Schema({
  MuhuratType: { type: String, required: true },
  muhuratDate1: { type: Date, required: true }, // Change to Date type for date and time
  muhuratDate2: { type: Date, required: true }, // Change to Date type for date and time
  muhuratdescription: { type: String, required: true },
});

module.exports = mongoose.model("Muhurat", Muhurat);
