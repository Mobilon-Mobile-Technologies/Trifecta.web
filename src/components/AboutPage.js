import React, { useState, useEffect, useRef } from 'react';
import './AboutPage.css';

function AboutPage() {
  const [ballPositionPx, setBallPositionPx] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const aboutPageRef = useRef(null);

  useEffect(() => {
    const calculateAndUpdateLine = () => {
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        
        console.log('Found timeline items:', timelineItems.length);
        
        if (timelineItems.length >= 2) {
          const firstItem = timelineItems[0];
          const lastItem = timelineItems[timelineItems.length - 1];
          
          console.log('First item offset:', firstItem.offsetTop, 'height:', firstItem.offsetHeight);
          console.log('Last item offset:', lastItem.offsetTop, 'height:', lastItem.offsetHeight);
          
          const firstItemCenter = firstItem.offsetTop + firstItem.offsetHeight / 2;
          const lastItemCenter = lastItem.offsetTop + lastItem.offsetHeight / 2;
          const calculatedLineHeight = lastItemCenter - firstItemCenter;
          
          console.log('Line calculated from items:', { firstItemCenter, lastItemCenter, calculatedLineHeight });
          
          if (calculatedLineHeight > 0) {
            setLineTop(firstItemCenter);
            setLineHeight(calculatedLineHeight);
            setBallPositionPx(firstItemCenter);
          } else {
            const fallbackHeight = (timelineItems.length - 1) * 230;
            const fallbackTop = firstItem.offsetTop + firstItem.offsetHeight / 2;
            console.log('Using fallback:', { fallbackTop, fallbackHeight });
            setLineTop(fallbackTop);
            setLineHeight(fallbackHeight);
            setBallPositionPx(fallbackTop);
          }
        }
      }
    };
    
    const handleScroll = () => {
      if (aboutPageRef.current && timelineRef.current) {
        const aboutPage = aboutPageRef.current;
        const timeline = timelineRef.current;
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        const timelineCenters = timeline.querySelectorAll('.timeline-center');
        
        if (timelineItems.length < 2 || timelineCenters.length < 2) return;
        
        const firstItem = timelineItems[0];
        const lastItem = timelineItems[timelineItems.length - 1];
        const firstItemCenter = firstItem.offsetTop + firstItem.offsetHeight / 2;
        const lastItemCenter = lastItem.offsetTop + lastItem.offsetHeight / 2;
        const currentLineHeight = lastItemCenter - firstItemCenter;
        
        const effectiveLineHeight = currentLineHeight > 0 ? currentLineHeight : (timelineItems.length - 1) * 230;
        const effectiveLineTop = firstItemCenter;
        
        const scrollTop = aboutPage.scrollTop;
        const viewportHeight = aboutPage.clientHeight;
        const viewportCenter = scrollTop + (viewportHeight / 2);
        const timelineTop = timeline.offsetTop - aboutPage.offsetTop;
        
        const scrollInTimeline = viewportCenter - timelineTop - effectiveLineTop;
        const scrollPercent = Math.max(0, Math.min(100, (scrollInTimeline / effectiveLineHeight) * 100));
        
        const anchorPositions = Array.from(timelineItems).map(item => {
          const itemCenter = item.offsetTop + item.offsetHeight / 2;
          const percentPos = ((itemCenter - effectiveLineTop) / effectiveLineHeight) * 100;
          return Math.max(0, Math.min(100, percentPos));
        });
        
        let nearestAnchor = 0;
        let minDistance = Math.abs(scrollPercent - anchorPositions[0]);
        
        anchorPositions.forEach((anchor, index) => {
          const distance = Math.abs(scrollPercent - anchor);
          if (distance < minDistance) {
            minDistance = distance;
            nearestAnchor = index;
          }
        });
        
        if (minDistance < 15) {
          const anchorPos = anchorPositions[nearestAnchor];
          const newBallPos = effectiveLineTop + (anchorPos / 100) * effectiveLineHeight;
          setActiveAnchor(nearestAnchor);
          setBallPositionPx(newBallPos);
        } else {
          const newBallPos = effectiveLineTop + (scrollPercent / 100) * effectiveLineHeight;
          setActiveAnchor(-1);
          setBallPositionPx(newBallPos);
        }
        
        setLineTop(effectiveLineTop);
        setLineHeight(effectiveLineHeight);
      }
    };

    const aboutPage = aboutPageRef.current;
    
    const observer = new ResizeObserver(() => {
      calculateAndUpdateLine();
    });
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    setTimeout(calculateAndUpdateLine, 100);
    setTimeout(calculateAndUpdateLine, 300);
    setTimeout(calculateAndUpdateLine, 600);
    setTimeout(calculateAndUpdateLine, 1000);
    
    if (aboutPage) {
      aboutPage.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {
        aboutPage.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page" ref={aboutPageRef}>
      <div className="about-content">
        <div className="mobilon-hero-section">
          <div className="mobilon-text-content">
            <div className="mobilon-branding">
              <h1 className="mobilon-title">MOBiLON</h1>
              <p className="mobilon-subtitle">Bennett University</p>
            </div>
            <p className="mobilon-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <div className="social-icon instagram-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 16C19.6 16 16 19.6 16 24C16 28.4 19.6 32 24 32C28.4 32 32 28.4 32 24C32 19.6 28.4 16 24 16ZM24 29C21.2 29 19 26.8 19 24C19 21.2 21.2 19 24 19C26.8 19 29 21.2 29 24C29 26.8 26.8 29 24 29ZM33 10H15C12.2 10 10 12.2 10 15V33C10 35.8 12.2 38 15 38H33C35.8 38 38 35.8 38 33V15C38 12.2 35.8 10 33 10ZM35 33C35 34.1 34.1 35 33 35H15C13.9 35 13 34.1 13 33V15C13 13.9 13.9 13 15 13H33C34.1 13 35 13.9 35 15V33ZM33.5 15.5C33.5 16.3284 32.8284 17 32 17C31.1716 17 30.5 16.3284 30.5 15.5C30.5 14.6716 31.1716 14 32 14C32.8284 14 33.5 14.6716 33.5 15.5Z" fill="#CDD4DA"/>
            </svg>
          </div>
          <div className="social-icon linkedin-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 10H10C8.9 10 8 10.9 8 12V36C8 37.1 8.9 38 10 38H38C39.1 38 40 37.1 40 36V12C40 10.9 39.1 10 38 10ZM18 34H14V20H18V34ZM16 18C14.9 18 14 17.1 14 16C14 14.9 14.9 14 16 14C17.1 14 18 14.9 18 16C18 17.1 17.1 18 16 18ZM34 34H30V27C30 25.3 29.2 24 27.5 24C25.8 24 25 25.3 25 27V34H21V20H25V21.8C25.8 20.6 27.3 20 28.5 20C31.5 20 34 22 34 25.5V34Z" fill="#CDD4DA"/>
            </svg>
          </div>
          <div className="social-icon email-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10H8C5.8 10 4.02 11.8 4.02 14L4 34C4 36.2 5.8 38 8 38H40C42.2 38 44 36.2 44 34V14C44 11.8 42.2 10 40 10ZM40 18L24 26L8 18V14L24 22L40 14V18Z" fill="#CDD4DA"/>
            </svg>
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="about-section">
          <h2 className="about-section-title">About Mobilon TriFecta</h2>
          <p className="about-description">
            Mobilon TriFecta is a premier technology competition bringing together the brightest minds
            in innovation, entrepreneurship, and software development. Through three distinct challenges
            - Round Table discussions, PitchWave presentations, and Tech Forge development - participants
            compete for glory and substantial prizes.
          </p>
        </div>

        <div className="about-section timeline-section">
          <h2 className="about-section-title">Event Timeline</h2>
          <div className="timeline" ref={timelineRef}>
            <div 
              className="timeline-line" 
              style={{ 
                top: `${lineTop}px`, 
                height: `${lineHeight}px` 
              }}
            ></div>
            <div 
              className={`timeline-ball ${activeAnchor >= 0 ? 'active' : ''}`} 
              style={{ top: `${ballPositionPx}px` }}
            ></div>
            
            <div className={`timeline-item ${activeAnchor === 0 ? 'active' : ''}`}>
              <div className="timeline-content">
                <h3 className="timeline-title">Registration Opens</h3>
                <p className="timeline-date">January 15, 2026</p>
                <p className="timeline-description">Begin your journey by registering for the events</p>
              </div>
              <div className={`timeline-center ${activeAnchor === 0 ? 'active' : ''}`}></div>
              <div className="timeline-image-container">
                <div className="timeline-image"></div>
              </div>
            </div>
            
            <div className={`timeline-item ${activeAnchor === 1 ? 'active' : ''}`}>
              <div className="timeline-image-container">
                <div className="timeline-image"></div>
              </div>
              <div className={`timeline-center ${activeAnchor === 1 ? 'active' : ''}`}></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Round Table</h3>
                <p className="timeline-date">February 10, 2026</p>
                <p className="timeline-description">Engage in thought-provoking discussions</p>
              </div>
            </div>
            
            <div className={`timeline-item ${activeAnchor === 2 ? 'active' : ''}`}>
              <div className="timeline-content">
                <h3 className="timeline-title">PitchWave</h3>
                <p className="timeline-date">February 17, 2026</p>
                <p className="timeline-description">Present your innovative ideas to judges</p>
              </div>
              <div className={`timeline-center ${activeAnchor === 2 ? 'active' : ''}`}></div>
              <div className="timeline-image-container">
                <div className="timeline-image"></div>
              </div>
            </div>
            
            <div className={`timeline-item ${activeAnchor === 3 ? 'active' : ''}`}>
              <div className="timeline-image-container">
                <div className="timeline-image"></div>
              </div>
              <div className={`timeline-center ${activeAnchor === 3 ? 'active' : ''}`}></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Tech Forge</h3>
                <p className="timeline-date">February 24, 2026</p>
                <p className="timeline-description">Build and showcase your technical prowess</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">contact@mobilon.com</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">+1 (555) 123-4567</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Location</div>
              <div className="contact-value">Innovation Hub, Tech Campus</div>
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

        <div className="credits-section">
          <p className="credits-designers">Designed by Abhimanyu and Pragydeep</p>
          <p className="credits-developer">Coded by Adil</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
