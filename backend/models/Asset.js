const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  assetId: String,
  name: String,
  type: String,
  serialNumber: String,
  condition: { type: String, default: "Good" },
  status: { type: String, default: "Available" }
});

module.exports =
  mongoose.models.Asset || mongoose.model("Asset", AssetSchema);