import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <ShieldCheck size={20} className="badge-icon" />
            <span>India's Leading Financial Dispute Resolution Company</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up delay-100">
            Welcome To <span className="text-accent">Prime Financial Services</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up delay-200">
            We are a debt relief consultancy firm dedicated to helping individuals and families resolve their loan disputes, and protect their legal rights from unethical harassment by banks, NBFCs, and recovery agents.
          </p>
          
          <div className="hero-actions animate-fade-in-up delay-300">
            <Link to="/about-us" className="btn btn-primary hero-btn">
              Read More
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/contact-us" className="btn btn-outline hero-btn-outline">
              Consult Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
