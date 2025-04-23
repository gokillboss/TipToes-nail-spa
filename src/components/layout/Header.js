// components/layout/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

// Import logo image
import logoImage from '../../assets/logo/tiptoes-logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="header" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          <img 
            src={logoImage} 
            alt="Tip Toes Logo" 
            height="40" 
            className="d-inline-block align-top me-2"
          />
          TIP TOES
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link as={Link} to="/pricing" onClick={() => setExpanded(false)}>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={() => setExpanded(false)}>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;