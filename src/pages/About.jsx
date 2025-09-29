import React from "react";
import CountUp from "react-countup";
import "./About.css";

function About() {
  const bannerImage = `${process.env.PUBLIC_URL}/assets/about-us-banner.jpg`;

  const stats = [
    { title: "Established", value: 2021 },
    { title: "Trusted Patients", value: 500 },
    { title: "Google Rating", value: 4.9 },
    { title: "Services", value: 3 },
  ];

  const coreValues = [
    { title: "Honesty", description: "We provide transparent and accurate reports." },
    { title: "Compassion", description: "Care with empathy for every patient." },
    { title: "Reliability", description: "Consistent high-quality service at your doorstep." },
  ];

  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="About Us Banner" className="banner-img" />
        <div className="banner-overlay fade-in">
          <h1>About Vismit Envision Imaging</h1>
          <p>Making hospital-grade diagnostics accessible at home</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="about-content container fade-up">
        <h2>Who We Are</h2>
        <p>
          <b>Vismit Envision Imaging Center</b> brings hospital-grade diagnostics to the comfort of your home. 
          Founded in 2021 by <b>Mr. Ashwin Vilas Dongre</b>, a certified radiology technician with over 8 years of hands-on experience, 
          Vismit Envision was created to make quality healthcare accessible, convenient, and compassionate.
        </p>
        <p>
          Our team of professionals, supported by expert radiologists, provides portable X-ray and ECG services across Mumbai. 
          We are proud to have a <b>4.9-star rating on Google</b> and a growing number of satisfied patients.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section container">
        {stats.map((stat, index) => (
          <div className="stat-card hover-card" key={index}>
            <h3>
              <CountUp end={stat.value} duration={2} decimals={stat.title === "Google Rating" ? 1 : 0} /> 
              {stat.title === "Google Rating" ? " ★" : ""}
            </h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Mission/Vision/Values Section */}
      <div className="mission-vision container fade-up">
        <div className="mv-card hover-card">
          <h3>Our Mission</h3>
          <p>Deliver accurate and high-quality radiology diagnostics from the comfort of home.</p>
        </div>
        <div className="mv-card hover-card">
          <h3>Our Vision</h3>
          <p>Build a safe, trustworthy space for patients and drive meaningful change in home healthcare.</p>
        </div>
        <div className="mv-card hover-card">
          <h3>Our Core Values</h3>
          <ul>
            {coreValues.map((val, idx) => (
              <li key={idx}>
                <b>{val.title}:</b> {val.description}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="about-content container fade-up">
        <h2>Why Choose Us?</h2>
        <p>
          Whether it's an elderly patient, someone with limited mobility, your beloved pet, or just the need for a more convenient healthcare experience — 
          Vismit Envision is here to serve with care, precision, and trust.
        </p>
      </div>
    </div>
  );
}

export default About;
