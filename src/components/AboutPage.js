import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="mobilon-hero-section">
          <div className="mobilon-text-content">
            <div className="mobilon-branding">
              <h1 className="mobilon-title">MOBiLON</h1>
              <p className="mobilon-subtitle">Bennett University</p>
            </div>
            <p className="mobilon-description">
              Mobilon is a student-led innovation and technology community that empowers students through hands-on learning, real-world projects, and industry collaborations. By organizing workshops, hackathons, and tech-driven initiatives, Mobilon bridges the gap between academics and industry, nurturing creativity, leadership, and practical skills while enabling students to turn ideas into impactful solutions
            </p>
          </div>
          <div className="mobilon-logo-group">
            <div className="mobilon-logo-blur"></div>
            <div 
              className="mobilon-logo-image" 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Mobilon%20logo.png)` }}
            ></div>
          </div>
        </div>

        <div className="social-icons-section">
          <a href="https://www.instagram.com/mobilon_bu/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 16C19.6 16 16 19.6 16 24C16 28.4 19.6 32 24 32C28.4 32 32 28.4 32 24C32 19.6 28.4 16 24 16ZM24 29C21.2 29 19 26.8 19 24C19 21.2 21.2 19 24 19C26.8 19 29 21.2 29 24C29 26.8 26.8 29 24 29ZM33 10H15C12.2 10 10 12.2 10 15V33C10 35.8 12.2 38 15 38H33C35.8 38 38 35.8 38 33V15C38 12.2 35.8 10 33 10ZM35 33C35 34.1 34.1 35 33 35H15C13.9 35 13 34.1 13 33V15C13 13.9 13.9 13 15 13H33C34.1 13 35 13.9 35 15V33ZM33.5 15.5C33.5 16.3284 32.8284 17 32 17C31.1716 17 30.5 16.3284 30.5 15.5C30.5 14.6716 31.1716 14 32 14C32.8284 14 33.5 14.6716 33.5 15.5Z" fill="#CDD4DA"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/moksha-sharma-a232bb21b/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 10H10C8.9 10 8 10.9 8 12V36C8 37.1 8.9 38 10 38H38C39.1 38 40 37.1 40 36V12C40 10.9 39.1 10 38 10ZM18 34H14V20H18V34ZM16 18C14.9 18 14 17.1 14 16C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18ZM34 34H30V27C30 25.3 29.2 24 27.5 24C25.8 24 25 25.3 25 27V34H21V20H25V21.8C25.8 20.6 27.3 20 28.5 20C31.5 20 34 22 34 25.5V34Z" fill="#CDD4DA"/>
            </svg>
          </a>
          <a href="mailto:mobilon.bu@bennett.edu.in" className="social-icon email-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10H8C5.8 10 4.02 11.8 4.02 14L4 34C4 36.2 5.8 38 8 38H40C42.2 38 44 36.2 44 34V14C44 11.8 42.2 10 40 10ZM40 18L24 26L8 18V14L24 22L40 14V18Z" fill="#CDD4DA"/>
            </svg>
          </a>
        </div>

        <div className="about-divider"></div>

        <div className="about-section">
          <h2 className="about-section-title">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">mobilon.bu@bennett.edu.in</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91-8920896429</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Location</div>
              <div className="contact-value">Bennett University, Greater Noida</div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Prize Pool</h2>
          <div className="prize-grid">
            <div className="prize-card">
              <div className="prize-amount">₹2.5 Lakh</div>
              <div className="prize-label">Total Prize Pool</div>
            </div>
            <div className="prize-card">
              <div className="prize-amount">3</div>
              <div className="prize-label">Exciting Events</div>
            </div>
            <div className="prize-card">
              <div className="prize-amount">3000+</div>
              <div className="prize-label">Participants</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default AboutPage;
