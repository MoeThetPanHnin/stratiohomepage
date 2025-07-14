import React, { useState, useRef, useEffect } from 'react';
import '../css/Home.css';
import LinkSquarelogo from '../images/homeimg/LinkSquarelogo.png';
import BeyonSenselogo from '../images/homeimg/BeyonSenselogo.png';
import STNFlogo from '../images/homeimg/STNFlogo.png';
import beyonsense from '../images/homeimg/beyonsense.jpg';
import stnf from '../images/homeimg/stnf.jpg';
import linksquare from '../images/homeimg/linksquare.png';
import dropdown_arrow from '../images/homeimg/Arrow Drop Down.svg';
import dropup_arrow from '../images/homeimg/Arrow Drop Up.svg';
import arrow_outward from '../images/ourcrewimg/Arrow Outward.svg';
import main_video_2025_v3 from '../video/main_video_2025_v3.mp4';

import customer_logo_fit_1 from '../images/customerlogoimg/Customer_Logo_Fit-01.png';
import customer_logo_fit_2 from '../images/customerlogoimg/Customer_Logo_Fit-02.png';
import customer_logo_fit_3 from '../images/customerlogoimg/Customer_Logo_Fit-03.png';
import customer_logo_fit_4 from '../images/customerlogoimg/Customer_Logo_Fit-04.png';
import customer_logo_fit_5 from '../images/customerlogoimg/Customer_Logo_Fit-05.png';
import customer_logo_fit_6 from '../images/customerlogoimg/Customer_Logo_Fit-06.png';
import customer_logo_fit_7 from '../images/customerlogoimg/Customer_Logo_Fit-07.png';
import customer_logo_fit_8 from '../images/customerlogoimg/Customer_Logo_Fit-08.png';
import customer_logo_fit_9 from '../images/customerlogoimg/Customer_Logo_Fit-09.png';
import customer_logo_fit_10 from '../images/customerlogoimg/Customer_Logo_Fit-10.png';
import customer_logo_fit_11 from '../images/customerlogoimg/Customer_Logo_Fit-11.png';
import customer_logo_fit_12 from '../images/customerlogoimg/Customer_Logo_Fit-12.png';
import customer_logo_fit_13 from '../images/customerlogoimg/Customer_Logo_Fit-13.png';
import customer_logo_fit_14 from '../images/customerlogoimg/Customer_Logo_Fit-14.png';
import customer_logo_fit_15 from '../images/customerlogoimg/Customer_Logo_Fit-15.png';
import customer_logo_fit_16 from '../images/customerlogoimg/Customer_Logo_Fit-16.png';
import customer_logo_fit_17 from '../images/customerlogoimg/Customer_Logo_Fit-17.png';
import customer_logo_fit_18 from '../images/customerlogoimg/Customer_Logo_Fit-18.png';
import customer_logo_fit_19 from '../images/customerlogoimg/Customer_Logo_Fit-19.png';
import customer_logo_fit_20 from '../images/customerlogoimg/Customer_Logo_Fit-20.png';
import customer_logo_fit_21 from '../images/customerlogoimg/Customer_Logo_Fit-21.png';
import customer_logo_fit_22 from '../images/customerlogoimg/Customer_Logo_Fit-22.png';
import customer_logo_fit_23 from '../images/customerlogoimg/Customer_Logo_Fit-23.png';
import customer_logo_fit_24 from '../images/customerlogoimg/Customer_Logo_Fit-24.png';
import customer_logo_fit_25 from '../images/customerlogoimg/Customer_Logo_Fit-25.png';
import customer_logo_fit_26 from '../images/customerlogoimg/Customer_Logo_Fit-26.png';
import customer_logo_fit_27 from '../images/customerlogoimg/Customer_Logo_Fit-27.png';
import customer_logo_fit_28 from '../images/customerlogoimg/Customer_Logo_Fit-28.png';
import customer_logo_fit_29 from '../images/customerlogoimg/Customer_Logo_Fit-29.png';
import customer_logo_fit_30 from '../images/customerlogoimg/Customer_Logo_Fit-30.png';
import customer_logo_fit_31 from '../images/customerlogoimg/Customer_Logo_Fit-31.png';
import customer_logo_fit_32 from '../images/customerlogoimg/Customer_Logo_Fit-32.png';
import customer_logo_fit_33 from '../images/customerlogoimg/Customer_Logo_Fit-33.png';
import customer_logo_fit_34 from '../images/customerlogoimg/Customer_Logo_Fit-34.png';
import customer_logo_fit_35 from '../images/customerlogoimg/Customer_Logo_Fit-35.png';
import customer_logo_fit_36 from '../images/customerlogoimg/Customer_Logo_Fit-36.png';
import customer_logo_fit_37 from '../images/customerlogoimg/Customer_Logo_Fit-37.png';
import customer_logo_fit_38 from '../images/customerlogoimg/Customer_Logo_Fit-38.png';
import customer_logo_fit_39 from '../images/customerlogoimg/Customer_Logo_Fit-39.png';
import customer_logo_fit_40 from '../images/customerlogoimg/Customer_Logo_Fit-40.png';
import customer_logo_fit_41 from '../images/customerlogoimg/Customer_Logo_Fit-41.png';
import customer_logo_fit_42 from '../images/customerlogoimg/Customer_Logo_Fit-42.png';
import customer_logo_fit_43 from '../images/customerlogoimg/Customer_Logo_Fit-43.png';
import customer_logo_fit_44 from '../images/customerlogoimg/Customer_Logo_Fit-44.png';
import customer_logo_fit_45 from '../images/customerlogoimg/Customer_Logo_Fit-45.png';
import customer_logo_fit_46 from '../images/customerlogoimg/Customer_Logo_Fit-46.png';
import customer_logo_fit_47 from '../images/customerlogoimg/Customer_Logo_Fit-47.png';
import customer_logo_fit_48 from '../images/customerlogoimg/Customer_Logo_Fit-48.png';
import customer_logo_fit_49 from '../images/customerlogoimg/Customer_Logo_Fit-49.png';
import customer_logo_fit_50 from '../images/customerlogoimg/Customer_Logo_Fit-50.png';
import customer_logo_fit_51 from '../images/customerlogoimg/Customer_Logo_Fit-51.png';
import customer_logo_fit_52 from '../images/customerlogoimg/Customer_Logo_Fit-52.png';
import customer_logo_fit_53 from '../images/customerlogoimg/Customer_Logo_Fit-53.png';
import customer_logo_fit_54 from '../images/customerlogoimg/Customer_Logo_Fit-54.png';
import customer_logo_fit_55 from '../images/customerlogoimg/Customer_Logo_Fit-55.png';
import customer_logo_fit_56 from '../images/customerlogoimg/Customer_Logo_Fit-56.png';
import customer_logo_fit_57 from '../images/customerlogoimg/Customer_Logo_Fit-57.png';
import customer_logo_fit_58 from '../images/customerlogoimg/Customer_Logo_Fit-58.png';
import customer_logo_fit_59 from '../images/customerlogoimg/Customer_Logo_Fit-59.png';
import customer_logo_fit_60 from '../images/customerlogoimg/Customer_Logo_Fit-60.png';
import customer_logo_fit_61 from '../images/customerlogoimg/Customer_Logo_Fit-61.png';
import customer_logo_fit_62 from '../images/customerlogoimg/Customer_Logo_Fit-62.png';
import customer_logo_fit_63 from '../images/customerlogoimg/Customer_Logo_Fit-63.png';
import customer_logo_fit_64 from '../images/customerlogoimg/Customer_Logo_Fit-64.png';
import customer_logo_fit_65 from '../images/customerlogoimg/Customer_Logo_Fit-65.png';
import customer_logo_fit_66 from '../images/customerlogoimg/Customer_Logo_Fit-66.png';
import customer_logo_fit_67 from '../images/customerlogoimg/Customer_Logo_Fit-67.png';
import customer_logo_fit_68 from '../images/customerlogoimg/Customer_Logo_Fit-68.png';
import customer_logo_fit_69 from '../images/customerlogoimg/Customer_Logo_Fit-69.png';
import customer_logo_fit_70 from '../images/customerlogoimg/Customer_Logo_Fit-70.png';
import customer_logo_fit_71 from '../images/customerlogoimg/Customer_Logo_Fit-71.png';
import customer_logo_fit_72 from '../images/customerlogoimg/Customer_Logo_Fit-72.png';
import customer_logo_fit_73 from '../images/customerlogoimg/Customer_Logo_Fit-73.png';
import customer_logo_fit_74 from '../images/customerlogoimg/Customer_Logo_Fit-74.png';
import customer_logo_fit_75 from '../images/customerlogoimg/Customer_Logo_Fit-75.png';



