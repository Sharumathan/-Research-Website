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
    text: 'The development of assistive reading technologies has been significantly influenced by advancements in optical character recognition (OCR), natural language processing (NLP), and speech synthesis. Transformer-based OCR systems such as TrOCR have improved text extraction accuracy under varying real-world conditions, while prior studies on assistive navigation highlight the effectiveness of auditory feedback for visually impaired users during document capture. Additionally, multilingual transformer models and large language models (LLMs) have demonstrated strong capabilities in text summarization, classification, and question answering. However, most of these approaches primarily focus on high-resource languages, leaving limited support for low-resource languages such as Sinhala and Tamil. Existing screen readers also rely heavily on linear reading paradigms and lack intelligent navigation and emotional expressiveness. Therefore, current research emphasizes the need for integrated systems that combine document acquisition, semantic understanding, interactive retrieval, and expressive speech synthesis into a unified framework.'
  },
  'Research Problem': {
    title: 'Research Problem',
    text : 'Despite recent advancements in assistive technologies, visually impaired users still face major challenges when accessing textual content, especially in low-resource languages like Sinhala and Tamil. Existing systems are often fragmented, addressing only specific tasks such as OCR, speech output, or navigation independently. This results in poor user experience, limited adaptability, and inefficient interaction. Furthermore, accurate document capture without visual feedback remains difficult due to alignment and orientation issues, while traditional screen readers lack non-linear navigation capabilities. In addition, current text-to-speech systems produce monotonous speech, reducing user engagement and comprehension. These limitations highlight the need for a comprehensive and intelligent solution that enables seamless document interaction, natural voice-based navigation, and expressive speech output for visually impaired users.'
  },
  'Research Gap': {
    title: 'Research Gap',
    text : 'Although prior studies have explored OCR, NLP, and speech synthesis individually, there is a clear gap in integrating these technologies into a unified system tailored for low-resource languages. Most existing solutions lack support for Sinhala and Tamil in advanced tasks such as document-grounded question answering, semantic segmentation, and intelligent navigation. Additionally, Retrieval-Augmented Generation (RAG) techniques have been widely applied in high-resource languages but remain underexplored in Tamil structured document understanding. Emotional text-to-speech systems are also limited due to the scarcity of annotated datasets and linguistic complexity. Moreover, existing assistive systems fail to provide adaptive, context-aware guidance during document capture and do not support personalized or interactive reading experiences. This research addresses these gaps by proposing a multi-component system that integrates intelligent capture, structured understanding, interactive retrieval, and emotional speech synthesis in a single framework.'
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
    text : 'The proposed system follows a modular and multi-component architecture designed to support intelligent document interaction. The methodology begins with document acquisition, where a voice-guided navigation system assists users in capturing properly aligned images for OCR processing. The extracted text is then processed through language-specific pipelines. Tamil documents undergo semantic segmentation and retrieval-augmented generation for structured understanding and question answering, while Sinhala documents are indexed for voice-based navigation using command classification models. The system further incorporates an emotional text-to-speech module that generates expressive speech output based on detected emotional context. The modular design ensures scalability, flexibility, and seamless integration between components, enabling efficient processing under low-resource conditions.'
  },
'Technologies': {
  title: 'Technologies',
  text: `This research employs a combination of advanced machine learning, deep learning, and system-level technologies to enable intelligent document interaction in low-resource language environments. The system incorporates semantic segmentation to ensure accurate document boundary detection and geometric alignment during capture, along with optical character recognition (OCR) using cloud-based services such as Google Cloud Vision for reliable text extraction. GPU-accelerated training with NVIDIA CUDA is utilized to efficiently train deep learning models on large-scale datasets. To enhance contextual understanding and reduce hallucinations, a Retrieval-Augmented Generation (RAG) framework is integrated, enabling document-grounded responses. Additionally, transformer-based models such as SinBERT and XLM-RoBERTa are used for multilingual text understanding and emotion classification, while Support Vector Machines (SVM) with TF-IDF features are applied for accurate Sinhala voice command classification. The system further incorporates emotion-conditioned neural text-to-speech (TTS) to generate expressive and natural speech output, and reinforcement learning techniques, specifically contextual bandits, to provide personalized content recommendations based on user behavior. These technologies are seamlessly integrated into a unified pipeline, enabling robust document understanding, interactive querying, efficient navigation, and an enhanced auditory experience for visually impaired users.`
}
};

