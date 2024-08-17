const express = require("express");
const router = express.Router();
const Task = require("../../models/Tasks");

// Create a task
router.post("/", async (req, res) => {
  const taskObj = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  };
  const task = new Task(taskObj);
  await task.save();
  res.status(201).json(task);
});

// Get list of all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});

// Get one task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send("Task Not Found");
    res.json(task);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});

// Update a task by ID
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    if (!task) return res.status(404).send("Task Not Found");
    res.json(task);
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});

// Delete a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send("Task Not Found");
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
});

module.exports = router;
