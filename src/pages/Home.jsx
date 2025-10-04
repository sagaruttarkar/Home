// Home.js
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/assets/Banner1.jpg`,
      caption: 'Advance portable Xray'
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/Banner2.jpg`,
      caption: 'HomeBlood test'
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/Banner1.jpg`,
      caption: 'Portable ECG Machine'
    }
  ];

  return (
    <>
      {/* Hero Banner Carousel */}
      <div className="home-banner">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          className="home-carousel"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="banner-slide">
                <img src={image.src} alt={image.caption} />
                <div className="banner-caption">
                  <h2>{image.caption}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Welcome Section */}
      <section className="home-intro">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">VISMIT Envision Imagining CENTER</h2>
          <p className="text-muted mb-4">
            We offer state-of-the-art radiology services including X-ray, CT Scan, ECG and Blood Tests.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="home-services">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Our Key Services</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <h5>✅ Home X-Ray Services</h5>
                <p>Portable X-Ray services at your convenience and safety.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h5>✅ Home ECG Services</h5>
                <p>Fast and accurate ECG tests at your doorstep.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <h5>✅ Blood Test Services</h5>
                <p>Blood Test At Your door Step .</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why-us">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Why Choose Us?</h3>
          <div className="row text-start justify-content-center">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✅ Hygiene & Safety Guaranteed</li>
                <li>✅ Friendly & Skilled Staff</li>
                <li>✅ Fast & Accurate Reports</li>
                <li>✅ Affordable & Transparent Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Book Your Home X-Ray or ECG Today!</h4>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <a href="tel:+918591261438" className="btn btn-primary px-4 py-2">📞 Call Now</a>
            <a href="https://wa.me/message/TWKAT7WPLF2UG1" className="btn btn-success px-4 py-2">📱 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
