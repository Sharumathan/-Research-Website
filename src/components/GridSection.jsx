import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaTv } from 'react-icons/fa';

const GridSection = ({ id, title, subtitle, items, isPresentation = false, bgClass = "" }) => {
  return (
    <section id={id} className={bgClass}>
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <Row className="g-4">
          {items.map((item, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="p-4 rounded-4 text-center hover-lift h-100 shadow-sm" style={{
                background: '#ffffff',
                border: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="mb-4 d-inline-block p-1" style={{
                    fontSize: '60px'
                  }}>
                    {item.icon ? <item.icon /> : (isPresentation ? <FaTv color="#4285F4" /> : <FaFilePdf color="#EA4335" />)}
                  </div>
                  <h4 style={{ 
                    fontSize: '22px', 
                    fontWeight: '800', 
                    color: '#2d3748',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </h4>
                  <p className="mt-3 justified-text" style={{ 
                    fontSize: '14px', 
                    color: '#4a5568',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
                <Button 
                  variant="outline-primary" 
                  className="mt-4 w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    borderColor: '#4285F4',
                    color: '#4285F4',
                    fontWeight: '700',
                    borderRadius: '8px'
                  }}
                >
                  <FaDownload /> Download
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GridSection;
