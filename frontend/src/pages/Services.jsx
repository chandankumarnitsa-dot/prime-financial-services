import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceBlocks = [
    {
      title: "Credit Card Issues",
      image: "/service_credit_card.png",
      link: "/credit-card-issue",
      delay: "delay-100"
    },
    {
      title: "Personal Loan Issues",
      image: "/service_personal_loan.png",
      link: "/contact-us", // Can route to a dedicated page if built later, currently routes to contact
      delay: "delay-200"
    },
    {
      title: "Business Loan Issues",
      image: "/service_business_loan.png",
      link: "/contact-us", 
      delay: "delay-300"
    },
    {
      title: "Anti-Harassment Services",
      image: "/service_anti_harassment.png",
      link: "/contact-us", 
      delay: "delay-400"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero animate-fade-in-up">
        <h1 className="services-hero-title">Services</h1>
        <div className="services-breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>Services</span>
        </div>
      </section>

      {/* Specialisation Grid Section */}
      <section className="services-specialisation-section">
        <div className="container">
          <h2 className="services-section-title animate-fade-in-up">
            <span>Our</span> Specialisation
          </h2>
          
          <div className="services-grid">
            {serviceBlocks.map((block, index) => (
              <Link to={block.link} key={index} className={`service-block animate-fade-in-up ${block.delay}`}>
                <div className="service-image-container">
                  <img src={block.image} alt={block.title} />
                </div>
                <h3 className="service-block-title">{block.title}</h3>
                <div className="service-block-line"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="services-cta-banner animate-fade-in-up delay-200">
        <div className="container">
          <h2 className="services-cta-title">You Can Save Upto 80% On Your Loan Amount</h2>
          <p className="services-cta-subtitle">Any questions? Contact Us!</p>
          <Link to="/contact-us" className="services-cta-button">
            Contact us <ChevronRight size={18} style={{ marginLeft: '4px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
