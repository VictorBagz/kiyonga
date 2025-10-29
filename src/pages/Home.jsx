import React from 'react';
import { Link } from 'react-router-dom';
import QuoteCarousel from '../components/QuoteCarousel';

const Home = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KIYONGA -B- ASASIRA & CO. ADVOCATES</h1>
          <p>Excellence in Legal Representation & Strategic Counsel</p>
          <Link to="/contact">
            <button className="cta-button">Schedule Consultation</button>
          </Link>
        </div>
      </section>

      {/* Quotes Section */}
      <QuoteCarousel />

      {/* Services Preview */}
      <section className="section section-light">
        <h2 className="section-title">Our Legal Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Corporate & Commercial Law</h3>
            <p>Company formation, contracts, mergers & acquisitions</p>
          </div>
          <div className="service-card">
            <h3>Litigation & Dispute Resolution</h3>
            <p>Civil, commercial, and criminal litigation services</p>
          </div>
          <div className="service-card">
            <h3>Immigration Law</h3>
            <p>Work permits, student passes, and immigration advisory</p>
          </div>
          <div className="service-card">
            <h3>Intellectual Property</h3>
            <p>Trademark and patent registration and protection</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;