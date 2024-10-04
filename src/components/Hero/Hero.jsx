import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup'; 

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">

          {/* Left Side Content */}
          <div className="hero-left">
            <h1>Ghar Aapna Sa:<br/> Your Personalized Home Experience</h1>
            <p className="hero-description">Find the suitable property that suits you.</p>

            {/* Search Bar */}
            <div className="search">
              <HiLocationMarker className="location-icon-inside" />
              <input type="text" placeholder="Search for properties..." />
              <button>Search</button>
            </div>

            {/* Stats Container */}
            <div className="flexCenter stats-row">
              <div className="flexColStart stat">
                <span>
                  <CountUp start={8000} end={9000} duration={4} />
                  +
                </span>
                <span className='secondaryText'>
                  Premium Product
                </span>
              </div>

              <div className="flexColStart stat">
                <span>
                  <CountUp start={1200} end={2000} duration={4} />
                  +
                </span>
                <span className='secondaryText'>
                  Happy Customer
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src='/hero-image.jpg' alt='Ghar Aapna Sa'/>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Hero;
