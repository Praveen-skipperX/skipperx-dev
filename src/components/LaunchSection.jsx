import React from 'react';
import './LaunchSection.css';
import { Link } from 'react-router-dom';

const LaunchSection = () => {
  return (
    <section className="launch-section" >
      <div className="launch-container">

       
        <div className="launch-left">
          <div className="launch-left-bg"></div>

          <h2>
            Launching <span className="highlight99">soon</span>
          </h2>
          <h3>
            Big Launch Ahead: <span className="highlight9">10+ Skill-Boosting</span><br />
            <em>Programs</em>
          </h3>
          <p>Next-gen learning designed to launch your career.</p>
          
          <Link to="/cooking" className="navlink"><button className="launch-btn">Explore Programs</button></Link>
        </div>

        
        <div className="launch-right">
          <div className="block-columns">
            {[...Array(4)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`block-column ${colIndex % 2 === 0 ? 'scroll-up' : 'scroll-down'}`}
              >
                {[
                    "Data Analyst",
                    "UI/UX",
                    "Web Dev",
                    "Cybersecurity",
                    "AI/ML",
                    "Cloud",
                    "DevOps",
                    "Product Design",
                    "AR/VR",
                    "Data Science",
                    "Data Analyst",
                    "UI/UX",
                    "Web Dev",
                    "Cybersecurity",
                    "AI/ML",
                    "Cloud",
                    "DevOps",
                    "Product Design",
                    "AR/VR",
                    "Data Science"
                  ].map((text, idx) => (
                  <div className="block" key={idx}>{text}</div>
                ))}
              </div>
            ))}
          </div>

          
          <div className="launch-gradient-overlay"></div>

          
          <div className="right-card">
            <div className="tag">⭐ Your Mini Gold Mine</div>
            <p className="starting-text">Starting at just</p>
            <h2 className="price">₹199/-</h2>
            <div className="coming-soon">COMING SOON</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;

