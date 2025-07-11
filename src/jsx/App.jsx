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
import close_icon from '../images/homeimg/Close.svg';
import menu_icon from '../images/homeimg/Dehaze.png';

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
           <header className="header-overlay">
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
          <button className="menu-overlay-close" style={{ marginRight: '0px' }} onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <img src={close_icon} alt="Close" />
              </button>
          </nav>
          
        </header>
        
            
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
              <div className="menu-icon" style={{ cursor: 'pointer' }}>
                <img src={menu_icon} alt="Menu" />
              </div>
            </button>
          </nav>
          
        </header>
        
          <hr />
        

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
                                                                                                                                                                        