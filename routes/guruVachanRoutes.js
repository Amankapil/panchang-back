const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createGuruVachan,
  getAllGuruVachan,
  getGuruVachanById,
  updateGuruVachan,
  deleteGuruVachan,
} = require("../controllers/guruVachanController");

// Routes
router.post("/", upload.single("personaImage"), createGuruVachan);
router.get("/", getAllGuruVachan);
router.get("/:id", getGuruVachanById);
router.put("/:id", updateGuruVachan);
router.delete("/:id", deleteGuruVachan);

module.exports = router;
