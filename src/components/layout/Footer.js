import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

// Import logo image
import logoImage from '../../assets/logo/tiptoes-logo-white.png';
import mapImage from '../../assets/images/map-location.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-grid">
          <Col md={3} sm={6} className="footer-col">
            <h3>About Tip Toes</h3>
            <p>
              Tip Toes is a premium nail salon, offering professional and relaxing nail care experiences 
              with a team of skilled technicians and top-quality products.
            </p>
            <ul className="social-icons">
              <li><a href="#"><span>FB</span></a></li>
              <li><a href="#"><span>IG</span></a></li>
              <li><a href="#"><span>TT</span></a></li>
              <li><a href="#"><span>YT</span></a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact">
              <i>📍</i> 123 Main Street, Downtown, New York
            </div>
            <div className="footer-contact">
              <i>📞</i> (212) 555-1234
            </div>
            <div className="footer-contact">
              <i>✉️</i> info@tiptoes.com
            </div>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h3>Working Hours</h3>
            <ul className="working-hours">
              <li>
                <span>Monday - Friday</span>
                <span>9:00 - 21:00</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h3>Map</h3>
            <div className="map">
              <img src={mapImage} alt="Map location" />
            </div>
          </Col>
        </Row>
        <div className="copyright">
          &copy; 2025 Tip Toes. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;