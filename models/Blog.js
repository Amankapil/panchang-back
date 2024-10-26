const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  image: { type: String }, // Path to the image in the public/uploads folder
  title: { type: String, required: true },
  description: { type: String, required: true }, // Store rich text content (HTML)
}, { timestamps: true });

module.exports = mongoose.model('Blog1', blogSchema);
