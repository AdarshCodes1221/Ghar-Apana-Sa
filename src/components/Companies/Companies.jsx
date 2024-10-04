import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <section className="companies-wrapper">
      <div className="companies-innerWidth companies-flexCenter companies-container">
        <img src='./c1.jpeg' alt='Company 1' className="companies-image" />
        <img src='./c2.jpg' alt='Company 2' className="companies-image" />
        <img src='./c3.jpg' alt='Company 3' className="companies-image" />
        <img src='./tower.png' alt='Company Tower' className="companies-image" />
      </div>
    </section>
  );
}

export default Companies;
