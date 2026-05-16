import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import './CreditCardIssue.css';

const CreditCardIssue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="credit-card-issue-page">
      {/* Hero Section */}
      <section className="cci-hero animate-fade-in-up">
        <h1 className="cci-hero-title">Credit Card Settlement</h1>
        <div className="cci-breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>Credit Card Issue</span>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="cci-content-section">
        <div className="container">
          
          {/* Block 1 */}
          <div className="cci-block">
            <div className="cci-text-content animate-fade-in-left">
              <h2>The Burden of Credit Card Debt</h2>
              <p>
                Credit card debt can accumulate quickly due to exorbitant interest rates, hidden fees, and compounding penalties. What starts as a small outstanding balance can rapidly spiral out of control, leaving individuals and families trapped in a seemingly endless cycle of debt.
              </p>
              <p>
                When minimum payments are barely enough to cover the interest, it becomes nearly impossible to make a dent in the principal amount. Our experts step in to break this cycle and provide a structured, legally sound path to becoming debt-free.
              </p>
              <ul>
                <li><CheckCircle2 size={20} className="cci-icon" /> Analyze your total outstanding debt and interest accumulation.</li>
                <li><CheckCircle2 size={20} className="cci-icon" /> Stop compounding penalty charges from the bank.</li>
                <li><CheckCircle2 size={20} className="cci-icon" /> Prevent aggressive collection calls and harassment.</li>
              </ul>
            </div>
            <div className="cci-image-content animate-fade-in-right">
              <img src="/credit_card_relief.png" alt="Breaking free from credit card debt" />
            </div>
          </div>

          {/* Block 2 (Reverse layout) */}
          <div className="cci-block reverse">
            <div className="cci-text-content animate-fade-in-right">
              <h2>Expert Negotiation & Settlement</h2>
              <p>
                You don't have to face the banks alone. Our team of financial consultants and legal experts negotiate directly with your credit card issuers on your behalf. We leverage our legal expertise to waive off unfair charges, exorbitant late fees, and penalties.
              </p>
              <p>
                Our ultimate goal is to reach a settlement agreement that significantly reduces your total payable amount to something you can realistically afford—often saving you up to 80% on your outstanding dues without the stress of direct confrontation.
              </p>
              <ul>
                <li><ShieldCheck size={20} className="cci-icon" /> Direct communication and negotiation with banks.</li>
                <li><ShieldCheck size={20} className="cci-icon" /> Legal shielding from recovery agents.</li>
                <li><ShieldCheck size={20} className="cci-icon" /> Structured settlement plans tailored to your financial capacity.</li>
              </ul>
            </div>
            <div className="cci-image-content animate-fade-in-left">
              <img src="/financial_consultation.png" alt="Financial experts negotiating a settlement" />
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cci-cta-banner animate-fade-in-up">
        <div className="container">
          <h2 className="cci-cta-title">Ready to become debt-free?</h2>
          <p className="cci-cta-subtitle">
            Don't let credit card debt dictate your life. Speak to our experts today to formulate a strategic exit plan.
          </p>
          <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', display: 'inline-flex', alignItems: 'center' }}>
            Get Free Consultation <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CreditCardIssue;
