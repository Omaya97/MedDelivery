const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  phone: {
    type: Number, // Correction: changement de type en Number
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
