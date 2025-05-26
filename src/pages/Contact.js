import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/layout/PageHeader';
import '../styles/Contact.css';

// Import images
import mapImage from '../assets/images/salon-location-map.jpg';
import salonFrontImg from '../assets/images/salon-front-exterior.jpg';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! We will get back to you soon.');
    }

    setValidated(true);
  };

  return (
    <div className="contact-page">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with Tip Toes - we'd love to hear from you!"
      />
      
      {/* Contact Info & Form Section */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="contact-info">
                <h2 className="mb-4">Get In Touch</h2>
                
                <Card className="contact-card mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h5 className="mb-1">Visit Us</h5>
                      <p className="mb-0">123 Main Street, Downtown<br />New York, NY 10001</p>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="contact-card mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h5 className="mb-1">Call Us</h5>
                      <p className="mb-0">(212) 555-1234</p>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="contact-card mb-4">
                  <Card.Body className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h5 className="mb-1">Email Us</h5>
                      <p className="mb-0">info@tiptoes.com</p>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="contact-card">
                  <Card.Body className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>
                      <h5 className="mb-2">Working Hours</h5>
                      <ul className="hours-list ps-0">
                        <li className="d-flex justify-content-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 9:00 PM</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Saturday:</span>
                          <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Sunday:</span>
                          <span>10:00 AM - 6:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            
            <Col lg={7}>
              <div className="contact-form-container p-4 p-lg-5 bg-white shadow-sm rounded">
                <h2 className="mb-4">Send Us a Message</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="contactSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a subject.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="px-4 py-2">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="mb-4">Find Us</h2>
              <p>
                Tip Toes is conveniently located in downtown New York. We're easily accessible 
                by public transportation and have street parking available. Our salon is designed 
                to be a welcoming oasis in the middle of the bustling city.
              </p>
              <p>
                We're situated close to major shopping areas and restaurants, making it easy to 
                include a visit to Tip Toes as part of your day out. Look for our elegant storefront 
                with the signature Tip Toes logo.
              </p>
              <div className="mt-4">
                <img src={salonFrontImg} alt="Tip Toes salon exterior" className="img-fluid rounded shadow" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="map-container rounded shadow overflow-hidden">
                <img src={mapImage} alt="Map to Tip Toes salon" className="img-fluid" />
                {/* For actual implementation, replace with Google Maps embed */}
                {/*
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d.... YOUR_GOOGLE_MAPS_EMBED_CODE" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="section">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5>Do I need to make an appointment?</h5>
                  <p className="mb-0">
                    While we do accept walk-ins when possible, we strongly recommend booking an appointment 
                    to ensure we can accommodate you at your preferred time. You can book online or call us 
                    directly.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5>What if I need to cancel or reschedule?</h5>
                  <p className="mb-0">
                    We understand plans change. We appreciate at least 24 hours' notice for cancellations 
                    or rescheduling. For cancellations with less notice, a small fee may apply.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5>Do you offer gift cards?</h5>
                  <p className="mb-0">
                    Yes! Gift cards are available for purchase in-store or online. They make perfect gifts 
                    for birthdays, holidays, or any special occasion.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5>What safety measures do you have in place?</h5>
                  <p className="mb-0">
                    Your safety is our priority. We follow strict sanitization protocols, use hospital-grade 
                    disinfectants, and sterilize all tools. Our staff regularly undergoes training on the latest 
                    health and safety practices.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;