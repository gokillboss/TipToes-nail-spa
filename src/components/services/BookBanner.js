import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/BookBanner.css';

const BookBanner = () => {
  return (
    <section className="book-banner">
      <Container>
        <h2>Book Your Appointment Today</h2>
        <p>Experience professional nail care services at Luxe Nails</p>
        <Link to="/booking">
          <Button className="btn-primary">Book Now</Button>
        </Link>
      </Container>
    </section>
  );
};

export default BookBanner;