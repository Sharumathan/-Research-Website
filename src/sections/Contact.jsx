import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { footerInfo } from '../data/content';

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
    <section id="contact" className="section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in touch with the Vision Mate research team.</p>
        </div>

        <Row className="g-4">
          <Col lg={5} data-aos="fade-right">
            <div className="info-box p-4 mb-4 rounded-4 shadow-sm bg-white hover-lift">
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-3" color="var(--accent-violet)" size={24} />
                <h5 className="mb-0" style={{ color: '#0F0A1E', fontWeight: '700' }}>Location</h5>
              </div>
              <p className="mb-0 text-muted">{footerInfo.institution}, {footerInfo.location}</p>
            </div>

            <div className="info-box p-4 mb-4 rounded-4 shadow-sm bg-white hover-lift">
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-3" color="var(--accent-violet)" size={24} />
                <h5 className="mb-0" style={{ color: '#0F0A1E', fontWeight: '700' }}>Email</h5>
              </div>
              <p className="mb-0 text-muted">{footerInfo.email}</p>
            </div>

            <div className="info-box p-4 rounded-4 shadow-sm bg-white hover-lift">
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-3" color="var(--accent-violet)" size={24} />
                <h5 className="mb-0" style={{ color: '#0F0A1E', fontWeight: '700' }}>Call</h5>
              </div>
              <p className="mb-0 text-muted">{footerInfo.phone}</p>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white">
              {status && <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>{status.message}</Alert>}
              
              <Form ref={form} onSubmit={sendEmail}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="userName">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600' }}>Your Name</Form.Label>
                      <Form.Control type="text" name="user_name" placeholder="John Doe" required className="py-2 border-light-subtle" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="userEmail">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600' }}>Your Email</Form.Label>
                      <Form.Control type="email" name="user_email" placeholder="john@example.com" required className="py-2 border-light-subtle" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="subject">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600' }}>Subject</Form.Label>
                      <Form.Control type="text" name="subject" placeholder="Research Collaboration" required className="py-2 border-light-subtle" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="message">
                      <Form.Label style={{ fontSize: '14px', fontWeight: '600' }}>Message</Form.Label>
                      <Form.Control as="textarea" name="message" rows={5} placeholder="Write your message here..." required className="py-2 border-light-subtle" />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-center mt-4">
                    <Button 
                      type="submit" 
                      disabled={loading}
                      style={{ 
                        background: 'var(--accent-violet)', 
                        border: 'none', 
                        padding: '12px 40px', 
                        borderRadius: '50px',
                        fontWeight: '700'
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
