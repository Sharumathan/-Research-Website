import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { systemHighlights } from '../data/content';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center" style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(8, 5, 18, 0.8), rgba(8, 5, 18, 0.8)), url(${heroBg}) top center no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
      padding: '100px 0 60px'
    }}>
      <Container style={{ zIndex: '2', position: 'relative' }} className="text-center text-white" data-aos="zoom-in">
        <div className="badge px-3 py-2 mb-4" style={{ 
          background: 'rgba(139, 92, 246, 0.2)', 
          border: '1px solid var(--accent-violet)',
          color: 'var(--accent-light)',
          borderRadius: '50px',
          fontWeight: '600',
          letterSpacing: '1px'
        }}>
          NEXT-GEN ASSISTIVE AI
        </div>
        
        <h1 style={{ 
          fontFamily: 'var(--font-hero)', 
          fontSize: 'calc(2.8rem + 2.5vw)', 
          fontWeight: '900',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to bottom, #fff 40%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.1'
        }}>
          VISION MATE
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#cbd5e1', 
          maxWidth: '850px', 
          margin: '0 auto 4rem',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          A Voice-Agentic Smart Reader for <span style={{ color: 'var(--accent-light)' }}>Sinhala and Tamil</span> speakers. 
          Bridging accessibility gaps through semantic document understanding and expressive AI feedback.
        </p>

        <Row className="justify-content-center g-4">
          {systemHighlights.map((f, idx) => (
            <Col key={idx} xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="hero-domain-card p-4 text-center h-100" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div className="card-glow" style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle at center, ${idx % 2 === 0 ? '#8B5CF6' : '#6D28D9'}11 0%, transparent 70%)`,
                  zIndex: '0'
                }}></div>
                
                <div style={{ position: 'relative', zIndex: '1' }}>
                  <div className="mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '18px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                  }}>
                    <f.icon size={28} color="#A78BFA" />
                  </div>
                  <h5 style={{ 
                    fontSize: '19px', 
                    fontWeight: '800', 
                    marginBottom: '15px',
                    color: '#f8fafc',
                    letterSpacing: '-0.5px'
                  }}>
                    {f.title}
                  </h5>
                  <p style={{ 
                    fontSize: '13.5px', 
                    color: '#94a3b8', 
                    margin: '0', 
                    lineHeight: '1.6',
                    textAlign: 'center' 
                  }}>
                    {f.description}
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

export default Hero;
