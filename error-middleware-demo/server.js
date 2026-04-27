// Subtask 2.1: Create Express App
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/success', (req, res) => {
  res.json({
    success: true,
    message: "Success Message"
  });
});

app.get('/error', (req, res, next) => {
  const myError = new Error("Test thrown error");
  myError.status = 400; 
  
  next(myError); 
});

app.get('/crash', (req, res) => {
  console.log(undefinedVariable); 
});

app.get("/validation", (req, res, next) => {
  const err = new Error("Invalid input data");
  err.status = 400;
  next(err);
});

app.use((req, res, next) => {
  const notFoundError = new Error(`Route ${req.originalUrl} not found`);
  notFoundError.status = 404;
  next(notFoundError);
});

app.use((err, req, res, next) => {
  console.error(`[Error Caught] ${err.message}`);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || "Error on the server",
      status: statusCode,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});