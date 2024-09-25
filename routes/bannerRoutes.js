const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createbanner,
  getAllbanner,
  getbannerById,
  updatebanner,
  deletebanner,
} = require("../controllers/bannerController");

// Routes
router.post("/", upload.single("bannerImage"), createbanner);
router.get("/", getAllbanner);
router.get("/:id", getbannerById);
router.put("/:id", updatebanner);
router.delete("/:id", deletebanner);

module.exports = router;
