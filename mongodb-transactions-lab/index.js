const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const port = 3000;

app.use(express.json());

const dbURI = 'mongodb://localhost:27017/bankingApp';

mongoose.connect(dbURI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((err) => {
    console.error('Connection error:', err);
});

app.use('/api/transactions', transactionRoutes);
