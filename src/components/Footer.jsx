
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/skipper-black.png';
import { HashLink } from 'react-router-hash-link';

<img src={logo} alt="Skipper Logo" className="footer-logo" />

const Footer = () => { 
    
  return (
    
    <footer className="footer">
      <div className="footer-social">
        <span>Catch our updates on</span>
        <a href="https://www.linkedin.com/company/107873830/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-content">

        <div className="footer-left">
          <a href='/'><img src={logo} alt="Skipper Logo" className="footer-logo" /></a>
          <p>SkipperX is a premium online learning platform serving graduates, senior professionals in business, tech, and 
            design, and anyone looking to upgrade their job profile.</p>


          <p>Our job-focused, skill-based programs are built around real-world projects 
            and guided by mentors from top companies like Meta, Google, and JPMorgan.</p>


          <p>Learn drone engineering, AI, robotics, AR/VR, YouTube, stock trading, and more — all inside virtual classrooms. Explore curated learning packs like 
            Tech Core, Startup Stack, and Creative Hub to grow your career or launch your next big move.</p>  

          <p><strong>1st floor, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</strong></p>
              
          <p><a href="#" >support@skipperx.io</a></p>
          <p><a href="#">+91 6366953507</a></p>
          
         

        </div>
      








        <div className="footer-sections">


          <div className="footer-column" id="a">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Careers</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Apply as Mentor</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column" id="b">
            <h4>Programs</h4>
            <ul>
              <li ><a href="#launch-navigate">For Innovators</a></li>
              <li><a href="#stack-navigate">For Doers</a></li>
              <li><a href="#">For Enterpreneurs</a></li>
            </ul>
          </div>

          <div className="footer-column" id="c">
            <h4>Legal</h4>
            <ul>
              <li>< Link to="/privacy-policy" >Privacy Policy</Link></li>

              <li><Link to="/t & c">Terms & Condition</Link></li>
            </ul>
          </div>

          <div className="footer-column" id="d">
            <h4>Support</h4>
            <ul>
              <li ><a href="#">FAQ</a></li>
              <li><Link to="/refund-policy">
          Payment and <br/>Refund Policy
        </Link></li>
            </ul>
          </div>
          

          <div className="exclusive">
            <h3>Community Exclusive</h3>
            <p>Subscribe to our newsletter for exclusive updates on the latest releases and special offers.</p>
            <div className="subscribe-wrapper">
              <input type="email" placeholder="Email Id" className="subscribe-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
          

      
        </div>
      


      </div>







      <div className="footer-bottom">
        
        
      </div>
      <p className="footer-rights">©2025 . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
