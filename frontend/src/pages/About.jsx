import React, { useEffect } from 'react';
import { Target, Award, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      {/* Header Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="section-title animate-fade-in-up" style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }}>
            About <span className="text-accent">Us</span>
          </h1>
          <p className="section-subtitle animate-fade-in-up delay-100" style={{ color: '#E2E8F0', margin: '0 auto' }}>
            Dedicated to protecting your financial future and legal rights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div className="animate-fade-in-left">
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                Prime Loan Settlement is India’s leading financial dispute resolution company. We are a team of expert financial consultants and legal professionals dedicated to helping individuals and families overcome the stress of loan defaults.
              </p>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                We believe that no one should live under the constant pressure of financial distress or be subjected to unethical recovery practices. Our mission is to provide you with a legally sound, strategic path to becoming debt-free.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: '500' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <Target size={24} />
                  </div>
                  Strategic Debt Settlement
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: '500' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <Award size={24} />
                  </div>
                  Expert Legal Shielding
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: '500' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                    <Users size={24} />
                  </div>
                  Dedicated Support Team
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200" style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business professionals in a meeting" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
