import React from 'react';
import './SponsorsPage.css';

function SponsorsPage() {
  const MMarketMafia = [
    { name: 'Market Mafiaa \nConnections Partner', logo: '/PICS/Sponsors/6th%20logo.jpg' },
    { name: 'OppSkills \nPlatform Partner', logo: '/PICS/Sponsors/Square%20color%20Single%20Tag.svg' },
    { name: 'GlobalCert \nCertification Partner', logo: '/PICS/Sponsors/global.png' },
    { name: 'Five Minutes of Beauty\nGifting Partner', logo: '/PICS/Sponsors/5.jpeg' },
    { name: 'Mystique \nMerching Partner', logo: '/PICS/Sponsors/mystique.jpeg' },
  ];

  return (
    <div className="sponsors-page">
      <div className="sponsors-content">
        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Sponsors</h2>
          <div className="sponsor-grid silver-sponsors-grid">
            {MMarketMafia.map((sponsor, index) => (
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
