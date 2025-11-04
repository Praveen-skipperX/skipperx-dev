

import { useEffect, useRef, useState } from "react";
import eightseven from "../assets/88.png";
import nineseven from "../assets/91.png";
import nineeight from "../assets/97.png";
import hubroadmap from '../assets/creative.png';
import hubroadmapmobile from '../assets/creative-mobile.png';
import css from '../assets/css.png';
import brochureImage from "../assets/drone-brochure.png";
import faqarrow from "../assets/faqarrow.png";
import hari from '../assets/harih.jpg';
import harish from '../assets/vinod.jpg';
import bulbIcon from '../assets/holding-bulb.png';
import jup from '../assets/jup.png';
import mat from '../assets/mat.png';
import node from '../assets/node.png';
import num from '../assets/num.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import pan from '../assets/pan.png';
import sai from '../assets/sai.jpg';
import sakshi from '../assets/roshan.png';
import sea from '../assets/sea.png';
import sl from '../assets/sl.png';
import tf from '../assets/tf.png';
import up from '../assets/up.png';
import vs from '../assets/vs.png';
import Footer from '../components/Footer';
import GoogleSheetForm from '../components/GoogleSheetForm';
import Navbar from '../components/Navbar';
import '../components/responsiveUtils.css';
import "./CreatorsHub.css";

import p1l from '../assets/p1l.png';
import p2l from '../assets/velocity8.png';
import p3l from '../assets/p3l.png';
import p4l from '../assets/p4l.png';
import p5l from '../assets/p5l.png';
import p6l from '../assets/velocity8.png';
import p7l from '../assets/p7l.png';
import p8l from '../assets/p8l.png';
import p9l from '../assets/p9l.png';


