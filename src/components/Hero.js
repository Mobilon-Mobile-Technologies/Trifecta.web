import React from 'react';
import './Hero.css';

function Hero({ setActiveTab }) {
  return (
    <div className="hero-section">
      <div className="logo-group">
        <div className="logo-blur"></div>
        <div 
          className="mobilon-logo"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Mobilon%20logo.png)`
          }}
        ></div>
      </div>
      
      <div className="content-frame">
        <div className="title-frame">
          <h1 className="trifecta-title">TriFecta</h1>
        </div>
        
        <div className="description-frame">
          <p className="description-text">
            The <span className="highlight">TriFecta</span> is a 3-day event which consists of creativity, entrepreneurship, and technological excellence. 
            Designed as a multi-dimensional innovation experience, the event brings together student innovators, 
            emerging entrepreneurs, developers, mentors, investors, and industry leaders on one powerful platform.
          </p>
          
          <p className="description-text">
            Across its three flagship events - <span className="highlight-pink">The Round Table Conference, PitchWave Arena, and The Tech Forge Hackathon</span> - 
            TriFecta aims to reshape how students learn, collaborate, and build for the real world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
