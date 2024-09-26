const express = require("express");
const {
  fetchAndSaveAllData,
  getPanchangData,
  getAllPanchangData,
} = require("../controllers/panchangController");

const router = express.Router();

// Route to trigger the process of fetching and saving Panchang data for 2024
router.post("/", fetchAndSaveAllData);
router.get("/get-panchang", getPanchangData);
// Route to fetch all Panchang data
router.get("/get-all-panchang", getAllPanchangData);
module.exports = router;
