import React from 'react';

const ProfileCard = ({ member }) => {
  return (
    <div className="profile-card hover-lift">
      <div className="profile-image">
        <img src={member.image} alt={member.name} />
      </div>
      <h3>{member.name}</h3>
      <p className="position">{member.position}</p>
      <p>{member.bio}</p>
      <div className="expertise">
        <h4>Areas of Expertise:</h4>
        <ul>
          {member.expertise.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;