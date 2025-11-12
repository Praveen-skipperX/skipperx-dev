import { useEffect, useRef, useState } from "react";
import eightseven from "../assets/psy89.png";
import nineseven from "../assets/psy98.png";
import nineeight from "../assets/psy89.png";
import bgImage from '../assets/psycobg.png';
import arvrreviewlogo from "../assets/arvr-r-logo.png";
import certificateDisplay from "../assets/new-cer.jpg";
import brochureImage from "../assets/doers-brochure.png";
import faqarrow from "../assets/faqarrow.png";
import hari from '../assets/harih.jpg';
import harish from '../assets/vinod.jpg';
import bulbIcon from '../assets/holding-bulb.png';
import sai from '../assets/sai.jpg';
import sakshi from '../assets/roshan.png';
import soumya from "../assets/soumya.png";
import arvrskippertopmobile from "../assets/top3-skipperx-mobile.png";
import suresh from "../assets/suresh.png";
import vishal from "../assets/vishal.png";
import Footer from '../components/Footer';
import GoogleSheetForm from '../components/GoogleSheetForm';
import Navbar from '../components/Navbar';
import '../components/responsiveUtils.css';
import './Psychology.css';


import engagementBg from '../assets/unique-engagement-bg.jpeg';



const faqData = [
    {
        id: 1,
        question: "Is technical support available if I encounter issues with the online platform?",
        answer: "Yes, our dedicated technical support team is available 24/7 to assist you with any platform-related issues. You can reach us via chat, email, or our support portal.",
    },
    {
        id: 2,
        question: "What is the duration of the 'Build Mode' program?",
        answer: "The 'Build Mode' program typically runs for 8 weeks, with live sessions twice a week and dedicated mentor feedback sessions.",
    },
    {
        id: 3,
        question: "Are there any prerequisites for joining the program?",
        answer: "No prior experience in product management is required. We welcome individuals from diverse backgrounds eager to learn and grow.",
    },
    {
        id: 4,
        question: "How is the community feedback structured for projects?",
        answer: "Community feedback is integrated into weekly brand challenges, allowing peers to review and comment on your work, sharpening your skills in real-time.",
    },
    {
        id: 5,
        question: "What kind of job assistance is provided?",
        answer: "We offer mock interview sessions, resume reviews, and real-world prep sessions to help you land your dream product role.",
    },
    {
        id: 6,
        question: "Can I switch between 'Learn Mode' and 'Build Mode'?",
        answer: "Yes, you can upgrade from 'Learn Mode' to 'Build Mode' at any time. Contact our support team for details on upgrading your access.",
    },
];


const engagementElements = [
  {
    id: 1,
    title: "Real-World Reflection",
    description: "Apply psychology to your daily choices, relationships, and work.",
  },
  {
    id: 2,
    title: "Interactive Learning",
    description: "Workshops, group tasks, and self-assessment tools — no passive lectures.",
  },
  {
    id: 3,
    title: "Career Clarity",
    description: "End with a personal roadmap for your future in psychology.",
  },
];

