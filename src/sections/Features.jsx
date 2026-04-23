import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { features } from '../data/content';
import heroBg from '../assets/images/hero-bg.png';

const Features = () => {
  return (
    <section id="features" style={{ 
      position: 'relative',
      background: `linear-gradient(rgba(15, 10, 30, 0.85), rgba(15, 10, 30, 0.85)), url(${heroBg}) center center no-repeat`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: '100px 0'
    }}>
      <Container>
        <div className="section-title mb-5" data-aos="fade-up">
          <h2 style={{ color: '#fff', borderBottomColor: 'var(--accent-violet)' }}>Key System Features</h2>
          <p style={{ color: '#cbd5e1' }}>Innovative solutions tailored for the visually impaired community.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {features.map((item, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div 
                className="p-4 rounded-4 h-100 transition-all" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
              >
                <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: `${item.color}22`,
                  border: `1px solid ${item.color}44`
                }}>
                  <item.icon size={26} color={item.color} />
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '800', 
                    color: '#fff',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h4>
                  <p className="justified-text" style={{ 
                    fontSize: '14.5px', 
                    color: '#94a3b8', 
                    lineHeight: '1.7',
                    margin: '0'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
