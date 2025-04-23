import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '👩‍🔧',
      title: 'Professional Technicians',
      description: 'Highly skilled team with extensive experience and professional training'
    },
    {
      id: 2,
      icon: '🧴',
      title: 'Premium Products',
      description: 'Only high-quality, safe, and environmentally friendly products'
    },
    {
      id: 3,
      icon: '🧼',
      title: 'Hygiene & Safety',
      description: 'Strict sanitation protocols ensuring absolute safety for customers'
    },
    {
      id: 4,
      icon: '🛋️',
      title: 'Relaxing Atmosphere',
      description: 'Elegant design and spacious environment for a comfortable experience'
    }
  ];

  return (
    <section className="section why-us-section">
      <Container>
        <h2 className="section-title">Why Choose Us?</h2>
        <Row>
          {reasons.map(reason => (
            <Col key={reason.id} md={3} sm={6} className="mb-4">
              <Card className="why-us-item">
                <Card.Body>
                  <div className="why-us-icon">{reason.icon}</div>
                  <Card.Title>{reason.title}</Card.Title>
                  <Card.Text>{reason.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;