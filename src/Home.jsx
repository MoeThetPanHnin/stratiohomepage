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
            <p className="product-detail">The only SWIR imaging solution built with STRATIO's Ge-based image sensor, a breakthrough that redefines what's possible in infrared vision. From autonomous vehicles to next-generation smartphones, BeyonSense is unlocking entirely new markets where seeing beyond visible means seeing further, safer, and smarter.</p>
            <a href="https://beyonsense.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span>Web Site </span>
              <img src="/icon/Arrow Outward.svg" alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>

        <div className="product-card product-card-stnf" style={{ backgroundImage: 'url(./img/stnf.jpg)' }}>
          <div className="product-overlay">
            <img src="/img/STNFlogo.png" alt="STNF Logo" className="product-logo" />
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
            <div className="box"><img src="/Fit/Customer_Logo_Fit-01.png" alt="Olam" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-02.png" alt="USDA" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-03.png" alt="AgResearch" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-04.png" alt="Hortifrut" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-05.png" alt="Aerobotics" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-06.png" alt="Demetria" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-07.png" alt="INIA" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-08.png" alt="Smart Water Group" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-09.png" alt="Biolumic" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-10.png" alt="Libios" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-11.png" alt="Cornell University" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-12.png" alt="Illinois" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-13.png" alt="UCLA" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-14.png" alt="Kennesaw State University" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-15.png" alt="Florida International University" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-16.png" alt="University of New Hampshire" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-17.png" alt="Wageningen University" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-18.png" alt="Johns Hopkins University" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-19.png" alt="LG" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-20.png" alt="Pfizer" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-21.png" alt="Samsung" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-22.png" alt="US CBP" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-23.png" alt="NIST" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-24.png" alt="KOMSCO" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-25.png" alt="Thermo Fisher Scientific" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-26.png" alt="Microtrace" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-27.png" alt="Sanyo Chemical" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-28.png" alt="Children's National" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-29.png" alt="Hitachi" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-30.png" alt="Viavi Solutions" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-31.png" alt="NIH" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-32.png" alt="NEC" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-33.png" alt="Nepes" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-34.png" alt="Mitsubishi Heavy Industries" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-35.png" alt="Sun Insurance" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-36.png" alt="Bystronic" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-37.png" alt="VA Tech" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-38.png" alt="LG Display" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-39.png" alt="DSTL" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-40.png" alt="NMBU" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-41.png" alt="TechInsights" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-42.png" alt="RIT" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-43.png" alt="Intuitive Surgical" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-44.png" alt="Precision Planting" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-45.png" alt="UiT" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-46.png" alt="Apple" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-47.png" alt="Tricas" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-48.png" alt="SCOUT" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-49.png" alt="Thales Alenia Space" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-50.png" alt="AMS" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-51.png" alt="Acorn" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-52.png" alt="Nonasys" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-53.png" alt="Breakwater Research" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-54.png" alt="Ceremorphic" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-55.png" alt="SunDiode" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-56.png" alt="Microchip" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-57.png" alt="Ladybug" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-58.png" alt="Sandia National Laboratories" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-59.png" alt="HRL" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-60.png" alt="LLNL" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-61.png" alt="Analog Devices" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-62.png" alt="UCSF" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-63.png" alt="Applied Materials" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-64.png" alt="Torramics" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-65.png" alt="PrimeNano" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-66.png" alt="Plamatherm" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-67.png" alt="Pumpkin Seed" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-68.png" alt="Stanford" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-69.png" alt="MEMS" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-70.png" alt="Raxium" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-71.png" alt="Northwest Hub" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-72.png" alt="UC Davis" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-73.png" alt="Carbon3D" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-74.png" alt="University of Texas" /></div>
            <div className="box"><img src="/Fit/Customer_Logo_Fit-75.png" alt="UC Berkeley" /></div>
            {/* Duplicate for seamless scroll */}
            
          </div>
        </section>

       

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-info">
          <h2 className="contact-form-title">Contact us</h2>
          <div classname="us">US Office.</div>
          <div classname="us-address">2211 Fortune Drive, Suite A, San Jose, CA 95131</div>
          <div classname="kr">KR Office.</div>
          <div classname="kr-address">B-911, 43 Changrop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</div>
          <div classname="mail">Mail.</div>
          <div classname="mail-address">contact@stratiotechnolgy.com</div>
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
              <span className="custom-dropdown-arrow"><img src="/img/Arrow Drop Down.svg" alt="Arrow" className="arrow" /></span>
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
 