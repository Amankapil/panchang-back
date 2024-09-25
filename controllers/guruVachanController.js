const GuruVachan = require("../models/guruVachanModel");

// Create a new Guru Vachan entry
exports.createGuruVachan = async (req, res) => {
  console.log(req.file); // Log to check if file is uploaded
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const { personaName, youtubeIframe } = req.body;
  const personaImage = req.file.filename; // Should not be undefined if multer is working correctly

  try {
    const newEntry = new GuruVachan({
      personaName,
      youtubeIframe,
      personaImage,
    });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Guru Vachan entries
exports.getAllGuruVachan = async (req, res) => {
  try {
    const entries = await GuruVachan.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Guru Vachan by ID
exports.getGuruVachanById = async (req, res) => {
  try {
    const entry = await GuruVachan.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Guru Vachan entry
exports.updateGuruVachan = async (req, res) => {
  try {
    const updatedEntry = await GuruVachan.findByIdAndUpdate(
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
exports.deleteGuruVachan = async (req, res) => {
  try {
    await GuruVachan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
