import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/PageHeader.css';

// Import background image
import headerBgImage from '../../assets/images/header-background.jpg';

const PageHeader = ({ title, description }) => {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${headerBgImage})` }}>
      <div className="page-header-overlay"></div>
      <Container className="position-relative">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="header-content">
              <h1 className="mb-3 fw-bold">{title}</h1>
              <div className="header-divider"></div>
              <p className="lead mb-4">{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeader;