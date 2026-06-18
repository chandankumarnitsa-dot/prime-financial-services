import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Credit Card Issue', path: '/credit-card-issue' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Prime Loan Settlement Logo" style={{ height: '42px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }} />
          <span className="logo-text" style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--color-primary)' }}>Prime Loan <span className="logo-accent" style={{ color: 'var(--color-accent)' }}>Settlement</span></span>
        </Link>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact-us" className="btn btn-primary nav-cta">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Quick Enquiry
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