const CreatorsHub = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const cardRef = useRef(null);
  const sectionRef = useRef(null); 
  const offerRef = useRef(null);
  const desktopFormRef = useRef(null);
  const mobileFormRef = useRef(null);//navigation

  const [isFixed, setIsFixed] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  //navigation
  const scrollToForm = () => {
    const isMobile = window.innerWidth <= 480;

    const targetRef = isMobile ? mobileFormRef : desktopFormRef;

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  
  const [showForm, setShowForm] = useState(false);

  const handlePricingClick = () => {
    setShowForm(true);
  };
   




  useEffect(() => {

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
    <div> 
        <div className="startup-circle">
    <section className="startup-section">
      <div className="startup-container">
        
        
        <div className="startup-label">
          <img src={bulbIcon} alt="Bulb Icon" className="startup-tag-icon" />
          Super Stack
        </div>

       
        <h1 className="startup-title">
          All You Need to Bring Your Ideas to Life with<br></br> <span className="highlightstack">Creators Hub  </span>
        </h1>

        
        <p className="startup-subtitle">
          5+ Creator Courses Packed to Help You Learn and Grow
        </p>

        
        <div className="startup-buttons">
          <button className="category-btn">Imagine</button>
          <button className="category-btn">Create</button>
          <button className="category-btn">Grow</button>
        </div>

        
        <button className="cta-btn" onClick={scrollToForm}>Start Learning</button>
      </div>
    </section>

       {/* Roadmap Section */}
        <section className="roadmap-section">
        <div className="roadmap-container">
        
            <img src={hubroadmap} alt="Bulb Icon" className="roadmap-image" />
        </div>
        <div className="roadmap-container-mobile">

            <img src={hubroadmapmobile} alt="Bulb Icon" className="roadmap-image" />          
        </div>
        </section>
        
      </div>

    </div> 
     
     {/*first circle Section */}
     
     
     
      <div className="startup-stat-section">
        <div className="startup-stat-card">
            <h2>97<span>%</span></h2>
            <p>Completion rate <br />for our 1:1 Program.</p>
            <img src={nineeight} className="startup-nineseven"/>
        </div>
        <div className="startup-stat-card">
            <h2>91<span>%</span></h2>
            <p>Of participants report<br /> high engagement</p>
            <img src={nineseven} className="startup-nineone"/>
        </div>
        <div className="startup-stat-card">
            <h2>88<span>%</span></h2>
            <p>Of participants stay <br />with their company.</p>
            <img src={eightseven} className="startup-eight"/>
        </div>
      </div>




<div className="startup-second-circle">


      <section className="startup-info-section" ref={sectionRef}>
          <div className="startup-info-left">



            <div>
            <h2 className="startup-info-heading">
              Overview
            </h2>

            <p className="startup-info-para">
              Build intelligent solutions with Artificial Intelligence and Machine Learning.
            </p> 
            <p className="startup-info-para">
                Bring your ideas to life through design and storytelling.
            </p> 
            <p className="startup-info-para">
                Master the tools and techniques to build brands, engage audiences, and create content that resonates.
            </p> 




            <h2 className="startup-info-heading-h3">
              What you’ll explore:
            </h2>
            <p className="startup-info-para-poins">
               • Craft intuitive user experiences with UI/UX Design.
            </p>
            <p className="startup-info-para-poins">
               • Design seamless digital products through UI/UX.
            </p>
            <p className="startup-info-para-poins">
               • Design visuals that capture attention through Graphic Design.
            </p>
            <p className="startup-info-para-poins">
               • Tell stories that connect through Content Creation and Photography.
            </p>
            
            
          </div>


         

           {/* Mentors Section */}
          <div className="startup-mentors-section">
            <h2>
              Meet your <span>Mentors</span>
            </h2>
            <div className="startup-mentors-grid">
              <div className="startup-mentor-card">
                <img src={p1} alt="Harsh" />
                <div className="startup-mentor-info">
                  <h4>Harsh</h4>
                  <p>Stock Market</p>
                  <img src={p1l}  />
                </div>
              </div>


              <div className="startup-mentor-card">
                <img src={p5}alt="Heena" />
                <div className="startup-mentor-info">
                  <h4>Heena Suresh</h4>
                  <p>Human Resource</p>
                  <img src={p5l}  />
                </div>
              </div>

              

              <div className="startup-mentor-card">
                <img src={p3} alt="Anuj" />
                <div className="startup-mentor-info">
                  <h4>Anuj</h4>
                  <p>Data Science</p>
                  <img src={p3l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p4} alt="Pratyush" />
                <div className="startup-mentor-info">
                  <h4>Pratyush Singh</h4>
                  <p>Finance</p>
                  <img src={p4l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p2} alt="Remya" />
                <div className="startup-mentor-info">
                  <h4>Remya </h4>
                  <p>Psychology Mentor</p>
                  <img src={p2l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p6} alt="Zaheen" />
                <div className="startup-mentor-info">
                  <h4>Zaheen Haider Naqvi</h4>
                  <p>Digital Marketing</p>
                  <img src={p6l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p7} alt="Jayasurya" />
                <div className="startup-mentor-info">
                  <h4>Jayasurya Velusa</h4>
                  <p>Developer</p>
                  <img src={p7l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p8} alt="Debashish" />
                <div className="startup-mentor-info">
                  <h4>Debashish Senapati</h4>
                  <p>Human Resource</p>
                  <img src={p8l}  />
                </div>
              </div>

              <div className="startup-mentor-card">
                <img src={p9} alt="Neha" />
                <div className="startup-mentor-info">
                  <h4>Neha Sawal</h4>
                  <p>Legal Writer & Editor</p>
                  <img src={p9l}  />
                </div>
              </div>
            </div>
          </div>


         





     </div>




          {/* Desktop version - sticky */}
          <div className="startup-info-right desktop-only" ref={desktopFormRef}>
            {!showForm ? (
              <div
                ref={cardRef}
                className="startup-pricing-card"
                style={{
                  position: isFixed ? "fixed" : "sticky",
                  top: isFixed ? `0px` : "0px",
                  zIndex: 10,
                }}
              >
                <h2>Master Creators Hub Program</h2>
                <ul className="startup-features-list">
                  <li><span className="startup-tickmark">&#10004;</span> Innovation for professional growth</li>
                  <li><span className="startup-tickmark">&#10004;</span> Certification included</li>
                  <li><span className="startup-tickmark">&#10004;</span> Industry relevant skills</li>
                  <li><span className="startup-tickmark">&#10004;</span> Hands on learning</li>
                </ul>
                <div className="startup-price">Price</div>
                <div className="startup-price-section">
                  {/*<div className="startup-original-price">₹24,999</div>*/}
                  <div className="startup-current-price">₹9,000</div>
                </div>
                <div className="startup-trust-footer-drone">
                  <div className="startup-avatarsdrone">
                    <img src={harish} alt="avatar" />
                    <img src={hari} alt="avatar" />
                    <img src={sakshi} alt="avatar" />
                    <img src={sai} alt="avatar" />
                    <span className='startup-top'>7000+ members has already completed this Program</span>
                  </div>
                </div>
                <button className="startup-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`startup-form-wrapper visible`}>
                <div className="startup-form">
                  <div
                    ref={cardRef}
                    className="startup-pricing-card"
                    style={{
                      position: isFixed ? "fixed" : "sticky",
                      top: isFixed ? `0px` : "0px",
                      zIndex: 10,
                    }}
                  >
                    <h3 className="startup-form-title">Master Creators Hub Program</h3>
                    <GoogleSheetForm formName="CreatorsHub" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
 {/* Mobile version - static, after reviews */}
        <div className="mobile-only" ref={mobileFormRef} style={{margin: '32px 0'}}>
          <div className="startup-info-right" style={{position: 'static'}}>
            {!showForm ? (
              <div className="startup-pricing-card">
                <h2>Master Creators Hub Program</h2>
                <ul className="startup-features-list">
                  <li><span className="startup-tickmark">&#10004;</span> Innovation for professional growth</li>
                  <li><span className="startup-tickmark">&#10004;</span> Certification included</li>
                  <li><span className="startup-tickmark">&#10004;</span> Industry relevant skills</li>
                  <li><span className="startup-tickmark">&#10004;</span> Hands on learning</li>
                </ul>
                <div className="startup-price">Price</div>
                <div className="startup-price-section">
                  {/*<div className="startup-original-price">₹24,999</div>*/}
                  <div className="startup-current-price">₹9,000</div>
                </div>
                <div className="startup-trust-footer-drone">
                  <div className="startup-avatarsdrone">
                    <img src={harish} alt="avatar" />
                    <img src={hari} alt="avatar" />
                    <img src={sakshi} alt="avatar" />
                    <img src={sai} alt="avatar" />
                    <span className='startup-top'>7000+ members has already completed this Program</span>
                  </div>
                </div>
                <button className="startup-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
              </div>
            ) : (
              <div className={`startup-form-wrapper visible`}>
                <div className="startup-form">
                  <div className="startup-pricing-card">
                    <h3 className="startup-form-title">Master Creators Hub Program</h3>
                    <GoogleSheetForm formName="CreatorsHub" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

     </div>



<div className="gradient-conti">
     <div className="startup-tools-section">
        <h2>
            <span className="startup-highlight">Tools </span> You’ll Master to Launch and Grow Your Business
        </h2>
        <p className="startup-tools-subtext" ref={offerRef} >
            Master real-world Business essentials.
        </p>

        <div className="startup-tools-grid">
            <div className="startup-tool-card"><img src={css}  /></div>
            <div className="startup-tool-card"><img src={tf} /></div>
            <div className="startup-tool-card"><img src={mat}  /></div>
            <div className="startup-tool-card"><img src={vs} /></div>
            <div className="startup-tool-card"><img src={node}  /></div>
            <div className="startup-tool-card"><img src={up} /></div>
            <div className="startup-tool-card"><img src={sl}  /></div>
            <div className="startup-tool-card"><img src={pan} /></div>
            <div className="startup-tool-card"><img src={sea}  /></div>
            <div className="startup-tool-card"><img src={num} /></div>
            <div className="startup-tool-card"><img src={jup}  /></div>
            <div className="startup-tool-card"><img src={num} /></div>
        </div>
        </div>




        
        <section class="startup-walk-away">
          <h2>
            Here’s What You’ll Walk <span>Away</span> With
          </h2>

          <div class="startup-walk-away-cards">
            <div class="startup-walk-card">
              <div class="startup-icon">⚡</div>
              <p>Build real project in  <b>branding, design, and content creation </b></p>
            </div>

            <div class="startup-walk-card">
              <div class="startup-icon">⚡</div>
              <p>Learn top tools like   <b>Adobe Suite, Figma, and social media platforms</b></p>
            </div>

            <div class="startup-walk-card">
              <div class="startup-icon">⚡</div>
              <p>Explore   <b>visual storytelling, photography, and digital marketing strategies</b></p>
            </div>

            <div class="startup-walk-card">
              <div class="startup-icon">⚡</div>
              <p>Train for creative careers with   <b>portfolio-ready work and mentor guidance </b></p>
            </div>
          </div>
        </section>









      <div className="startup-brochure">
        <div
          className="startup-brochure-banner"
          style={{ backgroundImage: `url(${brochureImage})` }}
        >
          <div className="startup-brochure-overlay">
            <h3>
              Want the Deep Dive? Grab the <span>Brochure</span>
            </h3>
            <p>
              From what you’ll learn to where it can take you — it’s all inside.
            </p>
            <button className="startup-download-brochure-btn">Download Brochure</button>
          </div>
        </div>
       </div>





             <div className="startup-faq-section">
                <div className="startup-faq-header">
                  <hr className="startup-faq-leftt"/>
                  <h2>Frequently Asked Question</h2>
                  <hr className="startup-faq-rightt"/>
                </div>
               
                
                <div className="startup-faq-list">
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
                    <div className="startup-faq-card" key={index}>
                      <div className="startup-faq-question" onClick={() => toggleAccordion(index + 100)}>
                        <h4>{item.question}</h4>
                        <span className={`accordion-icon ${activeIndex === index + 100 ? 'open' : ''}`}><img src={faqarrow} alt="dropdown" className="startup-faqarrow" /></span>
                      </div>
                      {activeIndex === index + 100 && (
                        <div className="startup-faq-answer">
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

export default CreatorsHub;
