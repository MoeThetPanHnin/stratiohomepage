import React from 'react';
import './NewsCard.css';
import arrow_outward from '../images/ourcrewimg/Arrow Outward.svg';


const NewsCard = ({ img, title, desc, date, url }) => (
  <div className="news-card">
    <div className="news-card-img-wrapper"> 
      <img src={img} alt={title} className="news-card-img" />
    </div>
    <div className="news-card-content">

      <div>
      <div className="news-card-title-wrapper">
        <h3 className="news-card-title">{title}</h3>
      </div>
      <div className="news-card-desc-wrapper">
      <p className="news-card-desc">{desc}</p>
      </div>
      </div>
    </div>
    <a href={url} className="news-card-footer" aria-label="Read more" target="_blank" rel="noopener noreferrer">
      <span className="news-card-date">{date}</span>
      <span className="news-card-link"><img src={arrow_outward} alt="arrow" style={{ width: '20px', height: '20px' }} /></span>
    </a>
  </div>
);

export default NewsCard; 