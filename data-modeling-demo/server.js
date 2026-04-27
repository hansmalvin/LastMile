require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const demoRoutes = require('./routes/demo.route');
const app = express();
connectDB();

app.use(express.json());
app.use('/api', demoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));