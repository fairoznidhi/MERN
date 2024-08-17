const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = Task = mongoose.model("Task", TaskSchema);
