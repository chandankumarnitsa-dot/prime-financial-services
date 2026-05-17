const { validationResult } = require('express-validator');

/**
 * Middleware to check for validation errors from express-validator
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return 400 Bad Request with the validation errors
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

module.exports = validateRequest;
