const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create employee / intern
router.post("/create", async (req, res) => {
  try {
    const existing = await User.findOne({
      employeeId: req.body.employeeId
    });

    if (existing) {
      return res.status(400).json({
        message: "Employee ID already exists"
      });
    }

    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const users = await User.find({ role: { $ne: "admin" } });
  res.json(users);
});

module.exports = router;