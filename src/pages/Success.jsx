import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import logo from "../assets/skipper-black.png";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-wrapper">

      {/* Navbar */}
      <div className="success-topbar">
        <img src={logo} alt="SkipperX" />
      </div>

      {/* Card */}
      <div className="success-container">

        <div className="success-check">
          ✓
        </div>

        <h2 className="success-heading">Thank you!</h2>
        <p className="success-text">Your enrollment is successful</p>

        <div className="success-line" />

        <div className="success-user">
          <div><span>Name:</span><strong>Rahul Singh</strong></div>
          <div><span>Username:</span><strong>BrainPilot_093</strong></div>
          <div><span>Mobile Number:</span><strong>+91 9988776093</strong></div>
        </div>

        <div className="success-line" />

        <h4 className="next-heading">What’s next?</h4>

        <div className="next-grid">

          <div className="next-box">
            <h5>Access your course dashboard</h5>
            <p>View your enrolled courses, track progress, and start exploring the content.</p>
          </div>

          <div className="next-box">
            <h5>Join the learning community</h5>
            <p>Connect with peers, mentors, and stay updated through the WhatsApp group.</p>
          </div>

          <div className="next-box">
            <h5>Get started with your first lesson</h5>
            <p>Log in and jump into your first module.</p>
          </div>

          <div className="next-box">
            <h5>Track your growth</h5>
            <p>Monitor your progress and achievements inside your dashboard.</p>
          </div>

        </div>

        <button className="whatsapp-btn">
          Join WhatsApp Community
        </button>

        <div className="success-buttons">
          <button className="home-btn" onClick={() => navigate("/")}>
            Home
          </button>

          <button className="dashboard-btn" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </div>

      </div>

      <div className="support-text">
        Need Help ? <span>Contact support team</span>
      </div>

    </div>
  );
}

export default Success;
