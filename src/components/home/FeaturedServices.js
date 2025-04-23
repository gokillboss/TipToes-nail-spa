import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/FeaturedServices.css';

// Import images from assets folder
import basicManicureImg from '../../assets/services/basic-manicure.jpg';
import gelPolishImg from '../../assets/services/gel-polish.jpg';
import acrylicNailsImg from '../../assets/services/acrylic-nails.jpg';
import nailArtImg from '../../assets/services/nail-art.jpg';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: 'Basic Manicure',
      description: 'Nail hygiene and care using premium products',
      image: basicManicureImg
    },
    {
      id: 2,
      title: 'Gel Polish',
      description: 'Long-lasting, glossy finish with a variety of trendy colors',
      image: gelPolishImg
    },
    {
      id: 3,
      title: 'Acrylic Nails',
      description: 'Perfect nail shaping with professional acrylic technique',
      image: acrylicNailsImg
    },
    {
      id: 4,
      title: 'Nail Art',
      description: 'Artistic designs and delicate works on your nails',
      image: nailArtImg
    }
  ];

  return (
    <section className="section featured-services py-5">
      <Container>
        <h2 className="section-title mb-5">Featured Services</h2>
        <Row>
          {services.map(service => (
            <Col key={service.id} md={3} sm={6} className="mb-4">
              <Card className="service-card h-100 shadow-sm">
                <Card.Img variant="top" src={service.image} alt={service.title} className="service-img" />
                <Card.Body className="service-content d-flex flex-column">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <div className="mt-auto pt-3">
                    <Link to={`/services#${service.id}`}>
                      <Button variant="outline-primary" size="sm">Learn More</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedServices;