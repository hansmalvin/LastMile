const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Task = require("../models/Task");

router.post("/create", async (req, res) => {
  try {
    const { name, email, title, description } = req.body;

    const user = await User.create({ name, email });

    const task = await Task.create({
      title,
      description,
      userId: user._id,
    });

    res.json({ user, task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, 
      { title, description, completed },
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;