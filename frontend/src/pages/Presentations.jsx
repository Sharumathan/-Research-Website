import React from 'react';
import { Presentation, MonitorPlay, FileDown } from 'lucide-react';

/* =========================
   Slide Card Component
========================= */
const SlideCard = ({ title, date, available, file, isPPT }) => {

  const handlePreview = () => {
    if (!file) return;

    if (isPPT) {
      alert("Preview not available for PPT. Please download the file.");
    } else {
      window.open(file, '_blank'); // preview PDF
    }
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top Icon Section */}
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

      {/* Content */}
      <div style={{
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
          {title}
        </h3>

        <p style={{
          color: '#94a3b8',
          fontSize: '0.85rem',
          marginBottom: '20px',
          flexGrow: 1
        }}>
          Presented on: {date}
        </p>

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
                opacity: isPPT ? 0.6 : 1,
                cursor: isPPT ? 'not-allowed' : 'pointer'
              }}
            >
              <MonitorPlay size={18} />
              {isPPT ? 'Preview Not Available' : 'View Slides'}
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
                Download Slides
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
            Not Yet Available
          </button>
        )}
      </div>
    </div>
  );
};

/* =========================
   Main Presentations Page
========================= */
const Presentations = () => {
  return (
    <div className="presentations-page">
      <div className="page-header">
        <h1 className="title-gradient">Presentations</h1>
        <p>
          Access the slide decks from all of our major milestone presentations.
        </p>
      </div>

      <div className="grid-3">

        {/* Proposal */}
        <SlideCard
          title="Proposal Presentation"
          date="Sep 8, 2025"
          available={true}
          file="/presentations/proposal_pre.pdf"
          isPPT={false}
        />

        {/* PP1 */}
        <SlideCard
          title="Progress Presentation 1"
          date="Jan 5, 2026"
          available={true}
          file="/presentations/pp1_pre.pdf"
          isPPT={false}
        />

        {/* PP2 (PPT example) */}
        <SlideCard
          title="Progress Presentation 2"
          date="March 9, 2026"
          available={true}
          file="/presentations/pp2_pre.pdf"
          isPPT={false}
        />

        {/* Final */}
        <SlideCard
          title="Final Presentation"
          date="May 4, 2026"
          available={false}
        />

      </div>
    </div>
  );
};

export default Presentations;