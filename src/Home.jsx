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
            <div className="box"><img src="/customerlogo/6_demetria_logo_w.png" alt="Demetria" /></div>
            <div className="box"><img src="/customerlogo/7_inia_logo_w.png" alt="INIA" /></div>
            <div className="box"><img src="/customerlogo/8_smartwatergroup_logo_w.png" alt="Smart Water Group" /></div>
            <div className="box"><img src="/customerlogo/9_biolumic_logo_w.png" alt="Biolumic" /></div>
            <div className="box"><img src="/customerlogo/10_libios_logo_w.svg" alt="Libios" /></div>
            <div className="box"><img src="/customerlogo/11_cornell university_logo_w.png" alt="Cornell University" /></div>
            <div className="box"><img src="/customerlogo/12_Illinois_logo_w.svg" alt="Illinois" /></div>
            <div className="box"><img src="/customerlogo/13_UCLA_logo_w.svg" alt="UCLA" /></div>
            <div className="box"><img src="/customerlogo/14_Kennesaw State Owls university_logo_w.png" alt="Kennesaw State University" /></div>
            <div className="box"><img src="/customerlogo/15_Florida_International_University_logo_w.svg" alt="Florida International University" /></div>
            <div className="box"><img src="/customerlogo/16_University_of_New_Hampshire_logo_w.svg" alt="University of New Hampshire" /></div>
            <div className="box"><img src="/customerlogo/17_wageningen_university_logo_w.svg" alt="Wageningen University" /></div>
            <div className="box"><img src="/customerlogo/18_JHU.logo_horizontal_w.svg" alt="Johns Hopkins University" /></div>
            <div className="box"><img src="/customerlogo/19_LG_logo_w.svg" alt="LG" /></div>
            <div className="box"><img src="/customerlogo/20_Pfizer_logo_w.svg" alt="Pfizer" /></div>
            <div className="box"><img src="/customerlogo/21_Samsung_logo_w.svg" alt="Samsung" /></div>
            <div className="box"><img src="/customerlogo/22_US_CBP_logo_w.png" alt="US CBP" /></div>
            <div className="box"><img src="/customerlogo/23_NIST_logo_w.svg" alt="NIST" /></div>
            <div className="box"><img src="/customerlogo/24_KOMSCO_logo_w.svg" alt="KOMSCO" /></div>
            <div className="box"><img src="/customerlogo/25_Thermo_Fisher_Scientific_logo_w.svg" alt="Thermo Fisher Scientific" /></div>
            <div className="box"><img src="/customerlogo/26_microtrace_logo_w.png" alt="Microtrace" /></div>
            <div className="box"><img src="/customerlogo/27_sanyochemical_logo_w.svg" alt="Sanyo Chemical" /></div>
            <div className="box"><img src="/customerlogo/28_childrensnational_logo_w.png" alt="Children's National" /></div>
            <div className="box"><img src="/customerlogo/29_Hitachi_logo_w.svg" alt="Hitachi" /></div>
            <div className="box"><img src="/customerlogo/30_viavisolution_logo_w.png" alt="Viavi Solutions" /></div>
            <div className="box"><img src="/customerlogo/31_NIH_logo_w.svg" alt="NIH" /></div>
            <div className="box"><img src="/customerlogo/32_NEC_logo_w.svg" alt="NEC" /></div>
            <div className="box"><img src="/customerlogo/33_nepes_logo_w.svg" alt="Nepes" /></div>
            <div className="box"><img src="/customerlogo/34_Mitsubishi_heavyindustries_logo_w.svg" alt="Mitsubishi Heavy Industries" /></div>
            <div className="box"><img src="/customerlogo/35_sun-ins_w.png" alt="Sun Insurance" /></div>
            <div className="box"><img src="/customerlogo/36_Bystronic_Logo_w.png" alt="Bystronic" /></div>
            <div className="box"><img src="/customerlogo/37_vatech_logo_w.png" alt="VA Tech" /></div>
            <div className="box"><img src="/customerlogo/38_LG_Display_logo_w.svg" alt="LG Display" /></div>
            <div className="box"><img src="/customerlogo/39_DSTL_logo_w.svg" alt="DSTL" /></div>
            <div className="box"><img src="/customerlogo/40_NMBU_logo_w.png" alt="NMBU" /></div>
            <div className="box"><img src="/customerlogo/41_techinsights_logo_w.svg" alt="TechInsights" /></div>
            <div className="box"><img src="/customerlogo/42_RIT_logo_w.svg" alt="RIT" /></div>
            <div className="box"><img src="/customerlogo/43_Intuitive_Surgical_logo_w.svg" alt="Intuitive Surgical" /></div>
            <div className="box"><img src="/customerlogo/44_PrecisionPlanting_logo_w.png" alt="Precision Planting" /></div>
            <div className="box"><img src="/customerlogo/45_uit_logo_w.png" alt="UiT" /></div>
            <div className="box"><img src="/customerlogo/46_Apple_logo_w.svg" alt="Apple" /></div>
            <div className="box"><img src="/customerlogo/47_Tricas_logo_w.png" alt="Tricas" /></div>
            <div className="box"><img src="/customerlogo/48_SCOUT_logo_w.png" alt="SCOUT" /></div>
            <div className="box"><img src="/customerlogo/49_Thales_Alenia_Space_Logo_w.svg" alt="Thales Alenia Space" /></div>
            <div className="box"><img src="/customerlogo/50_AMS_logo_w.svg" alt="AMS" /></div>
            <div className="box"><img src="/customerlogo/51_Acorn_logo_w.png" alt="Acorn" /></div>
            <div className="box"><img src="/customerlogo/52_nonasys_logo_w.png" alt="Nonasys" /></div>
            <div className="box"><img src="/customerlogo/53_BREAKWATER_RESEARCH_logo_w.png" alt="Breakwater Research" /></div>
            <div className="box"><img src="/customerlogo/54_ceremorphic_logo_w.png" alt="Ceremorphic" /></div>
            <div className="box"><img src="/customerlogo/55_sundiode_logo_w.png" alt="SunDiode" /></div>
            <div className="box"><img src="/customerlogo/56_Microchip_logo_w.svg" alt="Microchip" /></div>
            <div className="box"><img src="/customerlogo/57_ladybug_logo_w.png" alt="Ladybug" /></div>
            <div className="box"><img src="/customerlogo/58_Sandia_National_Laboratories_logo_w.svg" alt="Sandia National Laboratories" /></div>
            <div className="box"><img src="/customerlogo/59_HRL_logo_w.png" alt="HRL" /></div>
            <div className="box"><img src="/customerlogo/60_LLNL_logo_w.png" alt="LLNL" /></div>
            <div className="box"><img src="/customerlogo/61_Analog_Devices_Logo_w.svg" alt="Analog Devices" /></div>
            <div className="box"><img src="/customerlogo/62_UCSF_logo_w.svg" alt="UCSF" /></div>
            <div className="box"><img src="/customerlogo/63_Applied_Materials_Inc._logo_w.svg" alt="Applied Materials" /></div>
            <div className="box"><img src="/customerlogo/64_Torramics_logo_w.png" alt="Torramics" /></div>
            <div className="box"><img src="/customerlogo/65_primenano_w.png" alt="PrimeNano" /></div>
            <div className="box"><img src="/customerlogo/66_plamatherm_logo_w.png" alt="Plamatherm" /></div>
            <div className="box"><img src="/customerlogo/67_pumkinseed_logo_w.png" alt="Pumpkin Seed" /></div>
            <div className="box"><img src="/customerlogo/68_Stanford_logo_w.png" alt="Stanford" /></div>
            <div className="box"><img src="/customerlogo/69_mems_logo_w.png" alt="MEMS" /></div>
            <div className="box"><img src="/customerlogo/70_raxium.png" alt="Raxium" /></div>
            <div className="box"><img src="/customerlogo/71_northwesthub_logo_w.png" alt="Northwest Hub" /></div>
            <div className="box"><img src="/customerlogo/72_ucdavis_logo_w.png" alt="UC Davis" /></div>
            <div className="box"><img src="/customerlogo/73_carbon3D_logo_w.png" alt="Carbon3D" /></div>
            <div className="box"><img src="/customerlogo/74_texas_university_logo_w.svg" alt="University of Texas" /></div>
            <div className="box"><img src="/customerlogo/75_Berkeley_logo_w.svg" alt="UC Berkeley" /></div>
            {/* Duplicate for seamless scroll */}
            
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