import React from 'react';
import './NewsCard.css';

const NewsCard = ({ img, title, desc, date, url }) => (
  <div className="news-card">
    <img src={img} alt={title} className="news-card-img" />
    <div className="news-card-content">
      <h3 className="news-card-title">{title}</h3>
      <p className="news-card-desc">{desc}</p>
    </div>
    <a href={url} className="news-card-footer" aria-label="Read more" target="_blank" rel="noopener noreferrer">
      <span className="news-card-date">{date}</span>
      <span className="news-card-link"><img src="/contact/Arrow Outward.svg" alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
    </a>
  </div>
);

export default NewsCard; 