import React, { useState } from 'react';
import './Gallary.css';

function Gallary() {
  const images = [
    { src: `${process.env.PUBLIC_URL}/assets/xray1.jpg`, title: 'Home X-Ray Service' },
    { src: `${process.env.PUBLIC_URL}/assets/ecg1.jpg`, title: 'Portable ECG' },
    { src: `${process.env.PUBLIC_URL}/assets/bloodtest1.jpg`, title: 'Blood Test at Home' },
    { src: `${process.env.PUBLIC_URL}/assets/xray2.jpg`, title: 'X-Ray Machine Setup' },
    { src: `${process.env.PUBLIC_URL}/assets/ecg2.jpg`, title: 'ECG Setup at Home' },
    { src: `${process.env.PUBLIC_URL}/assets/bloodtest2.jpg`, title: 'Blood Sample Collection' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="gallary-page">
      <div className="container">
        <h1 className="gallary-title">Our Gallary</h1>
        <p className="gallary-subtitle">
          Explore our radiology services at home including X-Ray, ECG, and Blood Tests.
        </p>

        <div className="gallary-grid">
          {images.map((img, idx) => (
            <div className="gallary-card" key={idx} onClick={() => openLightbox(idx)}>
              <img src={img.src} alt={img.title} />
              <div className="gallary-info">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
            <img className="lightbox-image" src={images[currentIndex].src} alt={images[currentIndex].title} />
            <div className="lightbox-caption">{images[currentIndex].title}</div>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallary;
