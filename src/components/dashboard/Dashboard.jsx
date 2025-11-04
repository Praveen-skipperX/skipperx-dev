import React from "react";
import "./Dashboard.css";
import promoImage from "../../assets/dashboard-promo.png";
import logo from '../../assets/skipper-black.png';
import cal from '../../assets/dash-cal.png';
import col from '../../assets/dash-col.png';
import topcal from '../../assets/dash-topcal.png';
import arrow from '../../assets/arrows.png';

import dlink from '../../assets/dlink.png';
import dface from '../../assets/dface.png';
import dinsta from '../../assets/dinsta.png';

// Assuming you have an icon for the program, like a briefcase or AI icon.
// For now, let's use a placeholder or assume it's part of the CSS.

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <a href="/"><img src={logo} alt="Skipper Logo" className="logo-img-dash" /></a>
        <nav>
          <a href="#" className="nav-item-dash active">Dashboard</a>
          <a href="#" className="nav-item-dash">Explore Program</a>
          <a href="#" className="nav-item-dash">Profile</a>
        </nav>
      </aside>

      <main className="main-content">
        <div className="top-dash">
          <header className="topbar">
            <h1>Dashboard</h1>
            <button className="logout-btn">Logout</button>
          </header>
        </div>

        <section className="welcome-section">
          <h2>Welcome,</h2>
          <p>Have a Productive day!</p>
        </section>
        

         
        {/* NEW HEADER for the main content area, matching the image */}
        <div className="main-dashboard-header">
            <h2 className="main-dashboard-title">Dashboard</h2>
        </div>


        <section className="dashboard-cards">
          <div className="progress-card">
            <div className="card-label"> <img src={topcal} className="topcal" /> <span className="topcalt">Recently watching</span></div>
            <h3>Module 3 - Linkedin workshop</h3> {/* Text updated to match image */}
            <p className="module-label">Modules</p>
            <div className="progress-bar">
              {/* Note: The image shows ~5% filled, so I'm adjusting width here */}
              <div className="progress-filled" style={{ width: "5%" }}></div>
            </div>
            <div className="progress-footer">
              <span className="progress-subtext">5% Completed</span> {/* Text updated */}
              <span className="progress-text">1 / 10</span> {/* Text updated */}
            </div>
            <hr className="divider-dash" />
            <p className="resume-dash">Resume</p>
            <button className="play-btn">▶</button>
          </div>

          <div className="promo-card">
            <div className="promo-image-wrapper">
              <img src={promoImage} alt="Promo" />
              <div className="promo-text-overlay">
                <h3>Built-In Hype Squad</h3>
                <p>Learn with your people.</p>
              </div>
              <button className="join-btn">Join now</button>
            </div>
          </div>
        </section>




        {/* NEW SECTION: Explore Program */}
        <section className="explore-program-section">
          <h2 className="explore-program-title">Explore Program</h2>
          <div className="program-cards-container">
            {/* Program Card 1 */}
            <div className="program-card">
              <div className="program-icon-wrapper">
                {/* This could be an actual image or an icon font/SVG */}
                {/* For demonstration, I'll use a div with a background color */}
                <div className="program-icon">
                  <img src={topcal} className="topcal1" />
                </div>
              </div>
              <h3 className="program-title">Artificial Intelligence</h3>
              <p className="program-description">Master AI Fundamentals to Innovate and Transform Industries</p>
              <div className="program-details">
                <span className="detail-item">
                  <img src={cal} className="dash-cal"/> <span className="dash-calp">2 Months </span>
                </span>
                <span className="detail-item">
                  <img src={col} className="dash-cal"/> <span className="dash-calp">20k+ Mentees</span>
                </span>
              </div>
              <p className="program-price">₹199</p>
              <button className="program-arrow-btn">
                <i className="fa fa-arrow-right"></i> <img src={arrow} className="arrows-dash" />
              </button>
            </div>

            {/* Program Card 2 (Duplicate for now, to match image) */}
            <div className="program-card">
              <div className="program-icon-wrapper">
                <div className="program-icon">
                  <img src={topcal} className="topcal1" />
                </div>
              </div>
              <h3 className="program-title">Artificial Intelligence</h3>
              <p className="program-description">Master AI Fundamentals to Innovate and Transform Industries</p>
              <div className="program-details">
                <span className="detail-item">
                  <img src={cal} className="dash-cal"/><span className="dash-calp"> 2 Months</span>
                </span>
                <span className="detail-item">
                  <img src={col} className="dash-cal"/> <span className="dash-calp">20k+ Mentees</span>
                </span>
              </div>
              <p className="program-price">₹199</p>
              <button className="program-arrow-btn">
                <i className="fa fa-arrow-right"></i> <img src={arrow} className="arrows-dash" />
              </button>
            </div>
          </div>
        </section>


          {/* NEW SECTION: Profile Details */}
          <section className="profile-details-section">
            <div className="profile-details-header">
              <h2 className="profile-details-title">Profile Details</h2>
              <button className="profile-edit-btn">Edit</button>
            </div>
            <div className="profile-fields-container">
              <div className="profile-field">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" className="profile-input" placeholder="" disabled />
              </div>
              <div className="profile-field">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" id="contactNumber" className="profile-input" placeholder="" disabled />
              </div>
              <div className="profile-field">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" className="profile-input" placeholder="" disabled />
              </div>
            </div>
          </section>
             

          {/* here we not used Fa icons */}
        <footer className="dashboard-footer">
          <div className="dfooter-content">
            <span className="dfooter-copyright">
              ©2025. All rights reserved.
            </span>
            <div className="dfooter-social">
              <span className="dfooter-caption">Catch our updates on</span>
              <a href="https://www.linkedin.com/company/107873830/admin/page-posts/published/" className="dsocial-icon">
                <img src={dlink} className="dash-cal"/>
              </a>
              <a href="https://www.facebook.com" className="dsocial-icon">
                <img src={dface} className="dash-cal"/>
              </a>
              <a href="https://www.Instagram.com" className="dsocial-icon">
                <img src={dinsta} className="dash-cal"/>
              </a>
            </div>
          </div>
        </footer>
           

      </main>
    </div>
  );
}

export default Dashboard;