import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/SpecialOffers.css';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Manicure & Pedicure Combo',
      description: 'Comprehensive care package for hands and feet at a special price',
      oldPrice: '$80',
      newPrice: '$65',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      id: 2,
      title: 'Premium Gel Polish Package',
      description: 'Long-lasting gel polish with simple art on 2 nails',
      oldPrice: '$50',
      newPrice: '$40',
      image: 'https://via.placeholder.com/400x300'
    }
  ];

  return (
    <section className="section offers-section">
      <Container>
        <h2 className="section-title">Special Offers</h2>
        <Row>
          {offers.map(offer => (
            <Col key={offer.id} md={6} className="mb-4">
              <Card className="offer-card">
                <Card.Img variant="top" src={offer.image} alt={offer.title} className="offer-img" />
                <Card.Body className="offer-content">
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.description}</Card.Text>
                  <div className="offer-price">
                    <div>
                      <del>{offer.oldPrice}</del>
                      <span className="price">{offer.newPrice}</span>
                    </div>
                    <Link to="/booking">
                      <Button className="btn-primary">Book Now</Button>
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

export default SpecialOffers;