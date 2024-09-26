const Muhurat = require("../models/muhuratModel");
// const GuruVachan = require("../models/guruVachanModel");

// Create a new muhurat
exports.createMuhurat = async (req, res) => {
  console.log("Route hit"); // To ensure the route is hit
  console.log("Request Headers:", req.headers); // Log headers
  console.log("Request Body:", req.body); // Log the body // Should show the parsed body

  const { MuhuratType, muhuratDate1, muhuratDate2, muhuratdescription } =
    req.body;
  console.log(req.body);
  try {
    const newMuhurat = new Muhurat({
      MuhuratType,
      muhuratDate1,
      muhuratDate2,
      muhuratdescription,
    });

    await newMuhurat.save();
    res.status(201).json(newMuhurat);
  } catch (error) {
    res.status(500).json({ message: "Error creating muhurat", error });
  }
};

// Get all muhurats
exports.getAllMuhurats = async (req, res) => {
  try {
    const muhurats = await Muhurat.find();
    res.status(200).json(muhurats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching muhurats", error });
  }
};

// Get a muhurat by ID
exports.getMuhuratById = async (req, res) => {
  try {
    const muhurat = await Muhurat.findById(req.params.id);
    if (!muhurat) {
      return res.status(404).json({ message: "Muhurat not found" });
    }
    res.status(200).json(muhurat);
  } catch (error) {
    res.status(500).json({ message: "Error fetching muhurat", error });
  }
};

// Update a muhurat
exports.updateMuhurat = async (req, res) => {
  try {
    const updatedMuhurat = await Muhurat.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMuhurat) {
      return res.status(404).json({ message: "Muhurat not found" });
    }

    res.status(200).json(updatedMuhurat);
  } catch (error) {
    res.status(500).json({ message: "Error updating muhurat", error });
  }
};

// Delete a muhurat
exports.deleteMuhurat = async (req, res) => {
  try {
    const deletedMuhurat = await Muhurat.findByIdAndDelete(req.params.id);

    if (!deletedMuhurat) {
      return res.status(404).json({ message: "Muhurat not found" });
    }

    res.status(200).json({ message: "Muhurat deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting muhurat", error });
  }
};
