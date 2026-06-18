const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      index: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      index: true,
    },
    city: {
      type: String,
      trim: true,
    },
    income: {
      type: String,
      trim: true,
    },
    personalLoan: {
      type: String,
      trim: true,
    },
    creditCard: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
      trim: true,
    },
    harassment: {
      type: String,
      trim: true,
    },
    problems: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Indexes for faster querying in massive databases
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
