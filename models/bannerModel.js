const mongoose = require("mongoose");

const banner = new mongoose.Schema({
  bannerImage: { type: String, required: true },
});

module.exports = mongoose.model("banner", banner); // Guru Vachan Model
