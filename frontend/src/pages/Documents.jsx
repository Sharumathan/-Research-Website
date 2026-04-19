import React from 'react';
import { FileDown, FileText } from 'lucide-react';

const DocumentCard = ({ title, desc, available }) => (
  <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div style={{ marginBottom: '20px' }}>
      <FileText size={40} color={available ? "#a78bfa" : "#64748b"} />
    </div>
    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '25px', flexGrow: 1 }}>{desc}</p>
    
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
      <FileDown size={18} />
      {available ? 'Download PDF' : 'Pending Document'}
    </button>
  </div>
);

const Documents = () => {
  return (
    <div className="documents-page">
      <div className="page-header">
        <h1 className="title-gradient">Project Documents</h1>
        <p>Repository for all core documentation and research papers developed over the course of the project.</p>
      </div>

      <div className="grid-3">
        <DocumentCard 
          title="Project Charter" 
          desc="The foundational document defining project scope, constraints, and stakeholder roles."
          available={true}
        />
        <DocumentCard 
          title="Proposal Document" 
          desc="Extensive report of the proposed intelligent architecture, including IVGN and RAG capabilities."
          available={true}
        />
        <DocumentCard 
          title="Check List Documents" 
          desc="Metric and evaluation guidelines used for ensuring semantic models hit the threshold."
          available={false} // Pending
        />
        <DocumentCard 
          title="Final Research Document" 
          desc="Comprehensive final dissertation incorporating QA logic, evaluations, and UI UX analysis."
          available={false} // Pending
        />
      </div>
    </div>
  );
};

export default Documents;
