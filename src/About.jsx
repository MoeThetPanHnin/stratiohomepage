import React, { useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Ge-based SWIR Sensor</h1>
          <div className="about-hero-description">
            <p>STRATIO is the first and only company in the world to commercialize Germanium (Ge)-based SWIR sensors <br /> using standard CMOS processes. This breakthrough delivers what InGaAs never could: high-sensitive, mass-producible, and AI-integrated SWIR sensors that are ready for real-world impact.</p>
          </div>
        </div>
        <div className="about-hero-bg"></div>
      </section>

      {/* Performance Section */}
      <section className="about-performance">
        <h2 className="about-performance-title">Offering top performance at an affordable price</h2>
        <div className="about-features">
          <div className="about-feature">
            <div className="about-feature-icon">
              <img src="/aboutimg/affordable.png" alt="Affordable" />
            </div>
            <h3>Affordable</h3>
            <p>1000x lower cost</p>
          </div>
          <div className="about-feature">
            <div className="about-feature-icon">
              <img src="/aboutimg/portable.png" alt="Portable" />
            </div>
            <h3>Portable</h3>
            <p>No need cooler</p>
          </div>
          <div className="about-feature">
            <div className="about-feature-icon">
              <img src="/aboutimg/environment.png" alt="Scalable" />
            </div>
            <h3>Scalable</h3>
            <p>Fully CMOS-compatible</p>
          </div>
        </div>
      </section>

      {/* About STRATIO Section */}
      <section className="about-company">
        <div className="about-company-content">
          <h2 className="about-company-title">About STRATIO</h2>
          <p className="about-company-desc-text">
            STRATIO is on a mission to bring infrared vision to the mass market and lead the era of Infrared AI. Our breakthrough enables AI-powered 
            infrared vision to go beyond traditional boundaries and into everyday devices. From autonomous vehicles and smart home appliances to 
            precision agriculture and consumer electronics, STRATIO's technology is set to transform how people and machines perceive the world.
          </p>
          <div className="about-company-description"></div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="about-ceo">
        <div className="about-ceo-content">
          <h2 className="about-ceo-title">CEO of STRATIO, INC.</h2>
          <p className="about-ceo-subtitle">We're ready to surprise the world — and we have no intention of stopping here. The journey continues.</p>
          
          <div className="about-ceo-profile">
            <div className="about-ceo-image">
              <img src="/aboutimg/img.png" alt="Jaehyung James Lee" />
            </div>
            <div className="about-ceo-info">
              <h3>Jaehyung James Lee</h3>
              <div className="about-ceo-divider"></div>
              <p className="about-ceo-role"><span className="phd-badge">PhD</span> Co Founder and CEO</p>
              <p className="about-ceo-bio">
                Dr. J. James Lee is a leading expert in semiconductor technology and advanced imaging 
                systems, with a Ph.D. in Electrical Engineering from Stanford University. He began his 
                career at the Boston Consulting Group (BCG), where he developed a strong foundation 
                in innovation strategy and market leadership. As founder and CEO of STRATIO, he brings 
                together deep technical expertise and business insight to drive next-generation 
                semiconductor solutions that are shaping the future of Infrared AI devices.
              </p>
              <div className="about-ceo-social">
                <a href="https://www.linkedin.com/in/jaehyung-james-lee-6b815616/" target="_blank" rel="noopener noreferrer" className="linkedin-icon" aria-label="LinkedIn">
                  <img src="/aboutimg/LinkedIn.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="about-ceo-button">
            <Link to="/ourcrew">
              <button className="our-crew-btn">
                Our Crew
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '28px', height: '28px', marginLeft: '10px', verticalAlign: 'middle'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 