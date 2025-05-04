
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

// Log the MongoDB URI (for debugging, remove in production)
console.log('MongoDB URI exists:', !!process.env.MONGO_URI);
// Connect to MongoDB
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});