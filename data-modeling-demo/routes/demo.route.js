// routes/demo.route.js
const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Task = require('../models/task.model');

router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().populate('userId', 'name email');
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;