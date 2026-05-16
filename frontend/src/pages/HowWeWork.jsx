import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, FileEdit, Mic, Banknote, ThumbsUp, Smile, ChevronRight } from 'lucide-react';
import './HowWeWork.css';

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <UserCheck size={48} strokeWidth={2} />,
      title: 'Check Eligibility',
      delay: 'delay-100'
    },
    {
      icon: <FileEdit size={48} strokeWidth={2} />,
      title: 'Enroll',
      delay: 'delay-200'
    },
    {
      icon: <Mic size={48} strokeWidth={2} />,
      title: 'Talk To Our Experts',
      delay: 'delay-300'
    },
    {
      icon: <Banknote size={48} strokeWidth={2} />,
      title: 'Save Money',
      delay: 'delay-400'
    },
    {
      icon: <ThumbsUp size={48} strokeWidth={2} />,
      title: 'Loan Resolved',
      delay: 'delay-500'
    },
    {
      icon: <Smile size={48} strokeWidth={2} />,
      title: 'Become Loan Free',
      delay: 'delay-600'
    }
  ];

  return (
    <div className="how-we-work-page">
      {/* Hero Section */}
      <section className="hww-hero animate-fade-in-up">
        <h1 className="hww-hero-title">How We Work</h1>
        <div className="hww-breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>How We Work</span>
        </div>
      </section>

      {/* Process Section */}
      <section className="hww-process-section">
        <div className="container">
          <h2 className="hww-section-title animate-fade-in-up">
            <span>How We</span> Work
          </h2>
          
          <div className="hww-grid">
            {steps.map((step, index) => (
              <div key={index} className={`hww-step animate-fade-in-up ${step.delay}`}>
                <div className="hww-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="hww-step-title">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="hww-cta-banner animate-fade-in-up">
        <div className="container">
          <h2 className="hww-cta-title">You Can Save Upto 80% On Your Loan Amount</h2>
          <p className="hww-cta-subtitle">Any questions? Contact Us!</p>
          <Link to="/contact-us" className="hww-cta-button">
            Contact us <ChevronRight size={18} style={{ marginLeft: '4px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
