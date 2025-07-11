// src/App.jsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home              from "./Home";
import About             from "./About";
import OurCrew           from "./OurCrew";
import ProductsServices  from "./ProductsServices";
import News              from "./News";
import Contact           from "./Contact";
import "../css/App.css";
import stratio_logo from '../images/homeimg/STRATIO Logo.png';  
import facebook from '../icon/facebook.svg';
import twitter from '../icon/twitter.svg';
import youtube from '../icon/youtube.svg';
import linkedin from '../icon/linkedin.svg';
import top from '../icon/Top.svg';

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/about':
        return 'About';
      case '/ourcrew':
        return 'Our Crew';
      case '/products':
        return 'Products & Services';
      case '/news':
        return 'News';
      case '/contact':
        return 'Contact';
      default:
        return '';
    }
  };
  const pageTitle = getPageTitle(location.pathname);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
        {/* Menu Overlay */}
        {menuOpen && (
          <div className="menu-overlay">
            <div className="menu-overlay-header">
            <img 
              src={stratio_logo} 
              alt="Stratio Logo" 
              className="menu-overlay-logo" 
              onClick={(e) => { handleLogoClick(e); setMenuOpen(false); }}
              style={{ cursor: 'pointer' }}
            />
            <button className="menu-overlay-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <line x1="30" y1="10" x2="10" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
            </div>
            <div className="menu-overlay-content">
              <Link to="/about" className="menu-overlay-link" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/products" className="menu-overlay-link" onClick={() => setMenuOpen(false)}>Products & Services</Link>
              <Link to="/news" className="menu-overlay-link" onClick={() => setMenuOpen(false)}>News</Link>
              <Link to="/contact" className="menu-overlay-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
            <div className="menu-overlay-footer">
              <div>
                <span style={{ fontWeight: 'bold' }}>Mail.</span><br />
                contact@stratiotechnolgy.com
              </div>
            </div>
          </div>
        )}
        
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <img 
              src={stratio_logo} 
              alt="Stratio Logo" 
              className="header-logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {pageTitle && (
            <div className="header-center">
              <span className="header-about-text">{pageTitle}</span>
            </div>
          )}
          <nav className="header-right">
            <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open Menu">
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
            </button>
          </nav>
        </header>

        {/* Routes */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourcrew" element={<OurCrew />} />
            <Route path="/products" element={<ProductsServices />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <img 
              src={stratio_logo} 
              alt="Stratio Logo" 
              className="footer-logo" 
              style={{ cursor: 'pointer' }}
            />
            <p className="footer-copyright">Copyright © 2025 STRATIO, INC. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://www.facebook.com/LinkSquareIR" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://x.com/LinkSquareIR" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="Threads">
                <img src={twitter} alt="Threads" />
              </a>
              <a href="https://www.youtube.com/@StratioBeyonSenseLinkSquare" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="YouTube">
                <img src={youtube} alt="YouTube" />
              </a>
              <a href="https://www.linkedin.com/company/stratioinc/" target="_blank" rel="noopener noreferrer" className="icon-box" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            { !menuOpen && (
              <button className="go-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to Top">
                <img src={top} alt="Go to Top" style={{ width: 44, height: 44 }} />
              </button>
            )}
          </div>
        </footer>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
                                                                                                                                                                        