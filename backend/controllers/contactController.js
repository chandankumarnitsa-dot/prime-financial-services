const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// In-memory cache to prevent duplicates even if DB is down
const submittedEmails = new Set();
const submittedPhones = new Set();

/**
 * @desc    Submit a new contact/enquiry
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    let contact = req.body; // Fallback to req.body if DB fails
    let dbSuccess = false;

    // 1. Check in-memory cache first
    if (submittedEmails.has(email) || submittedPhones.has(phone)) {
      return res.status(409).json({
        success: false,
        message: 'We have already received an enquiry with these details. Our team is reviewing your case and will be in touch shortly.',
      });
    }

    try {
      // 2. Check DB for duplicates
      const isDuplicate = await Contact.findOne({
        $or: [{ email }, { phone }]
      });

      if (isDuplicate) {
        // Add to cache so we don't query DB next time
        submittedEmails.add(email);
        submittedPhones.add(phone);

        return res.status(409).json({
          success: false,
          message: 'We have already received an enquiry with these details. Our team is reviewing your case and will be in touch shortly.',
        });
      }

      // Create new contact entry in DB
      const savedContact = await Contact.create(req.body);
      contact = savedContact; // Use the saved DB version which has _id
      dbSuccess = true;
    } catch (dbError) {
      console.error('Database error during contact submission:', dbError.message);
      console.log('Proceeding to send email anyway...');
    }

    // Add to in-memory cache to prevent future duplicates during this session
    submittedEmails.add(email);
    submittedPhones.add(phone);

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
            ${!dbSuccess ? '<p style="color: red;"><strong>Note:</strong> This lead could not be saved to the database due to connection issues.</p>' : ''}
          `,
        };

        // Await email to ensure it sends, or catch error
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully via Nodemailer.');
      } else {
         console.warn('Nodemailer warning: Email config variables missing in .env. Email not sent.');
      }
    } catch (emailError) {
      console.error('Nodemailer error: Failed to send email alert.', emailError.message);
      if (!dbSuccess) {
        // Both DB and Email failed
        return res.status(500).json({
          success: false,
          message: 'Failed to process your request. Please try again later.'
        });
      }
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry received successfully.',
      data: {
        id: contact._id || 'email-only-no-id',
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
    // Pagination defaults
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    // Get total count for pagination metadata
    const totalContacts = await Contact.countDocuments();

    // Fetch paginated results
    const enquiries = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: enquiries.length,
      pagination: {
        totalContacts,
        totalPages: Math.ceil(totalContacts / limit),
        currentPage: page,
        limit,
      },
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
