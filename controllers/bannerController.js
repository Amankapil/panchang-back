const banner = require("../models/bannerModel");

// Create a new Guru Vachan entry
exports.createbanner = async (req, res) => {
  const bannerImage = req.file.filename;

  try {
    const newEntry = new banner({
      bannerImage,
    });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Guru Vachan entries
exports.getAllbanner = async (req, res) => {
  try {
    const entries = await banner.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Guru Vachan by ID
exports.getbannerById = async (req, res) => {
  try {
    const entry = await banner.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Guru Vachan entry
exports.updatebanner = async (req, res) => {
  try {
    const updatedEntry = await banner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Guru Vachan entry
exports.deletebanner = async (req, res) => {
  try {
    await banner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
