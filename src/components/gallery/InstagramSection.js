import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/InstagramSection.css';

const InstagramSection = () => {
  const instagramPosts = [
    { id: 1, image: 'https://via.placeholder.com/400x400' },
    { id: 2, image: 'https://via.placeholder.com/400x400' },
    { id: 3, image: 'https://via.placeholder.com/400x400' },
    { id: 4, image: 'https://via.placeholder.com/400x400' },
    { id: 5, image: 'https://via.placeholder.com/400x400' },
    { id: 6, image: 'https://via.placeholder.com/400x400' }
  ];

  return (
    <section className="instagram-section">
      <Container>
        <h2 className="instagram-title">Follow Us on Instagram</h2>
        <Row className="instagram-grid">
          {instagramPosts.map(post => (
            <Col key={post.id} md={2} sm={4} xs={6} className="instagram-item mb-3">
              <img src={post.image} alt="Instagram post" className="instagram-img" />
            </Col>
          ))}
        </Row>
        <a href="#" className="instagram-link">
          <span className="instagram-icon">📷</span>
          @tiptoesnails
        </a>
      </Container>
    </section>
  );
};

export default InstagramSection;