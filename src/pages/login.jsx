import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hari from '../assets/harih.jpg';
import harish from '../assets/harisha.jpg';
import loginImage from "../assets/login-bg1.webp";
import googleLogo from "../assets/login-google.png";
import sai from '../assets/saisai.png';
import sakshi from '../assets/saksh.png';
import logo from '../assets/skipper-black.png';
import { authAPI, GOOGLE_AUTH_URL } from '../services/api';
import "./login.css";




const Login = () => {
    const navigate = useNavigate();
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      
      try {
        const response = await authAPI.sendOTP({ 
          phone: phone,
          phoneCode: countryCode 
        });
        
        // Store phone with country code in sessionStorage
        const fullPhone = `${countryCode}${phone}`;
        sessionStorage.setItem('authIdentifier', fullPhone);
        sessionStorage.setItem('authType', 'phone');
        
        navigate("/otp");
      } catch (err) {
        setError(err.message || 'Failed to send OTP');
      } finally {
        setLoading(false);
      }
    };

    const handleGoogleLogin = () => {
      window.location.href = GOOGLE_AUTH_URL;
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
          
          {error && <div style={{color: 'red', marginBottom: '10px', textAlign: 'center'}}>{error}</div>}
          
          <div className="login-input">
              <select 
                className="login-country-code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              </select>

            <input
                type="tel"
                className="phone-inputs"
                placeholder="XXXXXXXXXX"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={loading}
              />

              
          </div>
          <div className="login-options">
            <a href="/email" className="navlink" >Use<span className="login-forgot" > E-mail</span>instead</a>
          </div>
          <button type="submit" className="login-submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Continue'}
          </button>
          <div className="login-divider"><span>or</span></div>
          <button type="button" className="login-google-btn" onClick={handleGoogleLogin}>
            <img src={googleLogo} alt="Google" />
            Login with Google
          </button>
          
        </form>
      </div>
    </div>
  );
};


export default Login;
