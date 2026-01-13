const express = require("express");
const Asset = require("../models/Asset");
const { auth, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE asset (Admin)
router.post("/", async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.json(asset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all assets (Admin)
router.get("/", async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;