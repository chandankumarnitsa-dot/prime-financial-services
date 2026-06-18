import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingDown, ShieldAlert, FileText, CheckCircle, ArrowRight, Building } from 'lucide-react';
import './BusinessLoanIssues.css';

const BusinessLoanIssues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container business-loan-page">
      {/* Hero Section */}
      <section className="hero-section business-hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Business Loan Disputes & MSME Debt Resolution</h1>
            <p className="hero-subtitle">
              Protect your business assets, negotiate settlements, and restructure corporate debt with India's leading financial legal experts.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact-us" className="btn btn-primary">Get Legal Protection <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="container trust-banner-content">
          <div className="trust-item">
            <Building size={32} className="trust-icon" />
            <div>
              <h3>MSME Focus</h3>
              <p>Specialized in small & medium enterprise debt</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldAlert size={32} className="trust-icon" />
            <div>
              <h3>Asset Protection</h3>
              <p>Legal shields against property attachment</p>
            </div>
          </div>
          <div className="trust-item">
            <TrendingDown size={32} className="trust-icon" />
            <div>
              <h3>Debt Restructuring</h3>
              <p>Negotiate affordable EMI structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="problems-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Common Business Loan Challenges We Resolve</h2>
            <p className="section-description">
              Running a business is hard enough without the constant pressure of mounting debt and aggressive recovery tactics.
            </p>
          </div>
          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <Briefcase size={28} />
              </div>
              <h3 className="problem-title">Working Capital Deficits</h3>
              <p className="problem-text">High EMIs draining your cash flow, leaving no money to run daily operations or pay employees.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <ShieldAlert size={28} />
              </div>
              <h3 className="problem-title">NPA Declaration Threats</h3>
              <p className="problem-text">Banks threatening to declare your account as a Non-Performing Asset (NPA) and initiate SARFAESI proceedings.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <FileText size={28} />
              </div>
              <h3 className="problem-title">Secured Asset Risks</h3>
              <p className="problem-text">Fear of losing commercial property, machinery, or personal homes kept as collateral against business loans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="solutions-section section-padding bg-light">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2 className="section-title">Our Corporate Debt Resolution Strategy</h2>
              <p className="section-description" style={{ marginBottom: '2rem' }}>
                We don't just ask for more time; we legally intervene to force banks to the negotiation table. Our corporate legal team ensures your business survives the financial turbulence.
              </p>
              
              <div className="solution-list">
                <div className="solution-item">
                  <CheckCircle size={24} className="check-icon" />
                  <div>
                    <h4>One-Time Settlement (OTS)</h4>
                    <p>We analyze your financials and negotiate aggressively with banks to settle your outstanding business loans at a fraction of the total cost.</p>
                  </div>
                </div>
                <div className="solution-item">
                  <CheckCircle size={24} className="check-icon" />
                  <div>
                    <h4>Restructuring & Moratoriums</h4>
                    <p>We formally petition for loan restructuring, lowering interest rates and extending the tenure to reduce your monthly EMI burden.</p>
                  </div>
                </div>
                <div className="solution-item">
                  <CheckCircle size={24} className="check-icon" />
                  <div>
                    <h4>Legal Shielding (SARFAESI & DRT)</h4>
                    <p>If the bank initiates legal action under the SARFAESI Act, our expert lawyers represent you in the Debt Recovery Tribunal (DRT) to protect your assets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="solutions-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business executives discussing financial resolution" 
                className="solutions-image"
              />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of Corporate Legal Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container cta-container">
          <h2 className="cta-title">Don't Let Debt Close Your Business.</h2>
          <p className="cta-description">
            Speak to our corporate debt resolution experts today for a confidential, no-obligation consultation.
          </p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary btn-large">Schedule Free Consultation</Link>
            <a href="tel:+919643623690" className="btn btn-outline-light btn-large">Call Now: +91 9643623690</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoanIssues;
