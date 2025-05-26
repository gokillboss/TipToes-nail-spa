import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/GalleryModal.css';

const GalleryModal = ({ show, onHide, item }) => {
  if (!item) return null;

  // Load ảnh từ thư mục public/images/gallery/
  const imageSrc = `/images/gallery/${item.image}`;

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
        <div className="modal-content-wrapper d-flex flex-column flex-md-row">
          <img src={imageSrc} alt={item.title} className="modal-img img-fluid me-md-4 mb-3 mb-md-0" />

          <div className="modal-info">
            <p className="modal-category fw-bold text-muted">{item.categoryName}</p>
            <p className="modal-description">{item.description}</p>

            <Link to="/booking">
              <Button className="btn btn-primary mt-3">Book This Design</Button>
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
