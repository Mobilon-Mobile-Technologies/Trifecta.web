import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import EventsPage from './components/EventsPage';
import TeamsPage from './components/TeamsPage';
import SponsorsPage from './components/SponsorsPage';
import AboutPage from './components/AboutPage';

function App() {
  const [activeTab, setActiveTab] = useState('events');
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setScrollPosition(scrollTop);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const showNavigation = scrollPosition >= window.innerHeight * 0.3;

  return (
    <div className="App">
      <div className="background-blur">
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
      </div>
      
      <div className="scroll-container" ref={containerRef}>
        <section className="page-section hero-page">
          <Hero setActiveTab={setActiveTab} />
        </section>
        
        <section className="page-section content-page">
          <div className="page-template">
            <div className="page-container">
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} showNav={showNavigation} />
              <div className="content-mask">
                {activeTab === 'events' && <EventsPage />}
                {activeTab === 'teams' && <TeamsPage />}
                {activeTab === 'sponsors' && <SponsorsPage />}
                {activeTab === 'about' && <AboutPage />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
