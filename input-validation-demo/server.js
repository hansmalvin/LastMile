// Subtask 2.1: Create Basic Server
const express = require('express');
const { validateRegistration } = require('./middleware/validate');
const app = express();
const PORT = 3000;
app.use(express.json());

app.post('/register', validateRegistration, (req, res) => {
  const { name, email } = req.body;

  console.log(`New user registered: ${name} (${email})`);

  res.status(201).json({
    success: true,
    message: "User registered successfully!",
    user: { name, email }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});