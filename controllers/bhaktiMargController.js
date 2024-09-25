const BhaktiMarg = require("../models/bhaktiMargModel");

// Create a new Guru Vachan entry
exports.createBhaktiMarg = async (req, res) => {
  const { personaName, youtubeIframe } = req.body;
  // const personaImage = req.file.filename;
  const baseURL = "https://panchang-back.onrender.com/uploads/";
  const personaImage = `${baseURL}${req.file.filename}`;

  try {
    const newEntry = new BhaktiMarg({
      personaName,
      youtubeIframe,
      personaImage,
      bannerImage,
    });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Guru Vachan entries
exports.getAllBhaktiMarg = async (req, res) => {
  try {
    const entries = await BhaktiMarg.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Guru Vachan by ID
exports.getBhaktiMargById = async (req, res) => {
  try {
    const entry = await BhaktiMarg.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Guru Vachan entry
exports.updateBhaktiMarg = async (req, res) => {
  try {
    const updatedEntry = await BhaktiMarg.findByIdAndUpdate(
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
exports.deleteBhaktiMarg = async (req, res) => {
  try {
    await BhaktiMarg.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
