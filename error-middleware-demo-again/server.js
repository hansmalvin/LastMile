// server.js
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/success', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Returns normal response"
  });
});

app.get('/error', (req, res, next) => {
  res.status(400); 
  const error = new Error("Throws an error");

  next(error); 
});

app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});