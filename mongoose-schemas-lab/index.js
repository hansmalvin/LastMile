const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery'],
    default: 'Fiction'
  },
  publicationYear: {
    type: Number,
    min: 1800,
    max: new Date().getFullYear()
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
