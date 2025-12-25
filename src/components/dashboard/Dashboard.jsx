import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { authAPI, removeAuthToken } from '../../services/api';

// Assuming you have an icon for the program, like a briefcase or AI icon.
// For now, let's use a placeholder or assume it's part of the CSS.

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: ''
  });
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await authAPI.getCurrentUser();
      setUser(response.data);
      setFormData({
        fullname: response.data.fullname || '',
        email: response.data.email || '',
        phone: response.data.phone || ''
      });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      // If unauthorized, logout
      if (error.message.includes('401') || error.message.includes('Authentication')) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      removeAuthToken();
      navigate('/login');
    }
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    setUpdateError('');
    setUpdateSuccess('');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileUpdate = async () => {
    setUpdateLoading(true);
    setUpdateError('');
    setUpdateSuccess('');

    try {
      const updateData = {};
      
      // Only send fields that have changed
      if (formData.fullname !== user.fullname) {
        updateData.fullname = formData.fullname;
      }
      if (formData.email !== user.email) {
        updateData.email = formData.email;
      }
      if (formData.phone !== user.phone) {
        updateData.phone = formData.phone;
      }

      const response = await authAPI.updateProfile(updateData);
      
      setUser(response.data);
      setFormData({
        fullname: response.data.fullname || '',
        email: response.data.email || '',
        phone: response.data.phone || ''
      });
      setUpdateSuccess('Profile updated successfully!');
      setEditing(false);
      
      setTimeout(() => setUpdateSuccess(''), 3000);
    } catch (error) {
      setUpdateError(error.message || 'Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
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
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </header>
        </div>

        <section className="welcome-section">
          <h2>Welcome, {user?.fullname || 'User'}</h2>
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
              <button className="profile-edit-btn" onClick={handleEditToggle}>
                {editing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            
            {updateError && <div style={{color: 'red', marginBottom: '10px'}}>{updateError}</div>}
            {updateSuccess && <div style={{color: 'green', marginBottom: '10px'}}>{updateSuccess}</div>}
            
            <div className="profile-fields-container">
              <div className="profile-field">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullname"
                  className="profile-input" 
                  value={formData.fullname}
                  onChange={handleInputChange}
                  disabled={!editing} 
                />
              </div>
              <div className="profile-field">
                <label htmlFor="email">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="profile-input" 
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!editing} 
                />
              </div>
              <div className="profile-field">
                <label htmlFor="contactNumber">Contact Number</label>
                <input 
                  type="tel" 
                  id="contactNumber" 
                  name="phone"
                  className="profile-input" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!editing} 
                />
              </div>
              </div>
            
            {editing && (
              <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
                <button 
                  className="profile-edit-btn"
                  onClick={handleProfileUpdate}
                  disabled={updateLoading}
                  style={{backgroundColor: '#4CAF50', color: 'white'}}
                >
                  {updateLoading ? 'Updating...' : 'Update Profile'}
                </button>
              </div>
            )}
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