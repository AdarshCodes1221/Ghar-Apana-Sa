import React, { useState, useEffect } from 'react';
import './Header.css'; 
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth">
        <img src="./logo.jpeg" alt="logo" className="header-img" />
        <div className={`h-menu ${menuOpen ? 'menu-open' : ''}`}>
          <a href="#residencies">Residencies</a>
          <a href="#our-value">Our Value</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
