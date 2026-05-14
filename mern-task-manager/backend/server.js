const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mern-task-manager');

mongoose.connection.once('open', () => {
  console.log("MongoDB connected!");
});

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send("Backend running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
