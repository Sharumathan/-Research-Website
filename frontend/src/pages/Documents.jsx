import React from 'react';
import { FileDown, FileText, Eye } from 'lucide-react';

/* =========================
   Document Card Component
========================= */
const DocumentCard = ({ title, desc, available, file, isZip }) => {

  const handlePreview = () => {
    if (!file) return;

    if (isZip) {
      alert("Preview not available for multiple documents. Please download the ZIP file.");
    } else {
      window.open(file, '_blank');
    }
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: '20px' }}>
        <FileText size={40} color={available ? "#a78bfa" : "#64748b"} />
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: '#94a3b8',
          fontSize: '0.9rem',
          marginBottom: '20px',
          flexGrow: 1
        }}
      >
        {desc}
      </p>

      {/* Buttons */}
      {available ? (
        <>
          {/* Preview */}
          <button
            onClick={handlePreview}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginBottom: '10px',
              opacity: isZip ? 0.6 : 1,
              cursor: isZip ? 'not-allowed' : 'pointer'
            }}
          >
            <Eye size={18} />
            {isZip ? 'Preview Not Available' : 'Preview'}
          </button>

          {/* Download */}
          <a href={file} download style={{ textDecoration: 'none' }}>
            <button
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <FileDown size={18} />
              {isZip ? 'Download ZIP' : 'Download PDF'}
            </button>
          </a>
        </>
      ) : (
        <button
          className="btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            color: '#64748b',
            cursor: 'not-allowed'
          }}
        >
          Pending Document
        </button>
      )}
    </div>
  );
};

/* =========================
   Main Documents Page
========================= */
const Documents = () => {
  return (
    <div className="documents-page">
      <div className="page-header">
        <h1 className="title-gradient">Project Documents</h1>
        <p>
          Repository for all core documentation and research papers developed over the course of the project.
        </p>
      </div>

      <div className="grid-3">

        {/* ZIP (multiple docs) */}
        <DocumentCard
          title="Project Proposal Documents"
          desc="Includes proposal report, diagrams, and supporting materials submitted during the initial phase."
          available={true}
          file="/documents/proposal.zip"
          isZip={true}
        />

        {/* ZIP (multiple docs) */}
        <DocumentCard
          title="Checklist Documents"
          desc="Evaluation checklists, validation sheets, and assessment criteria used during project reviews."
          available={true}
          file="/documents/checklist.zip"
          isZip={true}
        />

        {/* Single PDF */}
        <DocumentCard
          title="Research Paper"
          desc="Published research paper presenting methodology, experiments, and key findings of the Smart Reader system."
          available={true}
          file="/documents/conference_paper.pdf"
          isZip={false}
        />

        {/* Pending */}
        <DocumentCard
          title="Final Research Draft Documents"
          desc="Comprehensive final dissertation including full implementation, evaluation, and system analysis."
          available={false}
        />

         <DocumentCard
          title="Research Thesis Document"
          desc="A document where you explain what you built, why you built it, and how you proved it works"
          available={false}
        />

      </div>
    </div>
  );
};

export default Documents;