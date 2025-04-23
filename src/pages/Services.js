import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import ServiceCategory from '../components/services/ServiceCategory';
import BookBanner from '../components/common/BookBanner';
//import '../styles/Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'manicure', name: 'Manicure Services' },
    { id: 'pedicure', name: 'Pedicure Services' },
    { id: 'skincare', name: 'Hand & Foot Skincare' },
    { id: 'special', name: 'Special Services' }
  ];

  const manicureServices = [
    {
      id: 1,
      title: 'Basic Manicure',
      duration: '30-45 minutes',
      description: 'Basic nail care service including soaking, nail trimming, filing, cuticle care, hand conditioning, and regular polish.',
      features: [
        'Relaxing essential oil soak',
        'Customized nail shaping',
        'Premium safe polishes'
      ],
      price: '$25',
      image: 'https://via.placeholder.com/600x500'
    },
    {
      id: 2,
      title: 'Premium Gel Polish',
      duration: '60 minutes',
      description: 'Premium gel polish service provides a glossy, durable finish lasting 2-3 weeks. Includes basic nail care and gel application with trendy colors.',
      features: [
        'Premium safe gel polishes',
        'Color that lasts without chipping',
        'Quick dry with UV/LED lamp'
      ],
      price: '$35',
      image: 'https://via.placeholder.com/600x500'
    },
    {
      id: 3,
      title: 'Acrylic/Powder Dip',
      duration: '90-120 minutes',
      description: 'Acrylic/powder service creates perfectly shaped nails, extending natural nails and adding strength. Durable finish lasts 3-4 weeks.',
      features: [
        'Custom nail shaping',
        'Premium acrylic materials',
        'Strong, beautiful nails'
      ],
      price: '$45',
      image: 'https://via.placeholder.com/600x500'
    }
  ];

  const pedicureServices = [
    {
      id: 4,
      title: 'Basic Pedicure',
      duration: '45-60 minutes',
      description: 'Comprehensive foot care including relaxing soak, nail trimming, filing, cuticle care, callus removal, light foot massage, and polish.',
      features: [
        'Mineral salt relaxing foot soak',
        'Gentle foot massage',
        'Exfoliation and moisturizing'
      ],
      price: '$28',
      image: 'https://via.placeholder.com/600x500'
    },
    {
      id: 5,
      title: 'Spa Pedicure',
      duration: '75-90 minutes',
      description: 'Upgrade your foot care experience with our premium Spa Pedicure. Includes all basic pedicure steps plus a moisture mask, extended massage, and premium skin products.',
      features: [
        'Herbal and essential oil soak',
        'Deep moisture mask treatment',
        'Extended foot/calf massage (15 min)'
      ],
      price: '$38',
      image: 'https://via.placeholder.com/600x500'
    }
  ];

  const specialServices = [
    {
      id: 6,
      title: 'Nail Art',
      duration: '60-120 minutes (depending on complexity)',
      description: 'Artistic nail designs that transform your nails into miniature works of art. From simple patterns to complex designs, our technicians will bring your vision to life.',
      features: [
        'Custom designs on request',
        'Advanced art techniques',
        'Optional crystals and embellishments'
      ],
      price: '$15 - $50',
      image: 'https://via.placeholder.com/600x500'
    },
    {
      id: 7,
      title: 'Paraffin Spa Treatment',
      duration: '30 minutes (can be combined with other services)',
      description: 'Paraffin wax therapy softens skin, provides deep moisture, and improves circulation. Especially effective for dry, cracked skin and provides wonderful relaxation.',
      features: [
        'Softens dry, cracked skin',
        'Provides deep moisture',
        'Improves blood circulation'
      ],
      price: '$20',
      image: 'https://via.placeholder.com/600x500'
    }
  ];

  return (
    <div className="services-page">
      <PageHeader 
        title="Our Services" 
        description="Experience premium and professional nail care services at Luxe Nails"
      />
      
      <Container>
        <div className="service-categories">
          {categories.map(category => (
            <Button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </Container>

      <section className="section">
        <Container>
          {(activeCategory === 'all' || activeCategory === 'manicure') && (
            <ServiceCategory 
              title="Manicure Services" 
              services={manicureServices} 
            />
          )}
          
          {(activeCategory === 'all' || activeCategory === 'pedicure') && (
            <ServiceCategory 
              title="Pedicure Services" 
              services={pedicureServices} 
            />
          )}
          
          {(activeCategory === 'all' || activeCategory === 'special') && (
            <ServiceCategory 
              title="Special Services" 
              services={specialServices} 
            />
          )}
        </Container>
      </section>

      <BookBanner />
    </div>
  );
};

export default Services;