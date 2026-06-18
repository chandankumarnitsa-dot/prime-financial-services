import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, delay, link = "/services" }) => {
  return (
    <div className={`service-card animate-fade-in-up ${delay}`}>
      <div className="service-icon-wrapper">
        <Icon size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <Link to={link} className="service-link">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
