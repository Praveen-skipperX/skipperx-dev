import { useEffect, useRef, useState } from "react";
import eigth from "../assets/88.png";
import nineone from "../assets/91.png";
import nineseven from "../assets/97.png";
import certificateDisplay from "../assets/new-cer.jpg";
import droneBg from "../assets/drone-bg-image.png";
import brochureImage from "../assets/drone-brochure.png";
import bgImage from '../assets/dronebg.png';
import faqarrow from "../assets/faqarrow.png";
import hari from '../assets/harih.jpg';
import harish from '../assets/vinod.jpg';
import bulbIcon from '../assets/holding-bulb.png';
import sai from '../assets/sai.jpg';
import sakshi from '../assets/roshan.png';
import soumya from "../assets/soumya.png";
import suresh from "../assets/suresh.png";
import vishal from "../assets/vishal.png";
import Footer from '../components/Footer';
import GoogleSheetForm from '../components/GoogleSheetForm';
import Navbar from '../components/Navbar';
import '../components/responsiveUtils.css';
import './DroneEngineering.css';
import arvrskippertopmobile from "../assets/top3-skipperx-mobile.png";
import dronepartsmobile from "../assets/drone-parts-mobile.png";






const modules = [
  { title: " Week 1: Paper Planes and Aerodynamics", content: [
      "1. Begin with Paper Planes",
      "2. IconHistory and Evolution of Paper Planes.",
      "3. Basic Principles of Flight",
      "4. Basic components of a robot (sensors, actuators, controllers)",
      "5. IconExplain How It Can Fly Better.",
      "6. Importance of Weight Distribution.",
      "7. Testing, Observation, and Iterative Improvements."
    ]  },



  { title: " Week 2: Introduction to Drones", content: [
      "1. IconBasic Principles of Drone IconSafety Measures and Regulations for Drone .",
      "2. Key Technological Advancements in Drone Development.",
      "3. Transition to Commercial and Recreational Use.",
      "4. Types of Drones.",
      "5. Applications and Future Applications of Drones.",
      "6. Forces and Controls in Drones.",
      "7. Generation of Lift by Drone Rotors.",
      "8. BPitch and Roll: Control of Directional Movement."
    ]  },



  { title: "Week 3: Bluetooth Communication & Sensor Basics", content: [
      "1. Building the Drone - Pluto.",
      "2. Assembly of Motors, Propellers, and Frame.",
      "3. Connecting Flight Controller, Battery, and Receiver, IconSoftware Installation, Calibration, and Firmware Updates.",
      "4. Pre-Flight Checklist and Calibration.",
      "5. Basic Flight Maneuvers: Takeoff, Hovering, and Landing.",
      "6. Components and Functions of the Flight Control System.",
      "7. Communication System: Remote Controller, Receiver, and Telemetry."
    ]  },

  { title: "Week 4: Introduction to Sensors", content: [
      "1. Importance of Sensors for Stability and Control.",
      "2. Obstacle Detection and Avoidance Using Various Sensors.",
      "3. Understanding Working Principles of Sensors.",
      "4. Accelerometer and Gyro Sensor.",
      "5. Understanding the Gyro Sensor."
    ]  },


      { title: "Week 5: Magnetometer and Barometer", content: [
      "1. Definition and Purpose of Understanding the Working of Magnetometer.",
      "2. Working and Its Applications.",
      "3. Practical Experiments.",
      "4. Compass Drone Experiment."
    ]  },

      { title: "Week 6: Working with Propellers", content: [
      "1. Understanding the Basics of Propellers.",
      "2. Configuration of Propellers on Drones.",
      "3. Configuration of Propellers on Drones.",
      "4. Batteries.",
      "5. Types and Importance of Batteries in Drones.",
      "6. Homopolar Motor Experiment.",
      "7. Types and Importance of Batteries in Drones."
    ]  },   
    
      { title: "Week 7: Understanding the Framework", content: [
      "1. Framework Using Block Diagram.",
      "2. Understanding Framework Using Block Diagram.",
      "3. Understanding Block Programming.",
      "4. Applications of Block Programming.",
      "5. Beginner’s Level Projects on Pluto Blocks."
    ]  },  
    
      { title: "Week 8: Project Week", content: [
      "1. Measuring Height and Color Wheel Applications.",
      "2. Program the Drone to Display the Current Altitude.",
      "3. Transform Your Pluto Drone into a Color Wheel to Visually Blend Primary Colors into Secondary Colors.",
      "4. Replace the Spinning Bottle with a Spinning Drone Programmed to Randomly Turn to Different Yaw Angles.",
      "5. Use the Drone's Sensors and LEDs to Create a Customizable Spirit Level.",
      "6. Alarm Drone with Pluto Blocks.",
      "7. Program Your Pluto Drone with Pluto Blocks as an Alarm Using the Pluto Controller App."
    ]  }   

  ];

