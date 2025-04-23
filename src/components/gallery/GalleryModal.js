import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/GalleryModal.css';

const GalleryModal = ({ show, onHide, item }) => {
  if (!item) return null;
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="gallery-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content-wrapper">
          <img src={item.image} alt={item.title} className="modal-img" />
          <div className="modal-info">
            <p className="modal-category">{item.categoryName}</p>
            <p className="modal-description">{item.description}</p>
            <Link to="/booking">
              <Button className="btn btn-primary">Book This Design</Button>
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;