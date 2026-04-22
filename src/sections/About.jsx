import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const About = () => {
  return (
    <section id="about" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ color: '#000000' }}>About Vision Mate</h2>
          <p>Revolutionizing accessibility for the visually impaired through AI.</p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right" className="justified-text">
            <p>
              Vision Mate is a cutting-edge research initiative dedicated to bridging the information gap for visually impaired individuals in Sri Lanka. By leveraging state-of-the-art AI technologies, we provide a seamless voice-agentic experience in native languages like Sinhala and Tamil.
            </p>
            <p className="mt-3">
              Our system doesn't just read; it understands. From complex document layouts to real-time scene descriptions, Vision Mate acts as a digital companion, offering descriptive and interactive feedback to help users navigate both the digital and physical world with confidence.
            </p>
            <ul className="mt-4" style={{ listStyle: 'none', padding: 0 }}>
              <li className="mb-2"><span style={{ color: 'var(--accent-violet)' }}>✔</span> Multilingual Support (Sinhala & Tamil)</li>
              <li className="mb-2"><span style={{ color: 'var(--accent-violet)' }}>✔</span> Real-time Scene Perception</li>
              <li className="mb-2"><span style={{ color: 'var(--accent-violet)' }}>✔</span> Interactive Agentic Reasoning</li>
            </ul>
          </Col>
          <Col lg={6} data-aos="fade-left" className="text-center">
            <img 
              src={logo} 
              alt="Vision Mate" 
              className="img-fluid rounded-4" 
              style={{ 
                maxWidth: '80%', 
                background: 'rgba(255,255,255,0.02)', 
                padding: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px var(--accent-violet)22'
              }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
