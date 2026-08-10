import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup'; 

const Hero = () => {
  // Defensive checks: some bundlers or production builds can change interop
  // so an import may be an object with a `default` property instead of a function.
  const IconComp = (typeof HiLocationMarker === 'function') ? HiLocationMarker : (HiLocationMarker && typeof HiLocationMarker.default === 'function' ? HiLocationMarker.default : null);
  const CountUpComp = (typeof CountUp === 'function') ? CountUp : (CountUp && typeof CountUp.default === 'function' ? CountUp.default : null);

  // If either import is invalid, render a small diagnostic so we don't crash the whole app in production.
  const invalids = [];
  if (!IconComp) invalids.push({name: 'HiLocationMarker', type: String(typeof HiLocationMarker)});
  if (!CountUpComp) invalids.push({name: 'CountUp', type: String(typeof CountUp)});

  if (invalids.length > 0) {
    return (
      <div style={{padding:20}}>
        <h3>Hero import diagnostic</h3>
        <p>One or more Hero imports resolved to unexpected types — this prevents rendering in production.</p>
        <ul>
          {invalids.map(x => (
            <li key={x.name}><strong>{x.name}:</strong> {x.type}</li>
          ))}
        </ul>
        <p>Check the import style (default vs named) and package exports.</p>
      </div>
    );
  }

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
              <IconComp className="location-icon-inside" />
              <input type="text" placeholder="Search for properties..." />
              <button>Search</button>
            </div>

            {/* Stats Container */}
            <div className="flexCenter stats-row">
              <div className="flexColStart stat">
                <span>
                  <CountUpComp start={8000} end={9000} duration={4} />
                  +
                </span>
                <span className='secondaryText'>
                  Premium Product
                </span>
              </div>

              <div className="flexColStart stat">
                <span>
                  <CountUpComp start={1200} end={2000} duration={4} />
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
