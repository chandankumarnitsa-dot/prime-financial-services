import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileWarning, PhoneOff, Users, ArrowRight, BookOpen, AlertOctagon } from 'lucide-react';
import './AntiHarassment.css';

const AntiHarassment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container anti-harassment-page">
      {/* Hero Section */}
      <section className="hero-section harassment-hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Stop Recovery Agent Harassment Immediately</h1>
            <p className="hero-subtitle">
              You have legal rights. We enforce RBI guidelines to stop abusive calls, home visits, and public shaming by recovery agents within 24 hours.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact-us" className="btn btn-primary">Report Harassment Now <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rights Banner */}
      <section className="rights-banner">
        <div className="container rights-banner-content">
          <div className="rights-item">
            <BookOpen size={32} className="rights-icon" />
            <div>
              <h3>RBI Guidelines Enforced</h3>
              <p>Strict adherence to the Fair Practices Code</p>
            </div>
          </div>
          <div className="rights-item">
            <Shield size={32} className="rights-icon" />
            <div>
              <h3>Legal Shielding</h3>
              <p>We handle all bank communications</p>
            </div>
          </div>
          <div className="rights-item">
            <PhoneOff size={32} className="rights-icon" />
            <div>
              <h3>Stop Abuse</h3>
              <p>Immediate halt to threatening phone calls</p>
            </div>
          </div>
        </div>
      </section>

      {/* RBI Guidelines Section */}
      <section className="guidelines-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Know Your Rights as a Borrower</h2>
            <p className="section-description">
              The Reserve Bank of India (RBI) has strict guidelines against aggressive debt recovery. Recovery agents are legally bound by these rules.
            </p>
          </div>
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon-wrapper">
                <AlertOctagon size={28} />
              </div>
              <h3 className="guideline-title">No Verbal Abuse or Threats</h3>
              <p className="guideline-text">Agents cannot use abusive language, physical threats, or psychological intimidation under any circumstances.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon-wrapper">
                <PhoneOff size={28} />
              </div>
              <h3 className="guideline-title">Strict Contact Hours</h3>
              <p className="guideline-text">Recovery agents can only contact you between 8:00 AM and 7:00 PM. Calling at odd hours is a direct violation.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon-wrapper">
                <Users size={28} />
              </div>
              <h3 className="guideline-title">No Public Shaming</h3>
              <p className="guideline-text">Agents are forbidden from contacting your relatives, friends, or employers to publicly shame you into paying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Intervene Section */}
      <section className="intervention-section section-padding bg-light">
        <div className="container">
          <div className="intervention-content">
            <div className="intervention-text">
              <h2 className="section-title">Our 3-Step Legal Intervention</h2>
              <p className="section-description" style={{ marginBottom: '2rem' }}>
                We don't just give advice; we take active legal action to protect you and your family from harassment.
              </p>
              
              <div className="intervention-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-details">
                    <h4>Legal Notice to the Bank</h4>
                    <p>We draft and send a formal legal notice to the bank's grievance officer and nodal officer, citing RBI violations and demanding immediate suspension of the offending agency.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-details">
                    <h4>Cease & Desist Orders</h4>
                    <p>We issue strict Cease and Desist warnings directly to the recovery agencies, informing them that all future communication must be routed through our legal counsel.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-details">
                    <h4>Police Complaints & RBI Ombudsman</h4>
                    <p>If the harassment continues, we assist in filing formal FIRs against the agents for criminal intimidation and escalate the matter to the RBI Ombudsman.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intervention-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Legal protection and scales of justice" 
                className="intervention-image"
              />
              <div className="guarantee-badge">
                <Shield size={24} style={{ marginBottom: '5px' }}/>
                <span className="text">100% Confidentiality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center" style={{ backgroundColor: '#dc2626' }}>
        <div className="container cta-container">
          <h2 className="cta-title" style={{ color: 'white' }}>Are You Being Harassed Right Now?</h2>
          <p className="cta-description" style={{ color: '#fee2e2' }}>
            Do not suffer in silence. Contact us immediately and our legal team will take over the communication.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn" style={{ backgroundColor: 'white', color: '#dc2626', fontWeight: 'bold' }}>Get Help Now</Link>
            <a href="tel:+919643623690" className="btn btn-outline-light" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>Call Helpline: +91 9643623690</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiHarassment;
