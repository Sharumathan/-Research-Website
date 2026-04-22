import {
  FaBrain, FaEye, FaMicrophone, FaBookOpen, FaFileAlt,
  FaChalkboard, FaUsers, FaEnvelope, FaMapMarkerAlt,
  FaPhone, FaDownload, FaUserCircle, FaTv, FaFilePdf, FaImage, FaLaptopCode, FaAws
} from 'react-icons/fa';
import {
  SiTensorflow, SiPython, SiReact, SiRender,
  SiOpencv, SiGooglecloud, SiNvidia, SiFlutter, SiGooglecolab, SiKeras
} from 'react-icons/si';
import {
  FcDocument, FcBriefcase, FcReading, FcGraduationCap, FcKindle, FcSurvey, FcGallery
} from 'react-icons/fc';

export const techLogos = [
  { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00' },
  { name: 'NVIDIA CUDA', icon: SiNvidia, color: '#76B900' },
  { name: 'Keras', icon: SiKeras, color: '#D00000' },
  { name: 'Render', icon: SiRender, color: '#9E9E9E' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'SinBERT', icon: FaBrain, color: '#6D28D9' },
  { name: 'Qwen2.5', icon: FaBrain, color: '#3B82F6' },
  { name: 'RAG', icon: FaBrain, color: '#10B981' },
];

export const features = [
  {
    title: 'Visual Scene Perception',
    description: 'Advanced real-time scene analysis using BiSeNetV2 for pixel-level segmentation, allowing users to understand their surroundings through voice. This includes distance estimation and object relationship mapping.',
    icon: FaEye,
    color: '#8B5CF6'
  },
  {
    title: 'Multilingual OCR',
    description: 'Highly accurate text extraction for Sinhala and Tamil scripts using Google Cloud Vision and custom fine-tuned transformer models. Supports handwritten and printed documents in complex environmental conditions.',
    icon: FaBookOpen,
    color: '#A78BFA'
  },
  {
    title: 'Agentic Smart Interaction',
    description: 'Powered by Qwen2.5-3B-Instruct with RAG pipeline, enabling natural language conversations about the captured visual content. Users can ask follow-up questions to clarify specific visual details.',
    icon: FaBrain,
    color: '#6D28D9'
  },
  {
    title: 'Emotion-Conditioned TTS',
    description: 'Generating human-like, expressive speech output in Sinhala and Tamil that conveys context and emotion. The system adapts tone based on the urgency and nature of the visual information.',
    icon: FaMicrophone,
    color: '#8B5CF6'
  },
  {
    title: 'Low Latency Processing',
    description: 'Optimized for mobile use with NVIDIA CUDA acceleration and lightweight models like DistilBERT for fast response times. Ensures a seamless, near real-time interaction loop for the user.',
    icon: SiNvidia,
    color: '#A78BFA'
  }
];

export const domainContent = {
  'Literature Survey': {
    title: 'Literature Survey',
    text: 'Existing solutions for visually impaired people often focus on single languages or lack contextual awareness. Research shows that while OCR has advanced, its integration with agentic reasoning in South Asian languages like Sinhala and Tamil remains a significant gap. Studies on ACTSEA and DocSeg v2 highlight the challenges in document segmentation and quality for low-resource languages.'
  },
  'Research Problem': {
    title: 'Research Problem',
    text: 'Visually impaired Sinhala and Tamil speakers face significant barriers accessing printed materials, despite global advances in assistive technology. According to the WHO, over 1 billion people experience vision impairment worldwide, limiting access to education and information. In Sri Lanka and Tamil-speaking regions, lack of robust tools for Sinhala/Tamil OCR and expressive Text to Speech (TTS) exacerbates this gap. Benchmarks show that common OCR engines (e.g., Tesseract, EasyOCR) yield high error rates on Sinhala/Tamil documents due to complex scripts, legacy fonts, varied layouts, and real-world capture distortions. Meanwhile, TTS systems for these languages often lack naturalness and emotional nuance, reducing comprehension and engagement for long-form content. Compounding this, visually impaired users struggle to align cameras properly for document capture. Studies demonstrate that audio/haptic guidance markedly improves framing success, but existing solutions rarely target Sinhala/Tamil text characteristics (e.g., detecting upside-down Sinhala script). Blur, low light, skew, and orientation errors further degrade OCR accuracy, leading to user frustration. Additionally, navigating lengthy documents via voice without intelligent segmentation or summarization forces linear reading, hindering efficient information access. Thus, the research problem is to create a voice-agentic reader tailored for Sinhala and Tamil visually impaired users that: (1) provides voice/haptic camera-alignment guidance handling blur, focus, and upside-down pages; (2) generates emotionally expressive, context-aware TTS in Sinhala; (3) segments and summarizes with Sinhala LLM for long documents on demand; and (4) segments and summarizes with Tamil LLM for long document on demand. Addressing these challenges can democratize access to printed and digital Sinhala/Tamil content, improving education, literacy, and inclusion.'
  },
  'Research Gap': {
    title: 'Research Gap',
    text: 'The primary gap lies in the lack of an integrated "Agentic Smart Reader" that combines high-fidelity OCR with generative AI capabilities specifically optimized for Sinhala and Tamil. Current systems fail to handle complex layouts and do not offer a robust natural language interface for multi-turn queries about the text.'
  },
  'Research Objective': {
    title: 'Research Objective',
    text: `The main objective of this research is to develop a voice-agentic smart reader application specifically designed to empower 
visually impaired Sinhala and Tamil speakers by integrating advanced, human-centered technologies that go beyond 
traditional assistive tools. The system will combine semantic-aware Optical Character Recognition (OCR) with emotionally 
expressive Text-to-Speech (TTS) to not only read text from complex Sinhala and Tamil documents but also understand the 
deeper meaning and convey it through natural, emotion-rich voice output. It will further incorporate intelligent subtopic 
detection and user-personalized summarization features, enabling non-linear navigation and tailored content consumption 
through simple voice commands, thus improving efficiency and user control. Additionally, the system will feature real-time 
haptic and voice-guided document alignment assistance to help users independently capture well-oriented document 
images, ensuring high OCR accuracy even under imperfect conditions. Finally, an interactive, context-aware voice agent will 
enrich the user’s learning experience by proactively offering explanations, cross-referencing unfamiliar concepts with 
external knowledge bases, and supporting natural follow-up questions in Sinhala and Tamil. Together, these components 
aim to provide a seamless, intelligent, and empowering reading and learning experience tailored to the needs of visually 
impaired users in low-resource language communities. `
  },
  'Methodology': {
    title: 'Methodology',
    text: 'The methodology involves a sequence of image processing (using OpenCV), region segmentation (BiSeNetV2), and text extraction. This is followed by a RAG-based Generative AI layer using LoRA fine-tuned Qwen models. The system is deployed via a Flutter-based mobile application communicating with a high-performance backend.'
  },
  'Technologies': {
    title: 'Technologies',
    text: 'The stack leverages NVIDIA CUDA for training, Google Cloud Vision for initial OCR, and custom transformer models like SinBERT and XLM-RoBERTa. The interaction layer uses a RAG pipeline to ensure factual grounding in the extracted text, with output delivered via an emotion-conditioned neural TTS system.'
  }
};

export const milestones = [
  { title: 'Topic Assessment Form (TAF)', date: 'June 2025', marks: '5%', icon: FcDocument, type: 'Individual' },
  { title: 'Project Charter', date: 'July 2025', marks: '10%', icon: FcBriefcase, type: 'Group' },
  { title: 'Proposal reports (draft)', date: 'August 2025', marks: '5%', icon: FcReading, type: 'Group' },
  { title: 'Proposal presentation', date: 'September 2025', marks: '15%', icon: FaTv, type: 'Group' },
  { title: 'Proposal reports (final)', date: 'October 2025', marks: '10%', icon: FcDocument, type: 'Group' },
  { title: 'Progress Presentation – I', date: 'November 2025', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Check List I', date: 'December 2025', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Research paper', date: 'January 2026', marks: '20%', icon: FcGraduationCap, type: 'Individual' },
  { title: 'Final reports', date: 'February 2026', marks: '15%', icon: FcDocument, type: 'Group' },
  { title: 'Progress Presentation – II', date: 'March 2026', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Check List II', date: 'April 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Submission of RP', date: 'May 2026', marks: 'N/A', icon: FcKindle, type: 'Individual' },
  { title: 'Final presentation & VIVA', date: 'June 2026', marks: '25%', icon: FcGraduationCap, type: 'Group' },
  { title: 'Project website', date: 'July 2026', marks: '5%', icon: FaLaptopCode, type: 'Group' },
  { title: 'Research logbook', date: 'August 2026', marks: '5%', icon: FcGallery, type: 'Individual' },
];

export const team = [
  { name: 'Researcher One', role: 'Lead AI Engineer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Two', role: 'Mobile Developer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Three', role: 'NLP Specialist', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Four', role: 'UI/UX Designer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } }
];

export const documents = [
  { title: 'Project Charter', description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project.', icon: FcBriefcase, file: '#' },
  { title: 'Project Proposal', description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.', icon: FcDocument, file: '#' },
  { title: 'Research Paper', description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research.', icon: FcGraduationCap, file: '#' },
];

export const presentations = [
  { title: 'Inception Presentation', description: 'Initial pitch for the research concept summarizing the problem and proposed solution.', icon: FaTv, file: '#' },
  { title: 'Mid-term Progress', description: 'Status update on model training progress and initial prototype evaluation results.', icon: FaTv, file: '#' },
  { title: 'Final Viva', description: 'Comprehensive presentation of all research findings and final system demonstration.', icon: FaTv, file: '#' },
];

export const footerInfo = {
  institution: 'Sri Lanka Institute of Information Technology',
  location: 'Malabe, Sri Lanka',
  phone: '+94 11 234 5678',
  email: 'visionmate.research@example.com'
};
