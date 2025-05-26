import React, { useState } from 'react';
import { Container, Button, Row, ButtonGroup } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import GalleryItem from '../components/gallery/GalleryItem';
import InstagramSection from '../components/gallery/InstagramSection';
import GalleryModal from '../components/gallery/GalleryModal';
import BookBanner from '../components/common/BookBanner';
import '../styles/Gallery.css';

// Import nail design images
import pastelDaisiesImg from '../assets/gallery/pastel-daisies-nail-art.jpg';
import whiteEleganceImg from '../assets/gallery/white-elegance-bridal-nails.jpg';
import sparklingGoldImg from '../assets/gallery/sparkling-gold-party-nails.jpg';
import elegantNudeImg from '../assets/gallery/elegant-nude-everyday-nails.jpg';
import pastelOmbreImg from '../assets/gallery/pastel-ombre-gel-nails.jpg';
import marbleEffectImg from '../assets/gallery/marble-effect-acrylic-nails.jpg';
import galaxyDreamsImg from '../assets/gallery/galaxy-dreams-nail-art.jpg';
import delicateLaceImg from '../assets/gallery/delicate-lace-bridal-nails.jpg';
import goldSequinImg from '../assets/gallery/gold-sequin-party-nails.jpg';
import minimalistStripesImg from '../assets/gallery/minimalist-stripes-everyday-nails.jpg';
import frenchTipsImg from '../assets/gallery/modern-french-tips-gel-nails.jpg';
import coffinOmbreImg from '../assets/gallery/coffin-ombre-acrylic-nails.jpg';

//import '../styles/Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'bridal', name: 'Bridal Nails' },
    { id: 'party', name: 'Party Nails' },
    { id: 'art', name: 'Nail Art' },
    { id: 'everyday', name: 'Everyday Nails' },
    { id: 'gel', name: 'Gel Nails' },
    { id: 'acrylic', name: 'Acrylic/Powder Nails' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Pastel Daisies',
      category: 'art',
      categoryName: 'Nail Art',
      image: pastelDaisiesImg,
      description: 'Delicate daisy design on a soft pastel background. Perfect for spring or summer.'
    },
    {
      id: 2,
      title: 'Pure White Elegance',
      category: 'bridal',
      categoryName: 'Bridal Nails',
      image: whiteEleganceImg,
      description: 'Classic white design with subtle shimmer for a timeless bridal look.'
    },
    {
      id: 3,
      title: 'Sparkling Gold',
      category: 'party',
      categoryName: 'Party Nails',
      image: sparklingGoldImg,
      description: 'Glittering gold accents for a glamorous party-ready statement.'
    },
    {
      id: 4,
      title: 'Elegant Nude',
      category: 'everyday',
      categoryName: 'Everyday Nails',
      image: elegantNudeImg,
      description: 'Sophisticated nude shade that complements any outfit or occasion.'
    },
    {
      id: 5,
      title: 'Pastel Ombre',
      category: 'gel',
      categoryName: 'Gel Nails',
      image: pastelOmbreImg,
      description: 'Smooth gradient effect with long-lasting gel polish in soft pastel shades.'
    },
    {
      id: 6,
      title: 'Marble Effect',
      category: 'acrylic',
      categoryName: 'Acrylic/Powder Nails',
      image: marbleEffectImg,
      description: 'Sophisticated marble pattern on durable acrylic base for a luxury feel.'
    },
    {
      id: 7,
      title: 'Galaxy Dreams',
      category: 'art',
      categoryName: 'Nail Art',
      image: galaxyDreamsImg,
      description: 'Cosmic-inspired design with swirls of colors resembling a starry night sky.'
    },
    {
      id: 8,
      title: 'Delicate Lace',
      category: 'bridal',
      categoryName: 'Bridal Nails',
      image: delicateLaceImg,
      description: 'Intricate lace pattern perfect for wedding day elegance.'
    },
    {
      id: 9,
      title: 'Gold Sequin',
      category: 'party',
      categoryName: 'Party Nails',
      image: goldSequinImg,
      description: 'Eye-catching gold sequin design ideal for special occasions.'
    },
    {
      id: 10,
      title: 'Minimalist Stripes',
      category: 'everyday',
      categoryName: 'Everyday Nails',
      image: minimalistStripesImg,
      description: 'Clean, minimalist stripes for a modern everyday look.'
    },
    {
      id: 11,
      title: 'Modern French Tips',
      category: 'gel',
      categoryName: 'Gel Nails',
      image: frenchTipsImg,
      description: 'Contemporary twist on the classic French manicure with gel polish.'
    },
    {
      id: 12,
      title: 'Coffin Ombre',
      category: 'acrylic',
      categoryName: 'Acrylic/Powder Nails',
      image: coffinOmbreImg,
      description: 'Stylish coffin shape with gradient color effect on acrylic base.'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <div className="gallery-page">
      <PageHeader 
        title="Nail Design Gallery" 
        description="Explore our artistic nail designs and beautiful creations at Tip Toes"
      />
      
      <Container className="my-5">
        <ButtonGroup className="d-flex flex-wrap justify-content-center mb-5">
          {categories.map(category => (
            <Button 
              key={category.id}
              variant={activeCategory === category.id ? "primary" : "outline-primary"}
              className="m-2 rounded-pill"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </ButtonGroup>
      </Container>

      <section className="section">
        <Container>
          <Row className="g-4">
            {filteredItems.map(item => (
              <GalleryItem 
                key={item.id} 
                item={item} 
                onClick={() => handleItemClick(item)}
              />
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button variant="outline-primary" className="px-4 py-2">Load More</Button>
          </div>
        </Container>
      </section>

      <InstagramSection />
      <BookBanner />
      
      <GalleryModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Gallery;