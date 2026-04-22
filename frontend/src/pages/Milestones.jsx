import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, CheckCircle } from 'lucide-react';

const milestonesData = [
  {
    id: 1,
    title: 'Project Proposal',
    date: 'September 8, 2025',
    marks: '15%',
    desc: 'Evaluation of the proposed solution, including problem definition, research objectives, and technical feasibility of the Smart Reader system. The proposed approach was accepted by the panel, confirming its relevance and potential impact. Feedback highlighted the need to enhance the system by incorporating emotionally expressive Tamil Text-to-Speech (TTS) capabilities to improve user interaction and accessibility.'
  },
  {
    id: 2,
    title: 'Progress Presentation - 1',
    date: 'January 5, 2026',
    marks: '20%',
    desc: 'Assessment of approximately 50% project completion, focusing on initial implementation and integration of core components such as IVGN models (BiSeNetV2) and dataset preparation (ACTSEA). Evaluators reviewed technical progress, system architecture, and experimental results. Feedback emphasized the need to strengthen the novelty and innovation aspects of each component to clearly differentiate the solution from existing approaches.'
  },
  {
    id: 3,
    title: 'Progress Presentation - 2',
    date: 'March 9, 2026',
    marks: '20%',
    desc: 'Evaluation of near-complete system development (around 90%), with emphasis on full integration of all components including Generative Question Answering (Qwen LoRA fine-tuned for Tamil) and Voice Command functionality. The system was expected to be deployed and demonstrated as a fully functional mobile application (Vision Mate). Feedback focused on improving system stability, seamless integration, and real-world usability.'
  },
  {
    id: 4,
    title: 'Final Assessment',
    date: 'May 4, 2026',
    marks: '30%',
    desc: 'Comprehensive evaluation of the completed Smart Reader system, including the fully functional mobile application, codebase quality, and final research documentation. Assessment criteria included implementation accuracy, system performance, usability, and readiness for real-world deployment. Special attention was given to the potential for scalability and commercialization of the solution.'
  },
  {
    id: 5,
    title: 'Viva',
    date: 'May 4, 2026',
    marks: '15%',
    desc: 'Final oral examination assessing the depth of understanding of the project, including research methodologies, design decisions, and technical implementations. The panel evaluated the ability to justify system choices, explain results, and discuss future improvements, scalability, and commercialization potential of the Smart Reader application.'
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
