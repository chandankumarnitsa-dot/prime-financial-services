const express = require('express');
const { body } = require('express-validator');
const { submitContact, getContacts } = require('../controllers/contactController');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

// Validation rules for contact submission
const contactValidationRules = [
  body('name').notEmpty().withMessage('Name is required').trim().escape(),
  body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
  body('phone').notEmpty().withMessage('Phone number is required').trim().escape(),
  body('city').optional().trim().escape(),
  body('income').optional().trim().escape(),
  body('personalLoan').optional().trim().escape(),
  body('creditCard').optional().trim().escape(),
  body('language').optional().trim().escape(),
  body('harassment').optional().trim().escape(),
  body('problems').optional().trim().escape(),
];

// Route: POST /api/contact
router.post(
  '/',
  contactValidationRules,
  validateRequest,
  submitContact
);

// Route: GET /api/contact
router.get('/', getContacts);

module.exports = router;
