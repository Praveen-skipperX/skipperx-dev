import React, { useState, useRef } from "react";
import "./otp.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'
import logo from '../assets/skipper-black.png';
import text from '../assets/text-icon.png';


const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      
      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
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

      
          
          
          
       <div className="otp-container">
        <img src={logo} alt="Skipper Logo" className="otp-title"/>
        <div className="otp-icon1"><img src={text} className="otp-icon"/></div>
        <h2>Check Your Inbox</h2>
        <p>
            We have sent 4 digit verification code to your{" "}
            <span className="phone">+91******56</span>
        </p>

        <div className="otp-inputs">
            {otp.map((digit, index) => (
            <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
            />
            ))}
        </div>

        <p className="resend">
            Not received yet? <a href="/otp" className="navlink"><span>Resend Now</span></a>
        </p>
        </div>
    </div>
  );
}

export default OtpVerification;
