import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { features } from '../data/content';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center" style={{
      height: '100vh',
      background: `url(${heroBg}) top center no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
      padding: '0'
    }}>
      <div style={{
        position: 'absolute',
        inset: '0',
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: '1'
      }}></div>

      <Container style={{ zIndex: '2', position: 'relative' }} className="text-center text-white" data-aos="zoom-in">
        <h1 style={{ 
          fontFamily: 'var(--font-hero)', 
          fontSize: 'calc(2.5rem + 2vw)', 
          fontWeight: '800',
          marginBottom: '1rem'
        }}>
          VISION MATE
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          opacity: '0.8', 
          maxWidth: '800px', 
          margin: '0 auto 3rem' 
        }}>
          Voice Agentic Smart Reader Application In Sinhala and Tamil For Visually Impaired People. Empowering independence through AI-driven visual perception.
        </p>

        <Row className="justify-content-center g-4 mt-5">
          {features.slice(0, 4).map((f, idx) => (
            <Col key={idx} xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="feature-pill p-4 text-center h-100" style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s'
              }}>
                <f.icon size={42} color={f.color} style={{ marginBottom: '15px'}} />
                <h5 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{f.title}</h5>
                <p style={{ fontSize: '13px', opacity: '0.8', margin: '0' }}>{f.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

    </section>
  );
};

export default Hero;
