import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/PackageCard.css';

const PackageCard = ({ package: pkg }) => {
  return (
    <Card className="package-card">
      <Card.Header className="package-header">
        <h3>{pkg.title}</h3>
        <div className="package-price">
          <del>{pkg.oldPrice}</del>
          <span>{pkg.newPrice}</span>
        </div>
      </Card.Header>
      <Card.Body className="package-content">
        <ul className="package-features">
          {pkg.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to="/booking">
          <Button className="btn btn-primary w-100">Book Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;