import React from 'react';
import './SponsorsPage.css';

function SponsorsPage() {
  const titleSponsors = [
    { name: 'Company Name XYZW company Inc. LLC', logo: null },
    { name: 'Company Name XYZW company Inc. LLC', logo: null },
  ];

  const goldSponsors = Array(4).fill(null).map((_, i) => ({
    name: 'Company Name XYZW company Inc. LLC',
    logo: null
  }));

  const silverSponsors = Array(8).fill(null).map((_, i) => ({
    name: 'Company Name XYZW company Inc. LLC',
    logo: null
  }));

  return (
    <div className="sponsors-page">
      <div className="sponsors-content">
        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Title Sponsors</h2>
          <div className="sponsor-grid title-sponsors-grid">
            {titleSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Gold Sponsors</h2>
          <div className="sponsor-grid gold-sponsors-grid">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Silver Sponsors</h2>
          <div className="sponsor-grid silver-sponsors-grid">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsPage;
