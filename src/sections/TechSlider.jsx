import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { techLogos } from '../data/content';

// Import Swiper styles
import 'swiper/css';

const TechSlider = () => {
  return (
    <section id="tech-slider" style={{ background: '#080512', padding: '40px 0' }}>
      <Container>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="tech-swiper"
        >
          {techLogos.map((tech, idx) => (
            <SwiperSlide key={idx} className="d-flex flex-column align-items-center justify-content-center">
              <div className="tech-icon-wrapper">
                <tech.icon size={55} className="tech-icon" style={{ color: tech.color }} />
              </div>
              <span className="mt-2" style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>
                {tech.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

    </section>
  );
};

export default TechSlider;
