import React, { useState } from 'react';
import { Container, Nav, Card } from 'react-bootstrap';
import { domainContent } from '../data/content';

const Domain = () => {
  const [activeTab, setActiveTab] = useState('Literature Survey');

  return (
    <section id="domain" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Research Domain</h2>
          <p>Deep diving into the components of our research journey.</p>
        </div>

        <div className="d-flex justify-content-center mb-5" data-aos="fade-up">
          <Nav variant="pills" className="domain-filters gap-2 flex-wrap justify-content-center">
            {Object.keys(domainContent).map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link 
                  active={activeTab === tab} 
                  onClick={() => setActiveTab(tab)}
                  style={{
                    backgroundColor: activeTab === tab ? 'var(--accent-violet)' : 'transparent',
                    color: activeTab === tab ? '#fff' : '#0F0A1E',
                    border: '1px solid var(--accent-violet)',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Card className="border-0 shadow-lg rounded-4 overflow-hidden" data-aos="zoom-in">
          <Card.Body className="p-4 p-md-5">
            <h3 style={{ color: 'var(--accent-deep)', fontWeight: '800', marginBottom: '20px' }}>
              {domainContent[activeTab].title}
            </h3>
            <p className="justified-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
              {domainContent[activeTab].text}
            </p>
          </Card.Body>
        </Card>
      </Container>

    </section>
  );
};

export default Domain;
