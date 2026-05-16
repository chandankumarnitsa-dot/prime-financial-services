import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldAlert, FileText, Phone, Mail } from 'lucide-react';
import './LegalSupport.css';

const LegalSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-support-page">
      {/* Hero Section */}
      <section className="ls-hero animate-fade-in-up">
        <h1 className="ls-hero-title">Legal Support & Shielding</h1>
        <div className="ls-breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>Legal Support</span>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="ls-content-section">
        <div className="container">
          
          <div className="ls-block">
            {/* Left Content */}
            <div className="ls-text-content animate-fade-in-left">
              <h2>Defending Your Financial Rights</h2>
              <p>
                When dealing with outstanding debt, banks and financial institutions often resort to sending legal notices or threatening court action. You don't have to face this alone.
              </p>
              <p>
                At Prime Financial Services, our empaneled legal experts specialize in financial disputes. We provide an impenetrable legal shield to protect your rights, ensuring you are never unfairly targeted or harassed by aggressive collection tactics.
              </p>
              
              <ul>
                <li>
                  <FileText size={24} className="ls-icon" />
                  <div>
                    <strong>Legal Notice Response</strong>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '4px' }}>Expert replies to arbitration notices and legal summons.</div>
                  </div>
                </li>
                <li>
                  <Scale size={24} className="ls-icon" />
                  <div>
                    <strong>Section 138 Representation</strong>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '4px' }}>Full legal defense against check bounce cases.</div>
                  </div>
                </li>
                <li>
                  <ShieldAlert size={24} className="ls-icon" />
                  <div>
                    <strong>Anti-Harassment Protection</strong>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '4px' }}>Filing strong counter-complaints against abusive recovery agents.</div>
                  </div>
                </li>
              </ul>

              {/* Dedicated Contact Block */}
              <div className="ls-contact-block animate-fade-in-up delay-200">
                <h3>Need Immediate Legal Help?</h3>
                <div className="ls-contact-item">
                  <div className="ls-contact-icon">
                    <Phone size={24} strokeWidth={2} />
                  </div>
                  <a href="tel:+919643623690">+91 9643623690</a>
                </div>
                <div className="ls-contact-item" style={{ marginTop: '1.25rem' }}>
                  <div className="ls-contact-icon">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <a href="mailto:contact@primefinancial.com">contact@primefinancial.com</a>
                </div>
              </div>

            </div>
            
            {/* Right Content */}
            <div className="ls-image-content animate-fade-in-right delay-100">
              <img src="/legal_support.png" alt="Legal professional reviewing documents" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LegalSupport;
