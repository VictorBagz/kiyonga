import React from 'react';
import StaffStructure from '../components/StaffStructure';

const About = () => {
  return (
    <div className="main-content">
      <section className="section section-light">
        <h1 className="section-title">About Our Firm</h1>
        <div className="about-content">
          <p>
            KIYONGA -B- ASASIRA & CO. ADVOCATES is a premier law firm located in Kampala, Uganda, 
            offering comprehensive legal services to individuals, businesses, and organizations. 
            With a team of experienced advocates and legal professionals, we are committed to 
            providing exceptional legal representation and strategic counsel.
          </p>
          
          <h2>Our Location</h2>
          <p>
            Plot No. 33, Kimera Close, Commercial Road, Niinda<br/>
            Alongside Shell, Opposite Crest Form<br/>
            P. O. Box 12631, Kampala (U)
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver outstanding legal services with integrity, professionalism, and 
            dedication to client success. We strive to be the trusted legal partner for 
            our clients' most important matters.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <StaffStructure />
      </section>
    </div>
  );
};

export default About;