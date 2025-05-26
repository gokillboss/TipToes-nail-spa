import React from 'react';
import ServiceCard from './ServiceCard';
// import '../../styles/ServiceCategory.css'; // Uncomment nếu bạn có CSS riêng

const ServiceCategory = ({ title, services }) => {
  return (
    <section className="service-category mb-5">
      <div className="text-center mb-4">
        <h2 className="section-title">{title}</h2>
        <hr className="section-divider" />
      </div>
      
      <ul className="services-list list-unstyled">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceCategory;
