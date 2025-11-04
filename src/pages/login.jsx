import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'
import logo from '../assets/skipper-black.png';




const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); // prevent refresh
      navigate("/otp");   // go to OTP page
    };


  return (
    <div className="login-page-container">
     
     
      <div className="login-left-section">
        <div className="login-image-container">
          <img src={loginImage} alt="Login Background" className="login-bg-img" />


          <div className="login-top-left-card">
            
            <div className="login-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="login-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="login-top-right-card">
            <div className="login-avatars">
                <img src={sai} alt="login-avatar" />
                <img src={harish} alt="login-avatar" />
                <img src={hari} alt="login-avatar" />
                <img src={sakshi} alt="login-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="login-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>

      
      <div className="login-right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          
          <img src={logo} alt="Skipper Logo" className="login-title"/>
          
          <div className="login-input">
              <select className="login-country-code">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              </select>

            <input
                type="tel"
                className="phone-inputs"
                placeholder="XXXXXXXXXX"
                name="phone"
                required
              />

              
          </div>
          <div className="login-options">
            <a href="/email" className="navlink" >Use<span className="login-forgot" > E-mail</span>instead</a>
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


export default Login;
