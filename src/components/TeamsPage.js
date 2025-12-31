import React, { useState } from 'react';
import './TeamsPage.css';
import TeamCard from './TeamCard';

function TeamsPage() {
  const [activeTeam, setActiveTeam] = useState('organising');

  const organisingTeam = [
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
    { name: 'Pragydeep Shrivastava', post: 'Coordinator' },
  ];

  const judgingTeam = Array(14).fill(null).map((_, i) => ({
    name: 'Pragydeep Shrivastava',
    post: 'Judge'
  }));

  return (
    <div className="teams-page">
      <div className="teams-content">
        <div className="team-division-header">
          <div className="team-gradient-bar">
            <div className="gradient-rect"></div>
            <div className="team-division-tabs">
              <div 
                className={`team-tab ${activeTeam === 'organising' ? 'active' : ''}`}
                onClick={() => setActiveTeam('organising')}
              >
                <div className="team-tab-text">Organising Team</div>
                <div className="team-tab-underline"></div>
              </div>
              <div 
                className={`team-tab ${activeTeam === 'judging' ? 'active' : ''}`}
                onClick={() => setActiveTeam('judging')}
              >
                <div className="team-tab-text">Judging Team</div>
                <div className="team-tab-underline"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-sections">
          {activeTeam === 'organising' ? (
            <div className="organising-team-sections">
              <div className="team-section">
                <h2 className="team-section-title">Marketing Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Technical Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Operations Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Design Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="judging-team-section">
              <div className="judging-team-grid">
                {judgingTeam.map((member, index) => (
                  <TeamCard key={index} name={member.name} post={member.post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
