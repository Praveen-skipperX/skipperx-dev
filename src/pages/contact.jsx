import React from "react";
import "./contact.css";
import loginImage from "../assets/login-bg1.png"; 
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'


import call from '../assets/call.png'
import mail from '../assets/mail.png'
import chat from '../assets/chat.png'

const Contact = () => {
  return (
    <div className="contact-page-container">
     
     
      <div className="contact-left-section">
        <div className="contact-image-container">
          <img src={loginImage} alt="Login Background" className="contact-bg-img" />


          <div className="contact-top-left-card">
            
            <div className="contact-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="contact-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="contact-top-right-card">
            <div className="contact-avatars">
                <img src={sai} alt="login-avatar" />
                <img src={harish} alt="login-avatar" />
                <img src={hari} alt="login-avatar" />
                <img src={sakshi} alt="login-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="contact-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>

      
      <div className="contact-right-section">
        <form className="contact-form">
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-subtitle">Got Questions? Let’s Connect and Help You Succeed!</p> 
          <div className="contact-us">
                <div className="contact-1">
                        <div>
                            <img src={call} className="contact-call" />
                        </div> 
                        <div>  
                            <p>Call us - +916366953507  </p>
                            <p className="contact-p">Get instant response</p>
                        </div>     
                </div>
                <div className="contact-1">
                    <div>
                        <img src={mail} className="contact-mail" />
                    </div>
                    <div>    
                      <p>E-mail us - Support@skipperx.io </p>
                      <p className="contact-p">Average response time is  12-24 hours</p>
                    </div>  
                </div>
                <div className="contact-1">
                    <div>
                        <img src={chat} className="contact-chat" />
                    </div>
                    <div>    
                        <p>Chat with us   </p>
                        <p className="contact-p">Get instant response</p>
                    </div>
                </div>
            </div>    
        </form>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