const modules = [
  { title: " Week 1: Introduction to Unity and 3D Basics", content: [
      "1. Unity Game Engine Overview.",
      "2. Introduction to Unity.",
      "3. Unity interface: Tools, View, and Windows.",
      "4. Overview of the 3D coordinate system.",
      "5. GameObjects and Components.",
      "6. Understanding GameObjects and their hierarchy.",
      "7. Introduction to Components and their roles in Unity.",
      "8. Transformations in 3D.",
      "9. Translation, rotation, and scaling in Unity."
    ]  },



  { title: " Week 2: Unity Basics and C# Scripting", content: [
      "1. C# Scripting in Unity.",
      "2. Introduction to MonoBehaviour and Unity Callbacks.",
      "3. Basics of C#: Variables, loops, conditions, and methods.",
      "4. Math and Vector operations in Unity.",
      "5. Randomization and Interactivity.",
      "6. Generating random values for gameplay elements.",
      "7. Creating simple interactivity using scripts."
    ]  },



  { title: "Week 3: Physics, UI, and Effects", content: [
      "1. Physics in Unity.",
      "2. Rigidbody and collision detection.",
      "3. Using triggers and tags for interaction.",
      "4. UI, Audio, and Particle Effects.",
      "5. Creating a simple UI in Unity.",
      "6. Adding and managing audio and video.",
      "7. Particle effects for visual enhancements."
    ]  },

  { title: "Week 4: Lighting and Advanced Unity Features", content: [
      "1. Lighting in Unity.",
      "2. Basics of lighting and shadows.",
      "3. Configuring different types of lights for mood and environment.",
      "4. Advanced Unity Concepts.",
      "5. Combining multiple features for a polished Unity project."
    ]  },


      { title: "Week 5: Introduction to Vuforia Engine", content: [
      "1. Getting Started with Vuforia.",
      "2. Setting up the Vuforia engine in Unity.",
      "3. Creating and managing an image database.",
      "4. AR Features in Vuforia.",
      "5. Working with image targets and multi-targets.",
      "6. Ground plane detection for placing objects on real-world surfaces."
    ]  },

      { title: "Week 6: Advanced Vuforia Features", content: [
      "1. Mid-Air and Object Detection.",
      "2. Creating mid-air AR experiences.",
      "3. Setting up object detection for AR applications.",
      "4. Device Tracking.",
      "5. Introduction to device tracking for enhanced AR stability."
    ]  },   
    
      { title: "Week 7: Introduction to WebXR and A-Frame", content: [
      "1. Getting Started with WebXR.",
      "2. Introduction to WebXR concepts and applications.",
      "3. Tools and libraries for WebXR development.",
      "4. A-Frame Basics.",
      "5. Building a simple A-Frame AR and VR project."
    ]  },  
    
      { title: "Week 8: Advanced WebXR and Capstone Project", content: [
      "1. Advanced A-Frame.",
      "2. A-Frame AR and VR customizations.",
      "3. Integrating WebXR applications with other tools.",
      "4. Capstone Project.",
      "5. Creating an AR/VR application using learned concepts."
    ]  }   

  ];

