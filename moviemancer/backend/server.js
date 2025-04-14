// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // For handling cross-origin requests
const connectDB = require('./config/database'); // Database connection
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for frontend-backend communication

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes); // User authentication and preferences
app.use('/api/movies', movieRoutes); // Movie management
app.use('/api/recommendations', recommendationRoutes); // Personalized recommendations

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
