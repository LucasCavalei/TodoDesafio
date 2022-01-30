const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  dia: { type: String, required: false },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
