import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero-landing-hd.png';
import bgImagemobile from '../assets/landing-mobile.png';




const Hero = () => {
  return (
    <div className="hero-img-wrapper">
      <img src={bgImage} alt="background" className="hero-img desktop-img" />
      <img src={bgImagemobile} alt="background" className="hero-img mobile-img" />
      <div className="overlayp">
        <h1>
          Your dream skill is, not days, not hours but <span className="highlight-red">minutes </span> away
        </h1>
        <p>Built for Innovators, Entrepreneurs & Hustlers</p>
        <button className="btn red" onClick={() => {
                document
                  .getElementById('launch-navigate')
                  .scrollIntoView({ behavior: 'smooth' });
              }}>Explore Programs</button>
      </div>




      
    </div>
  );
};

export default Hero;
