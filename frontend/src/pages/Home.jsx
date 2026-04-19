import React from 'react';
import { Bot, FileText, Ear, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-icon">
          <Bot size={40} />
        </div>
        <h1 className="title-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Open LLM Reader</h1>
        <p style={{ color: '#b69df8', fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Voice Agentic Smart Reader Application In Sinhala and Tamil For Visually Impaired People
        </p>
        
        <div style={{ maxWidth: '800px', textAlign: 'center', lineHeight: '1.8', marginBottom: '3rem', color: '#cbd5e1' }}>
          <p>
            Access to printed content in low-resource languages remains a challenge for visually impaired users. 
            Our intelligent multi-component system integrates document acquisition, RAG-based understanding, 
            interactive voice navigation, and emotionally expressive Text-to-Speech (TTS) for Sinhala and Tamil languages.
          </p>
        </div>

        <Link to="/domain" className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Explore Research Domain <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid-3" style={{ marginTop: '2rem' }}>
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <FileText size={36} color="#a78bfa" style={{ marginBottom: '1rem' }} />
          <h3>Smart Document Capture</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Real-time geometric guidance using non-visual auditory feedback for OCR-ready images.</p>
        </div>
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <Bot size={36} color="#a78bfa" style={{ marginBottom: '1rem' }} />
          <h3>LLM Knowledge Access</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Document-grounded Question Answering with Tamil RAG and Sinhala Voice Commands.</p>
        </div>
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
          <Ear size={36} color="#a78bfa" style={{ marginBottom: '1rem' }} />
          <h3>Emotional Voices</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Expressive Text-to-Speech overcoming monotonous limitations in standard screen readers.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
