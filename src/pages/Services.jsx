// src/pages/Services.jsx
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <h1 className="services-title">Our Services</h1>

        {/* Home/Portable X-Ray */}
        <section className="service-block">
          <h2>🏠 Home / Portable X-Ray</h2>
          <p>
            Experience safe, convenient, and reliable diagnostic imaging in the comfort of your home. Ideal for patients who face difficulty visiting clinics or hospitals, our mobile X-ray unit ensures stress-free, high-quality diagnostics using advanced portable equipment.
          </p>
          <p>
            Reports are delivered quickly in both digital and printed formats.
          </p>

         
        </section>

        {/* Home/Portable ECG */}
        <section className="service-block">
          <h2>❤️ Home / Portable ECG</h2>
          <p>
            On-call ECG service at your doorstep. Our trained technicians perform ECG monitoring with precision and hygiene, helping doctors diagnose heart conditions in real time. Reports are shared instantly to assist in timely treatment.
          </p>
          <p>All benefits of our X-ray service also apply to our ECG service.</p>
        </section>

        {/* Home/Portable Blood Test */}
        <section className="service-block">
          <h2>🧪 Home / Portable Blood Test</h2>
          <p>
            No more waiting at labs! Our certified phlebotomists collect blood samples from your home safely and hygienically. We offer a wide range of lab tests, with fast and accurate results available digitally and in print.
          </p>
          <p>All benefits of our X-ray service also apply to our blood test service.</p>
        </section>

        {/* Home X-Ray for Dogs */}
        <section className="service-block">
          <h2>🐶 At-Home X-Ray for Dogs</h2>
          <p>
            We offer at-home X-ray services for pet dogs to diagnose fractures, joint issues, or other orthopedic concerns. Our mobile equipment allows scans in the comfort of your pet’s environment—reducing stress and improving diagnostic efficiency.
          </p>
        </section>

        {/* Medical Campaigns */}
        <section className="service-block">
          <h2>🚑 Medical Campaigns & Camps</h2>
          <p>
            We regularly participate in medical camps organized by hospitals, NGOs, and community health services. Our team provides on-site X-ray and ECG diagnostics to large groups, helping bring healthcare access to remote and underserved areas.
          </p>
        </section>
           <h3>Why Choose Our Home X-Ray Services?</h3>
          <ul>
            <li>✅ Comfort & Convenience: No hospital travel or waiting</li>
            <li>✅ Ideal for Elderly & Bedridden Patients</li>
            <li>✅ Infection-Free: Avoid crowded clinics</li>
            <li>✅ Fast Reports: Digital copy in 1–2 hours, print same-day</li>
            <li>✅ Affordable: Competitive pricing, no hidden fees</li>
            <li>✅ 24/7 Availability</li>
          </ul>
      </div>
    </div>
  );
}

export default Services;
