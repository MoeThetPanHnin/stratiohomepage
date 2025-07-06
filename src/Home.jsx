import React, { useState, useRef, useEffect } from 'react';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    service: 'LinkSquare',
    message: '',
  });

  // Custom Dropdown State
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceOptions = ['LinkSquare', 'BeyonSense', 'STNF'];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (option) => {
    setFormData({ ...formData, service: option });
    setDropdownOpen(false);
  };

  const handleDropdownKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setDropdownOpen((open) => !open);
      e.preventDefault();
    } else if (e.key === 'Escape') {
      setDropdownOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <>
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
            <p className="product-detail">LinkSquare is a smart handheld spectrometer powered by STRATIO's Ge-based SWIR spectral sensor. It captures spectral fingerprints across 8 channels among SWIR range to analyze and identify materials in real time, from plastics and fabrics to food and pharmaceuticals</p>
            <a href="https://linksquare.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span>Web Site </span>
              <img src="/icon/Arrow Outward.svg" alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>

        <div className="product-card" style={{ backgroundImage: 'url(./img/beyonsense.jpg)' }}>
          <div className="product-overlay">
            <img src="/img/BeyonSenselogo.png" alt="BeyonSense Logo" className="product-logo" />
            <p className="product-desc">Infrared Vision, Redefined</p>
            <p className="product-detail">The only SWIR imaging solution built with STRATIO’s Ge-based image sensor, a breakthrough that redefines what’s possible in infrared vision. From autonomous vehicles to next-generation smartphones, BeyonSense is unlocking entirely new markets where seeing beyond visible means seeing further, safer, and smarter.</p>
            <a href="https://beyonsense.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span>Web Site </span>
              <img src="/icon/Arrow Outward.svg" alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>

        <div className="product-card stnf" style={{ backgroundImage: 'url(./img/stnf.jpg)' }}>
          <div className="product-overlay">
            <img src="/img/STNFlogo.png" alt="STNF Logo" className="product-logo stnflogo" />
            <p className="product-desc">Your Idea, Our Fab</p>
            <p className="product-detail">STNF is a Lab-to-Fab Foundry that supports startups disrupting the market, research institutions, and large corporations in transitioning from R&D to the commercial foundry production.</p>
            <a href="https://stnf.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span>Web Site </span>
              <img src="/icon/Arrow Outward.svg" alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="partner slide" id="logo-slide-01">
          <div className="inner">
            <div className="box"><img src="/customerlogo/1_Olam_logo_w.svg" alt="Olam" /></div>
            <div className="box"><img src="/customerlogo/2_USDA_logo_w.svg" alt="USDA" /></div>
            <div className="box"><img src="/customerlogo/3_AgResearch_logo_w.svg" alt="AgResearch" /></div>
            <div className="box"><img src="/customerlogo/4_hortifrut_logo_w.svg" alt="Hortifrut" /></div>
            <div className="box"><img src="/customerlogo/5_aerobotics_logo_w.svg" alt="Aerobotics" /></div>
            <div className="box"><img src="/customerlogo/6_partner_logo.svg" alt="Partner6" /></div>
            <div className="box"><img src="/customerlogo/7_partner_logo.svg" alt="Partner7" /></div>
            {/* Duplicate for seamless scroll */}
            <div className="box"><img src="/customerlogo/1_Olam_logo_w.svg" alt="Olam" /></div>
            <div className="box"><img src="/customerlogo/2_USDA_logo_w.svg" alt="USDA" /></div>
            <div className="box"><img src="/customerlogo/3_AgResearch_logo_w.svg" alt="AgResearch" /></div>
            <div className="box"><img src="/customerlogo/4_hortifrut_logo_w.svg" alt="Hortifrut" /></div>
            <div className="box"><img src="/customerlogo/5_aerobotics_logo_w.svg" alt="Aerobotics" /></div>
            <div className="box"><img src="/customerlogo/6_partner_logo.svg" alt="Partner6" /></div>
            <div className="box"><img src="/customerlogo/7_partner_logo.svg" alt="Partner7" /></div>
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
          {/* Custom Dropdown Start */}
          <div
            className={`custom-dropdown${dropdownOpen ? ' open' : ''}`}
            ref={dropdownRef}
            tabIndex={0}
            onClick={() => setDropdownOpen((open) => !open)}
            onKeyDown={handleDropdownKeyDown}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            role="button"
            style={{ outline: 'none' }}
          >
            <div className="custom-dropdown-selected">
              {formData.service}
              <span className="custom-dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
            </div>
            {dropdownOpen && (
              <ul className="custom-dropdown-list" role="listbox">
                {serviceOptions.map((option) => (
                  <li
                    key={option}
                    className={`custom-dropdown-option${formData.service === option ? ' selected' : ''}`}
                    onClick={(e) => { e.stopPropagation(); handleDropdownSelect(option); }}
                    role="option"
                    aria-selected={formData.service === option}
                    tabIndex={-1}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Custom Dropdown End */}
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}

export default Home; 