import React from 'react';
import './ScrollIndicator.css';

function ScrollIndicator({ direction, onClick }) {
  return (
    <div className={`scroll-indicator ${direction}`} onClick={onClick}>
      <div className="scroll-container">
        <div className="scroll-frame">
          <p className="scroll-text">Scroll to view</p>
          <div className={`arrow-icon ${direction === 'up' ? 'arrow-up' : 'arrow-down'}`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path 
                d={direction === 'up' ? "M18 15l-6-6-6 6" : "M18 9l-6 6-6-6"} 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="divider-container">
          <div className="divider-bar"></div>
          <div className={`arrow-icon ${direction === 'up' ? 'arrow-up' : 'arrow-down'}`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path 
                d={direction === 'up' ? "M18 15l-6-6-6 6" : "M18 9l-6 6-6-6"} 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="scroll-frame-bottom">
          <div className={`arrow-icon ${direction === 'up' ? 'arrow-up' : 'arrow-down'}`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path 
                d={direction === 'up' ? "M18 15l-6-6-6 6" : "M18 9l-6 6-6-6"} 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="scroll-text">Scroll to view</p>
        </div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
