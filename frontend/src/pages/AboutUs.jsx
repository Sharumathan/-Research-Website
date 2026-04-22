import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';

const MemberCard = ({ name, id, role }) => {

  const email = `${id.toLowerCase()}@my.sliit.lk`;

  return (
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
          <span style={{ fontSize: '2rem', color: '#a78bfa', fontWeight: 'bold' }}>
            {name.charAt(0)}
          </span>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{name}</h3>
        <p style={{ color: '#a78bfa', fontWeight: '500', marginBottom: '15px' }}>{role}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={16} /> Student ID: {id}
          </p>

          {/* ✅ CLICKABLE EMAIL */}
          <a 
            href={`mailto:${email}?subject=Regarding Your Smart Reader Project`}
            style={{ 
              fontSize: '0.85rem', 
              color: '#94a3b8', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <Mail size={16} /> {email}
          </a>

        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="title-gradient">About Our Team</h1>
        <p>The researchers behind the Voice Agentic Smart Reader Application.</p>
      </div>

      <div className="grid-2">
        <MemberCard 
          name="Jithara(Leader)" 
          id="IT22336590" 
          role="Speech Processing & Emotional TTS(Text to Speech System) Lead in Sihala and Tamil" 
        />
        <MemberCard 
          name="Sharumathan(Member)" 
          id="IT22348234" 
          role="Conversational Tamil LLM & Content based Recommendation Lead" 
        />
        <MemberCard 
          name="Amasha(Member)" 
          id="IT22316486" 
          role="Rag based Summarization & Nonlinear navigation Lead in Sinhala" 
        />
        <MemberCard 
          name="Maleesha(Member)" 
          id="IT22326454" 
          role="User Hapic Guidence & Smart OCR system Lead in Sinhala and Tamil" 
        />
      </div>
    </div>
  );
};

export default AboutUs;