const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} request made to: ${req.url}`);
  next(); 
});

app.get('/', (req, res) => {
  res.send('Welcome to Route Handling!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Viewing Product ID: ${productId}`);
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  if (searchTerm) {
    res.send(`Searching for: ${searchTerm}`);
  } else {
    res.send('Please provide a search term using ?q=your_search');
  }
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});