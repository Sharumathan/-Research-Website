import React from 'react';
import { Presentation, MonitorPlay } from 'lucide-react';

const SlideCard = ({ title, date, available }) => (
  <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    <div style={{ 
      height: '160px', 
      background: 'rgba(0,0,0,0.3)', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      borderBottom: '1px solid rgba(182, 157, 248, 0.1)'
    }}>
      <Presentation size={60} color={available ? "#a78bfa" : "#334155"} />
    </div>
    <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px', flexGrow: 1 }}>Presented on: {date}</p>
      
      <button 
        className="btn-primary" 
        style={{ 
          width: '100%', 
          justifyContent: 'center',
          background: available ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
          color: available ? '#fff' : '#64748b',
          cursor: available ? 'pointer' : 'not-allowed',
          pointerEvents: available ? 'auto' : 'none'
        }}
      >
        <MonitorPlay size={18} />
        {available ? 'View Slides' : 'Not Yet Available'}
      </button>
    </div>
  </div>
);

const Presentations = () => {
  return (
    <div className="presentations-page">
      <div className="page-header">
        <h1 className="title-gradient">Presentations</h1>
        <p>Access the slide decks from all of our major milestone presentations.</p>
      </div>

      <div className="grid-3">
        <SlideCard title="Proposal Presentation" date="Feb 20, 2025" available={true} />
        <SlideCard title="Progress Presentation 1" date="April 25, 2025" available={true} />
        <SlideCard title="Progress Presentation 2" date="July 15, 2025" available={false} />
        <SlideCard title="Final Presentation" date="October 05, 2025" available={false} />
      </div>
    </div>
  );
};

export default Presentations;
