// src/App.jsx
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    service: 'LinkSquare',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="/img/STRATIO Logo.png" alt="Stratio Logo" className="header-logo" />
        </div>
        <nav className="header-right">
          <span className="menu-text">MENU</span>
          <span className="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              width={32}
              height={32}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay muted playsInline>
            <source src="/img/main_video_2025_v3.mp4" type="video/mp4" />
          </video>
        
        </div>
      </section>

      {/* Product Section */}
      <section className="products">
        <div className="product-card" style={{ backgroundImage: 'url(./img/linksquare.png)' }}>
          <div className="product-overlay">
            <img src="/img/LinkSquarelogo.png" alt="LinkSquare Logo" className="product-logo" />
            <p className="product-desc">Spectral Insight in the Palm of Your Hand</p>
            <p className="product-detail">LinkSquare is a smart handheld spectrometer powered by STRATIO's Ge-based SWIR spectral sensor. It captures spectral fingerprints across 8 channels among SWIR range to analyze and identify materials in real time, from plastics and fabrics to food and pharmaceuticals.</p>
            <a href="#" className="product-btn">Web Site ↗</a>
          </div>
        </div>

        <div className="product-card" style={{ backgroundImage: 'url(./img/beyonsense.jpg)' }}>
          <div className="product-overlay">
            <img src="/img/BeyonSenselogo.png" alt="BeyonSense Logo" className="product-logo" />
            <p className="product-desc">Infrared Vision, Redefined</p>
            <p className="product-detail">The only SWIR imaging solution built with STRATIO's Ge-based image sensor, a breakthrough that redefines what's possible in infrared vision. From autonomous vehicles to next-generation smartphones, BeyonSense is unlocking entirely new markets where seeing beyond visible means seeing further, safer, and smarter.</p>
            <a href="#" className="product-btn">Web Site ↗</a>
          </div>
        </div>

        <div className="product-card" style={{ backgroundImage: 'url(./img/stnf.jpg)' }}>
          <div className="product-overlay">
            <img src="/img/STNFlogo.png" alt="STNF Logo" className="product-logo" />
            <p className="product-desc">Your Idea, Our Fab</p>
            <p className="product-detail">STNF is a Lab-to-Fab Foundry that supports startups disrupting the market, research institutions, and large corporations in transitioning from R&D to the commercial foundry production.</p>
            <a href="#" className="product-btn">Web Site ↗</a>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="company-logos">
        <div className="company-logos-row">
          <img src="/customerlogo/1_Olam_logo_w.svg" alt="Olam" style={{ width: '180px', height: '70px' }} className="company-logo " />
          <img src="/customerlogo/2_USDA_logo_w.svg" alt="USDA" style={{width: '120px', height: '60px'}} className="company-logo " />
          <img src="/customerlogo/3_AgResearch_logo_w.svg" alt="AgResearch" style={{width: '180px', height: '80px'}} className="company-logo " />
          <img src="/customerlogo/4_hortifrut_logo_w.svg" alt="Hortifrut" style={{width: '110px', height: '80px'}} className="company-logo " />
          <img src="/customerlogo/5_aerobotics_logo_w.svg" alt="Aerobotics" style={{width: '110px', height: '220px'}} className="company-logo" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-info">
          <h2>Contact us</h2>
          <p><strong>US Office.</strong><br />2211 Fortune Drive, Suite A, San Jose, CA 95131</p>
          <p><strong>KR Office.</strong><br />B-911, 43 Changrop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</p>
          <p><strong>Mail.</strong><br />contact@stratiotechnolgy.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <div style={{ flex: 1 }}>
              <label className="required" htmlFor="company">Company</label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} required />
            </div>
            <div style={{ flex: 1 }}>
              <label className="required" htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>
          <label className="required" htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label className="required" htmlFor="service">Product & Service</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} required>
            <option>LinkSquare</option>
            <option>BeyonSense</option>
            <option>STNF</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="footer">
        <div className="footer-left">
          <img src="/img/STRATIO Logo.png" alt="Stratio Logo" className="footer-logo" />
          <p className="footer-copyright">© 2025 STRATIO. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Facebook">
              <img src="/icon/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Threads">
              <img src="/icon/twitter.svg" alt="Threads" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="YouTube">
              <img src="/icon/youtube.svg" alt="YouTube" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="LinkedIn">
              <img src="/icon/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
          <button className="go-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to Top">
          <svg 
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" fill="currentColor" 
           class="size-10"
           strokeWidth={5}
           strokeDasharray={500}
          
           style={{width: '50px', height: '50px'}}>
           <path
            fill-rule="evenodd" 
            d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" 
            clip-rule="evenodd" />
          </svg>


          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
