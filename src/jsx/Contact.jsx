import React, { useState, useRef, useEffect } from 'react';
import '../css/App.css';
import '../css/Contact.css';
import worldmap from '../images/contactimg/World map.svg';
import stratio_bk_v2 from '../images/contactimg/stratio_bk_v2.png';
import stratiokorea_bk_v2 from '../images/contactimg/stratiokorea_bk_v2.png';
import arrow_outward from '../images/ourcrewimg/Arrow Outward.svg'; 
import arrow_dropdown from '../images/homeimg/Arrow Drop Down.svg';

function Contact() {
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
    <div className="contact-root">
      {/* Global Network Section */}
      <div className="contact-global-network">
      <div  className="contact-global-title" >
          <h2 className="news-page-title">Global Network</h2>
        </div>
        <div className="contact-map-wrapper">
          <img src={worldmap} alt="World Map" className="contact-map-img" />
        </div>
      </div>

      {/* Office Cards Section */}
      <div className="contact-offices">
        {/* US Office */}
        <div className="office-card">
          <div className="office-card-img-wrapper">
            <img src={stratio_bk_v2} alt="STRATIO, INC." className="office-card-img" />
          </div>
          <div className="office-card-content">
            <div>
              <div className="office-card-title">STRATIO, INC.</div>
              <div className="office-card-address">2211 Fortune Drive, Suite A, San Jose, CA 95131</div>
            </div>
            <a className="office-card-map" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <span style={{marginRight: 'auto'}}>Map</span>
              <span className="news-card-link"><img src={arrow_outward} alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
            </a>
          </div>
        </div>

        {/* Korea Office */}
        <div className="office-card">
          <div className="office-card-img-wrapper">
            <img src={stratiokorea_bk_v2} alt="STRATIO KOREA" className="office-card-img" />
          </div>
          <div className="office-card-content">
            <div>
              <div className="office-card-title">STRATIO KOREA</div>
              <div className="office-card-address">B-911, 43, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</div>
            </div>
            
            <a className="office-card-map" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <span style={{marginRight: 'auto'}}>Map</span>
              <span className="news-card-link"><img src={arrow_outward} alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
            </a>
          </div>
        </div>
      </div>
      
    
     {/* Contact Section */}
     <section className="contact">
     <div className="contact-info">
       <h2 className="contact-form-title">Contact us</h2>
       
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
           <span className="custom-dropdown-arrow"><img src={arrow_dropdown} alt="Arrow" className="arrow" /></span>
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
   </div>


  );
}

export default Contact; 