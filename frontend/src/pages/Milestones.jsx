import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, CheckCircle } from 'lucide-react';

const milestonesData = [
  {
    id: 1,
    title: 'Project Proposal',
    date: 'February 15, 2025',
    marks: '15%',
    desc: 'Submission and presentation of the initial project idea, defining the problem statement, objectives, and proposed methodology for the Smart Reader application.'
  },
  {
    id: 2,
    title: 'Progress Presentation - 1',
    date: 'April 20, 2025',
    marks: '20%',
    desc: 'Demonstration of the initial component integration, including IVGN models (BiSeNetV2) deployment and dataset collection (ACTSEA) progress.'
  },
  {
    id: 3,
    title: 'Progress Presentation - 2',
    date: 'July 10, 2025',
    marks: '20%',
    desc: 'Showcasing the Generative QA features (Qwen LoRA fine-tuning for Tamil) and Voice Command Integration evaluations.'
  },
  {
    id: 4,
    title: 'Final Assessment',
    date: 'September 30, 2025',
    marks: '30%',
    desc: 'Submission of the complete working smart mobile prototype and the comprehensive final research document.'
  },
  {
    id: 5,
    title: 'Viva',
    date: 'October 15, 2025',
    marks: '15%',
    desc: 'Final oral examination addressing the defense of the research findings, methodologies, and technological choices.'
  }
];

const Milestones = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="milestones-page">
      <div className="page-header">
        <h1 className="title-gradient">Milestones</h1>
        <p>Project timeline, assessments, and allocated marks.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {milestonesData.map((milestone) => (
          <div 
            key={milestone.id} 
            className="glass-panel" 
            style={{ 
              marginBottom: '1rem', 
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={() => toggleAccordion(milestone.id)}
          >
            <div style={{ 
              padding: '20px 25px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              background: openId === milestone.id ? 'rgba(167, 139, 250, 0.1)' : 'transparent',
              transition: 'background 0.2s'
            }}>
              <div>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.2rem' }}>{milestone.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '10px', fontSize: '0.85rem', color: '#a78bfa' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {milestone.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <CheckCircle size={14} /> {milestone.marks}
                  </span>
                </div>
              </div>
              {openId === milestone.id ? <ChevronUp color="#a78bfa" /> : <ChevronDown color="#94a3b8" />}
            </div>
            
            {openId === milestone.id && (
              <div style={{ 
                padding: '0 25px 25px 25px', 
                color: '#cbd5e1', 
                lineHeight: '1.6',
                borderTop: '1px solid rgba(182, 157, 248, 0.1)',
                marginTop: '10px',
                paddingTop: '20px',
                animation: 'slideUp 0.3s ease-out'
              }}>
                <p>{milestone.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
