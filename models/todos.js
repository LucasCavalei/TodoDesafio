const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
