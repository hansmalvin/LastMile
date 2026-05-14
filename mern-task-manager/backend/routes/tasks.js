const router = require('express').Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/add', async (req, res) => {
  try {
    const newTask = new Task({
      description: req.body.description
    });

    await newTask.save();
    res.json("Task added!");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json("Task deleted!");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/update/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    task.description = req.body.description;
    task.completed = req.body.completed;

    await task.save();
    res.json("Task updated!");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
