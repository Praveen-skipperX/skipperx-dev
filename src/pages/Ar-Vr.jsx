import { useEffect, useRef, useState } from "react";
import eightseven from "../assets/87.png";
import nineseven from "../assets/97.png";
import nineeight from "../assets/98.png";
import bgImage from '../assets/arvr-hero.png';
import arvrreviewlogo from "../assets/arvr-r-logo.png";
import certificateDisplay from "../assets/new-cer.jpg";
import brochureImage from "../assets/drone-brochure.png";
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
import './Ar-Vr.css';






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

const ArVr = () => {
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
            For Innovators
          </div>
          
          <div className="arvr-arvr-title1">
            <h1 className="arvr--title">Create <span className="arvr-highlight">AR/VR  experiences </span>  that redefine reality and set new standards.</h1>
          </div>
          

          <p className="arvr-drone-description">
            Earn to design immersive experiences that blur the line between real and virtual.
          </p>

          <div className="arvr-drone-cta-buttons">
            <button className="arvr-drone-outline-btn">Create</button>
            <button className="arvr-drone-outline-btn">Code</button>
            <button className="arvr-drone-outline-btn">Design</button>
          </div>

          <button className="arvr-drone-start-btn" onClick={scrollToForm}>Start Learning</button>

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
              <h2>98<span>%</span></h2>
              <p>Completion rate <br />for our 1:1 Program.</p>
              <img src={nineeight} className="arvr1-nineseven"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>97<span>%</span></h2>
              <p>Of participants report<br /> high engagement</p>
              <img src={nineseven} className="arvr1-nineone"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>87<span>%</span></h2>
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






















            <div className="arvr-review-carousel-section">
              <h2 className="arvr-drone-review-title">Reviews</h2>
              <div className="arvr-review-carousel-wrapper">
                <div className="arvr-review-carousel-track">
                  {[
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Parthiv Kumar",
                      role: "Cybersecurity",
                      review:
                        "I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on a minor project with a machine to identify vulnerabilities.",
                      avatar: sai,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Harish",
                      role: "Blockchain",
                      review:
                        "The course provided deep insights and practical exposure. The module on real-world drone integration was especially eye-opening.",
                      avatar: harish,
                    },
                    {
                      heading:"BOE aP Monitor",
                      name: "Sakshi",
                      role: "AI Research",
                      review:
                        "Exceptional mentorship and hands-on sessions! I now understand drone dynamics and automation better.",
                      avatar: sakshi,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Hari Krishna",
                      role: "IoT & Robotics",
                      review:
                        "Fantastic journey. Loved the combination of theory and lab work. My project now flies!",
                      avatar: hari,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Aditi Rao",
                      role: "Embedded Systems",
                      review:
                        "Comprehensive curriculum and well-guided support made the learning smooth and impactful.",
                      avatar: sakshi,
                    },
                  ].map((review, i) => (
                    <div className="arvr-review-slide" key={i}>
                      <h4>{review.heading}</h4>
                      <p><em>{review.review}</em></p>
                      <div className="arvr-review-footer">
                        <img src={review.avatar} alt={review.name} />
                        <div>
                          <strong className="arvr-review-name">{review.name}</strong><br />
                          <span className="arvr-review-namep">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                <h2>Master Augmented & Virtual Reality</h2>
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
                    <h3 className="drone-form-title">Master Augmented & Virtual Reality</h3>
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
                <h2>Master Augmented & Virtual Reality</h2>
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
                    <h3 className="drone-form-title">Master Augmented & Virtual Reality</h3>
                    <GoogleSheetForm formName="AR VR" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>










        <div className="arvr-drone-offer-section" >

          <h2 className="arvr-offer-heading" ref={offerRef}>Biggest Price Drop Yet</h2>
          
          <div className="arvr-offer-price-box" >
            <span className="arvr-offer-icon">⚡</span>
            <span className="arvr-offer-old-price">₹24,999/-</span>
            <span className="arvr-offer-new-price">₹20,000/-</span>
          </div>

          <p className="arvr-offer-subtext">The Clock’s Ticking — Ends In</p>

          <div className="arvr-offer-timer">
            {Object.entries(timer).map(([label, value], i) => (
              <div className="arvr-timer-unit" key={i}>
                <div className="arvr-digit-pair">
                  {value.split('').map((digit, j) => (
                    <div className="arvr-timer-box" key={j}>{digit}</div>
                  ))}
                </div>
                <p>{label}</p>
              </div>
            ))}
          </div>

          <button className="arvr-offer-btn" onClick={scrollToForm}>Apply Now</button>
        </div>











    







        <div className="arvr-cert-drone">
         <div className="arvr-certificate-display-section">
            <div className="arvr-certificate-image-wrapper">
          <img
            src={certificateDisplay}
            alt="Skipper Certificate"
            className="arvr-certificate-background-img"
            
          />
          <div className="arvr-certificate-overlay">
            <h2 className="arvr-certificate-title">
              Seal the Skill with a <span className="arvr-highlight">SkipperX </span> Certificate
            </h2>
            <p className="arvr-certificate-subtext">
              Yes! You will be certified for this program.
            </p>
          </div>
        </div>
        </div>
        </div>

        





{/* arvr */}

      <div className="arvr-brochure">
        <div
          className="arvr-brochure-banner"
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












        <div className="arvr-skippers-section">
          <div className="arvr-faq-header">
            <hr className="arvr-faq-leftt"/>
            <h2><span className="arvr-dronehighlight">Skippers</span> of the Month</h2>
            <hr className="arvr-faq-rightt"/>
          </div>
          <p className="arvr-faq-subtext">Insights from those who’ve walked the path you're about to take.</p>

        <div className="arvr-skippers-podium-wrapper">
          
          <div className="arvr-podium-bg" />

          
          <div className="arvr-skipper-box silver">
            <img src={soumya} alt="Soumya Verma" className="arvr-skipper-img" />
            <h4>Soumya Verma</h4>
            <p>Silver Medalist</p>
            <div className="arvr-coins-earned1">
              <span className="arvr-coin-icon">⚡</span>
              <span className="arvr-coin-text">20345 Coins earned</span>
            </div>
          </div>

          
          <div className="arvr-skipper-box gold">
            <img src={suresh} alt="Suresh Sharma" className="arvr-skipper-img" />
            <h4>Suresh Sharma</h4>
            <p>Gold Medalist</p>
            <div className="arvr-coins-earned2">
              <span className="arvr-coin-icon">⚡</span>
              <span className="arvr-coin-text">20345 Coins earned</span>
            </div>
          </div>

          
          <div className="arvr-skipper-box bronze">
            <img src={vishal} alt="Vishal Pal" className="arvr-skipper-img" />
            <h4>Vishal Pal</h4>
            <p>Bronze Medalist</p>
            <div className="arvr-coins-earned3">
              <span className="arvr-coin-icon">⚡</span>
              <span className="arvr-coin-text">20345 Coins earned</span>
            </div>
          </div>
        </div>
        <div className="arvr-skippertop-mobile">
          <div>
            <img src={arvrskippertopmobile} alt="Soumya Verma" className="arvr-skipper-img-mobile" />
          </div>
        </div>
      </div>


      


















       <div className="arvr-faq-section">
          <div className="arvr-faq-header">
            <hr className="arvr-faq-leftt"/>
            <h2>Frequently Asked Question</h2>
            <hr className="arvr-faq-rightt"/>
          </div>
          {/*<p className="arvr-faq-subtext">Insights from those who’ve walked the path you're about to take.</p>*/}
          
          <div className="arvr-faq-list">
            {[
              {
                question: "Is technical support available if I have issues with the online platform?",
                answer: "Our dedicated support team is just a call or an email away. Reach out to us at 8792243559 / 8147081557 or support@Skipperx.in from Monday to Saturday, 11 AM to 8 PM, for any assistance you need!"
              },
              {
                question: "Are there discussion forums or community platforms for students?",
                answer: "Join the vibrant community on WhatsApp! Engage, discuss, and grow with fellow learners and mentors by your side."
              },
              {
                question: "Is there a pre-registration option available?",
                answer: "Get ahead of the curve with a nominal pre-registration fee of ₹1000. Secure your spot and start transforming your career trajectory!"
              },
               {
                question: "What is the refund policy?",
                answer: "Our courses are crafted with care and commitment, and as such, we do not offer refunds. We believe in the value and quality of our educational services!"
              },
              {
                question: "How much time do I need to dedicate to the course each week?",
                answer: "Whether you’re sprinting or pacing yourself, choose what works for you! We offer both self-paced and mentor-led formats to match your learning style."
              },
              {
                question: "What are the timings of the classes ?",
                answer: "Classes are tailored for convenience, kicking off after 6 PM to suit your busy schedules and commitments. Dive in when you're ready to learn!"
              }
            ].map((item, index) => (
              <div className="arvr-faq-card" key={index}>
                <div className="arvr-faq-question" onClick={() => toggleAccordion(index + 100)}>
                  <h4>{item.question}</h4>
                  <span className={`accordion-icon ${activeIndex === index + 100 ? 'open' : ''}`}><img src={faqarrow} alt="dropdown" className="arvr-faqarrow" /></span>
                </div>
                {activeIndex === index + 100 && (
                  <div className="arvr-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ArVr;