function Home() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    service: 'LinkSquare',
    message: '',
  });

  // Video ref
  const videoRef = useRef(null);


  // Unmute video after page loads
  useEffect(() => {
    const enableSound = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.play();
        window.removeEventListener('click', enableSound);
      }
    };
  
    window.addEventListener('click', enableSound);
  }, []);

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
      <section className="line">
       <div className="line-content">
        <hr />
       </div>
      </section>
      {/* Hero */}
      <section className="hero">
        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay muted playsInline ref={videoRef}>
            <source src={main_video_2025_v3} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Product Section */}
      <section className="products">
          <div className="product-card" style={{ backgroundImage: `url(${linksquare})` }}>
          <div className="product-overlay">
            <img src={LinkSquarelogo} alt="LinkSquare Logo" className="product-logo , link-square-logo" />
            <div className="product-underline"></div>
            <p className="product-desc">Spectral Insight in the Palm of Your Hand</p>
            <p className="product-detail">LinkSquare is a smart handheld spectrometer powered by STRATIO's Ge-based SWIR spectral sensor. It captures spectral fingerprints across 8 channels among SWIR range to analyze and identify materials in real time, from plastics and fabrics to food and pharmaceuticals</p>
            <a href="https://linksquare.io/" className="product-btn link-square-btn" target="_blank" rel="noopener noreferrer">
              <span className="link-square-btn-text">Web Site </span>
              <img src={arrow_outward} alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>

        <div className="product-card" style={{ backgroundImage: `url(${beyonsense})` }}>
          <div className="product-overlay">
            <img src={BeyonSenselogo} alt="BeyonSense Logo" className="product-logo" />
            <div className="product-underline">
              
            </div>
            <p className="product-desc">Infrared Vision, Redefined</p>
            <p className="product-detail">The only SWIR imaging solution built with STRATIO's Ge-based image sensor, a breakthrough that redefines what's possible in infrared vision. From autonomous vehicles to next-generation smartphones, BeyonSense is unlocking entirely new markets where seeing beyond visible means seeing further, safer, and smarter.</p>
            <a href="https://beyonsense.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span className="beyon-sense-btn-text">Web Site </span>
              <img src={arrow_outward} alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>

        <div className="product-card product-card-stnf" style={{ backgroundImage: `url(${stnf})` }}>
          <div className="product-overlay">
            <img src={STNFlogo} alt="STNF Logo" className="product-logo" />
            <div className="product-underline"></div>
            <p className="product-desc">Your Idea, Our Fab</p>
            <p className="product-detail">STNF is a Lab-to-Fab Foundry that supports startups disrupting the market, research institutions, and large corporations in transitioning from R&D to the commercial foundry production.</p>
            <a href="https://stnf.io/" className="product-btn" target="_blank" rel="noopener noreferrer">
              <span className="stnf-btn-text">Web Site </span>
              <img src={arrow_outward} alt="Arrow" className="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="partner slide" id="logo-slide-01">
          <div className="inner">
            <div className="box"><img src={customer_logo_fit_1} alt="Olam" /></div>
            <div className="box"><img src={customer_logo_fit_2} alt="USDA" /></div>
            <div className="box"><img src={customer_logo_fit_3} alt="AgResearch" /></div>
            <div className="box"><img src={customer_logo_fit_4} alt="Hortifrut" /></div>
            <div className="box"><img src={customer_logo_fit_5} alt="Aerobotics" /></div>
            <div className="box"><img src={customer_logo_fit_6} alt="Demetria" /></div>
            <div className="box"><img src={customer_logo_fit_7} alt="INIA" /></div>
            <div className="box"><img src={customer_logo_fit_8} alt="Smart Water Group" /></div>
            <div className="box"><img src={customer_logo_fit_9} alt="Biolumic" /></div>
            <div className="box"><img src={customer_logo_fit_10} alt="Libios" /></div>
            <div className="box"><img src={customer_logo_fit_11} alt="Cornell University" /></div>
            <div className="box"><img src={customer_logo_fit_12} alt="Illinois" /></div>
            <div className="box"><img src={customer_logo_fit_13} alt="UCLA" /></div>
            <div className="box"><img src={customer_logo_fit_14} alt="Kennesaw State University" /></div>
            <div className="box"><img src={customer_logo_fit_15} alt="Florida International University" /></div>
            <div className="box"><img src={customer_logo_fit_16} alt="University of New Hampshire" /></div>
            <div className="box"><img src={customer_logo_fit_17} alt="Wageningen University" /></div>
            <div className="box"><img src={customer_logo_fit_18} alt="Johns Hopkins University" /></div>
            <div className="box"><img src={customer_logo_fit_19} alt="LG" /></div>
            <div className="box"><img src={customer_logo_fit_20} alt="Pfizer" /></div>
            <div className="box"><img src={customer_logo_fit_21} alt="Samsung" /></div>
            <div className="box"><img src={customer_logo_fit_22} alt="US CBP" /></div>
            <div className="box"><img src={customer_logo_fit_23} alt="NIST" /></div>
            <div className="box"><img src={customer_logo_fit_24} alt="KOMSCO" /></div>
            <div className="box"><img src={customer_logo_fit_25} alt="Thermo Fisher Scientific" /></div>
            <div className="box"><img src={customer_logo_fit_26} alt="Microtrace" /></div>
            <div className="box"><img src={customer_logo_fit_27} alt="Sanyo Chemical" /></div>
            <div className="box"><img src={customer_logo_fit_28} alt="Children's National" /></div>
            <div className="box"><img src={customer_logo_fit_29} alt="Hitachi" /></div>
            <div className="box"><img src={customer_logo_fit_30} alt="Viavi Solutions" /></div>
            <div className="box"><img src={customer_logo_fit_31} alt="NIH" /></div>
            <div className="box"><img src={customer_logo_fit_32} alt="NEC" /></div>
            <div className="box"><img src={customer_logo_fit_33} alt="Nepes" /></div>
            <div className="box"><img src={customer_logo_fit_34} alt="Mitsubishi Heavy Industries" /></div>
            <div className="box"><img src={customer_logo_fit_35} alt="Sun Insurance" /></div>
            <div className="box"><img src={customer_logo_fit_36} alt="Bystronic" /></div>
            <div className="box"><img src={customer_logo_fit_37} alt="VA Tech" /></div>
            <div className="box"><img src={customer_logo_fit_38} alt="LG Display" /></div>
            <div className="box"><img src={customer_logo_fit_39} alt="DSTL" /></div>
            <div className="box"><img src={customer_logo_fit_40} alt="NMBU" /></div>
            <div className="box"><img src={customer_logo_fit_41} alt="TechInsights" /></div>
            <div className="box"><img src={customer_logo_fit_42} alt="RIT" /></div>
            <div className="box"><img src={customer_logo_fit_43} alt="Intuitive Surgical" /></div>
            <div className="box"><img src={customer_logo_fit_44} alt="Precision Planting" /></div>
            <div className="box"><img src={customer_logo_fit_45} alt="UiT" /></div>
            <div className="box"><img src={customer_logo_fit_46} alt="Apple" /></div>
            <div className="box"><img src={customer_logo_fit_47} alt="Tricas" /></div>
            <div className="box"><img src={customer_logo_fit_48} alt="SCOUT" /></div>
            <div className="box"><img src={customer_logo_fit_49} alt="Thales Alenia Space" /></div>
            <div className="box"><img src={customer_logo_fit_50} alt="AMS" /></div>
            <div className="box"><img src={customer_logo_fit_51} alt="Acorn" /></div>
            <div className="box"><img src={customer_logo_fit_52} alt="Nonasys" /></div>
            <div className="box"><img src={customer_logo_fit_53} alt="Breakwater Research" /></div>
            <div className="box"><img src={customer_logo_fit_54} alt="Ceremorphic" /></div>
            <div className="box"><img src={customer_logo_fit_55} alt="SunDiode" /></div>
            <div className="box"><img src={customer_logo_fit_56} alt="Microchip" /></div>
            <div className="box"><img src={customer_logo_fit_57} alt="Ladybug" /></div>
            <div className="box"><img src={customer_logo_fit_58} alt="Sandia National Laboratories" /></div>
            <div className="box"><img src={customer_logo_fit_59} alt="HRL" /></div>
            <div className="box"><img src={customer_logo_fit_60} alt="LLNL" /></div>
            <div className="box"><img src={customer_logo_fit_61} alt="Analog Devices" /></div>
            <div className="box"><img src={customer_logo_fit_62} alt="UCSF" /></div>
            <div className="box"><img src={customer_logo_fit_63} alt="Applied Materials" /></div>
            <div className="box"><img src={customer_logo_fit_64} alt="Torramics" /></div>
            <div className="box"><img src={customer_logo_fit_65} alt="PrimeNano" /></div>
            <div className="box"><img src={customer_logo_fit_66} alt="Plamatherm" /></div>
            <div className="box"><img src={customer_logo_fit_67} alt="Pumpkin Seed" /></div>
            <div className="box"><img src={customer_logo_fit_68} alt="Stanford" /></div>
            <div className="box"><img src={customer_logo_fit_69} alt="MEMS" /></div>
            <div className="box"><img src={customer_logo_fit_70} alt="Raxium" /></div>
            <div className="box"><img src={customer_logo_fit_71} alt="Northwest Hub" /></div>
            <div className="box"><img src={customer_logo_fit_72} alt="UC Davis" /></div>
            <div className="box"><img src={customer_logo_fit_73} alt="Carbon3D" /></div>
            <div className="box"><img src={customer_logo_fit_74} alt="University of Texas" /></div>
            <div className="box"><img src={customer_logo_fit_75} alt="UC Berkeley" /></div>
            {/* Duplicate for seamless scroll */}
            
          </div>
        </section>

       

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-info">
          <h2 className="contact-form-title">Contact us</h2>
          <div className="us">US Office.</div>
          <div className="us-address" style={{marginBottom: '1.5rem'}}>2211 Fortune Drive, Suite A, San Jose, CA 95131</div>
          <div className="kr">KR Office.</div>
          <div className="kr-address" style={{marginBottom: '1.5rem'}}>B-911, 43 Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</div>
          <div className="mail">Mail.</div>
          <div className="mail-address" style={{marginBottom: '1.5rem'}}>contact@stratiotechnolgy.com</div>
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
          <label id="service-label" className="required" htmlFor="service">Product & Service</label>
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
              <span className="custom-dropdown-arrow">
                <img 
                  src={dropdownOpen ? dropup_arrow : dropdown_arrow} 
                  alt="Arrow" 
                  className="arrow" 
                />
              </span>
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
 