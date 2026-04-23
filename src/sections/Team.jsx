import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaUserCircle } from 'react-icons/fa';
import { team } from '../data/content';

import heroBg from '../assets/images/hero-bg.png';

const Team = () => {
  return (
    <section id="team" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(rgba(15, 10, 30, 0.94), rgba(8, 5, 18, 0.96)), url(' + heroBg + ') center center no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <Container>
        <div className="section-title mb-5" data-aos="fade-up">
          <h2 style={{ color: '#fff', borderBottomColor: 'var(--accent-violet)' }}>Our Team</h2>
          <p style={{ color: '#cbd5e1' }}>The dedicated researchers behind Vision Mate.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {team.map((member, idx) => (
            <Col key={idx} sm={6} lg={3} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="team-member text-center p-4 hover-lift rounded-4 transition-all" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <div className="member-img mb-4 d-inline-block text-center" style={{
                  color: 'var(--accent-light)',
                  fontSize: '100px',
                  lineHeight: '1',
                  filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))'
                }}>
                  {member.icon ? <member.icon /> : <FaUserCircle />}
                </div>
                <h4 style={{ fontSize: '19px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>{member.name}</h4>
                <p style={{ 
                  fontSize: '13px', 
                  color: 'var(--accent-light)', 
                  marginBottom: '20px', 
                  fontWeight: '600',
                  lineHeight: '1.4'
                }}>{member.role}</p>
                <div className="social-links d-flex justify-content-center gap-3">
                  {member.social.linkedin && <a href={member.social.linkedin} className="social-icon" style={{ color: '#94a3b8' }}><FaLinkedin size={20} /></a>}
                  {member.social.github && <a href={member.social.github} className="social-icon" style={{ color: '#94a3b8' }}><FaGithub size={20} /></a>}
                  {member.social.twitter && <a href={member.social.twitter} className="social-icon" style={{ color: '#94a3b8' }}><FaTwitter size={20} /></a>}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
