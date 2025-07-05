import React, { useEffect } from 'react';
import './App.css';

const products = [
  {
    name: 'LinkSquare',
    logo: '/img/LinkSquarelogo.png',
    bg: '/products&services/Product%20img_02_2.png',
    desc: "LinkSquare is a smart, handheld spectrometer powered by STRATIO's proprietary Ge-based SWIR spectral sensor. It captures 8-point spectral fingerprints of materials, making advanced analysis accessible anytime, anywhere. From checking food freshness, plastic sorting to verifying product authenticity, LinkSquare enables businesses to make faster, data-driven decisions, powered by AI.",
    highlight: 'LinkSquare is a smart, handheld spectrometer',
    url: '#'
  },
  {
    name: 'BeyonSense',
    logo: '/img/BeyonSenselogo.png',
    bg: '/products&services/product_BeyonSense.png',
    desc: "BeyonSense is the first and only Ge-based SWIR camera for high-resolution infrared imaging. Built on STRATIO's proprietary CMOS-compatible platform, it delivers the performance of traditional InGaAs cameras at a fraction of the size, cost, and power. From autonomous driving to consumer electronics, BeyonSense is redefining what's possible in infrared vision.",
    highlight: 'BeyonSense is making SWIR imaging, finally in your hands',
    url: '#'
  },
  {
    name: 'STNF',
    logo: '/img/STNFlogo.png',
    bg: '/products&services/product_STNF.png',
    desc: "STNF is STRATIO's in-house nanofabrication facility in Silicon Valley, built to prototype and manufacture next-generation sensor devices, including our world-first Ge SWIR sensors. From concept to chip, bring your ideas to life with STRATIO's proven process. Your innovation, our process, made in California.",
    highlight: 'STRATIO Technology Nanofabrication Facility (STNF)',
    url: '#'
  }
];

function ProductsServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100vw', minHeight: '690px', background: 'black', paddingTop: 90, paddingBottom: 100 }}>
      <div style={{ width: '100vw', margin: 0, padding: 0 }}>
        {products.map((product, idx) => (
          <section
            key={product.name}
            style={{
              display: 'flex',
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'stretch',
              minHeight: '100vh',
              width: '100vw',
              margin: 0,
              padding: 0,
            }}
          >
            <div style={{ flex: 1, background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, padding: 0 }}>
              <div style={{ maxWidth: 500, width: '100%', margin: 0, padding: 0 }}>
                <img src={product.logo} alt={product.name + ' Logo'} style={{ maxWidth: 200, maxHeight: 60, marginBottom: 32 }} />
                <p style={{ color: '#D5B64C', fontWeight: 700, fontSize: '1.15rem', marginBottom: 16 }}>{product.highlight}</p>
                <p style={{ color: '#fff', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>{product.desc}</p>
                <a href={product.url} className="product-btn" style={{ marginTop: 24, marginBottom: 0, display: 'inline-block' }}>Web Site ↗</a>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: '100vh', height: '100%', background: `url(${product.bg}) center center / cover no-repeat`, margin: 0, padding: 0 }}></div>
          </section>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          section {
            flex-direction: column !important;
            min-height: unset !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductsServices; 