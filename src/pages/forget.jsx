import React from "react";
import "./forget.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'

const Forget = () => {
  return (
    <div className="forget-page-container">
     
     
      <div className="forget-left-section">
        <div className="forget-image-container">
          <img src={loginImage} alt="Login Background" className="forget-bg-img" />


          <div className="forget-top-left-card">
            
            <div className="forget-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="forget-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="forget-top-right-card">
            <div className="forget-avatars">
                <img src={sai} alt="login-avatar" />
                <img src={harish} alt="login-avatar" />
                <img src={hari} alt="login-avatar" />
                <img src={sakshi} alt="login-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="forget-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>

      
      <div className="forget-right-section">
        <form className="forget-form">
          <h2 className="forget-title">Change Password</h2>
          <p className="forget-subtitle">Welcome back! Please enter your details.</p>
          <input type="password" placeholder="Old Password" className="forget-input" required />
          <input type="password" placeholder="New Password" className="forget-input" required />
          <input type="password" placeholder="Re-enter Password" className="forget-input" required />
    
          <button type="submit" className="forget-submit-btn">Reset</button>
          
        </form>
      </div>
    </div>
  );
};

export default Forget;
