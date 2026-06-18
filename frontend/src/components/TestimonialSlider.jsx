import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    text: "Prime Loan Settlement Experts, thank you so much for your support and guidance in helping me overcome my financial difficulties. It is a huge relief for me to finally close all my loans and credit cards. Without your constant support, negotiating settlements aligned with my financial capacity would not have been possible.",
    author: "Sumit Gagneja",
    location: "Bangalore"
  },
  {
    id: 2,
    text: "I had a great experience with the Prime Loan Settlement Team. Their responses and actions taken till now for my case have been very valuable for me. I would highly recommend their services to everyone in need of reliable legal assistance.",
    author: "Kushal Gupta",
    location: "Delhi"
  },
  {
    id: 3,
    text: "Thank you to the Prime Loan Settlement Team for your timely support during my financial crisis. Your guidance and intervention helped stop the harassment from the bank’s collection agents and gave me the clarity and relief I needed.",
    author: "B.V. Neeraj",
    location: "Tamil Nadu"
  },
  {
    id: 4,
    text: "I want to express my sincere gratitude for your exceptional support in helping me resolve my personal loan and credit card outstanding issues. Your guidance, professionalism, and deep understanding of the legal and financial process made a stressful situation much easier to handle.",
    author: "Abhi Nagpal",
    location: "Maharashtra"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimonial-slider-container animate-fade-in-up">
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <Quote size={48} className="quote-icon" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author-info">
              <h5 className="testimonial-author">{testimonial.author}</h5>
              <span className="testimonial-location">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
