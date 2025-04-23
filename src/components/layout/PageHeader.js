import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/PageHeader.css';

const PageHeader = ({ title, description }) => {
  return (
    <section className="page-header">
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </section>
  );
};

export default PageHeader;