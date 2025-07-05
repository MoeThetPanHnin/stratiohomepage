// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OurCrew from './OurCrew';
import ProductsServices from './ProductsServices';
import News from './News';
import Contact from './Contact';
import './App.css';

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';
  const isOurCrewPage = location.pathname === '/ourcrew';
  const isProductsPage = location.pathname === '/products';
  const isNewsPage = location.pathname === '/news';
  const isContactPage = location.pathname === '/contact';

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
            <img 
              src="/img/STRATIO Logo.png" 
              alt="Stratio Logo" 
              className="menu-overlay-logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
            <button className="menu-overlay-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <line x1="30" y1="10" x2="10" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
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
              src="/img/STRATIO Logo.png" 
              alt="Stratio Logo" 
              className="header-logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="header-center">
            {isAboutPage && <span className="header-about-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>About</span>}
            {isOurCrewPage && <span className="header-about-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Our Crew</span>}
            {isProductsPage && <span className="header-about-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Products & Services</span>}
            {isNewsPage && <span className="header-about-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>News</span>}
            {isContactPage && <span className="header-about-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Contact</span>}
          </div>
          <nav className="header-right">
            <span className="menu-text">MENU</span>
            <span className="menu-icon" onClick={() => setMenuOpen(true)} style={{ cursor: 'pointer' }}>
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourcrew" element={<OurCrew />} />
          <Route path="/products" element={<ProductsServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <section className="footer">
          <div className="footer-left">
            <img 
              src="/img/STRATIO Logo.png" 
              alt="Stratio Logo" 
              className="footer-logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
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
               className="size-10"
               strokeWidth={5}
               strokeDasharray={500}
               style={{width: '50px', height: '50px'}}>
               <path
                fillRule="evenodd" 
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" 
                clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>

        
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
                                                                                                                                                                        