import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import PriceTable from '../components/pricing/PriceTable';
import PackageCard from '../components/pricing/PackageCard';
import PricingNotes from '../components/pricing/PricingNotes';
import BookBanner from '../components/common/BookBanner';
import '../styles/Pricing.css';

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'manicure', name: 'Manicure Services' },
    { id: 'pedicure', name: 'Pedicure Services' },
    { id: 'specialty', name: 'Specialty Nails' },
    { id: 'addons', name: 'Nail Service Add-Ons' },
    { id: 'waxing', name: 'Waxing Services' },
    { id: 'eyelash', name: 'Eyelash Extensions' }
  ];

  const manicurePrices = [
    {
      id: 1,
      service: 'Spa Manicure',
      description: 'Classic manicure with spa treatment',
      price: '$30'
    },
    {
      id: 2,
      service: 'Gel Manicure',
      description: 'Long-lasting gel polish manicure',
      price: '$45'
    }
  ];

  const pedicurePrices = [
    {
      id: 3,
      service: 'Spa Pedicure',
      description: 'Classic pedicure with spa treatment',
      price: '$40'
    },
    {
      id: 4,
      service: 'Gel Pedicure',
      description: 'Long-lasting gel polish pedicure',
      price: '$55'
    },
    {
      id: 5,
      service: 'Deluxe Spa Pedicure',
      description: 'Premium pedicure with extended treatment',
      price: '$65'
    },
    {
      id: 6,
      service: 'Golden Spa Pedicure',
      description: 'Luxury pedicure experience with premium products',
      price: '$85'
    }
  ];

  const specialtyNails = [
    {
      id: 7,
      service: 'Acrylic - Full Set',
      description: 'Complete acrylic nail application',
      price: '$55+'
    },
    {
      id: 8,
      service: 'Acrylic - Refill',
      description: 'Maintenance fill for acrylic nails',
      price: '$45'
    },
    {
      id: 9,
      service: 'Acrylic - Full Set with Gel',
      description: 'Acrylic application with gel polish',
      price: '$65'
    },
    {
      id: 10,
      service: 'Acrylic - Fill with Gel',
      description: 'Acrylic fill with gel polish application',
      price: '$55'
    },
    {
      id: 11,
      service: 'Acrylic - Pink and White',
      description: 'French-style pink and white acrylic application',
      price: '$65'
    },
    {
      id: 12,
      service: 'Acrylic - Pink Fill',
      description: 'Pink acrylic fill maintenance',
      price: '$45'
    },
    {
      id: 13,
      service: 'Acrylic - Pink and White Fill',
      description: 'Pink and white acrylic fill maintenance',
      price: '$60'
    },
    {
      id: 14,
      service: 'Dip Powder',
      description: 'Dipping powder nail application',
      price: '$50'
    },
    {
      id: 15,
      service: 'Dip Powder with Tips',
      description: 'Dipping powder with nail extension tips',
      price: '$60'
    },
    {
      id: 16,
      service: 'T.A.P. Hybrid Gel Set',
      description: 'Hybrid gel nail system application',
      price: '$60'
    },
    {
      id: 17,
      service: 'T.A.P. Hybrid Gel Set with Tips',
      description: 'Hybrid gel system with nail extension tips',
      price: '$70'
    },
    {
      id: 18,
      service: 'T.A.P. Hybrid Gel Fill',
      description: 'Hybrid gel system maintenance fill',
      price: '$50'
    },
    {
      id: 19,
      service: 'Hard Builder Gel Set',
      description: 'Builder gel nail system application',
      price: '$60'
    },
    {
      id: 20,
      service: 'Hard Builder Gel Set with Tips',
      description: 'Builder gel with nail extension tips',
      price: '$70'
    },
    {
      id: 21,
      service: 'Hard Builder Gel Fill',
      description: 'Builder gel maintenance fill',
      price: '$50+'
    },
    {
      id: 22,
      service: 'Gel X Full Set',
      description: 'Gel-X nail extension system',
      price: '$60'
    }
  ];

  const addOnPrices = [
    {
      id: 23,
      service: 'Ombre Nails',
      description: 'Gradient color effect on nails',
      price: '$15'
    },
    {
      id: 24,
      service: 'Chrome',
      description: 'Metallic chrome finish effect',
      price: '$15'
    },
    {
      id: 25,
      service: 'Cateye',
      description: 'Magnetic cateye gel effect',
      price: '$15'
    },
    {
      id: 26,
      service: 'French Tips',
      description: 'Classic white-tipped French manicure style',
      price: '$10'
    },
    {
      id: 27,
      service: 'Deep French',
      description: 'Bold French manicure with deeper smile line',
      price: '$15'
    },
    {
      id: 28,
      service: 'Design',
      description: 'Custom nail art designs',
      price: '$5+'
    },
    {
      id: 29,
      service: 'Nail Shaping',
      description: 'Specialty nail shaping options',
      price: '$5+'
    },
    {
      id: 30,
      service: 'Add Nail Tips',
      description: 'Application of nail extension tips',
      price: '$10'
    },
    {
      id: 31,
      service: 'Nail Polish Change',
      description: 'Regular polish color change',
      price: '$15'
    },
    {
      id: 32,
      service: 'Toenail Polish Change',
      description: 'Regular polish color change for toes',
      price: '$20'
    },
    {
      id: 33,
      service: 'Gel Nail Polish Change',
      description: 'Gel polish color change for hands',
      price: '$30'
    },
    {
      id: 34,
      service: 'Gel Toenail Polish Change',
      description: 'Gel polish color change for toes',
      price: '$40'
    },
    {
      id: 35,
      service: 'All Types of Polish Removal',
      description: 'Removal of regular nail polish',
      price: '$15'
    },
    {
      id: 36,
      service: 'Acrylic Removal',
      description: 'Professional removal of acrylic nails',
      price: '$20'
    },
    {
      id: 37,
      service: 'Acrylic Repair (Per Nail)',
      description: 'Fix or repair individual acrylic nails',
      price: '$7'
    },
    {
      id: 38,
      service: 'Callous Removal',
      description: 'Treatment to remove foot callouses',
      price: '$15'
    },
    {
      id: 39,
      service: 'Nail Trim',
      description: 'Basic nail trimming service',
      price: '$15'
    },
    {
      id: 40,
      service: 'Add Gel Polish',
      description: 'Addition of gel polish to any service',
      price: '$15'
    }
  ];

  const waxingPrices = [
    {
      id: 41,
      service: 'Eyebrows',
      description: 'Eyebrow shaping and hair removal',
      price: '$20'
    },
    {
      id: 42,
      service: 'Upper Lip',
      description: 'Upper lip hair removal',
      price: '$10'
    },
    {
      id: 43,
      service: 'Chin',
      description: 'Chin hair removal',
      price: '$15'
    },
    {
      id: 44,
      service: 'Full Face',
      description: 'Complete facial hair removal',
      price: '$50+'
    },
    {
      id: 45,
      service: 'Underarms',
      description: 'Underarm hair removal',
      price: '$30'
    },
    {
      id: 46,
      service: 'Half Arms',
      description: 'Half arm hair removal',
      price: '$40+'
    },
    {
      id: 47,
      service: 'Full Arms',
      description: 'Full arm hair removal',
      price: '$70'
    },
    {
      id: 48,
      service: 'Half Legs',
      description: 'Lower or upper leg hair removal',
      price: '$50+'
    },
    {
      id: 49,
      service: 'Full Legs',
      description: 'Complete leg hair removal',
      price: '$80'
    }
  ];

  const eyelashPrices = [
    {
      id: 50,
      service: 'New Set',
      description: 'Full set of eyelash extensions',
      price: '$185+'
    },
    {
      id: 51,
      service: 'Lash Fill',
      description: 'Maintenance fill for eyelash extensions',
      price: '$90+'
    }
  ];

  const packages = [
    {
      id: 1,
      title: 'Mani-Pedi Special',
      description: [
        'Spa Manicure',
        'Spa Pedicure',
        'Your choice of regular polish',
        'Save $10'
      ],
      oldPrice: '$70',
      newPrice: '$60'
    },
    {
      id: 2,
      title: 'Gel Combo Package',
      description: [
        'Gel Manicure',
        'Gel Pedicure',
        'French Tips Option Available',
        'Save $15'
      ],
      oldPrice: '$100',
      newPrice: '$85'
    },
    {
      id: 3,
      title: 'Luxury Package',
      description: [
        'Gel Manicure with Design',
        'Deluxe Spa Pedicure',
        'Callous Removal',
        'Paraffin Treatment',
        'Save $20'
      ],
      oldPrice: '$130',
      newPrice: '$110'
    }
  ];

  return (
    <div className="pricing-page">
      <PageHeader 
        title="Our Service Pricing" 
        description="Premium nail care services at Tiptoe Nail Spa with competitive pricing"
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
          
          {(activeCategory === 'all' || activeCategory === 'specialty') && (
            <div className="price-category">
              <h2 className="section-title">Specialty Nails</h2>
              <PriceTable prices={specialtyNails} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'addons') && (
            <div className="price-category">
              <h2 className="section-title">Nail Service Add-Ons</h2>
              <PriceTable prices={addOnPrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'waxing') && (
            <div className="price-category">
              <h2 className="section-title">Waxing Services</h2>
              <PriceTable prices={waxingPrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'eyelash') && (
            <div className="price-category">
              <h2 className="section-title">Eyelash Extensions</h2>
              <PriceTable prices={eyelashPrices} />
            </div>
          )}
          
          {(activeCategory === 'all' || activeCategory === 'packages') && (
            <div className="price-category">
              <h2 className="section-title-pricing">Package Deals</h2>
              <Row className="packages-grid-pricing">
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