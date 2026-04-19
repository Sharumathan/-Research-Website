import React from 'react';
import { BookOpen, Target, Settings, Code, Zap } from 'lucide-react';

const Domain = () => {
  return (
    <div className="domain-page">
      <div className="page-header">
        <h1 className="title-gradient">Research Domain</h1>
        <p>Comprehensive overview of our methodology and technologies.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <BookOpen color="#a78bfa" size={28} />
            <h2>Literature Survey & Gap</h2>
          </div>
          <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
            Existing mobile document acquisition systems (KNFB Reader, Seeing AI) rely on cloud OCR and provide visual-only alignment. 
            Linear screen readers lack non-linear interaction and emotional expression. Furthermore, RAG frameworks are underexplored for low-resource languages like Tamil and Sinhala.
            Our research bridges the gap by orchestrating isolated components into a unified, human-centric architecture.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <Target color="#a78bfa" size={28} />
            <h2>Research Objectives</h2>
          </div>
          <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>To create an Intelligent Voice-Guided Navigation (IVGN) for non-visual capture.</li>
            <li style={{ marginBottom: '10px' }}>To develop a Tamil article understanding and question-answering module (RAG).</li>
            <li style={{ marginBottom: '10px' }}>To implement a voice-assisted Sinhala smart reader supporting non-linear navigation.</li>
            <li style={{ marginBottom: '10px' }}>To generate Emotional TTS for both Sinhala and Tamil to enhance auditory UX.</li>
          </ul>
        </div>

        <div className="grid-2">
          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <Settings color="#a78bfa" size={28} />
              <h2>Methodology</h2>
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
              The system operates as a modular pipeline starting from mobile capture, progressing through PyTorch Edge geometric assessment. Once acquired, semantic blocks are routed via language classifiers. Tamil texts perform RAG question answering using fine-tuned LoRA Qwen models, while Sinhala text interacts via non-linear Voice Intent SVMs. Finally, it routes back through Emotion-Conditioned TTS Acoustic modeling.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <Code color="#a78bfa" size={28} />
              <h2>Technologies Used</h2>
            </div>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.7', paddingLeft: '20px', listStyleType: 'square' }}>
              <li style={{ marginBottom: '10px' }}><strong>Machine Learning:</strong> BiSeNetV2, XLM-RoBERTa, DistilBERT, SinBERT</li>
              <li style={{ marginBottom: '10px' }}><strong>Generative AI:</strong> Qwen2.5-3B-Instruct (LoRA Fine-Tuned), RAG Pipeline</li>
              <li style={{ marginBottom: '10px' }}><strong>Speech Processing:</strong> Linear SVM for NLP Intake, Emotion-Conditioned Neural TTS</li>
              <li style={{ marginBottom: '10px' }}><strong>Datasets:</strong> ACTSEA, DocSeg v2, CHAI Tamil QA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
