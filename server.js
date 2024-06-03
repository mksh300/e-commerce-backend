const express = require('express');
const connectDB = require('./config/connectDb');
const userRoutes = require('./routes/userRoutes');
const userRoutes = require('./routes/');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());


// connect to database
connectDB()
app.use('/users', userRoutes);
app.use('/products', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
