import React from "react";
import { useNavigate } from "react-router-dom";
import "./email.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'
import logo from '../assets/skipper-black.png';

const Email = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); // prevent refresh
      navigate("/otp");   // go to OTP page
    };
  return (
    <div className="signup-page-container">
     
     
      <div className="signup-left-section">
        <div className="signup-image-container">
          <img src={loginImage} alt="signup Background" className="signup-bg-img" />


          <div className="signup-top-left-card">
            
            <div className="signup-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="signup-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="signup-top-right-card">
            <div className="signup-avatars">
                <img src={sai} alt="signup-avatar" />
                <img src={harish} alt="signup-avatar" />
                <img src={hari} alt="signup-avatar" />
                <img src={sakshi} alt="signup-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="signup-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>


        
          
      <div className="login-right-section1">
        <form className="login-form1" onSubmit={handleSubmit}>
          
          <img src={logo} alt="Skipper Logo" className="login-title"/>
          
          <div className="login-input" id="login-input-mail">
              <input type="email" placeholder="Email" className="login-email-input" required />
              
          </div>
          <div className="login-options">
            <a href="/login" className="navlink" >Use <span className="login-forgot" > Phone-number</span>instead</a>
          </div>
          <button type="submit" className="login-submit-btn">Continue</button>
          <div className="login-divider"><span>or</span></div>
          <button type="button" className="login-google-btn">
            <img src={googleLogo} alt="Google" />
            Login with Google
          </button>
          
        </form>
      </div>   
    </div>
  );
};

export default Email;