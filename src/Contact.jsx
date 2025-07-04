import React, { useState, useRef, useEffect } from 'react';
import './App.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: 'black', paddingTop: 90, paddingBottom: 100 }}>
      {/* Global Network Section */}
      <div style={{ textAlign: 'center', padding: '4rem 0', background: 'black' }}>
        <h2 style={{ color: '#D5B64C', fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem' }}>Global Network</h2>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <img src="/contact/World map.svg" alt="World Map" style={{ width: '100%', height: 'auto', maxHeight: 500 }} />
          {/* Office Markers */}
          <div style={{ position: 'absolute', top: '35%', left: '13%', color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
            <div style={{ background: '#D5B64C', width: 8, height: 8, borderRadius: '50%', margin: '0 auto 5px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -2, left: -2, width: 12, height: 12, border: '2px solid #D5B64C', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            </div>
            <span>STRATIO, INC.</span>
          </div>
          <div style={{ position: 'absolute', top: '28%', right: '18%', color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
            <div style={{ background: '#D5B64C', width: 8, height: 8, borderRadius: '50%', margin: '0 auto 5px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -2, left: -2, width: 12, height: 12, border: '2px solid #D5B64C', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            </div>
            <span>STRATIO KOREA</span>
          </div>
        </div>
      </div>

      {/* Office Cards Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem', maxWidth: 1200, margin: '0 auto', flexWrap: 'wrap' }}>
        {/* US Office */}
        <div style={{ background: '#222', width: 480, borderRadius: 0, overflow: 'hidden' }}>
          <img src="/contact/stratio_bk_v2.png" alt="STRATIO, INC." style={{ width: '100%', height: 240, objectFit: 'cover' }} />
          <div style={{ padding: '2rem 1.5rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>STRATIO, INC.</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '1.5rem' }}>2211 Fortune Drive, Suite A, San Jose, CA 95131</p>
            <button style={{ background: 'transparent', border: '1px solid #ccc', color: '#ccc', padding: '0.7rem 1.5rem', borderRadius: 0, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Map
              <img src="/contact/Arrow Outward.svg" alt="Arrow" style={{ width: 16, height: 16, filter: 'invert(0.8)' }} />
            </button>
          </div>
        </div>

        {/* Korea Office */}
        <div style={{ background: '#222', width: 480, borderRadius: 0, overflow: 'hidden' }}>
          <img src="/contact/stratiokorea_bk_v2.png" alt="STRATIO KOREA" style={{ width: '100%', height: 240, objectFit: 'cover' }} />
          <div style={{ padding: '2rem 1.5rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>STRATIO KOREA</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '1.5rem' }}>B-911, 43, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do (13449)</p>
            <button style={{ background: 'transparent', border: '1px solid #ccc', color: '#ccc', padding: '0.7rem 1.5rem', borderRadius: 0, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Map
              <img src="/contact/Arrow Outward.svg" alt="Arrow" style={{ width: 16, height: 16, filter: 'invert(0.8)' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto', gap: '4rem', flexWrap: 'wrap' }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px', minWidth: 300 }}>
          <h2 style={{ color: '#D5B64C', fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>Contact us</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Mail.</p>
            <p style={{ color: '#ccc', fontSize: '1rem' }}>contact@stratiotechnology.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '2 1 500px', minWidth: 400 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <label style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                  Company<span style={{ color: '#D5B64C' }}>*</span>
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '1rem', background: '#555', border: 'none', color: '#fff', fontSize: '1rem', borderRadius: 0 }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <label style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                  Name<span style={{ color: '#D5B64C' }}>*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '1rem', background: '#555', border: 'none', color: '#fff', fontSize: '1rem', borderRadius: 0 }}
                />
              </div>
            </div>

            <div>
              <label style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                E-mail<span style={{ color: '#D5B64C' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '1rem', background: '#555', border: 'none', color: '#fff', fontSize: '1rem', borderRadius: 0 }}
              />
            </div>

            <div>
              <label style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                Product & Service<span style={{ color: '#D5B64C' }}>*</span>
              </label>
              <div
                className={`custom-dropdown${dropdownOpen ? ' open' : ''}`}
                ref={dropdownRef}
                tabIndex={0}
                onClick={() => setDropdownOpen((open) => !open)}
                style={{ width: '100%', background: '#555', padding: '1rem', position: 'relative', cursor: 'pointer', borderRadius: 0 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
                  {formData.service}
                  <span style={{ fontSize: '1.2rem' }}>{dropdownOpen ? '▲' : '▼'}</span>
                </div>
                {dropdownOpen && (
                  <ul style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#666', margin: 0, padding: 0, listStyle: 'none', zIndex: 10, borderTop: '1px solid #777' }}>
                    {serviceOptions.map((option) => (
                      <li
                        key={option}
                        onClick={(e) => { e.stopPropagation(); handleDropdownSelect(option); }}
                        style={{ padding: '1rem', color: '#fff', cursor: 'pointer', borderBottom: '1px solid #777' }}
                        onMouseEnter={(e) => e.target.style.background = '#777'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div>
              <label style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                style={{ width: '100%', padding: '1rem', background: '#555', border: 'none', color: '#fff', fontSize: '1rem', resize: 'vertical', borderRadius: 0 }}
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                type="submit"
                style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '1rem 3rem', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .contact-offices {
            flex-direction: column;
            align-items: center;
          }
          .contact-form-section {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact; 