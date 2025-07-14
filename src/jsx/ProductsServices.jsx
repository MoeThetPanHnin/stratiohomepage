import React, { useEffect } from "react";
import "../css/App.css";
import "../css/ProductsServices.css";
import LinkSquarelogo from "../images/homeimg/LinkSquarelogo.png";
import BeyonSenselogo from "../images/homeimg/BeyonSenselogo.png";
import STNFlogo from "../images/homeimg/STNFlogo.png";
import product_BeyonSense from "../images/products&servicesimg/product_BeyonSense.png";
import product_STNF from "../images/products&servicesimg/product_STNF.png";
import product_LinkSquare from "../images/products&servicesimg/Product img_02_2.png";
import arrow_outward from "../images/ourcrewimg/Arrow_Outward.svg";

const products = [
  {
    name: "LinkSquare",
    logo: LinkSquarelogo,
    bg: product_LinkSquare,
    desc: "powered by STRATIO's proprietary Ge-based SWIR spectral sensor. It captures 8-point spectral fingerprints of materials, making advanced analysis accessible anytime, anywhere. From checking food freshness, plastic sorting to verifying product authenticity, LinkSquare enables businesses to make faster, data-driven decisions, powered by AI.",
    highlight: "LinkSquare is a smart, handheld spectrometer",
    url: "https://linksquare.io/",
  },
  {
    name: "BeyonSense",
    logo: BeyonSenselogo,
    bg: product_BeyonSense,
    desc: "BeyonSense is the first and only Ge-based SWIR camera for high-resolution infrared imaging. Built on STRATIO's proprietary CMOS-compatible platform, it delivers the performance of traditional InGaAs cameras at a fraction of the size, cost, and power. From autonomous driving to consumer electronics, BeyonSense is redefining what's possible in infrared vision.",
    highlight: "BeyonSense is making SWIR imaging, finally in your hands",
    url: "https://beyonsense.io/",
  },
  {
    name: "STNF",
    logo: STNFlogo,
    bg: product_STNF,
    desc: "STNF is STRATIO's in-house nanofabrication facility in Silicon Valley, built to prototype and manufacture next-generation sensor devices, including our world-first Ge SWIR sensors. From concept to chip, bring your ideas to life with STRATIO's proven process. Your innovation, our process, made in California.",
    highlight: "STRATIO Technology Nanofabrication Facility (STNF)",
    url: "https://stnf.io/",
  },
];

function ProductsServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-services-root">
      <div className="products-services-container">
        {products.map((product, idx) => (
          <section
            key={product.name}
            className={`product-section ${idx % 2 === 1 ? "product-section-reverse" : ""}`}
          >
            <div className="product-content">
              <div className="product-content-inner">
                <img
                  src={product.logo}
                  alt={product.name + " Logo"}
                  className="product-logo"
                />
                <p className="product-highlight">{product.highlight}</p>
                <p className="product-description">{product.desc}</p>
                <a
                  href={product.url}
                  className="product-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="product-btn-text">Web Site </span>
                  <img src={arrow_outward} alt="Arrow" className="arrow" />
                </a>
              </div>
            </div>
            <div
              className="product-bg"
              style={{ backgroundImage: `url(${product.bg})` }}
            ></div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductsServices;