const Psychology = () => {
  const scrollItems = [
    "Business Analytics",
    "Human Resource",
    "Finance",
    "Fashion Designing",
    "Marketing",
    "Blockchain",
    "UI/UX",
    "Cyber Security"
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const offerRef = useRef(null);
  const desktopFormRef = useRef(null);
  const mobileFormRef = useRef(null);//scrolling
  
  const [isFixed, setIsFixed] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  const [showForm, setShowForm] = useState(false);

  const handlePricingClick = () => {
    setShowForm(true);
  };
  //scrolling
  const scrollToForm = () => {
    const isMobile = window.innerWidth <= 480;

    if (isMobile) {
      // Scroll to mobile section
      if (mobileFormRef.current) {
        mobileFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Scroll to desktop section
      if (desktopFormRef.current) {
        desktopFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  

  const getNextDeadline = () => {
  const savedDeadline = localStorage.getItem('droneOfferDeadline');
  const now = new Date().getTime();

  if (savedDeadline && Number(savedDeadline) > now) {
    return Number(savedDeadline);
  } else {
    const next = now + 48 * 60 * 60 * 1000; 
    localStorage.setItem('droneOfferDeadline', next);
    return next;
  }
  };

  const calculateTimeLeft = (deadline) => {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      const next = now + 48 * 60 * 60 * 1000;
      localStorage.setItem('droneOfferDeadline', next);
      return calculateTimeLeft(next);
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      Days: String(days).padStart(2, '0'),
      Hours: String(hours).padStart(2, '0'),
      Minutes: String(minutes).padStart(2, '0'),
      Seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timer, setTimer] = useState({
    Days: '00',
    Hours: '00',
    Minutes: '00',
    Seconds: '00',
  });

  useEffect(() => {
    let deadline = getNextDeadline();

    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft(deadline);
      setTimer(timeLeft);
    }, 1000);
    



    const handleScroll = () => {
      if (!cardRef.current || !sectionRef.current || !offerRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = offerRef.current.getBoundingClientRect().top;
      const cardHeight = cardRef.current.offsetHeight;

      if (sectionTop <= 20 && sectionBottom > cardHeight + 40) {
        setIsFixed(true);
        setOffsetTop(20);
      } else {
        setIsFixed(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   
    
 }, []);




  
  return (
    <>
      <Navbar />



      
      <div className='arvr-dronebody'>
        <div
          className="arvr-drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
          }}
        >
          <div className="arvr-drone-tag">
            <img src={bulbIcon} alt="Bulb Icon" className="arvr-drone-tag-icon" />
            For doers
          </div>
          
          <div className="arvr-arvr-title1">
            <h1 className="arvr--title"><span className="arvr-highlight">Psychology </span> That Helps You Understand the Mind — and the Human Behind It</h1>
          </div>
          

          <p className="arvr-drone-description">
            Learn how emotions, behavior, and relationships shape the stories we live every day.
          </p>

          <div className="arvr-drone-cta-buttons">
            <button className="arvr-drone-outline-btn">Mind</button>
            <button className="arvr-drone-outline-btn">Emotion</button>
            <button className="arvr-drone-outline-btn">Bond</button>
          </div>

          <button className="arvr-drone-start-btn" onClick={scrollToForm}>Begin Your Mind Journey</button>

          <div className="arvr-drone-scroll-wrapper1">
            <div className="arvr-drone-scroll-track1">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="arvr-drone-scroll-content1">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="arvr-drone-scroll-item1">
                      {item} •&nbsp;
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




      <div className="accredit">
        <div className="drone-accredit-section">
          
            
          
        </div>

      



          <div className="arvr1-stat-section">
            <div className="arvr1-stat-card">
              <h2>89<span>%</span></h2>
              <p>Completion rate <br />for our 1:1 Program.</p>
              <img src={nineeight} className="arvr1-nineseven"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>98<span>%</span></h2>
              <p>Of participants report<br /> high engagement</p>
              <img src={nineseven} className="arvr1-nineone"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>89<span>%</span></h2>
              <p>Of participants stay <br />with their company.</p>
              <img src={eightseven} className="arvr1-eight"/>
            </div>
          </div>







        <section className="drone-info-section" ref={sectionRef} >
          <div className="drone-info-left">



            <div>
            <h2 className="arvr-info-heading">
              Advanced <span>Growth</span> Strategy
            </h2>

            <p className="arvr-info-para" >
              Skipper’s AR/VR Program helps you master 3D designs, spatial computing, immersive storytelling,and interaction design.
            </p>
            <p className="arvr-info-para1">
              You’ll gain practical skills in building virtual environments and augmented 
              experiences—preparing you for careers in gaming, education, healthcare, and emerging tech industries.
            </p>
          </div>

           

           <div className="arvr-skill-section" >
            <h3>Skills you will gain with this path</h3>
            <div className="arvr-skills-tags">
              <span>Rendering</span>
              <span>Modeling</span>
              <span>Visualization</span>
              <span>Optimization</span>
              <span>Prototyping</span>
              <span>Immersion</span>
              <span>Scripting</span>
              <span>Calibration</span>
              <span>Debugging</span>
              <span>Tracking</span>
              <span>Animation</span>
              <span>Projection</span>
              <span>Automation</span>
              <span>Mapping</span>
              <span>Experience</span>
              <span>Calibration</span>
            </div>
          </div>   









            <div className="arvr-info-stats">
              <h2 className="arvr-head-ing">
                    Mentors
              </h2>
              {[
                { count: '42,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '7+', label: 'Industry Experts' }
              ].map((item, index) => (
                <div className="arvr-stat-card" key={index}>
                  <div className="arvr-state-icon">
                    <span>⚡</span>
                  </div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>



           




            <div className="arvr-drone-testimonial-box">
              <h2 className="arvr-robot-heading">Learning That<span className="arvr-highlight"> Works </span> - Proven by People</h2>
              <div className="arvr-drone-testimonial-person">
                <img src={require('../assets/singh-arvr.png')} alt="Ashish Singhal" />
                <div className="arvr-drone-testimonial-name">
                  Shreyansh Singh <br />
                  <img src={arvrreviewlogo}  className="arvr-arvr-review-img" />
                </div>
              </div>

              <div className="arvr-arvr-testimonial-quote">
                <p>
                  <em>
                    "I was really impressed by Skipper’s AR/VR Engineering Program. The modules were well-organized, and mentors were always available to help and guied us in each and every step. Building interactive virtual spaces and learning about spatial computing opened up so many creative possibilities for me.
                    <br /><br />
                    This program is perfect if you want to break into immersive tech."
                  </em>
                </p>
              </div>
            </div>
            








            <div className="arvr-built-section">
              <h2>This is <span className="highlight">built </span> for</h2>
              <div className="arvr-built-carousel">
                <div className="arvr-built-track">
                  {[
                    { tag: 'Entertainment', title: 'Interactive worlds', desc: 'Creating immersive play and storytelling experiences.' },
                    { tag: 'Education', title: 'Learning simulations', desc: 'Enabling realistic and engaging skill-building environments.' },
                    { tag: 'Healthcare', title: 'Medical visualization ', desc: 'aiding surgery planning and therapeutic treatments.' },
                    { tag: 'Retail ', title: 'Virtual try-ons ', desc: 'Helping customers preview products before purchasing.' },
                    { tag: 'Real Estate', title: ' Virtual walkthroughs  ', desc: 'Showcasing properties and designs remotely as user wants.' },
                    { tag: 'Automotive', title: 'Prototyping ', desc: 'improving design and maintenance processes included.' },
                    { tag: 'Tourism', title: 'Virtual tours  ', desc: 'bringing cultural and historic sites to life digitally' }
                    
                  ].map((item, i) => (
                    <div className="arvr-built-card" key={i}>
                      <span className="arvr-built-tag">{item.tag}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>





          <div className="arvr-module-section">
            <div className="arvr-module-heading-wrapper">
              <div className="arvr-module-line-left" />
              <h2>
                What will you<span className="arvr-module-highlight"> learn?</span> 
              </h2>
              <div className="arvr-module-line-right" />
            </div>
            
            <div className="arvr-module-list">
              {modules.map((module, index) => (
                <div className="arvr-module-box" key={index}>
                  <div className="arvr-module-toggle" onClick={() => toggleAccordion(index)}>
                    <div>
                      <h4>MODULE {index + 1}</h4>
                      <p>{module.title}</p>
                    </div>
                    <span className={`toggle-icon ${activeIndex === index ? 'expanded' : ''}`}>
                      <img src={faqarrow} alt="toggle" className="arvr-toggle-img" />
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="arvr-module-details">
                      <ul>
                        {module.content.map((point, i) => (
                          <p key={i}>{point}</p>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>






















           



          </div>










        
          {/* Desktop version - sticky */}
          <div className="drone-info-right desktop-only" ref={desktopFormRef}>
            {!showForm ? (
              <div
                ref={cardRef}
                className="drone-pricing-card"
                style={{
                  position: isFixed ? "fixed" : "sticky",
                  top: isFixed ? `0px` : "0px",
                  zIndex: 10,
                }}
              >
                <h2>Master Psychology Program</h2>
                <ul className="drone-features-list" >
                  <li><span className="tickmark">&#10004;</span> Innovation for professional growth</li>
                  <li><span className="tickmark">&#10004;</span> Certification included</li>
                  <li><span className="tickmark">&#10004;</span> Industry relevant skills</li>
                  <li><span className="tickmark">&#10004;</span> Hands on learning</li>
                </ul>
                <div className="price">Price</div>
                <div className="drone-price-section">
                  <div className="drone-original-price">₹24,999</div>
                  <div className="drone-current-price">₹20,000</div>
                </div>
                <div className="trust-footer-drone">
                  <div className="avatarsdrone">
                    <img src={harish} alt="avatar" />
                    <img src={hari} alt="avatar" />
                    <img src={sakshi} alt="avatar" />
                    <img src={sai} alt="avatar" />
                    <span className="top">7000+ members have already completed this Program</span>
                  </div>
                </div>
                <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`drone-form-wrapper visible`}>
                <div className="drone-form">
                  <div
                    ref={cardRef}
                    className="drone-form-card"
                    style={{
                      position: isFixed ? "fixed" : "sticky",
                      top: isFixed ? `0px` : "0px",
                      zIndex: 10,
                    }}
                  >
                    <h3 className="drone-form-title">Master Psychology Program</h3>
                    <GoogleSheetForm formName="AR VR" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

{/* Mobile version - static, after reviews */}
        <div className="mobile-only" ref={mobileFormRef} style={{margin: '32px 0'}}>
          <div className="drone-info-right" style={{position: 'static'}}>
            {!showForm ? (
              <div className="drone-pricing-card" >
                <h2>Master Psychology Program</h2>
                <ul className="drone-features-list" >
                  <li><span className="tickmark">&#10004;</span> Innovation for professional growth</li>
                  <li><span className="tickmark">&#10004;</span> Certification included</li>
                  <li><span className="tickmark">&#10004;</span> Industry relevant skills</li>
                  <li><span className="tickmark">&#10004;</span> Hands on learning</li>
                </ul>
                <div className="price">Price</div>
                <div className="drone-price-section">
                  <div className="drone-original-price">₹24,999</div>
                  <div className="drone-current-price">₹20,000</div>
                </div>
                <div className="trust-footer-drone">
                  <div className="avatarsdrone">
                    <img src={harish} alt="avatar" />
                    <img src={hari} alt="avatar" />
                    <img src={sakshi} alt="avatar" />
                    <img src={sai} alt="avatar" />
                    <span className='top'>7000+ members have already completed this Program</span>
                  </div>
                </div>
                <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`drone-form-wrapper visible`}>
                <div className="drone-form">
                  <div className="drone-pricing-card">
                    <h3 className="drone-form-title">Master Psychology Program</h3>
                    <GoogleSheetForm formName="AR VR" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>




















    







        <div className="arvr-cert-drone" ref={offerRef}>
         <div className="arvr-certificate-display-section">
            <div className="arvr-certificate-image-wrapper">
          <img
            src={certificateDisplay}
            alt="Skipper Certificate"
            className="arvr-certificate-background-img"
            
          />
          <div className="arvr-certificate-overlay">
            <h2 className="arvr-certificate-title" >
              Seal the Skill with a <span className="arvr-highlight">SkipperX </span> Certificate
            </h2>
            <p className="arvr-certificate-subtext">
              Yes! You will be certified for this program.
            </p>
          </div>
        </div>
        </div>
        </div>

        
        



 
           
            <section className="doers-success-sprints-section" id="doers-success-sprints-section-space">
                <div className="doers-sprints-container">
                    {/* Left Column: Image and Main Title */}
                    <div 
                        className="doers-sprints-left-panel"
                        style={{ backgroundImage: `url(${engagementBg})` }}
                    >
                        <p className="doers-sprints-overline" >SUCCESS SPRINTS</p>
                        <h2 className="doers-sprints-main-title">Unique Engagement Elements</h2>
                    </div>

                    {/* Right Column: List of Engagement Elements */}
                    <div className="doers-sprints-right-panel">
                        {engagementElements.map((element) => (
                            <div key={element.id} className="doers-sprints-item">
                                <h3 className="doers-sprints-item-title" id="doers-sprints-item-space">{element.title}</h3>
                                <p className="doers-sprints-item-description">{element.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>









{/* arvr */}

      <div className="arvr-brochure">
        <div
          className="arvr-brochure-banner"
          id="arvr-brochure-banner-space"
          style={{ backgroundImage: `url(${brochureImage})` }}
        >
          <div className="arvr-brochure-overlay">
            <h3>
              Want the Deep Dive? Grab the <span>Brochure</span>
            </h3>
            <p>
              From what you’ll learn to where it can take you — it’s all inside.
            </p>
            <button className="arvr-download-brochure-btn">Download Brochure</button>
          </div>
        </div>
       </div>







         <section class="psy-walk-away">
          <h2>
            Here’s What You’ll Walk <span>Away</span> With
          </h2>

          <div class="psy-walk-away-cards">
            

            <div class="psy-walk-card">
              <div class="psy-icon">⚡</div>
              <h4>Lifetime access</h4>
              <p>Enjoy   <b>unlimited lifetime access</b>to all resources with a one-time payment</p>
            </div>


            <div class="psy-walk-card">
              <div class="psy-icon">⚡</div>
              <h4>Access on all devices</h4>
              <p>ccess your courses and resources seamlessly   <b>across all your devices</b></p>
            </div>


            <div class="psy-walk-card">
              <div class="psy-icon">⚡</div>
              <h4>Personalised Guidance</h4>
              <p>Connect with   <b> industry experts</b>for insights, feedback, and creative growth.</p>
            </div>





          </div>
        </section>




 
        
         
                <section className="doers-pricing-section">
                    <div className="doers-pricing-header">
                        
                        <h2 className="doers-pricing-main-title">
                            Invest in Your <span className="doers-pricing-highlight">Creativity</span> — Not Just Another Course.
                        </h2>
                        <p className="doers-pricing-subtext">
                            One-time access. lifetime creator advantage.
                        </p>
                    </div>

                    <div className="doers-pricing-cards-container">
                        {/* --- Card 1: Learn Mode --- */}
                        <div className="doers-pricing-card doers-learn-mode">
                            <div className="doers-card-top" id='doers-tag'>
                                <h3 className="doers-card-mode-title">Learn Mode</h3>
                            </div>
                            
                            <div className="doers-card-body">
                                <p className="doers-card-subtitle">BUILD YOUR FOUNDATION</p>
                                <ul className="doers-feature-list">
                                    <li><span className="doers-check-icon">✓</span> Self-paced recorded lessons</li>
                                    <li><span className="doers-check-icon">✓</span> Creative challenges</li>
                                    <li><span className="doers-check-icon">✓</span> Access to community resources to grow at your own rhythm</li>
                                </ul>
                            </div>

                            
                            <div className="doers-card-footer">
                                <div>
                                    <p className="doers-price-label">PRICE</p>
                                    <p className="doers-original-price">₹10,000</p>
                                </div>
                                {/* 🎯 NEW CLASS FOR THE BUTTON EFFECT */}
                                <p className="doers-offer-text doers-offer-button-wrapper">
                                    Avail student offer and get it for <span className="doers-offer-price"> ₹8,000</span>
                                </p>
                            </div>
                        </div>

                        {/* --- Card 2: Build Mode --- */}
                        <div className="doers-pricing-card doers-build-mode">
                            <div className="doers-card-top" id='doers-tag'>
                                <h3 className="doers-card-mode-title" >Build Mode</h3>
                            </div>
                            
                            <div className="doers-card-body">
                                <p className="doers-card-subtitle">LEARN LIVE, GROW FASTER</p>
                                <ul className="doers-feature-list">
                                    <li><span className="doers-check-icon">✓</span> Live mentor-led sessions</li>
                                    <li><span className="doers-check-icon">✓</span> weekly brand challenges</li>
                                    <li><span className="doers-check-icon">✓</span> community feedback to sharpen your skills in real time</li>
                                    <li><span className="doers-check-icon">✓</span> 1:1 mentor feedback,</li>
                                    <li><span className="doers-check-icon">✓</span> Mock interviews & real-world prep sessions</li>
                                </ul>
                            </div>

                            <div className="doers-card-footer">
                                <div>
                                    <p className="doers-price-label">PRICE</p>
                                    <p className="doers-original-price">₹20,000</p>
                                </div>
                                {/* 🎯 NEW CLASS FOR THE BUTTON EFFECT */}
                                <p className="doers-offer-text doers-offer-button-wrapper">
                                    Avail student offer and get it for <span className="doers-offer-price">₹18,000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>





                <section className="doers-faq-section">
                <div className="doers-faq-header">
                    <h2 className="doers-faq-main-title">Frequently Asked Question</h2>
                    <p className="doers-faq-subtext">
                        Insights from those who've walked the path you're about to take.
                    </p>
                </div>

                <div className="doers-faq-accordion-container">
                    {faqData.map((faq, index) => (
                        <div 
                            key={faq.id} 
                            className={`doers-faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button 
                                className="doers-faq-question" 
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="doers-faq-question-text">{faq.question}</span>
                                <span className="doers-faq-icon">
                                    {activeIndex === index ? (
                                        // Down arrow when active
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    ) : (
                                        // Down arrow when inactive
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    )}
                                </span>
                            </button>
                            <div className="doers-faq-answer-wrapper">
                                <p className="doers-faq-answer-text">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>










       

      </div>
      <Footer />
    </>
  );
};

export default Psychology;