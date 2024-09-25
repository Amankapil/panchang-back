const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createBhaktiMarg,
  getAllBhaktiMarg,
  getBhaktiMargById,
  updateBhaktiMarg,
  deleteBhaktiMarg,
} = require("../controllers/bhaktiMargController");

// Routes
router.post("/", upload.single("personaImage"), createBhaktiMarg);
router.get("/", getAllBhaktiMarg);
router.get("/:id", getBhaktiMargById);
router.put("/:id", updateBhaktiMarg);
router.delete("/:id", deleteBhaktiMarg);

module.exports = router;
