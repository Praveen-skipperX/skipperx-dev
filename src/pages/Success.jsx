import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import logo from "../assets/skipper-black.png"; // adjust path if needed
import iconDashboard from "../assets/icon-dashboard.png";
import iconCommunity from "../assets/icon-community.png";
import iconLesson from "../assets/icon-lesson.png";
import iconGrowth from "../assets/icon-growth.png";
import iconWhatsapp from "../assets/whatsapp-white.png";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-wrapper">

      {/* Top Logo */}
      <div className="checkout-navbar">
        
          <img src={logo} alt="SkipperX" className="checkout-logo" />
        
      </div>

      <div className="success-card">

        {/* Status */}
        <div className="status-section">
          <div className="check-circle">✓</div>
          <div>
            <h1>Thank you!</h1>
            <p>Your enrollment is successful</p>
          </div>
        </div>

        <div className="divider" />

        {/* Details */}
        <div className="details">
          <div className="row">
            <span>Name:</span>
            <strong>Rahul Singh</strong>
          </div>
          <div className="row">
            <span>Username:</span>
            <strong>BrainPilot_093</strong>
          </div>
          <div className="row">
            <span>Mobile Number:</span>
            <strong>+91 9988776093</strong>
          </div>
        </div>

        <div className="divider" />

        <h3 className="next-title">What's next?</h3>

        <div className="grid">
          <div className="grid-card">
            <img src={iconDashboard} alt="" />
            <div>
              <h4>Access your course dashboard</h4>
              <p>View your enrolled course, track progress, and start exploring the content.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src={iconCommunity} alt="" />
            <div>
              <h4>Join the learning community</h4>
              <p>Connect with peers, mentors, and stay updated through the WhatsApp group.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src={iconLesson} alt="" />
            <div>
              <h4>Get started with your first lesson</h4>
              <p>Begin at your own pace and learn step by step with guided modules.</p>
            </div>
          </div>

          <div className="grid-card">
            <img src={iconGrowth} alt="" />
            <div>
              <h4>Track your growth</h4>
              <p>Monitor your progress and move closer to your learning goals.</p>
            </div>
          </div>
        </div>

        <button className="btn-whatsapp">
          <img src={iconWhatsapp} alt="" className="whatspp-icon"/>
          Join WhatsApp Community
        </button>

        <div className="footer-buttons">
          <button className="btn-home" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="btn-dashboard" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </div>

      </div>

      {/* Help */}
      <div className="help-section">
        <p>Need Help ?</p>
        <span>Contact support team</span>
      </div>

    </div>
  );
}

export default Success;