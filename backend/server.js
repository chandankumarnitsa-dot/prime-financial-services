const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic endpoint to check if server is running
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { 
    name, 
    email, 
    phone, 
    city, 
    income, 
    personalLoan, 
    creditCard, 
    language, 
    harassment, 
    problems 
  } = req.body;

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required fields.' });
  }

  // In a real application, you would save this to a database or send an email.
  console.log('Received new contact enquiry:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`City: ${city}`);
  console.log(`Monthly Income: ${income}`);
  console.log(`Personal Loan Dues: ${personalLoan}`);
  console.log(`Credit Card Dues: ${creditCard}`);
  console.log(`Preferred Language: ${language}`);
  console.log(`Facing Harassment: ${harassment}`);
  console.log(`Problems: ${problems}`);

  // Simulate a slight delay to show the loading state on the frontend
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Enquiry received successfully.' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
