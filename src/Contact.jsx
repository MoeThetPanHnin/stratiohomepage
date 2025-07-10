import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './Contact.css';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (option) => {
    setFormData({ ...formData, service: option });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="contact-root">
      {/* Global Network Section */}
      <div className="contact-global-network">
        <h2 className="contact-global-title">Global Network</h2>
        <div className="contact-map-wrapper">
          <img src="/contact/World map.svg" alt="World Map" className="contact-map-img" />
        </div>
      </div>

      {/* Office Cards Section */}
      <div className="contact-offices">
        {/* US Office */}
        <div className="office-card">
          <div className="office-card-img-wrapper">
            <img src="/contact/stratio_bk_v2.png" alt="STRATIO, INC." className="office-card-img" />
          </div>
          <div className="office-card-content">
            <div>
              <div className="office-card-title">STRATIO, INC.</div>
              <div className="office-card-address">2211 Fortune Drive, Suite A, San Jose, CA 95131</div>
            </div>
            <a className="office-card-map" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <span style={{marginRight: 'auto'}}>Map</span>
              <span className="news-card-link"><img src="/contact/Arrow Outward.svg" alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
            </a>
          </div>
        </div>

        {/* Korea Office */}
        <div className="office-card">
          <div className="office-card-img-wrapper">
            <img src="/contact/stratiokorea_bk_v2.png" alt="STRATIO KOREA" className="office-card-img" />
          </div>
          <div className="office-card-content">
            <div>
              <div className="office-card-title">STRATIO KOREA</div>
              <div className="office-card-address">B-911, 43, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</div>
            </div>
            
            <a className="office-card-map" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <span style={{marginRight: 'auto'}}>Map</span>
              <span className="news-card-link"><img src="/contact/Arrow Outward.svg" alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-form-title">Contact us</h2>
          <div className="contact-info-mail">
            <p className="contact-info-label">Mail.</p>
            <p className="contact-info-email">contact@stratiotechnology.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label className="contact-form-label">
                  Company<span className="contact-form-required">*</span>
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label">
                  Name<span className="contact-form-required">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">
                E-mail<span className="contact-form-required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">
                Product & Service<span className="contact-form-required">*</span>
              </label>
              {/* Custom Dropdown Start */}
              <div
                className={`custom-dropdown${dropdownOpen ? ' open' : ''}`}
                ref={dropdownRef}
                tabIndex={0}
                onClick={() => setDropdownOpen((open) => !open)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setDropdownOpen((open) => !open);
                    e.preventDefault();
                  } else if (e.key === 'Escape') {
                    setDropdownOpen(false);
                  }
                }}
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
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="contact-form-textarea"
              />
            </div>

            <div className="contact-form-submit-row">
              <button
                type="submit"
                className="contact-form-submit-btn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact; 