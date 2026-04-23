import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe, FaRobot, FaEye, FaCheckCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import heroBg from '../assets/images/hero-bg.png';

const About = () => {
  return (
    <section id="about" style={{
      padding: '120px 0',
      background: 'linear-gradient(rgba(15, 10, 30, 0.9), rgba(8, 5, 18, 0.95)), url(' + heroBg + ') center center no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background pulse */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        zIndex: '0'
      }}></div>

      <Container style={{ position: 'relative', zIndex: '2' }}>
        <Row className="align-items-center g-5">
          <Col lg={6} data-aos="fade-right">
            <div className="pe-lg-5">
              <div className="mb-3 d-inline-flex align-items-center gap-2" style={{
                color: 'var(--accent-light)',
                fontWeight: '700',
                letterSpacing: '2px',
                fontSize: '12px',
                background: 'rgba(167, 139, 250, 0.1)',
                padding: '6px 15px',
                borderRadius: '50px',
                border: '1px solid rgba(167, 139, 250, 0.2)'
              }}>
                <FaCheckCircle /> OUR MISSION
              </div>
              <h2 style={{
                color: '#fff',
                fontSize: 'calc(2rem + 1.2vw)',
                fontWeight: '900',
                marginBottom: '25px',
                lineHeight: '1.1',
                letterSpacing: '-1px'
              }}>
                Bridging the Information Gap for <span style={{
                  background: 'linear-gradient(to right, #A78BFA, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Visually Impaired Individuals</span>
              </h2>
              <p className="justified-text" style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '30px', fontWeight: '400' }}>
                Vision Mate is a cutting-edge research initiative dedicated to bridging the information gap for visually impaired individuals in Sri Lanka. By leveraging state-of-the-art AI technologies, we provide a seamless voice-agentic experience in native languages like Sinhala and Tamil.
              </p>

              <div className="row g-4 mt-2">
                {[
                  { title: 'Multilingual', desc: 'Sinhala & Tamil support.', icon: FaGlobe, color: '#60a5fa' },
                  { title: 'Interactive', desc: 'Agentic reasoning AI.', icon: FaRobot, color: '#f472b6' },
                  { title: 'Perceptive', desc: 'Real-time scene analysis.', icon: FaEye, color: '#34d399' }
                ].map((item, i) => (
                  <div key={i} className="col-12 col-md-4">
                    <div className="p-4 rounded-4 transition-all hover-lift h-100" style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}>
                      <div className="mb-3" style={{
                        fontSize: '28px',
                        color: item.color,
                        background: `${item.color}15`,
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px'
                      }}>
                        <item.icon />
                      </div>
                      <div style={{ fontWeight: '800', fontSize: '15px', color: '#fff' }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '5px' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-4" style={{
                background: 'rgba(139, 92, 246, 0.05)',
                fontStyle: 'italic'
              }}>
                <p style={{ fontSize: '16px', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>
                  "Our system goes beyond simple reading; it understands document semantics and context, acting as a true digital companion for the visually impaired community."
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" className="text-center">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Decorative rings around logo */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                border: '2px dashed rgba(139, 92, 246, 0.2)',
                borderRadius: '50%',
                animation: 'spin 20s linear infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50%'
              }}></div>

              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '10px',
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '20px',
                borderRadius: '50%',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: '2'
              }}>
                <FaRobot size={30} color="var(--accent-light)" />
              </div>

              <img
                src={logo}
                alt="Vision Mate"
                className="img-fluid rounded-4 transition-all"
                style={{
                  maxWidth: '85%',
                  position: 'relative',
                  zIndex: '1',
                  filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.5))'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          @keyframes spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default About;
