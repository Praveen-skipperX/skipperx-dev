import { useEffect, useRef, useState } from "react";
import certificateDisplay from "../assets/new-cer.jpg";
import brochureImage from "../assets/drone-brochure.png";
import eightseven from "../assets/eight-seven.png";
import faqarrow from "../assets/faqarrow.png";
import hari from '../assets/harih.jpg';
import harish from '../assets/roshan.png';
import bulbIcon from '../assets/holding-bulb.png';
import nineeight from "../assets/nine-eight.png";
import nineseven from "../assets/nine-seven.png";
import bgImage from '../assets/robot-hero-bg.png';
import roborreviewlogo from "../assets/robot-review-logo.png";
import sai from '../assets/sai.jpg';
import sakshi from '../assets/vinod.jpg';
import soumya from "../assets/soumya.png";
import suresh from "../assets/suresh.png";
import vishal from "../assets/vishal.png";
import Footer from '../components/Footer';
import GoogleSheetForm from '../components/GoogleSheetForm';
import Navbar from '../components/Navbar';
import '../components/responsiveUtils.css';
import './RobotEngineering.css';
import arvrskippertopmobile from "../assets/top3-skipperx-mobile.png";



const modules = [
  { title: " Week 1: Introduction to Robotics & Microcontroller Basics", content: [
      "1. Robo Basics: What is Robotics?",
      "2. Definition and history of robotics.",
      "3. Types of robots and applications.",
      "4. Basic components of a robot (sensors, actuators, controllers)",
      "5. Microcontroller Mastery: Getting Started with Arduino.",
      "6. Overview of the Arduino platform.",
      "7. Arduino IDE setup and basic programming.",
      "8. Introduction to Arduino Uno and its components."
    ]  },



  { title: " Week 2: Microcontroller Mastery Continued & Electronics Fundamentals", content: [
      "1. Arduino Deep Dive.",
      "2. Exploring different Arduino boards and shields.",
      "3. Understanding digital vs. analog I/O.",
      "4. Writing and uploading simple programs to Arduino.",
      "5. Electronics Essentials: Basics of Circuitry.",
      "6. Introduction to voltage, current, and resistance.",
      "7. Overview of resistors, capacitors, LEDs, and motors.",
      "8. Basic circuit design and using a breadboard for prototyping."
    ]  },



  { title: "Week 3: Bluetooth Communication & Sensor Basics", content: [
      "1. Bluetooth Basics: Wireless Communication.",
      "2. Introduction to Bluetooth technology and applications in robotics.",
      "3. Working with Bluetooth modules (HC-05/HC-06).",
      "4. Connecting Bluetooth module to Arduino and sending/receiving data.",
      "5. Sensing the Environment: Basics of Sensors.",
      "6. Types of sensors: ultrasonic, infrared, line sensors.",
      "7. How sensors work and their importance in robotics."
    ]  },

  { title: "Week 4: Robot Assembly & Bluetooth Control", content: [
      "1. Robot Control: Designing and Assembling a Basic Robot.",
      "2. Introduction to robot chassis design and motor selection.",
      "3. Assembling motors, wheels, and structure.",
      "4. Integrating the Bluetooth module for wireless control."
    ]  },


      { title: "Week 5: Advanced Sensing and Data Interpretation", content: [
      "1. Sensing the Environment: Advanced Sensor Integration.",
      "2. Deep dive into ultrasonic, infrared, and line sensors.",
      "3. Using multiple sensors for more complex behavior (sensor fusion).",
      "4. Programming Arduino to interpret sensor data for real-time decision making."
    ]  },

      { title: "Week 6: Obstacle Avoidance & Line Following Techniques", content: [
      "1. Navigating Obstacles: Using Sensors for Obstacle Avoidance.",
      "2. Designing and implementing obstacle avoidance algorithms.",
      "3. Utilizing ultrasonic sensors for obstacle detection and avoidance.",
      "4. Following the Line: Building a Line-Following Robot.",
      "5. Understanding IR sensors and their role in line following.",
      "6. Designing a line-following algorithm.",
      "7. Practical: Build and test a line-following robot."
    ]  },   
    
      { title: "Week 7: Mobile App Development for Robot Control", content: [
      "1. App Development with MIT App Inventor.",
      "2. Overview of MIT App Inventor and setting up the environment.",
      "3. Basic components of app design (buttons, labels, text inputs).",
      "4. Implementing Bluetooth communication in the app."
    ]  },  
    
      { title: "Week 8: Final Integration and Project Presentations", content: [
      "1. Seamless Integration: Finalizing Robot and App Collaboration.",
      "2. Integrating sensors, Bluetooth control, and mobile app seamlessly.",
      "3. Troubleshooting common issues in robotics projects.",
      "4. Final Project Presentation.",
      "5. Showcase final projects.",
      "6. Discuss potential improvements and future projects.",
      "7. Overview of advanced topics (AI, machine learning, IoT) and how they relate to robotics."
    ]  }   

  ];