export const milestones = [
  { title: 'Topic Assessment Form (TAF)', date: 'June 2025', marks: '5%', icon: FcDocument, type: 'Individual' },
  { title: 'Project Charter', date: 'July 2025', marks: '10%', icon: FcBriefcase, type: 'Group' },
  { title: 'Proposal reports (draft)', date: '31st of August 2025', marks: '5%', icon: FcReading, type: 'Group' },
  { title: 'Proposal presentation', date: '8th of September 2025', marks: '15%', icon: FaTv, type: 'Group' },
  { title: 'Proposal reports (final)', date: '28th of September 2025', marks: '10%', icon: FcDocument, type: 'Group' },
  { title: 'Progress Presentation – I', date: '5th of January 2026', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Check List I', date: '11th of January 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Research paper', date: '8th of May 2026', marks: '20%', icon: FcGraduationCap, type: 'Individual' },
  { title: 'Final reports', date: '26th of April 2026', marks: '15%', icon: FcDocument, type: 'Group' },
  { title: 'Progress Presentation – II', date: '9th of March 2026', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Check List II', date: '11th of January 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Check List III', date: '30th of April 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Check List IV', date: '30th of April 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Submission of RP', date: '8th of May 2026', marks: 'N/A', icon: FcKindle, type: 'Individual' },
  { title: 'Final presentation & VIVA', date: '4th of April 2026', marks: '25%', icon: FcGraduationCap, type: 'Group' },
  { title: 'Project website', date: '27th of April 2026', marks: '5%', icon: FaLaptopCode, type: 'Group' },
  { title: 'Research logbook', date: '27th of April 2026', marks: '5%', icon: FcGallery, type: 'Individual' },
];

export const team = [
  { name: 'Researcher One', role: 'Lead AI Engineer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Two', role: 'Mobile Developer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Three', role: 'NLP Specialist', icon: FaUserCircle, social: { linkedin: '#', github: '#' } },
  { name: 'Researcher Four', role: 'UI/UX Designer', icon: FaUserCircle, social: { linkedin: '#', github: '#' } }
];

export const documents = [
  { title: 'Project Charter', description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project.', icon: FcBriefcase, file: '/reports/TAF_25-26J-125-supervisor signed.pdf' },
  { title: 'Project Proposal', description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.', icon: FcDocument, file: '/reports/proposal.zip' },
  { title: 'Research Paper', description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research.', icon: FcGraduationCap, file: '/reports/conference_paper.pdf' },
  { title: 'CheckList Documents', description: 'A checklist document is used to systematically evaluate whether the system meets predefined requirements and performance criteria.', icon: FcGraduationCap, file: '/reports/checklist.zip' },
  { title: 'Final Research Reports', description: 'A final research report (thesis) is a complete academic document that explains your entire project in detail.', icon: FcGraduationCap, file: '' },

];

export const presentations = [
  { title: 'Proposal Presentation', description: 'Initial pitch for the research concept summarizing the problem and proposed solution.', icon: FaTv, file: '/presentations/proposal.pdf' },
  { title: 'Progress presntation one', description: 'Status update on model training progress and initial prototype evaluation results.', icon: FaTv, file: '/presentations/pp1.pdf' },
  { title: 'Progress presentation two', description: 'Comprehensive presentation of all research findings and 90% of progress of integrated system demonstration.', icon: FaTv, file: '/presentations/pp2.pdf' },
  { title: 'final presentation', description: 'Comprehensive presentation of all research findings and fully integrated system demonstration.', icon: FaTv, file: '' },

];

export const footerInfo = {
  institution: 'Sri Lanka Institute of Information Technology',
  location: 'Malabe, Sri Lanka',
  phone: '+94 11 234 5678',
  email: 'visionmate.research@example.com'
};
