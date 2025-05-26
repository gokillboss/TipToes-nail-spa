import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import ServiceCategory from '../components/services/ServiceCategory';
import BookBanner from '../components/common/BookBanner';
import '../styles/Services.css';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'manicure', name: 'Manicures' },
    { id: 'pedicure', name: 'Pedicures' },
    { id: 'specialty', name: 'Specialty Nails' },
    { id: 'addons', name: 'Nail Add-Ons' },
    { id: 'waxing', name: 'Waxing Services' },
    { id: 'eyelash', name: 'Eyelash Extensions' }
  ];

  const manicureServices = [
    {
      id: 1,
      title: 'Spa Manicure',
      duration: '30-40 minutes',
      description: 'Classic manicure including nail shaping, cuticle care, hand massage, and polish application with premium products.',
      features: [
        'Relaxing hand soak',
        'Expert nail shaping',
        'Cuticle treatment',
        'Moisturizing hand massage'
      ],
      price: '$30',
      image: 'spa-manicure.jpg'
    },
    {
      id: 2,
      title: 'Gel Manicure',
      duration: '45-60 minutes',
      description: 'Long-lasting gel polish application that stays chip-free for up to 2-3 weeks with a high-gloss finish.',
      features: [
        'Spa manicure included',
        'Premium gel polish',
        'LED curing',
        'Extended wear time'
      ],
      price: '$45',
      image: 'gel-manicure.jpg'
    }
  ];

  const pedicureServices = [
    {
      id: 3,
      title: 'Spa Pedicure',
      duration: '45-50 minutes',
      description: 'Classic pedicure with foot soak, nail care, callus removal, and polish application for beautifully groomed feet.',
      features: [
        'Therapeutic foot soak',
        'Nail shaping and care',
        'Callus treatment',
        'Foot massage'
      ],
      price: '$40',
      image: 'spa-pedicure.jpg'
    },
    {
      id: 4,
      title: 'Gel Pedicure',
      duration: '60-70 minutes',
      description: 'Complete pedicure service with long-lasting gel polish application for gorgeous toes.',
      features: [
        'Spa pedicure included',
        'Durable gel polish',
        'Extended wear time',
        'High-shine finish'
      ],
      price: '$55',
      image: 'gel-pedicure.jpg'
    },
    {
      id: 5,
      title: 'Deluxe Spa Pedicure',
      duration: '75-90 minutes',
      description: 'Premium pedicure experience with extended massage, exfoliation, and hydrating mask treatment.',
      features: [
        'Enhanced foot treatment',
        'Extended massage',
        'Exfoliating scrub',
        'Deep moisturizing'
      ],
      price: '$65',
      image: 'deluxe-pedicure.jpg'
    },
    {
      id: 6,
      title: 'Golden Spa Pedicure',
      duration: '90-110 minutes',
      description: 'The ultimate luxury pedicure featuring premium products and extended treatments for total foot renewal.',
      features: [
        'Premium foot care',
        'Luxurious products',
        'Extended massage therapy',
        'Complete relaxation'
      ],
      price: '$85',
      image: 'golden-pedicure.jpg'
    }
  ];

  const specialtyNails = [
    {
      id: 7,
      title: 'Acrylic Full Set',
      duration: '60-90 minutes',
      description: 'Professional acrylic nail application for strong, beautiful nails with your choice of shape and length.',
      features: [
        'Customized length and shape',
        'Durable application',
        'Professional finish',
        'Long-lasting results'
      ],
      price: '$55+',
      image: 'acrylic-fullset.jpg'
    },
    {
      id: 8,
      title: 'Acrylic Refill',
      duration: '45-60 minutes',
      description: 'Maintenance service for existing acrylic nails to keep them looking fresh and beautiful.',
      features: [
        'Fill new growth area',
        'Shape adjustment if needed',
        'Polish change option',
        'Extends life of your acrylics'
      ],
      price: '$45',
      image: 'acrylic-refill.jpg'
    },
    {
      id: 9,
      title: 'Acrylic Full Set with Gel',
      duration: '90-120 minutes',
      description: 'Complete acrylic application with gel polish topcoat for extra durability and shine.',
      features: [
        'Strength of acrylics',
        'Shine of gel polish',
        'Custom shapes',
        'Long-lasting wear'
      ],
      price: '$65',
      image: 'acrylic-gel.jpg'
    },
    {
      id: 10,
      title: 'Dip Powder',
      duration: '60-75 minutes',
      description: 'Dipping powder system that creates strong, lightweight, natural-looking nails without harsh chemicals.',
      features: [
        'Odor-free application',
        'No UV light needed',
        'Durable finish',
        'Gentle on natural nails'
      ],
      price: '$50',
      image: 'dip-powder.jpg'
    },
    {
      id: 11,
      title: 'T.A.P. Hybrid Gel Set',
      duration: '60-75 minutes',
      description: 'Advanced hybrid gel system that combines the best properties of hard gel and soft gel for optimal results.',
      features: [
        'Flexible yet durable',
        'Natural looking',
        'Lightweight feel',
        'Professional finish'
      ],
      price: '$60',
      image: 'hybrid-gel.jpg'
    },
    {
      id: 12,
      title: 'Hard Builder Gel Set',
      duration: '75-90 minutes',
      description: 'Professional builder gel application for stronger, more durable nail extensions or overlays.',
      features: [
        'Stronger than regular gel',
        'Custom shapes available',
        'Perfect for extensions',
        'Resistant to chipping'
      ],
      price: '$60',
      image: 'builder-gel.jpg'
    },
    {
      id: 13,
      title: 'Gel X Full Set',
      duration: '60-75 minutes',
      description: 'Pre-shaped full-coverage gel nail extensions for an instantly perfect manicure.',
      features: [
        'Lightweight extensions',
        'Natural-looking results',
        'Quick application',
        'Various shapes available'
      ],
      price: '$60',
      image: 'gelx-set.jpg'
    }
  ];

  const addOnsServices = [
    {
      id: 14,
      title: 'Ombre Nails',
      duration: '15-20 minutes add-on',
      description: 'Beautiful gradient color effect applied to your nails for a trendy, eye-catching look.',
      features: [
        'Seamless color transition',
        'Custom color combinations',
        'Professional application',
        'Modern nail trend'
      ],
      price: '$15',
      image: 'ombre-nails.jpg'
    },
    {
      id: 15,
      title: 'Chrome/Cateye Effect',
      duration: '10-15 minutes add-on',
      description: 'Specialty finishes that create metallic shine or magnetic patterns on your nails.',
      features: [
        'High-shine metallic finish',
        'Unique visual effects',
        'Professional application',
        'Eye-catching results'
      ],
      price: '$15',
      image: 'chrome-cateye.jpg'
    },
    {
      id: 16,
      title: 'French Tips',
      duration: '10-15 minutes add-on',
      description: 'Classic white-tipped finish that creates a timeless, elegant look for your manicure or pedicure.',
      features: [
        'Clean, precise lines',
        'Timeless elegant style',
        'Professional application',
        'Natural-looking option'
      ],
      price: '$10',
      image: 'french-tips.jpg'
    },
    {
      id: 17,
      title: 'Nail Art Design',
      duration: 'Varies by complexity',
      description: 'Custom nail art from simple accents to elaborate designs to express your personal style.',
      features: [
        'Customized designs',
        'Skilled application',
        'Express your style',
        'Variety of options'
      ],
      price: '$5+',
      image: 'nail-design.jpg'
    },
    {
      id: 18,
      title: 'Polish Change',
      duration: '15-20 minutes',
      description: 'Quick service to update your nail color with premium regular polish.',
      features: [
        'Quick service',
        'Wide color selection',
        'Professional application',
        'Fresh new look'
      ],
      price: '$15',
      image: 'polish-change.jpg'
    },
    {
      id: 19,
      title: 'Gel Polish Change',
      duration: '25-30 minutes',
      description: 'Remove existing gel polish and apply a fresh gel color for extended wear.',
      features: [
        'Professional removal',
        'Fresh gel application',
        'High-shine finish',
        'Long-lasting results'
      ],
      price: '$30',
      image: 'gel-change.jpg'
    },
    {
      id: 20,
      title: 'Acrylic Removal',
      duration: '30-40 minutes',
      description: 'Professional, gentle removal of acrylic nails with conditioning treatment for natural nails.',
      features: [
        'Safe removal process',
        'Minimal natural nail damage',
        'Conditioning treatment',
        'Nail health protection'
      ],
      price: '$20',
      image: 'acrylic-removal.jpg'
    },
    // {
    //   id: 21,
    //   title: 'Callous Removal',
    //   duration: '15-20 minutes add-on',
    //   description: 'Targeted treatment to safely remove callouses and rough skin from feet.',
    //   features: [
    //     'Professional technique',
    //     'Gentle yet effective',
    //     'Smoother, softer feet',
    //     'Enhanced comfort'
    //   ],
    //   price: '$15',
    //   image: 'callous-removal.jpg'
    // }
  ];

  const waxingServices = [
    {
      id: 22,
      title: 'Eyebrow Waxing',
      duration: '15-20 minutes',
      description: 'Precise eyebrow shaping using premium wax for clean, defined brows.',
      features: [
        'Professional technique',
        'Clean brow definition',
        'Face-framing results',
        'Enhanced expression'
      ],
      price: '$20',
      image: 'eyebrow-wax.jpg'
    },
    {
      id: 23,
      title: 'Facial Waxing',
      duration: 'Varies by area',
      description: 'Hair removal for various facial areas including upper lip, chin, and full face options.',
      features: [
        'Gentle formulation',
        'Quick results',
        'Smoother skin',
        'Professional application'
      ],
      price: '$10 - $50+',
      image: 'facial-wax.jpg'
    },
    // {
    //   id: 24,
    //   title: 'Body Waxing',
    //   duration: 'Varies by area',
    //   description: 'Professional hair removal services for various body areas, including arms, legs, and underarms.',
    //   features: [
    //     'Thorough hair removal',
    //     'Longer-lasting results',
    //     'Professional technique',
    //     'Smoother skin'
    //   ],
    //   price: '$30 - $80',
    //   image: 'body-wax.jpg'
    // }
  ];

  const eyelashServices = [
    {
      id: 25,
      title: 'Eyelash Extensions - New Set',
      duration: '90-120 minutes',
      description: 'Full set of premium eyelash extensions individually applied for a natural or dramatic look.',
      features: [
        'Customized length and volume',
        'Lightweight comfort',
        'Natural or dramatic options',
        'Professional application'
      ],
      price: '$185+',
      image: 'lash-extensions.jpg'
    },
    // {
    //   id: 26,
    //   title: 'Eyelash Extensions - Fill',
    //   duration: '60-75 minutes',
    //   description: 'Maintenance service to fill in grown-out lash extensions and maintain your perfect look.',
    //   features: [
    //     'Extends wear of full set',
    //     'Refresh your look',
    //     'Fill gaps from natural lash shedding',
    //     'Professional maintenance'
    //   ],
    //   price: '$90+',
    //   image: 'lash-fill.jpg'
    // }
  ];

  return (
    <div className="services-page">
      <PageHeader 
        title="Our Services" 
        description="Experience premium and professional nail care services at Tiptoe Nail Spa"
      />

      <Container>
        <div className="service-categories mb-4 text-center">
          {categories.map(category => (
            <Button 
              key={category.id}
              className={`category-btn mx-2 ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              variant="outline-dark"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </Container>

      <section className="section">
        <Container>
          {(activeCategory === 'all' || activeCategory === 'manicure') && (
            <ServiceCategory title="Manicures" services={manicureServices} />
          )}
          {(activeCategory === 'all' || activeCategory === 'pedicure') && (
            <ServiceCategory title="Pedicures" services={pedicureServices} />
          )}
          {(activeCategory === 'all' || activeCategory === 'specialty') && (
            <ServiceCategory title="Specialty Nails" services={specialtyNails} />
          )}
          {(activeCategory === 'all' || activeCategory === 'addons') && (
            <ServiceCategory title="Nail Add-Ons" services={addOnsServices} />
          )}
          {(activeCategory === 'all' || activeCategory === 'waxing') && (
            <ServiceCategory title="Waxing Services" services={waxingServices} />
          )}
          {(activeCategory === 'all' || activeCategory === 'eyelash') && (
            <ServiceCategory title="Eyelash Extensions" services={eyelashServices} />
          )}
        </Container>
      </section>

      <BookBanner />
    </div>
  );
};

export default ServicesPage;