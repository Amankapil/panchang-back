const mongoose = require("mongoose");

const bannerSchema2 = new mongoose.Schema({
  personaImage: { type: String, required: true },
  personaName: { type: String, required: true },
  youtubeIframe: { type: String, required: true },
});

module.exports = mongoose.model("BhaktiMarg", bannerSchema2); // Guru Vachan Model
