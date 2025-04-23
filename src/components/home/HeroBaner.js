import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/HeroBanner.css';

// Import hero background image
import heroBgImage from '../../assets/images/hero-background.jpg';

const HeroBanner = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBgImage})` }}>
      <div className="hero-overlay"></div>
      <Container>
        <Row>
          <Col md={6} className="hero-content">
            <h1>Nurturing the Beauty of Your Hands</h1>
            <p>
              Experience premium nail care services with a relaxing atmosphere and 
              highly skilled technicians at Tip Toes.
            </p>
            <Link to="/booking">
              <Button variant="primary" size="lg" className="px-4">Book Now</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroBanner;