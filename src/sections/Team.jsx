import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaUserCircle } from 'react-icons/fa';
import { team } from '../data/content';

const Team = () => {
  return (
    <section id="team" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ color: '#000000' }}>Our Team</h2>
          <p>The dedicated researchers behind Vision Mate.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {team.map((member, idx) => (
            <Col key={idx} sm={6} lg={3} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="team-member text-center p-4 hover-lift rounded-4 shadow-sm" style={{
                background: '#ffffff',
                border: '1px solid #eee'
              }}>
                <div className="member-img mb-4 d-inline-block text-center" style={{
                  color: 'var(--accent-violet)',
                  fontSize: '100px',
                  lineHeight: '1'
                }}>
                  {member.icon ? <member.icon /> : <FaUserCircle />}
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#2d3748' }}>{member.name}</h4>
                <p style={{ fontSize: '14px', color: 'var(--accent-violet)', marginBottom: '20px', fontWeight: '600' }}>{member.role}</p>
                <div className="social-links d-flex justify-content-center gap-3">
                  {member.social.linkedin && <a href={member.social.linkedin} className="social-icon" style={{ color: '#4a5568' }}><FaLinkedin size={20} /></a>}
                  {member.social.github && <a href={member.social.github} className="social-icon" style={{ color: '#4a5568' }}><FaGithub size={20} /></a>}
                  {member.social.twitter && <a href={member.social.twitter} className="social-icon" style={{ color: '#4a5568' }}><FaTwitter size={20} /></a>}
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
