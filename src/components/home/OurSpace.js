import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/OurSpace.css';

// Import salon space images
import salonImage1 from '../../assets/images/salon-interior-1.jpg';
import salonImage2 from '../../assets/images/salon-interior-2.jpg';
import salonImage3 from '../../assets/images/salon-interior-3.jpg';

const OurSpace = () => {
  return (
    <section className="section space-section">
      <Container>
        <h2 className="section-title">Our Space</h2>
        <Row className="gallery-grid">
          <Col md={4} sm={6} className="gallery-item mb-4">
            <img src={salonImage1} alt="Tip Toes salon reception area" className="gallery-img" />
          </Col>
          <Col md={4} sm={6} className="gallery-item mb-4">
            <img src={salonImage2} alt="Tip Toes manicure stations" className="gallery-img" />
          </Col>
          <Col md={4} sm={6} className="gallery-item mb-4">
            <img src={salonImage3} alt="Tip Toes pedicure area" className="gallery-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurSpace;