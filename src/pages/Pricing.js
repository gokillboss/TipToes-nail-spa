import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import PriceTable from '../components/pricing/PriceTable';
import PackageCard from '../components/pricing/PackageCard';
import PricingNotes from '../components/pricing/PricingNotes';
import BookBanner from '../components/common/BookBanner';
//import '../styles/Pricing.css';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'manicure', name: 'Manicure Services' },
    { id: 'pedicure', name: 'Pedicure Services' },
    { id: 'skincare', name: 'Hand & Foot Skincare' },
    { id: 'special', name: 'Special Services' },
    { id: 'packages', name: 'Packages' }
  ];

  const manicurePrices = [
    {
      id: 1,
      service: 'Basic Manicure',
      description: 'Soak, trim/file nails, cuticle care, hand moisturizing, and regular polish',
      price: '$25'
    },
    {
      id: 2,
      service: 'Deluxe Manicure',
      description: 'Basic manicure + hand mask + 15 min hand massage',
      price: '$32'
    },
    {
      id: 3,
      service: 'Regular Gel Polish',
      description: 'Basic manicure + single color gel polish',
      price: '$35'
    },
    {
      id: 4,
      service: 'Gel Polish with Crystals',
      description: 'Basic manicure + gel polish + crystals (up to 10)',
      price: '$40'
    },
    {
      id: 5,
      service: 'Acrylic/Powder Dip',
      description: 'Basic manicure + acrylic/powder application + gel polish',
      price: '$45 - $55'
    },
    {
      id: 6,
      service: 'Acrylic/Powder Fill-in',
      description: 'Acrylic/powder fill + gel polish (2-3 weeks after application)',
      price: '$35'
    },
    {
      id: 7,
      service: 'Acrylic/Powder Removal',
      description: 'Acrylic/powder removal + nail conditioning',
      price: '$15'
    }
  ];

  const pedicurePrices = [
    {
      id: 8,
      service: 'Basic Pedicure',
      description: 'Foot soak, trim/file nails, cuticle care, callus removal, moisturizing, regular polish',
      price: '$28'
    },
    {
      id: 9,
      service: 'Spa Pedicure',
      description: 'Basic pedicure + foot mask + 15 min foot massage',
      price: '$38'
    },
    {
      id: 10,
      service: 'Deluxe Pedicure',
      description: 'Basic pedicure + paraffin treatment + 25 min foot massage + calf massage',
      price: '$48'
    },
    {
      id: 11,
      service: 'Gel Polish for Feet',
      description: 'Basic pedicure + gel polish',
      price: '$38'
    },
    {
      id: 12,
      service: 'Exfoliation + Foot Massage',
      description: 'Foot soak, exfoliation, 20 min foot massage',
      price: '$22'
    }
  ];

  const specialPrices = [
    {
      id: 13,
      service: 'Simple Nail Art',
      description: 'Simple designs (lines, dots, simple flowers) - price per nail',
      price: '$3 - $5'
    },
    {
      id: 14,
      service: 'Artistic Nail Design',
      description: 'Complex, detailed designs - price per nail',
      price: '$8 - $15'
    },
    {
      id: 15,
      service: 'Crystal/Embellishment Application',
      description: 'Crystals, sequins, decorative elements - price per piece',
      price: '$0.50 - $1.50'
    },
    {
      id: 16,
      service: 'Paraffin Treatment for Hands',
      description: 'Warm paraffin wax treatment for deep moisturizing',
      price: '$20'
    },
    {
      id: 17,
      service: 'Paraffin Treatment for Feet',
      description: 'Warm paraffin wax treatment for deep foot moisturizing',
      price: '$25'
    },
    {
      id: 18,
      service: 'Hand/Foot Mask',
      description: 'Premium moisturizing mask for hands or feet',
      price: '$15'
    }
  ];

  const packages = [
    {
      id: 1,
      title: 'Saver Package',
      description: [
        'Basic Manicure',
        'Basic Pedicure',
        'Gel Polish (one color)',
        'Save $10'
      ],
      oldPrice: '$63',
      newPrice: '$53'
    },
    {
      id: 2,
      title: 'Relaxation Package',
      description: [
        'Deluxe Manicure',
        'Spa Pedicure',
        'Gel Polish (one color)',
        'Hand and Foot Mask',
        'Save $15'
      ],
      oldPrice: '$85',
      newPrice: '$70'
    },
    {
      id: 3,
      title: 'Luxury Package',
      description: [
        'Acrylic/Powder Application',
        'Deluxe Pedicure',
        'Artistic Nail Design (2 nails)',
        'Paraffin Treatment for Hands and Feet',
        'Save $25'
      ],
      oldPrice: '$120',
      newPrice: '$95'
    }
  ];

  return (
    <div className="pricing-page">
      <PageHeader 
        title="Our Service Pricing" 
        description="Premium nail care services at Luxe Nails with competitive pricing"
      />
      
      <Container>
        <div className="price-categories">
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
            <div className="price-category">
              <h2 className="section-title">Manicure Services</h2>
              <PriceTable prices={manicurePrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'pedicure') && (
            <div className="price-category">
              <h2 className="section-title">Pedicure Services</h2>
              <PriceTable prices={pedicurePrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'special') && (
            <div className="price-category">
              <h2 className="section-title">Special Services</h2>
              <PriceTable prices={specialPrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'packages') && (
            <div className="price-category">
              <h2 className="section-title">Package Deals</h2>
              <Row className="packages-grid">
                {packages.map(pkg => (
                  <Col key={pkg.id} md={4} className="mb-4">
                    <PackageCard package={pkg} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
          
          <PricingNotes />
        </Container>
      </section>

      <BookBanner />
    </div>
  );
};

export default Pricing;