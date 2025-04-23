import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/GalleryItem.css';

const GalleryItem = ({ item, onClick }) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-4">
      <div className="gallery-item" onClick={onClick}>
        <img src={item.image} alt={item.title} className="gallery-img" />
        <div className="gallery-overlay">
          <h3 className="gallery-title">{item.title}</h3>
          <p className="gallery-category">{item.categoryName}</p>
        </div>
      </div>
    </Col>
  );
};

export default GalleryItem;