import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Prime Financial Services Logo" style={{ height: '40px' }} />
            <span className="logo-text" style={{ fontSize: '1.25rem' }}>Prime Financial <span className="logo-accent">Services</span></span>
          </Link>
          <p className="footer-about">
            India's Leading Financial Dispute Resolution Company. We help individuals and families resolve loan disputes and protect their legal rights.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram"><FaInstagram size={20} /></a>
            <a href="#" className="social-link" title="YouTube"><FaYoutube size={20} /></a>
            <a href="#" className="social-link" title="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="#" className="social-link" title="Twitter"><FaTwitter size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/how-we-work">How We Work</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/credit-card-issue">Credit Card Issues</Link></li>
            <li><Link to="/services">Personal Loan Issues</Link></li>
            <li><Link to="/business-loan-issues">Business Loan Issues</Link></li>
            <li><Link to="/anti-harassment">Anti-Harassment</Link></li>
            <li><Link to="/legal-support">Legal Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+919643623690">+91 9643623690</a>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:contact@primefinancial.com">contact@primefinancial.com</a>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Prime Financial Services. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
