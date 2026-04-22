import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronUp } from 'react-icons/fa';
import { footerInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer style={{ background: '#080512', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '20px' }}>VISION MATE</h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.8' }} className="mb-4">
              A pioneering research project focused on building an agentic smart reader for visually impaired individuals in South Asian languages.
            </p>
            <div style={{ color: '#e2e8f0', fontSize: '14px' }}>
              <p className="mb-1"><strong>Institution:</strong> {footerInfo.institution}</p>
              <p><strong>Location:</strong> {footerInfo.location}</p>
              <p className="mb-1 mt-2"><strong>Phone:</strong> {footerInfo.phone}</p>
              <p><strong>Email:</strong> {footerInfo.email}</p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '18px' }}>Useful Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
              {['Home', 'About Us', 'Features', 'Milestones', 'Team'].map(link => (
                <li key={link} className="mb-2">
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">
                    <span style={{ color: 'var(--accent-violet)', marginRight: '10px' }}>»</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '25px', fontSize: '18px' }}>Research Areas</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
              {['Generative AI', 'Scene Perception', 'Multilingual OCR', 'RAG Pipeline', 'Neural TTS'].map(item => (
                <li key={item} className="mb-2">
                  <span style={{ color: '#94a3b8' }}>
                    <span style={{ color: 'var(--accent-violet)', marginRight: '10px' }}>»</span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <a 
      href="#hero" 
      className={`back-to-top ${visible ? 'active' : ''}`}
    >
      <FaChevronUp />
    </a>
  );
};
