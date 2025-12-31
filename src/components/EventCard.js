import React from 'react';
import './EventCard.css';

function EventCard({ eventName, date, time, description }) {
  return (
    <div className="event-card">
      <div className="event-image"></div>
      
      <div className="event-details">
        <div className="event-header">
          <div className="event-title-section">
            <h2 className="event-name">{eventName}</h2>
            
            <div className="event-metadata">
              <div className="meta-item">
                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 2V5" stroke="#CDD4DA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V5" stroke="#CDD4DA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 9.09H20.5" stroke="#CDD4DA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#CDD4DA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="meta-text">{date}</span>
              </div>
              
              <div className="meta-item">
                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CDD4DA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L14 14" stroke="#CDD4DA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="meta-text">{time}</span>
              </div>
            </div>
          </div>
          
          <button className="register-button">
            <span>Register</span>
          </button>
        </div>
        
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
