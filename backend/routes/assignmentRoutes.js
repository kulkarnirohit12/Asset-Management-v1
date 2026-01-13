const express = require("express");
const Assignment = require("../models/Assignment");
const Asset = require("../models/Asset");

const router = express.Router();

// Assign asset to employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, assetId, assetType, duration } = req.body;

    // create assignment
    const assignment = await Assignment.create({
      employeeId,
      assetId,
      assetType,
      duration
    });

    // update asset status
    await Asset.findOneAndUpdate(
      { assetId },
      { status: "Assigned" }
    );

    res.json(assignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get assignments for employee
router.get("/employee/:employeeId", async (req, res) => {
  const data = await Assignment.find({
    employeeId: req.params.employeeId
  });
  res.json(data);
});

module.exports = router;