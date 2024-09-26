const mongoose = require("mongoose");

const panchangSchema = new mongoose.Schema({
  day: Number,
  month: Number,
  year: Number,
  data: Object,
});

module.exports = mongoose.model("Panchang", panchangSchema);
