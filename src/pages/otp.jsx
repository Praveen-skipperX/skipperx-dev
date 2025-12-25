import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./otp.css";
import loginImage from "../assets/login-bg1.png"; 
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'
import logo from '../assets/skipper-black.png';
import text from '../assets/text-icon.png';
import { authAPI, setAuthToken } from '../services/api';


const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [authType, setAuthType] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [maskedIdentifier, setMaskedIdentifier] = useState('');

  useEffect(() => {
    // Get identifier from sessionStorage
    const storedIdentifier = sessionStorage.getItem('authIdentifier');
    const storedType = sessionStorage.getItem('authType');
    
    if (!storedIdentifier || !storedType) {
      navigate('/login');
      return;
    }
    
    setIdentifier(storedIdentifier);
    setAuthType(storedType);
    
    // Mask the identifier for display
    if (storedType === 'email') {
      const parts = storedIdentifier.split('@');
      setMaskedIdentifier(`${parts[0].substring(0, 2)}******@${parts[1]}`);
    } else {
      setMaskedIdentifier(`${storedIdentifier.substring(0, 5)}******${storedIdentifier.slice(-2)}`);
    }
  }, [navigate]);

  useEffect(() => {
    // Countdown timer for resend
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      
      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }

      // Auto-submit when all 4 digits are entered
      if (index === 3 && value) {
        const fullOtp = [...newOtp.slice(0, 3), value].join('');
        handleVerifyOTP(fullOtp);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async (otpValue = null) => {
    const otpCode = otpValue || otp.join('');
    
    if (otpCode.length !== 4) {
      setError('Please enter complete OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const verifyData = {
        otp: otpCode,
      };

      if (authType === 'email') {
        verifyData.email = identifier;
      } else {
        verifyData.phone = identifier;
      }

      const response = await authAPI.verifyOTP(verifyData);
      
      // Store token
      setAuthToken(response.data.token);
      
      // Clear session storage
      sessionStorage.removeItem('authIdentifier');
      sessionStorage.removeItem('authType');
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      // Display the specific error message from backend
      const errorMessage = err.message || 'Verification failed. Please try again.';
      setError(errorMessage);
      setLoading(false);
      // Clear OTP inputs on error
      setOtp(["", "", "", ""]);
      inputsRef.current[0]?.focus();
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;

    setLoading(true);
    setError('');

    try {
      const resendData = {};
      if (authType === 'email') {
        resendData.email = identifier;
      } else {
        resendData.phone = identifier;
      }

      await authAPI.resendOTP(resendData);
      setCountdown(60); // Start 60-second countdown
      setOtp(["", "", "", ""]); // Clear OTP inputs
      inputsRef.current[0]?.focus();
    } catch (err) {
      // Check if error message contains countdown information
      if (err.message.includes('wait')) {
        setError(err.message);
      } else {
        setError('Failed to resend OTP');
      }
    } finally {
      setLoading(false);
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
        <div className="otp-icon1"><img src={text} className="otp-icon" alt="iconotp"/></div>
        <h2>Check Your {authType === 'email' ? 'Inbox' : 'Messages'}</h2>
        <p>
            We have sent 4 digit verification code to your{" "}
            <span className="phone">{maskedIdentifier}</span>
        </p>

        {error && <div style={{color: 'red', marginBottom: '10px', textAlign: 'center', fontSize: '14px'}}>{error}</div>}

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
                disabled={loading}
            />
            ))}
        </div>

        <p className="resend">
            Not received yet? {countdown > 0 ? (
              <span>Resend in {countdown}s</span>
            ) : (
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleResend(); }} 
                className="navlink"
                style={{pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.5 : 1}}
              >
                <span>Resend Now</span>
              </a>
            )}
        </p>
        </div>
    </div>
  );
}

export default OtpVerification;
