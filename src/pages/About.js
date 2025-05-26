import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import BookBanner from '../components/common/BookBanner';
import '../styles/About.css';

// Import images
import aboutHeroImg from '../assets/images/about-salon-main.jpg';
import founderImg from '../assets/team/founder-portrait.jpg';
import manager1Img from '../assets/team/manager-1.jpg';
import manager2Img from '../assets/team/manager-2.jpg';
import stylist1Img from '../assets/team/nail-stylist-1.jpg';
import stylist2Img from '../assets/team/nail-stylist-2.jpg';
import stylist3Img from '../assets/team/nail-stylist-3.jpg';
import salonInteriorImg from '../assets/images/salon-interior-wide.jpg';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Anh G',
      role: 'Founder & Creative Director',
      image: founderImg,
      description: 'With over 15 years of experience in the nail industry, Sarah founded Tip Toes with a vision to create a premium nail care experience that focuses on both beauty and wellness.'
    },
    {
      id: 2,
      name: 'Nhu Gru',
      role: 'Head Nail Technician',
      image: manager1Img,
      description: 'Emily brings 10 years of expertise in nail art and techniques. She leads our talented team of technicians and ensures the highest quality of service.'
    },
    {
      id: 3,
      name: 'Amy Karavanae ',
      role: 'Operations Manager',
      image: manager2Img,
      description: 'Michael oversees the day-to-day operations, ensuring that every client receives exceptional service from the moment they walk through our doors.'
    },
    {
      id: 4,
      name: 'Monica N',
      role: 'Senior Nail Artist',
      image: stylist1Img,
      description: 'Jessica specializes in intricate nail art designs and has won several regional nail art competitions.'
    },
    {
      id: 5,
      name: 'Sam H',
      role: 'Nail Technician',
      image: stylist2Img,
      description: 'David is known for his precise technique and exceptional attention to detail, especially with acrylic and gel extensions.'
    },
    {
      id: 6,
      name: 'Snow  Le',
      role: 'Nail Technician',
      image: stylist3Img,
      description: 'Olivia is our expert in natural nail care and specializes in creating beautiful, long-lasting manicures using organic products.'
    }
  ];

  return (
    <div className="about-page">
      <PageHeader 
        title="About Tip Toes" 
        description="Our story, our team, and our commitment to excellence"
      />
      
      {/* Our Story Section */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-image">
                <img src={aboutHeroImg} alt="Tip Toes Salon Interior" className="img-fluid rounded shadow" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h2>Our Story</h2>
                <p className="lead">Welcome to Tip Toes, where nail artistry meets relaxation.</p>
                <p>
                  Founded in 2025, Tip Toes began with a simple mission: to create a nail salon experience 
                  that combines artistic excellence with a peaceful, luxurious environment. What started as 
                  a small studio has grown into a premier destination for nail care, attracting clients who 
                  seek both beauty and wellness.
                </p>
                <p>
                  Our commitment to using premium, non-toxic products and maintaining the highest standards 
                  of hygiene has established us as a leader in the industry. Each member of our team is 
                  extensively trained not only in technical skills but also in providing a personalized, 
                  attentive service that makes every client feel special.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Our Values Section */}
      <section className="section bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Values</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="value-icon mb-3">✨</div>
                  <Card.Title>Excellence</Card.Title>
                  <Card.Text>
                    We are committed to excellence in every service we provide, consistently exceeding expectations 
                    through attention to detail and precision.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="value-icon mb-3">🌿</div>
                  <Card.Title>Wellness</Card.Title>
                  <Card.Text>
                    We believe nail care is an essential part of self-care. Our services are designed to nurture 
                    both physical beauty and mental well-being.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="value-icon mb-3">🙏</div>
                  <Card.Title>Integrity</Card.Title>
                  <Card.Text>
                    We operate with transparency and honesty, using premium products and maintaining rigorous 
                    hygiene standards for our clients' safety.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Our Team Section */}
      {/* <section className="section">
        <Container>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <Row>
            {teamMembers.map(member => (
              <Col lg={4} md={6} className="mb-4" key={member.id}>
                <Card className="team-card h-100 border-0 shadow-sm">
                  <div className="team-img-container">
                    <Card.Img variant="top" src={member.image} className="team-img" alt={member.name} />
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
      
      {/* Our Space Section */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2>Our Space</h2>
              <p>
                We've designed our salon to be a sanctuary from the hustle and bustle of everyday life. 
                The moment you step through our doors, you'll be enveloped in a serene atmosphere 
                designed to help you relax and rejuvenate.
              </p>
              <p>
                Our spacious, light-filled environment features comfortable seating, soothing colors, 
                and subtle aromatherapy to enhance your experience. Every detail, from our ergonomic 
                chairs to our custom-made manicure tables, has been carefully selected for your comfort.
              </p>
              <p>
                We invite you to experience the Tip Toes difference – where premium nail care meets 
                unparalleled relaxation.
              </p>
            </Col>
            <Col md={6}>
              <img src={salonInteriorImg} alt="Tip Toes Salon Space" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>
      
      <BookBanner />
    </div>
  );
};

export default About;