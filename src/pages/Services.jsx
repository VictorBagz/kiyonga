import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Corporate Finance & Commercial Transactions",
      description: "Expert guidance in corporate financing, commercial agreements, and business transactions."
    },
    {
      title: "Litigation Services",
      description: "Comprehensive representation in civil, commercial, and criminal litigation matters."
    },
    {
      title: "Intellectual Property",
      description: "Trademark and patent registration, protection, and enforcement services."
    },
    {
      title: "Immigration Law",
      description: "Assistance with work permits, student passes, and immigration compliance."
    },
    {
      title: "Employment Law",
      description: "Legal advice on employment contracts, disputes, and regulatory compliance."
    },
    {
      title: "Property Management & Consulting",
      description: "Professional property management services and real estate legal counsel."
    },
    {
      title: "Company Secretarial Services",
      description: "Comprehensive corporate secretarial support and compliance management."
    },
    {
      title: "Tax Consulting",
      description: "Strategic tax planning and compliance advisory services."
    }
  ];

  return (
    <div className="main-content">
      <section className="section section-light">
        <h1 className="section-title">Our Legal Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;