const DroneEngineering = () => {
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
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

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



      
      <div className='arvr1-dronebody'>
        <div
          className="arvr1-drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="arvr1-drone-tag">
            <img src={bulbIcon} alt="Bulb Icon" className="arvr1-drone-tag-icon" />
            For Innovators
          </div>

          <div className="arvr1-arvr-title1">
            <h1 className="arvr1-title">Design, Build & Launch Your Own Drones with Our{' '}
            <span className="arvr1-highlight">Drone Engineering Program.</span></h1>
          </div>

          <p className="arvr1-drone-description">
            Dive into aerodynamics, hardware, and flight systems—build drones that actually fly.
          </p>

          <div className="arvr1-drone-cta-buttons">
            <button className="arvr1-drone-outline-btn">Build it</button>
            <button className="arvr1-drone-outline-btn">Fly it</button>
            <button className="arvr1-drone-outline-btn">Own it</button>
          </div>

          <button className="arvr1-drone-start-btn" onClick={scrollToForm}>Start Learning</button>

          <div className="arvr1-drone-scroll-wrapper1">
            <div className="arvr1-drone-scroll-track1">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="arvr1-drone-scroll-content1">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="arvr1-drone-scroll-item1">
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
              <h2>97<span>%</span></h2>
              <p>Completion rate <br />for our 1:1 Program.</p>
              <img src={nineseven} className="arvr1-nineseven"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>91<span>%</span></h2>
              <p>Of participants report<br /> high engagement</p>
              <img src={nineone} className="arvr1-nineone"/>
            </div>
            <div className="arvr1-stat-card">
              <h2>88<span>%</span></h2>
              <p>Of participants stay <br />with their company.</p>
              <img src={eigth} className="arvr1-eight"/>
            </div>
          </div>







        <section className="drone-info-section" ref={sectionRef}>
          <div className="drone-info-left">



            <div>
            <h2 className="arvr-info-heading">
              Advanced <span>Growth</span> Strategy
            </h2>

            <p className="arvr-info-para">
              Skipperx Drone Engineering Program helps you to master drone design, electronics, aerodynamics,
              and real-time flight control.
            </p>
            <p className="arvr-info-para1">
              You’ll gain practical skills in assembling and launching drones
              preparing you for careers in aerospace, defense, & innovation-driven industries.
            </p>
          </div>

           

           <div className="arvr-skill-section">
            <h3>Skills you will gain with this path</h3>
            <div className="arvr-skills-tags">
              <span>Drone Design</span>
              <span>Aerodynamics</span>
              <span>Aviation</span>
              
              <span>Soldering</span>
              <span>Electronics Integration</span>
              <span>Battery Management</span>
              <span>FPV Systems</span>
              <span>Flight Control</span>
              <span>Embedded Programming</span>
              <span>GPS Navigation</span>
              <span>Microcontroller Configuration</span>
              
              <span>Sensor Calibration</span>
              <span>PID Tuning</span>
              
              
            </div>
          </div>   









            <div className="arvr-info-stats">
              <h2 className="arvr-head-ing">
                    Mentors
              </h2>
              {[
                { count: '50,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '10+', label: 'Industry Experts' }
              ].map((item, index) => (
                <div className="arvr-stat-card1" key={index}>
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
                <img src={require('../assets/droneashish.png')} alt="Ashish Singhal" />
                <div className="arvr-drone-testimonial-name">
                  Ashish Singhal <br />
                  <strong>Deloitte.</strong>
                </div>
              </div>

              <div className="arvr-arvr-testimonial-quote">
                <p>
                  <em>
                    "The Drone Engineering Program at Skipper exceeded my expectations. It offered a strong balance of theory and practical work. I especially enjoyed assembling my own drone and testing its flight capabilities.
                    <br /><br />
                    This experience has equipped me with valuable skills I can apply in multiple industries."
                  </em>
                </p>
              </div>
            </div>
            




            <div className="arvr-built-section">
              <h2>This is <span className="highlight">built</span> for</h2>
              <div className="arvr-built-carousel">
                <div className="arvr-built-track">
                  {[
                    { tag: 'Aviation', title: 'Aerospace Engineering', desc: 'for designing and testing aerial systems.' },
                    { tag: 'Security', title: 'Defense & Surveillance', desc: 'for drone-based reconnaissance and security operations.' },
                    { tag: 'Relief', title: 'Disaster Management', desc: 'Supporting rescue missions and supply delivery.' },
                    { tag: 'Media', title: 'Filmmaking & Handling  ', desc: 'capturing cinematic shots and live coverage, on air.' },
                    { tag: 'Agriculture', title: 'AgroTech', desc: 'using drones for crop monitoring and precision farming.' },
                    { tag: 'Logistics', title: ' Parcel  Delivery', desc: 'enabling last-mile drone-based delivery systems.' },
                    { tag: ' Conservation', title: 'Environmental Research', desc: 'Tracking wildlife,terrains and monitoring climate impact.' }
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
                <h2>Master Drone Engineering Program</h2>
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
                    <h3 className="drone-form-title">Master Drone Engineering Program</h3>
                    <GoogleSheetForm formName="DroneEngineering" />
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
                <h2>Master Drone Engineering </h2>
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
                    <span className='top'>7000+ members have already completed this Program</span>
                  </div>
                </div>
                <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`drone-form-wrapper visible`}>
                <div className="drone-form">
                  <div className="drone-pricing-card">
                    <h3 className="drone-form-title">Master Drone Engineering</h3>
                    <GoogleSheetForm formName="DroneEngineering" />
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










  <div>
    <div className="drone-parts">
      <div className="drone-parts-section"
      style={{ backgroundImage: `url(${droneBg})` }}
    >
      <div className="drone-content">
        <h2 className="section-title">
          Ready to Flex? Crack Open <br /> Your <span>Drone Kit</span>
        </h2>

        <div className="label label-1">
          <strong className="d1">1. Frame</strong><br />
          <span className="d1p">A quadcopter uses two clockwise (CW) and two counterclockwise (CCW) propellers.</span>
        </div>

        <div className="label label-2">
          <strong className="d1">2. Motor</strong><br />
          <span className="d1p">These are the powerhouses that give your quad the thrust to reach the intense speeds modern drones are reaching.</span>
        </div>

        <div className="label label-3">
          <strong className="d1">3. Battery</strong><br />
         <span className="d1p"> Li-po battery is a type of rechargeable battery that is commonly used throughout the RC hobby.</span>
        </div>

        <div className="label label-4">
          <strong className="d1">4. Propellers</strong><br />
          <span className="d1p">A quadcopter uses two clockwise (CW) and two counterclockwise (CCW) propellers.</span>
        </div>

        <div className="label label-5">
          <strong className="d1">5. Motor</strong><br />
          <span className="d1p">These are the powerhouses that give your quad the thrust to reach the intense speeds modern drones are reaching.</span>
        </div>

        
        <a
          className="whatsapp-button"
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on WhatsApp
        </a>
      </div>
      
    </div>
   </div>

    <div className="arvr-drone-mobile-parts">
        <div>
          <a 
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer">
             <img src={dronepartsmobile} alt="Soumya Verma" className="arvr-drone-parts-mobile" /></a>
        </div>
    </div>
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

export default DroneEngineering;