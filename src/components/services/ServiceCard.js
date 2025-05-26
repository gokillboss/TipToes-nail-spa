import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { title, duration, description, features, price, image } = service;

  // Nếu image là tên file (ví dụ: 'manicure.png'), load từ assets
  const imageSrc = require(`../../assets/services/${image}`);

  return (
    <li className="service-item">
      <Row>
        <Col md={4}>
          <img src={imageSrc} alt={title} className="service-img" />
        </Col>
        <Col md={8}>
          <div className="service-info">
            <h3 className="service-title">{title}</h3>
            <div className="service-time">⏱ Duration: {duration}</div>
            <p className="service-description">{description}</p>
            <div className="service-features">
              {features.map((feature, index) => (
                <div key={index} className="service-feature">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="service-details">
              <div className="service-price">{price}</div>
              <Link to="/booking">
                <Button className="btn-book">Book Now</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default ServiceCard;
