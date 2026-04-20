import React from 'react';
import { Container } from 'react-bootstrap';

const CTABanner = () => {
  return (
    <section id="cta" style={{
      background: 'linear-gradient(rgba(15, 10, 30, 0.9), rgba(15, 10, 30, 0.9)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: '100px 0',
      textAlign: 'center',
      borderTop: '1px solid var(--accent-violet)',
      borderBottom: '1px solid var(--accent-violet)'
    }}>
      <Container data-aos="zoom-in">
        <h2 style={{ 
          fontFamily: 'var(--font-hero)', 
          fontSize: '48px', 
          fontWeight: '800', 
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          VISION MATE
        </h2>
        <p style={{ 
          fontSize: '20px', 
          color: 'var(--accent-light)', 
          maxWidth: '700px', 
          margin: '20px auto 0',
          fontStyle: 'italic'
        }}>
          "Empowering the visually impaired through the lens of artificial intelligence."
        </p>
      </Container>
    </section>
  );
};

export default CTABanner;
