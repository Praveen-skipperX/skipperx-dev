// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/skipper-black.png';
import droneImg from '../assets/drone-navbar.png';
import robotImg from '../assets/robot-navbar.png';
import arvrImg from '../assets/arvr-navbar.png';
import startupImg from '../assets/startup-navbar.png';
import coretechImg from '../assets/core-navbar.png';
import creatorsImg from '../assets/creator-navbar.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(dropdownOpen === menu ? null : menu);
    }
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <a href="/"><img src={logo} alt="Skipper Logo" className="logo-img" /></a>

        {/* Always visible Learn button */}
        <div className="nav-item dropdown" onClick={() => toggleDropdown('learn')}>
          <span className="navbar-learn">Learn </span>
          <span className="arrow">▾</span>

          <div className={`dropdown-menu mega-dropdown ${dropdownOpen === 'learn' ? 'show' : ''}`}>
            <div className="mega-column">
              <h3>Innovators</h3>
              <p>Dive into today’s Trendiest Innovations</p>

              <div className="mega-card">
                <Link to="/drone-engineering" className="card-link">
                  <img src={droneImg} alt="Drone Engineering" />
                  <div className="card-text">
                    <h4>Drone Engineering</h4>
                    <span>3 Months</span>
                  </div>
                </Link>
              </div>

              <div className="mega-card">
                <Link to="/robot-engineering" className="card-link">
                  <img src={robotImg} alt="Robot Engineering" />
                  <div className="card-text">
                    <h4>Robot Engineering</h4>
                    <span>3 Months</span>
                  </div>
                </Link>
              </div>

              <div className="mega-card">
                <Link to="/ar-vr" className="card-link">
                  <img src={arvrImg} alt="AR VR" />
                  <div className="card-text">
                    <h4>AR VR</h4>
                    <span>3 Months</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mega-column">
              <h3>Super Stack</h3>
              <p>All-in-one bundles to grow and create</p>

              <div className="mega-card">
                <Link to="/startup-stack" className="card-link">
                  <img src={startupImg} alt="Startup Stack" />
                  <div className="card-text">
                    <h4>Startup Stack</h4>
                    <span>7+ Program</span>
                  </div>
                </Link>
              </div>

              <div className="mega-card">
                <Link to="/core-tech" className="card-link">
                  <img src={coretechImg} alt="Core Tech" />
                  <div className="card-text">
                    <h4>Core Tech</h4>
                    <span>6+ Programs</span>
                  </div>
                </Link>
              </div>

              <div className="mega-card">
                <Link to="/creators-hub" className="card-link">
                  <img src={creatorsImg} alt="Creators Hub" />
                  <div className="card-text">
                    <h4>Creators Hub</h4>
                    <span>7+ Program</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger-only links */}
        <div className={`nav-linkss ${open ? 'show' : ''}`}>
          <span className="nav-item">
            <span className="navbar-member">
              <Link to="/about" className="navlink">About</Link>
            </span>
          </span>
        </div>
      </div>

      <div className={`nav-buttons ${open ? 'show' : ''}`}>
        <Link to="/login" className="navlink"><button className="btn black">Login</button></Link>
        <Link to="/contact" className="navlink"><button className="btn white">Contact Us</button></Link>
      </div>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;



