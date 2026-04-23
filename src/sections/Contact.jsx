import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { footerInfo } from '../data/content';
import heroBg from '../assets/images/hero-bg.png';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'danger', message: string }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Placeholder credentials - User needs to fill these
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
          setLoading(false);
          e.target.reset();
      }, (error) => {
          setStatus({ type: 'danger', message: 'Failed to send message. Please try again later or email us directly.' });
          setLoading(false);
      });
  };

  return (
    <section id="contact" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(rgba(15, 10, 30, 0.95), rgba(8, 5, 18, 0.98)), url(' + heroBg + ') center center no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <Container>
        <div className="section-title mb-5" data-aos="fade-up">
          <h2 style={{ color: '#fff', borderBottomColor: 'var(--accent-violet)' }}>Contact Us</h2>
          <p style={{ color: '#cbd5e1' }}>Get in touch with the Vision Mate research team.</p>
        </div>

        <Row className="g-4">
          <Col lg={5} data-aos="fade-right">
            {[
              { title: 'Location', info: footerInfo.institution + ', ' + footerInfo.location, icon: FaMapMarkerAlt },
              { title: 'Email', info: footerInfo.email, icon: FaEnvelope },
              { title: 'Call', info: footerInfo.phone, icon: FaPhone }
            ].map((item, i) => (
              <div key={i} className="info-box p-4 mb-4 rounded-4 transition-all hover-lift" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <item.icon color="var(--accent-light)" size={22} />
                  </div>
                  <h5 className="mb-0" style={{ color: '#fff', fontWeight: '700' }}>{item.title}</h5>
                </div>
                <p className="mb-0" style={{ color: '#94a3b8', fontSize: '15px' }}>{item.info}</p>
              </div>
            ))}
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="p-4 p-md-5 rounded-4 shadow-lg" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              {status && <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>{status.message}</Alert>}
              
              <Form ref={form} onSubmit={sendEmail}>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group controlId="userName">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600', color: '#cbd5e1' }}>Your Name</Form.Label>
                      <Form.Control type="text" name="user_name" placeholder="John Doe" required style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '12px'
                      }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="userEmail">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600', color: '#cbd5e1' }}>Your Email</Form.Label>
                      <Form.Control type="email" name="user_email" placeholder="john@example.com" required style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '12px'
                      }} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="subject">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600', color: '#cbd5e1' }}>Subject</Form.Label>
                      <Form.Control type="text" name="subject" placeholder="Research Collaboration" required style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '12px'
                      }} />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="message">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600', color: '#cbd5e1' }}>Message</Form.Label>
                      <Form.Control as="textarea" name="message" rows={5} placeholder="Write your message here..." required style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '12px'
                      }} />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-center mt-4">
                    <Button 
                      type="submit" 
                      disabled={loading}
                      style={{ 
                        background: 'linear-gradient(135deg, var(--accent-violet) 0%, var(--accent-deep) 100%)',
                        border: 'none', 
                        padding: '14px 50px', 
                        borderRadius: '50px',
                        fontWeight: '700',
                        boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
                      }}
                    >
                      {loading ? <Spinner animation="border" size="sm" /> : 'Send Message'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
