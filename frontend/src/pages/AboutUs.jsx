import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';

const MemberCard = ({ name, id, role }) => (
  <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}>
    <div style={{ height: '120px', background: 'linear-gradient(135deg, rgba(85,41,142,0.4), rgba(39,20,66,0.8))' }}></div>
    <div style={{ padding: '0 25px 30px', position: 'relative' }}>
      <div style={{ 
        width: '90px', 
        height: '90px', 
        borderRadius: '50%', 
        background: '#1e1b4b',
        border: '3px solid #0a0514',
        margin: '-45px auto 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '2rem', color: '#a78bfa', fontWeight: 'bold' }}>{name.charAt(0)}</span>
      </div>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{name}</h3>
      <p style={{ color: '#a78bfa', fontWeight: '500', marginBottom: '15px' }}>{role}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationCap size={16} /> Student ID: {id}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mail size={16} /> {name.toLowerCase()}@example.sliit.lk
        </p>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="title-gradient">About Our Team</h1>
        <p>The researchers behind the Voice Agentic Smart Reader Application.</p>
      </div>

      <div className="grid-2">
        <MemberCard name="Sharu" id="IT21000001" role="NLP & Machine Learning Lead" />
        <MemberCard name="Amasha" id="IT21000002" role="Computer Vision & UX Lead" />
        <MemberCard name="Maleesha" id="IT21000003" role="Data Engineer & Integrations" />
        <MemberCard name="Jithara" id="IT21000004" role="Speech Processing & TTS Lead" />
      </div>
    </div>
  );
};

export default AboutUs;
