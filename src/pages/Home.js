import React from 'react';
import HeroBanner from '../components/home/HeroBaner';
import FeaturedServices from '../components/home/FeaturedServices';
import OurSpace from '../components/home/OurSpace';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SpecialOffers from '../components/home/SpecialOffers';
import BookAppointment from '../components/home/BookAppointment';
import Testimonials from '../components/home/Testimonials';
//import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <FeaturedServices />
      <OurSpace />
      <WhyChooseUs />
      <SpecialOffers />
      <BookAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;