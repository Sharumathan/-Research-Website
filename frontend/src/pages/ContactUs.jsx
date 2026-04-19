import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="title-gradient">Contact Us</h1>
        <p>Reach out to us for any inquiries regarding the research project.</p>
      </div>

      <div className="grid-2">
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ marginBottom: '30px' }}>Get In Touch</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <Mail color="#a78bfa" size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>General Email</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>research@sliit.lk</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <Phone color="#a78bfa" size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>Phone</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>+94 11 234 5678</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <MapPin color="#a78bfa" size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>University</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Sri Lanka Institute of Information Technology</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ marginBottom: '25px' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Your Name</label>
              <input type="text" placeholder="John Doe" style={{ 
                width: '100%', padding: '12px 15px', borderRadius: '8px', 
                background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(182, 157, 248, 0.2)',
                color: '#fff', outline: 'none'
              }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Your Email</label>
              <input type="email" placeholder="john@example.com" style={{ 
                width: '100%', padding: '12px 15px', borderRadius: '8px', 
                background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(182, 157, 248, 0.2)',
                color: '#fff', outline: 'none'
              }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>Message</label>
              <textarea placeholder="How can we help?" rows="4" style={{ 
                width: '100%', padding: '12px 15px', borderRadius: '8px', 
                background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(182, 157, 248, 0.2)',
                color: '#fff', outline: 'none', resize: 'vertical'
              }}></textarea>
            </div>

            <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
