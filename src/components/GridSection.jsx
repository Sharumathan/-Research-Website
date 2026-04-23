import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaTv } from 'react-icons/fa';
import heroBg from '../assets/images/hero-bg.png';

const GridSection = ({ id, title, subtitle, items, isPresentation = false, bgClass = "" }) => {
  return (
    <section id={id} style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(rgba(8, 5, 18, 0.9), rgba(15, 10, 30, 0.9)), url(' + heroBg + ') center center no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <Container>
        <div className="section-title mb-5" data-aos="fade-up">
          <h2 style={{ color: '#fff', borderBottomColor: 'var(--accent-violet)' }}>{title}</h2>
          <p style={{ color: '#cbd5e1' }}>{subtitle}</p>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="p-4 rounded-4 text-center h-100 transition-all hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
              }}>
                <div>
                  <div className="mb-4 d-inline-block p-1" style={{ fontSize: '60px' }}>
                    {item.icon ? <item.icon color="var(--accent-light)" /> : (isPresentation ? <FaTv color="#4285F4" /> : <FaFilePdf color="#EA4335" />)}
                  </div>
                  <h4 style={{ 
                    fontSize: '22px', 
                    fontWeight: '800', 
                    color: '#fff',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h4>
                  <p className="justified-text" style={{ 
                    fontSize: '14px', 
                    color: '#94a3b8',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
                {item.file ? (
                  <a 
                    href={item.file} 
                    download 
                    className="mt-4 w-100 py-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none transition-all"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-violet) 0%, var(--accent-deep) 100%)',
                      color: '#ffffff',
                      fontWeight: '700',
                      borderRadius: '12px',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                      border: 'none'
                    }}
                  >
                    <FaDownload /> Download
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="mt-4 w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#64748b',
                      fontWeight: '700',
                      borderRadius: '12px',
                      border: '1px dashed rgba(255, 255, 255, 0.1)',
                      cursor: 'not-allowed'
                    }}
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GridSection;
