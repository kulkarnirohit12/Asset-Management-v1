const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "employee", "intern"],
    default: "employee"
  }
});

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema);