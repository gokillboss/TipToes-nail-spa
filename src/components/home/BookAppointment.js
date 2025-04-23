import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/BookAppointment.css';

const BookAppointment = () => {
  return (
    <section className="section book-section py-5">
      <Container className="text-center">
        <h2 className="section-title">Book Your Appointment Now</h2>
        <p className="mb-4">Experience our premium nail care services at Tip Toes today</p>
        <Link to="/booking">
          <Button variant="primary" size="lg" className="px-4 py-2">Book Appointment</Button>
        </Link>
      </Container>
    </section>
  );
};

export default BookAppointment;