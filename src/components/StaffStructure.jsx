import React from 'react';
import { teamMembers } from '../data/teamData';

const StaffStructure = () => {
  const managingPartner = teamMembers.find(member => member.position === "Managing Partner");
  const partners = teamMembers.filter(member => member.position === "Partner");
  const associates = teamMembers.filter(member => member.position === "Associate");
  const admin = teamMembers.find(member => member.position === "Admin/Secretary");

  return (
    <div className="staff-structure">
      <h2 className="section-title">Our Organizational Structure</h2>
      
      {/* Managing Partner */}
      <div className="structure-level">
        <div className="structure-node">
          <div className="structure-image">
            <span>👑</span>
          </div>
          <h3>{managingPartner.name}</h3>
          <p>{managingPartner.position}</p>
        </div>
      </div>

      {/* Partners */}
      <div className="structure-level">
        {partners.map(partner => (
          <div key={partner.id} className="structure-node">
            <div className="structure-image">
              <span>⚖️</span>
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.position}</p>
          </div>
        ))}
      </div>

      {/* Associates */}
      <div className="structure-level">
        {associates.map(associate => (
          <div key={associate.id} className="structure-node">
            <div className="structure-image">
              <span>📚</span>
            </div>
            <h3>{associate.name}</h3>
            <p>{associate.position}</p>
          </div>
        ))}
      </div>

      {/* Admin */}
      <div className="structure-level">
        <div className="structure-node">
          <div className="structure-image">
            <span>💼</span>
          </div>
          <h3>{admin.name}</h3>
          <p>{admin.position}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffStructure;