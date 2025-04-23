import React from 'react';
import ServiceCard from './ServiceCard';
//import '../../styles/ServiceCategory.css';

const ServiceCategory = ({ title, services }) => {
  return (
    <div className="service-category">
      <h2 className="section-title">{title}</h2>
      <ul className="services-list">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategory