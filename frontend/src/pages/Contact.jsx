import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    income: '',
    personalLoan: '',
    creditCard: '',
    language: '',
    harassment: '',
    problems: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Determine the API URL dynamically
      let apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.match(/^192\.168\.|^172\.1[6-9]\.|^10\./);
        apiUrl = isLocal ? `http://${window.location.hostname}:5000/api/contact` : '/_/backend/api/contact';
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', email: '', phone: '', city: '', income: '',
          personalLoan: '', creditCard: '', language: '', harassment: '', problems: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero animate-fade-in-up">
        <h1 className="contact-hero-title">Contact Us</h1>
        <div className="contact-breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>Contact Us</span>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="contact-layout">

          {/* Left Column - Form Card */}
          <div className="contact-form-wrapper animate-fade-in-up delay-100">
            <div className="contact-form-header">
              <h2>Send us a message</h2>
              <h3>Quick Enquiry</h3>
            </div>

            {status === 'success' ? (
              <div style={{ padding: '2rem', backgroundColor: '#ECFDF5', color: '#065F46', borderRadius: '4px', textAlign: 'center', border: '1px solid #10B981' }}>
                <p style={{ fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Thank you!</p>
                <p>Your enquiry has been submitted. Our experts will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="custom-form-group">
                  <input type="text" name="name" className="custom-input" placeholder="Your Name*" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="custom-form-group">
                  <input type="email" name="email" className="custom-input" placeholder="Your Email*" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="custom-form-group">
                  <input type="tel" name="phone" className="custom-input" placeholder="Phone No.*" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="custom-form-group">
                  <input type="text" name="city" className="custom-input" placeholder="Your City" value={formData.city} onChange={handleChange} />
                </div>

                <div className="custom-form-group">
                  <select name="income" className="custom-select" value={formData.income} onChange={handleChange}>
                    <option value="" disabled hidden>Monthly Income</option>
                    <option value="Below 25k">Below 25k</option>
                    <option value="25k - 50k">25k - 50k</option>
                    <option value="50k - 1 Lakh">50k - 1 Lakh</option>
                    <option value="Above 1 Lakh">Above 1 Lakh</option>
                  </select>
                </div>

                <div className="custom-form-group">
                  <select name="personalLoan" className="custom-select" value={formData.personalLoan} onChange={handleChange}>
                    <option value="" disabled hidden>Personal Loan Dues</option>
                    <option value="Less than 1 Lakh">Less than 1 Lakh</option>
                    <option value="1 - 5 Lakhs">1 - 5 Lakhs</option>
                    <option value="More than 5 Lakhs">More than 5 Lakhs</option>
                    <option value="None">None</option>
                  </select>
                </div>

                <div className="custom-form-group">
                  <select name="creditCard" className="custom-select" value={formData.creditCard} onChange={handleChange}>
                    <option value="" disabled hidden>Credit Card Dues</option>
                    <option value="Less than 50k">Less than 50k</option>
                    <option value="50k - 2 Lakhs">50k - 2 Lakhs</option>
                    <option value="More than 2 Lakhs">More than 2 Lakhs</option>
                    <option value="None">None</option>
                  </select>
                </div>

                <div className="custom-form-group">
                  <select name="language" className="custom-select" value={formData.language} onChange={handleChange}>
                    <option value="" disabled hidden>Preferred Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="custom-form-group">
                  <select name="harassment" className="custom-select" value={formData.harassment} onChange={handleChange}>
                    <option value="" disabled hidden>Are You Facing Harassment</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="custom-form-group">
                  <textarea name="problems" className="custom-textarea" placeholder="Describe Your Problems" value={formData.problems} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Submitting...' : 'Submit'}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#DC2626', marginTop: '1rem', fontWeight: '500' }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="contact-info-wrapper animate-fade-in-left delay-200">
            <h2 className="contact-info-title">Contact Info</h2>

            <div className="info-block">
              <div className="info-icon-wrapper">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <div className="info-content">
                <h4>Address</h4>
                <p>RAMESH NAGAR, DELHI- 110015</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon-wrapper">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <div className="info-content">
                <h4>Contact us</h4>
                <a href="mailto:contact@primeloansettlement.com">contact@primeloansettlement.com</a>
                <a href="tel:+919643623690">+91 9643623690</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
