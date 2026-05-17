/**
 * Global Error Handling Middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging

  // Determine status code
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only send stack trace if in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
