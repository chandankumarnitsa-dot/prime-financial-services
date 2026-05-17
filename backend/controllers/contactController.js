const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

/**
 * @desc    Submit a new contact/enquiry
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res, next) => {
  try {
    const { email, phone } = req.body;

    // Check for duplicates (same email OR same phone)
    const isDuplicate = await Contact.findOne({
      $or: [{ email }, { phone }]
    });

    if (isDuplicate) {
      return res.status(409).json({
        success: false,
        message: 'We have already received your details. Our team is reviewing your case and will contact you shortly.',
      });
    }

    // Create new contact entry in DB
    const contact = await Contact.create(req.body);

    // Prepare Email Dispatch
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.RECEIVER_EMAIL) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Prime Financial" <${process.env.EMAIL_USER}>`,
          to: process.env.RECEIVER_EMAIL,
          subject: `New Lead: ${contact.name} - Prime Financial Services`,
          html: `
            <h2>New Contact Enquiry Received</h2>
            <p>A new lead has been submitted on the website. Here are the details:</p>
            <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr><td style="background-color: #f8fafc; font-weight: bold; width: 40%;">Name</td><td>${contact.name}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Email</td><td>${contact.email}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Phone</td><td>${contact.phone}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">City</td><td>${contact.city || 'N/A'}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Income</td><td>${contact.income || 'N/A'}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Personal Loan Dues</td><td>${contact.personalLoan || 'N/A'}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Credit Card Dues</td><td>${contact.creditCard || 'N/A'}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Language</td><td>${contact.language || 'N/A'}</td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Facing Harassment?</td><td><span style="${contact.harassment === 'Yes' ? 'color: red; font-weight: bold;' : ''}">${contact.harassment || 'N/A'}</span></td></tr>
              <tr><td style="background-color: #f8fafc; font-weight: bold;">Problem Description</td><td style="white-space: pre-wrap;">${contact.problems || 'N/A'}</td></tr>
            </table>
            <br/>
            <p>You can view all leads on your <a href="http://localhost:4176/admin">Admin Dashboard</a>.</p>
          `,
        };

        // Send asynchronously without awaiting to prevent holding up the API response
        transporter.sendMail(mailOptions).catch(err => {
          console.error('Nodemailer error: Failed to send email alert.', err.message);
        });
      } else {
         console.warn('Nodemailer warning: Email config variables missing in .env. Email not sent.');
      }
    } catch (emailError) {
      console.error('Nodemailer error: Exception during email prep.', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry received successfully.',
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all contacts/enquiries
 * @route   GET /api/contact
 * @access  Public
 */
const getContacts = async (req, res, next) => {
  try {
    const enquiries = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries.map(e => ({
        id: e._id,
        receivedAt: e.createdAt,
        name: e.name,
        email: e.email,
        phone: e.phone,
        city: e.city,
        income: e.income,
        personalLoan: e.personalLoan,
        creditCard: e.creditCard,
        language: e.language,
        harassment: e.harassment,
        problems: e.problems
      }))
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getContacts
};
