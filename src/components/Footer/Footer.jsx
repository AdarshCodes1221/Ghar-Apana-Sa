import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side: Logo and Vision */}
        <div className="f-left">
          <img src="./logo.jpeg" alt="Company Logo" className="f-logo" />
          <p className="f-vision">Our Vision: To be the leading provider of quality services and products worldwide.</p>
        </div>

        {/* Right side: Information */}
        <div className="f-right">
          <h4 className="primary-text">Information</h4>
          <p className="primary-text">145 Pune, MH 411045, India</p>
          <div className="f-links">
            <a href="#">Property</a>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