const RobotEngineering = () => {
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
    const next = now + 48 * 60 * 60 * 1000; // 48 hours in ms
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



      
      <div className='arvr2-dronebody'>
        <div
          className="arvr2-drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${bgImage})`,
            backgroundSize: 'cover',

            
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="arvr2-drone-tag">
            <img src={bulbIcon} alt="Bulb Icon" className="arvr2-drone-tag-icon" />
            For Innovators
          </div>

          <div className="arvr2-arvr-title1">
           <h1 className="arvr2--title"> Power your career growth through hands-on<br/>
            <span className="arvr2-highlight">Robot Engineering </span>expertise.</h1>
          </div>

          <p className="arvr2-drone-description">
            Learn to engineer intelligent machines that merge precision, innovation, and real-world impact.
          </p>

          <div className="arvr2-drone-cta-buttons">
            <button className="arvr2-drone-outline-btn">Create</button>
            <button className="arvr2-drone-outline-btn">Code</button>
            <button className="arvr2-drone-outline-btn">Design</button>
          </div>

          <button className="arvr2-drone-start-btn" onClick={scrollToForm}>Start Learning</button>

          <div className="arvr2-drone-scroll-wrapper1">
            <div className="arvr2-drone-scroll-track1">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="arvr2-drone-scroll-content1">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="arvr2-drone-scroll-item1">
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





      

        <section className="drone-info-section" ref={sectionRef}>
          <div className="drone-info-left">



            <div>
            <h2 className="arvr-info-heading">
              Advanced <span>Growth</span> Strategy
            </h2>

            <p className="arvr-info-para">
              Skipper’s Robotics Engineering Program equips you with the skills to design, build, and program intelligent machines.
            </p>
            <p className="arvr-info-para1">
              You’ll gain hands-on experience in automation, control systems, embedded electronics, and AI integration—preparing you for careers in manufacturing, aerospace, healthcare, and next-gen robotics industries.
            </p>
          </div>

           

           <div className="arvr-skill-section">
            <h3>Skills you will gain with this path</h3>
            <div className="arvr-skills-tags">
              <span>Automation</span>
              <span>Mechatronics</span>
              <span>Prototyping</span>
              <span>Battery Management</span>
              <span>Soldering</span>
              <span>Microcontrollers</span>
              
              <span>Electronics</span>
              <span>Embedded</span>
              <span>Simulation</span>
              <span>Circuitry</span>
              <span>CAD</span>
              <span>Tracking</span>
            
              
              <span>Mechanics</span>
              <span>Actuation</span>
              <span>Kinematics</span>
              
              
            </div>
          </div>   









            <div className="arvr-info-stats">
              <h2 className="arvr-head-ing">
                    Mentors
              </h2>
              {[
                { count: '40,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '8+', label: 'Industry Experts' }
              ].map((item, index) => (
                <div className="arvr-stat-card2" key={index}>
                  <div className="arvr-stat-icon">
                    <span>⚡</span>
                  </div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>



           



           <div className="arvr-drone-testimonial-box">
            <h2 className="arvr-robot-heading">Learning That<span className="arvr-highlight"> Works</span> - Proven by People</h2>
            
           
              <div className="arvr-drone-testimonial-person">
                <img src={require('../assets/robot-review.png')} alt="Ashish Singhal" />
                <div className="arvr-drone-testimonial-name">
                  Pratyush Singh <br />
                  <img src={roborreviewlogo}  className="arvr-arvr-review-img" />
                </div>
              </div>

              <div className="arvr-arvr-testimonial-quote">
                <p>
                  <em>
                    "Skipper’s Robotics Engineering Program was a game changer. The hands-on labs, real-world case studies, made complex topics feel approachable. I now feel confident designing and programming for various applications.
                    <br /><br />
                    I’d definitely recommend it to anyone serious about robotics."
                  </em>
                </p>
              </div>
            
            </div>




            <div className="arvr-built-section">
              <h2>This is <span className="highlight">built</span> for</h2>
              <div className="arvr-built-carousel">
                <div className="arvr-built-track">
                  {[
                    { tag: 'Manufacturing', title: 'Industrial robots', desc: 'Streamlining production and assembly lines.' },
                    { tag: 'Healthcare', title: 'Medical robotics', desc: 'Assisting surgeries and patient care.' },
                    { tag: 'Agriculture', title: 'Agri-robots  ', desc: 'Automating planting, harvesting, and monitoring crops.' },
                    { tag: 'Logistics  ', title: 'Autonomous robots ', desc: 'Optimizing storage and delivery operations.' },
                    { tag: 'Defense', title: 'Tactical robots  ', desc: 'Supporting surveillance and hazardous missions.' },
                    { tag: 'Electronics', title: 'Personal robots', desc: 'Enhancing everyday tasks and smart living.' },
                    { tag: 'Education', title: 'Learning platforms', desc: 'Teaching robotics concepts and innovation.' }
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
                <h2>Master Robot Engineering Program</h2>
                <ul className="drone-features-list">
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
                    <span className='top'>7000+ members has already completed this Program</span>
                  </div>
                </div>
                <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`drone-form-wrapper visible`}>
                <div className="drone-form">
                  <div
                    ref={cardRef}
                    className="drone-pricing-card"
                    style={{
                      position: isFixed ? "fixed" : "sticky",
                      top: isFixed ? `0px` : "0px",
                      zIndex: 10,
                    }}
                  >
                    <h3 className="drone-form-title">Master Robot Engineering Program</h3>
                    <GoogleSheetForm formName="RobotEngineering" />
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
              <div className="drone-pricing-card">
                <h2>Master Robot Engineering </h2>
                <ul className="drone-features-list">
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
                    <span className='top'>7000+ members has already completed this Program</span>
                  </div>
                </div>
                <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`drone-form-wrapper visible`}>
                <div className="drone-form">
                  <div className="drone-pricing-card">
                    <h3 className="drone-form-title">Master Robot Engineering </h3>
                    <GoogleSheetForm formName="RobotEngineering" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

       










        <div className="arvr-drone-offer-section">
          <h2 className="arvr-offer-heading" ref={offerRef}>Biggest Price Drop Yet</h2>
          
          <div className="arvr-offer-price-box">
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
          
          
          <div className="arvr-faq-list">
            {[
              {
                question: "Is technical support available if I have issues with the online platform?",
                answer: "Our dedicated support team is just a call or an email away. Reach out to us at 8792243559 / 8147081557 or support@skipperx.in from Monday to Saturday, 11 AM to 8 PM, for any assistance you need!"
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

export default RobotEngineering;