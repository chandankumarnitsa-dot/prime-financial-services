require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const contactRoutes = require('./routes/contactRoutes');

// Connect to Database
connectDB();

const app = express();

// Security Middlewares
app.use(helmet()); // Set security HTTP headers
app.use(cors({
  origin: function (origin, callback) {
    // Allow all localhost origins for development and preview
    if (!origin || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Body Parser Middleware
app.use(express.json());

// Request logging middleware (optional, good for dev)
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  }
  next();
});

// Basic endpoint to check if server is running
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// API Routes
app.use('/api/contact', contactRoutes);

// Global Error Handler Middleware
// This must be the last middleware after all routes
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections gracefully
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
