// components/common/BookBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BookBanner.css';

const BookBanner = () => {
  return (
    <section className="book-banner">
      <div className="container">
        <h2>Book Your Appointment Today</h2>
        <p>Experience professional nail care services at Luxe Nails</p>
        <Link to="/booking" className="btn btn-primary">Book Now</Link>
      </div>
    </section>
  );
};

export default BookBanner;