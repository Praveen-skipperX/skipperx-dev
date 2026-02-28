import React, { useState } from "react";
import "./Checkout.css";
import logo from "../assets/skipper-black.png"; // adjust path if needed

function Checkout() {
  const [coupon, setCoupon] = useState("");
  const [referral, setReferral] = useState("");

  return (
    <div className="checkout-page">
      
      {/* Top Navbar */}
      <div className="checkout-navbar">
        <img src={logo} alt="SkipperX" className="checkout-logo" />
      </div>

      {/* Checkout Card */}
      <div className="checkout-card">

        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-program">
          <span>ENROLLMENT SUMMARY</span>
          <span className="program-name">DRONE ENGINEERING PROGRAM</span>
        </div>
        <hr />
        {/* Coupon Section */}
        <div className="checkout-section">
          <label>Apply coupon</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="apply-btn">Apply</button>
          </div>
        </div>

        {/* Savings Banner */}
        <div className="saving-banner">
          🟡 You are saving <b className="disc-3000">₹3000</b> on this program
        </div>

        {/* Price Details */}
        <div className="price-section">
          <h4>Price Details</h4>

          <div className="price-row">
            <span>Total MRP</span>
            <span>₹8999</span>
          </div>

          <div className="price-row">
            <span>Discount on MRP</span>
            <span>-₹3000</span>
          </div>

          <hr />

          <div className="price-row total">
            <span>Total Amount</span>
            <span>₹5999</span>
          </div>
        </div>

        {/* Pay Button */}
        <button className="pay-btn">Pay Now</button>
        <p className="redirect-text">
          You will be redirected to payment gateway
        </p>

        {/* Referral Section */}
        <div className="checkout-section referral" >
          <label>Do you have any Referral code?</label>
          <div className="input-group" id="apply-btnnn">
            <input
              type="text"
              placeholder="Enter referral code"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />
            <button className="apply-btn" id="apply-btnn">Apply</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
