    require('dotenv').config(); // Load environment variables from .env file
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors'); // Import cors
    const jwt = require('jsonwebtoken'); // Import jwt for token generation
 

    const app = express();
    const port = process.env.PORT || 5000;

    // Middleware
    app.use(cors()); // Enable CORS for all origins
    app.use(express.json()); // Body parser for JSON data

    // MongoDB Connection
    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('MongoDB connected successfully'))
      .catch(err => console.error('MongoDB connection error:', err));

    // Routes
    const clientsRouter = require('./routes/clients');
    app.use('/api/clients', clientsRouter);
     
    const authRouter = require('./routes/auth');
    app.use('/api/auth', authRouter);

    // Basic route for testing
    app.get('/', (req, res) => {
      res.send('Finance App Backend is running!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
    