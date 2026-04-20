import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { milestones } from '../data/content';

const Milestones = () => {
  return (
    <section id="milestones">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Project Milestones</h2>
          <p>Tracking our progress through the research lifecycle.</p>
        </div>

        <div className="timeline">
          {milestones.map((m, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <m.icon />
                </div>
                <div className="timeline-body p-4 rounded-4" style={{
                  background: 'linear-gradient(135deg, #0b071a 0%, #3e1b7a 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--accent-light)' }}>{m.date}</span>
                    <Badge bg={m.type === 'Group' ? 'info' : 'primary'} style={{ fontSize: '10px' }}>{m.type}</Badge>
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>{m.title}</h4>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>Mark Allocation: <strong>{m.marks}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

    </section>
  );
};

export default Milestones;
