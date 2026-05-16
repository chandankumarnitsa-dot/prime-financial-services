import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Landmark, Briefcase, ShieldAlert } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: CreditCard,
      title: "Credit Card Settlement",
      description: "Resolve pending credit card dues with our expert negotiation. We help you achieve a settlement amount you can afford without harassment.",
      delay: "delay-100"
    },
    {
      icon: Landmark,
      title: "Personal Loan Settlement",
      description: "Struggling with personal loan EMIs? Our legal team structures a feasible exit plan to settle your unsecured personal loans.",
      delay: "delay-200"
    },
    {
      icon: Briefcase,
      title: "Business Loan Issues",
      description: "Protect your business assets and operations. We provide legal shielding and strategic resolution for defaulted business loans.",
      delay: "delay-300"
    },
    {
      icon: ShieldAlert,
      title: "Anti-Harassment Services",
      description: "Stop illegal recovery agent harassment instantly. Our legal notices and direct bank communications ensure your peace of mind.",
      delay: "delay-400"
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      
      {/* About Overview Section */}
      <section className="section section-bg-white" style={{ paddingBottom: '2rem' }}>
        <div className="container text-center">
          <h2 className="section-title animate-fade-in-up">Our Specialisation</h2>
          <p className="section-subtitle animate-fade-in-up delay-100">
            We specialize in providing legal and strategic solutions to help you overcome financial distress and handle aggressive recovery tactics.
          </p>
          
          <div className="grid grid-cols-2 grid-cols-4" style={{ marginTop: '3rem' }}>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title animate-fade-in-up">Client Reviews</h2>
            <p className="section-subtitle animate-fade-in-up delay-100">
              Don't just take our word for it. Here is what our clients have to say about their journey to financial freedom with Prime Financial Services.
            </p>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section section-bg-white" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-bg-white)', fontFamily: 'var(--font-serif)' }}>
            Prime Financial Experts Are Here to Help You.
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', color: '#A0AEC0', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            Get Free From Debt Trap, Aggressive Recovery, and Legal Complications. Contact us today for a free consultation.
          </p>
          <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
