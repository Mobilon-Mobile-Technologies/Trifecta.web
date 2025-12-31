import React, { useEffect, useState } from 'react';
import './Navigation.css';

function Navigation({ activeTab, setActiveTab, showNav }) {
  const [isVisible, setIsVisible] = useState(false);
  
  const tabs = [
    { id: 'events', label: 'Events' },
    { id: 'teams', label: 'Teams' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'about', label: 'About' }
  ];

  useEffect(() => {
    setIsVisible(showNav);
  }, [showNav]);

  return (
    <nav className={`menu-bar ${isVisible ? 'visible' : ''}`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="nav-label">{tab.label}</span>
          <div className="nav-underline"></div>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
