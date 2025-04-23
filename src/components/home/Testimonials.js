import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <Container>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-slider">
          <Card className="testimonial">
            <Card.Body>
              <div className="testimonial-text">
                <p>
                  I'm very satisfied with the service at Luxe Nails. The technicians are attentive, 
                  the atmosphere is relaxing, and the color collection is diverse. I'll definitely be back!
                </p>
              </div>
              <div className="testimonial-author">Jennifer Thompson</div>
              <div className="testimonial-role">Regular Customer</div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;