const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  assignmentId: String,
  employeeId: String,
  assetId: String,
  assetType: String,
  assignedAt: { type: Date, default: Date.now },
  duration: String,
  status: { type: String, default: "Active" }
});

module.exports =
  mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema);