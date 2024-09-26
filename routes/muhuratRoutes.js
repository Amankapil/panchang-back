const express = require("express");
const router = express.Router();
// const muhuratController = require("../controllers/muhuratController");
const {
  createMuhurat,
  getAllMuhurats,
  getMuhuratById,
  updateMuhurat,
  deleteMuhurat,
} = require("../controllers/muhuratController");

// Create a new muhurat
router.post("/", createMuhurat);

// Get all muhurats
router.get("/", getAllMuhurats);

// Get a muhurat by ID
router.get("/:id", getMuhuratById);

// Update a muhurat by ID
router.put("/:id", updateMuhurat);

// Delete a muhurat by ID
router.delete("/:id", deleteMuhurat);

module.exports = router;
