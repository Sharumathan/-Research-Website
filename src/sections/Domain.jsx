import React, { useState } from 'react';
import { Container, Nav, Card } from 'react-bootstrap';
import { domainContent } from '../data/content';

import heroBg from '../assets/images/hero-bg.png';

const Domain = () => {
  const [activeTab, setActiveTab] = useState('Literature Survey');

  return (
    <section id="domain" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(rgba(15, 10, 30, 0.92), rgba(8, 5, 18, 0.95)), url(' + heroBg + ') center center no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <Container>
        <div className="section-title mb-5" data-aos="fade-up">
          <h2 style={{ color: '#fff', borderBottomColor: 'var(--accent-violet)' }}>Research Domain</h2>
          <p style={{ color: '#cbd5e1' }}>Deep diving into the components of our research journey.</p>
        </div>

        <div className="d-flex justify-content-center mb-5" data-aos="fade-up">
          <Nav variant="pills" className="domain-filters gap-3 flex-wrap justify-content-center">
            {Object.keys(domainContent).map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link 
                  active={activeTab === tab} 
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? 'var(--accent-violet)' : 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    border: '1px solid ' + (activeTab === tab ? 'var(--accent-violet)' : 'rgba(255, 255, 255, 0.1)'),
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Card className="border-0 shadow-lg rounded-4 overflow-hidden" data-aos="zoom-in" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Card.Body className="p-4 p-md-5">
            <h3 style={{ color: 'var(--accent-light)', fontWeight: '800', marginBottom: '25px', fontSize: '28px' }}>
              {domainContent[activeTab].title}
            </h3>
            <p className="justified-text" style={{ fontSize: '18px', lineHeight: '1.9', color: '#cbd5e1' }}>
              {domainContent[activeTab].text}
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Domain;
