import React from 'react';
import './TeamCard.css';

function TeamCard({ name, post, image }) {
  return (
    <div className="team-card">
      <div className="team-member-image" style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
      </div>
      <div className="team-member-info">
        <div className="member-name">{name}</div>
        <div className="member-post">{post}</div>
      </div>
    </div>
  );
}

export default TeamCard;
