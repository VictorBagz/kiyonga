import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="main-content">
      <section className="section section-light">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="contact-container">
          {/* Contact Information and Map Section */}
          <div className="contact-map-section">
            <div className="contact-info-wrapper">
              <h2>Get In Touch</h2>
              <div className="contact-info-grid">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Office Address</h3>
                    <p>
                      Plot No. 33, Kimera Close<br/>
                      Commercial Road, Niinda<br/>
                      Alongside Shell, Opposite Crest Form<br/>
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Phone Numbers</h3>
                    <p>+256 (0) XXX XXX XXX</p>
                    <p>+256 (0) XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email Address</h3>
                    <p>info@kiyongaasasira.co.ug</p>
                    <p>legal@kiyongaasasira.co.ug</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Friday: 8:00 AM - 5:00 PM<br/>
                      Saturday: 9:00 AM - 1:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="map-wrapper">
              <h2>Our Location</h2>
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-marker">
                      <div className="marker-pin"></div>
                      <div className="marker-pulse"></div>
                    </div>
                    <div className="map-address-overlay">
                      <h4>KIYONGA -B- ASASIRA & CO.</h4>
                      <p>Plot 33, Kimera Close<br/>Commercial Road, Niinda</p>
                    </div>
                  </div>
                  <div className="map-actions">
                    <a 
                      href="https://maps.google.com/?q=Plot+33+Kimera+Close+Commercial+Road+Niinda+Kampala+Uganda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-direction-button"
                    >
                      📍 Get Directions
                    </a>
                  </div>
                </div>
                
                {/* Alternative: Embed Google Maps */}
                <div className="google-map-embed">
                  <iframe
                    title="Firm Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63841.89363910482!2d32.55810723651101!3d0.3479970245430794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6f8e2f2d0d%3A0x8b1cb3d6652e7f6a!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <p className="form-description">
                Have a legal question or need consultation? Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your legal needs or questions in detail..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-submit">
                  <button type="submit" className="cta-button full-width">
                    Send Message
                  </button>
                  <p className="form-note">
                    * Required fields. We respect your privacy and will not share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;