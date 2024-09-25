const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  personaImage: { type: String, required: true },
  personaName: { type: String, required: true },
  youtubeIframe: { type: String, required: true },
  //   bannerImage: { type: String, required: true },
});

module.exports = mongoose.model("GuruVachan", bannerSchema); // Guru Vachan Model
