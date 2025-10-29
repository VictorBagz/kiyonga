import React from 'react';
import { teamMembers } from '../data/teamData';
import ProfileCard from '../components/ProfileCard';

const Team = () => {
  return (
    <div className="main-content">
      <section className="section section-light">
        <h1 className="section-title">Meet Our Team</h1>
        <p className="section-subtitle">
          Dedicated legal professionals committed to delivering exceptional service and results.
        </p>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;