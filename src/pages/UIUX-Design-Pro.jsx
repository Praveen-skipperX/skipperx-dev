import { useEffect, useRef, useState } from "react";
import uiuxBrochurePdf from "../assets/brouchres/UI_UX_Design_Brochure.pdf";
import deliotte from '../assets/deloitte-logo.png';
import brochureImage from "../assets/drone-brochure.png";
import faqarrow from "../assets/faqarrow.png";
import hari from '../assets/harih.jpg';
import bulbIcon from '../assets/holding-bulb.png';
import certificateDisplay from "../assets/new-cer.jpg";
import sakshi from '../assets/roshan.png';
import sai from '../assets/sai.jpg';
import soumya from "../assets/soumya.png";
import suresh from "../assets/suresh.png";
import arvrskippertopmobile from "../assets/top3-skipperx-mobile.png";
import uiuxcard89 from '../assets/uiux-card-89.svg';
import uiuxcard91 from '../assets/uiux-card-91.svg';
import uiuxcard98 from '../assets/uiux-card-98.svg';
import uiuxEclipseBg from "../assets/uiux-eclipse-bg.png";
import uiuxeducationflat500 from '../assets/uiux-education-flat500.png';
import heroBg from '../assets/uiux-hero-bg.svg';
import harish from '../assets/vinod.jpg';
import vishal from "../assets/vishal.png";
import EmiOptionBanner from '../components/EmiOptionBanner';
import Footer from '../components/Footer';
import GoogleSheetForm from '../components/GoogleSheetForm';
import Navbar from '../components/Navbar';
import '../components/responsiveUtils.css';
import './UIUX-Design-Pro.css';

const modules = [
  {
    title: "Week 1: Foundations of UI/UX + Design Thinking",
    content: [
      "Difference between UI & UX",
      "What is UI?",
      "What is UX?",
      "Key differences between UI and UX",
      "Why UX matters in business",
      "Impact of good UX on business",
      "User satisfaction, retention & growth",
      "Real-world UX examples",
      "Introduction to Design Thinking",
      "The 5 Stages of Design Thinking",
      "Double Diamond Model",
      "User-centered design principles",
      "Usability, accessibility & usefulness",
      "UX process overview",
      "Research → Define → Ideate → Prototype → Test",
      "Problem-solving mindset",
      "Identifying the right problem",
      "Introduction to Figma interface & tools",
      "Figma dashboard, toolbar & panels",
      "Mini Project: Analyze and redesign a simple app screen"
    ]
  },

  {
    title: "Week 2: User Research + Personas + UX Strategy",
    content: [
      "Qualitative & Quantitative Research",
      "Difference between qualitative and quantitative research",
      "When and how to use each research method",
      "Planning effective user interviews",
      "Asking the right questions",
      "Competitor Analysis",
      "Identifying direct and indirect competitors",
      "Analyzing strengths, weaknesses & opportunities",
      "Empathy Mapping",
      "Understanding users' thoughts, feelings & behaviors",
      "Creating empathy maps",
      "User Personas",
      "Building realistic and actionable personas",
      "Using personas to guide design decisions",
      "Problem Statements",
      "Converting insights into meaningful problem statements",
      "Focusing on user needs, not solutions",
      "Identifying user pain points and frustrations",
      "Prioritizing problems based on impact",
      "Mini Project: Research a mobile app idea and create personas, problem statements & an insights report"
    ]
  },

  {
    title: "Week 3: User Journeys + Information Architecture",
    content: [
      "What is a User Journey Map?",
      "Key elements of a user journey",
      "Mapping user emotions & touchpoints",
      "User Flow Diagrams",
      "What is a user flow?",
      "Symbols and notation",
      "Benefits of user flows",
      "Task Flows",
      "Breaking down tasks into steps",
      "Creating effective task flows",
      "Real-world task flow examples",
      "Information Architecture (IA)",
      "Principles of good IA",
      "Organizing content for clarity",
      "Sitemap Creation",
      "Types of sitemaps",
      "How to create a sitemap",
      "Sitemap best practices",
      "Content Structuring",
      "Grouping and labeling content",
      "Prioritization and hierarchy",
      "Writing for scannability",
      "UX Planning for Apps & Websites",
      "Aligning IA with user goals",
      "From IA to wireframes",
      "Mini Project: Build a complete user flow and sitemap for a mobile app"
    ]
  },

  {
    title: "Week 4: Wireframing & Low-Fidelity Design",
    content: [
      "What are Low-Fidelity Wireframes?",
      "When and why to use low-fidelity wireframes",
      "Key elements of lo-fi wireframes",
      "What are Mid-Fidelity Wireframes?",
      "Balancing structure and detail",
      "Improving clarity and usability",
      "Layout Planning",
      "Understanding layout hierarchy",
      "Sectioning and spacing",
      "Planning content placement",
      "Grid Systems",
      "What are grid systems?",
      "Column, Modular & Hierarchical grids",
      "Using grids for consistent layouts",
      "Mobile & Web Wireframing",
      "Differences in mobile and web layouts",
      "Responsive thinking in wireframes",
      "Breakpoint planning basics",
      "Wireframe Best Practices",
      "Grouping and labeling content",
      "Prioritization and hierarchy",
      "Writing for scannability",
      "IA to Wireframe Conversion",
      "From information architecture to layouts",
      "Mapping structure to screens",
      "Maintaining consistency across flows",
      "Mini Project: Build a complete wireframe structure from a user flow and sitemap"
    ]
  },

  {
    title: "Week 5: Design Systems + Visual Design",
    content: [
      "Typography Systems",
      "Choosing the right fonts",
      "Type scale & hierarchy",
      "Line height, letter spacing & readability",
      "Color Theory",
      "Color fundamentals",
      "Color harmony & combinations",
      "Accessibility & contrast",
      "Spacing Systems",
      "4px and 8px grid systems",
      "Consistent spacing with scale",
      "Padding, margin & alignment",
      "Design Tokens",
      "What are design tokens?",
      "Colors, typography & spacing tokens",
      "Building a token structure",
      "Auto Layout",
      "Creating responsive components",
      "Nested Auto Layout",
      "Components & Variants",
      "Creating reusable components",
      "Component properties",
      "Variants for different states",
      "UI Kits",
      "Using and customizing UI kits",
      "Organizing UI libraries",
      "Buttons, Cards & Navigation Systems",
      "Navigation patterns: Bottom, Top & Side",
      "Default, Hover, Active & Disabled states",
      "Responsive Design Basics",
      "Breakpoints & device sizes",
      "Responsive layouts in Figma",
      "Fluid grids & flexible components",
      "Mini Project: Create a complete design system for a mobile app"
    ]
  },

  {
    title: "Week 6: High-Fidelity UI Design + Prototyping",
    content: [
      "High-Fidelity UI Design for Mobile & Web",
      "Translating wireframes into polished UI",
      "Visual consistency and UI refinement",
      "Interactive Prototypes",
      "Creating realistic interactions",
      "Connecting screens and user flows",
      "Prototype transitions",
      "Micro Interactions",
      "Designing meaningful micro-interactions",
      "Creating interactive UI states"
    ]
  },

  {
    title: "Week 7: Usability Testing + UX Analysis",
    content: [
      "Usability Heuristics",
      "UX Audits",
      "Evaluating usability problems",
      "Prototype Testing with Maze",
      "Planning usability tests",
      "Collecting user feedback",
      "Feedback Analysis",
      "Identifying usability issues",
      "Analyzing research findings",
      "Iteration based on user feedback"
    ]
  },

  {
    title: "Week 8: SaaS Product & Landing Page Design",
    content: [
      "SaaS Product Design",
      "Understanding SaaS product experiences",
      "Designing product interfaces",
      "Landing Page Structure",
      "Structuring effective landing pages",
      "Content hierarchy and sections",
      "Conversion-Focused UI",
      "Designing interfaces for conversions",
      "Creating clear calls-to-action",
      "Applying UX principles to landing pages"
    ]
  },

  {
    title: "Week 9: Advanced Prototyping & Animation",
    content: [
      "Smart Animate",
      "Advanced interactions",
      "Creating smooth UI transitions",
      "Jitter.video",
      "Animated UI components",
      "Motion design",
      "Lottie",
      "Exporting animations for apps and web",
      "Integrating animations with Figma",
      "Dribbble-style Motion Shots",
      "Creating polished motion presentations"
    ]
  },

  {
    title: "Week 10: Portfolio Case Studies + Branding",
    content: [
      "Behance Case Study Design",
      "Structuring compelling case studies",
      "Presenting the design process",
      "Dribbble Presentation",
      "Creating polished design presentations",
      "Personal Branding",
      "Building a professional design identity",
      "Resume preparation",
      "Presenting skills and experience professionally"
    ]
  },

  {
    title: "Week 11: Portfolio Project Sprint",
    content: [
      "End-to-End Product Design",
      "Taking a product from research to final UI",
      "UX Documentation",
      "Documenting the design process",
      "UI Polish",
      "Refining and improving final designs",
      "Mentor Reviews",
      "Getting professional feedback",
      "Design Strategy",
      "Improving the product and design approach"
    ]
  },

  {
    title: "Week 12: Final Portfolio + Career Preparation",
    content: [
      "Portfolio Finalization",
      "Final review and portfolio refinement",
      "Preparing portfolio-ready case studies",
      "Mock Interviews",
      "UI/UX interview preparation",
      "Presenting design decisions confidently",
      "Freelancing",
      "Understanding freelance opportunities",
      "Career Roadmap in UI/UX",
      "Planning the next steps in your design career"
    ]
  }
];

const UiuxDesignPro = () => {
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
      <div className="uiux-eclipse-wrapper">
      <img
        src={uiuxEclipseBg}
        alt=""
        className="uiux-eclipse-bg"
        aria-hidden="true"
      />
      <div className='arvr-dronebody'>
        <div className="uiux-hero-col">
        <div
          className="arvr-drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${heroBg})`,
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
            <h1 className="arvr--title">Design, Prototype & Launch Real Products with Our <span className="arvr-highlight">UI UX Design Pro </span></h1>
          </div>


          <p className="arvr-drone-description">
            Dive into UX research, UI design, and prototyping — build products that actually ship.
          </p>

          <div className="arvr-drone-cta-buttons">
            <button className="arvr-drone-outline-btn">Research it</button>
            <button className="arvr-drone-outline-btn">Design it</button>
            <button className="arvr-drone-outline-btn">Ship it</button>
          </div>

          <button className="arvr-drone-start-btn" onClick={scrollToForm}>Enroll Now</button>

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
        <div className="arvr1-stat-section">
          <div className="arvr1-stat-card">
            <h2>98<span>%</span></h2>
            <p>Completion rate <br />for our 1:1 Program.</p>
            <img src={uiuxcard98} className="arvr1-nineseven" />
          </div>
          <div className="arvr1-stat-card">
            <h2>91<span>%</span></h2>
            <p>Of participants reports<br /> high engagement</p>
            <img src={uiuxcard91} className="arvr1-nineone" />
          </div>
          <div className="arvr1-stat-card">
            <h2>89<span>%</span></h2>
            <p>Of participation stay <br />with their company.</p>
            <img src={uiuxcard89} className="arvr1-eight" />
          </div>
        </div>
        </div>
      </div>
      <div className="accredit">
        <div className="drone-accredit-section">
        </div>
        <section className="drone-info-section" ref={sectionRef} >
          <div className="drone-info-left">
            <div>
              <h2 className="arvr-info-heading">
                Advanced <span>Growth</span> Strategy
              </h2>

              <div className="arvr-learners-badge">
                <span className="arvr-learners-fire">🔥</span>
                <strong>8000+ learners</strong>
                <span>have benefited from this program</span>
              </div>

              <p className="arvr-info-para">
                SkipperX's UI/UX Design Pro Program helps you master user research,
                wireframing, high-fidelity UI design, and interactive prototyping.
              </p>

              <p className="arvr-info-para1">
                You'll gain practical skills in designing, testing, and shipping real
                products — preparing you for careers as a Product Designer, UX Designer,
                or Design Systems Specialist across startups and global product teams.
              </p>
            </div>
            <div className="arvr-skill-section" >
              <h3>Skills you will gain with this path</h3>
              <div className="arvr-skills-tags">
                <span>UX Research</span>
                <span>Wireframing</span>
                <span>Prototyping</span>
                <span>Design Systems</span>
                <span>Visual Design</span>
                <span>Interaction Design</span>
                <span>Usability Testing</span>
                <span>Information Architecture</span>
                <span>Design Tokens</span>
                <span>User Flow</span>
                <span>Figma</span>
                <span>AI UI UX Tools</span>
                <span>User Journey</span>
                <span>Claude Design</span>
              </div>
            </div>
            <div className="arvr-info-stats">
              <h2 className="arvr-head-ing">
                Mentors
              </h2>
              {[
                { count: '50,000+', label: 'Mentees trained' },
                { count: '12 Weeks', label: 'Duration' },
                { count: '10+', label: 'Industry Experts' }
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
                <img src={require('../assets/uiux-review1.png')} alt="Ashish Singhal" />
                <div className="arvr-drone-testimonial-name">
                Ashish Singhal <br />
                  <img src={deliotte} className="arvr-arvr-review-img" />
                </div>
              </div>

              <div className="arvr-arvr-testimonial-quote">
                <p>
                  <em>
                    "I was really impressed with Skipper’s UI/UX Design Program. The modules were well-organized, and the mentors were always available to guide us at every step. Learning user research, wireframing, prototyping, and creating intuitive digital experiences helped me understand the complete design process.
                    <br /><br />
                    This program is perfect if you want to build strong UI/UX skills and start a career in digital product design"
                  </em>
                </p>
              </div>
            </div>
            <div className="arvr-built-section">
              <h2>This is <span className="highlight">built </span> for</h2>
              <div className="arvr-built-carousel">
                <div className="arvr-built-track">
                  {[
                    {
                      tag: "Product",
                      title: "Product Design",
                      desc: "for shaping intuitive digital experiences from research to launch."
                    },
                    {
                      tag: "Research",
                      title: "UX Research",
                      desc: "for uncovering real user problems before you design a single screen."
                    },
                    {
                      tag: "Freelance",
                      title: "Freelance & Agency Work",
                      desc: "for designing real client briefs and shipping fast, on deadline."
                    },
                    {
                      tag: "Career",
                      title: "Career Switchers",
                      desc: "for professionals moving into design from any background, no portfolio required to start."
                    }
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
                  What will you
                  <span className="arvr-module-highlight"> learn?</span>
                </h2>

                <div className="arvr-module-line-right" />
              </div>

              <div className="arvr-module-list">
                {modules.map((module, index) => (
                  <div className="arvr-module-box" key={index}>

                    <div
                      className="arvr-module-toggle"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div>
                        <h4>MODULE {index + 1}</h4>
                        <p>{module.title}</p>
                      </div>

                      <span
                        className={`toggle-icon ${activeIndex === index ? "expanded" : ""
                          }`}
                      >
                        <img
                          src={faqarrow}
                          alt="toggle"
                          className="arvr-toggle-img"
                        />
                      </span>
                    </div>

                    {activeIndex === index && (
                      <div className="arvr-module-details">
                        <ul>
                          {module.content.map((point, i) => (
                            <p key={i}>
                              <span className="arvr-topic-number">
                                {i + 1}. &nbsp;
                              </span>
                              {point}
                            </p>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
            {/* <div className="arvr-review-carousel-section">
              <h2 className="arvr-drone-review-title">Reviews</h2>
              <div className="arvr-review-carousel-wrapper">
                <div className="arvr-review-carousel-track">
                  {[
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Parthiv Kumar",
                      role: "Cybersecurity",
                      review:
                        "I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on a minor project with a machine to identify vulnerabilities.",
                      avatar: sai,
                    },
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Harish",
                      role: "Blockchain",
                      review:
                        "The course provided deep insights and practical exposure. The module on real-world drone integration was especially eye-opening.",
                      avatar: harish,
                    },
                    {
                      heading: "BOE aP Monitor",
                      name: "Sakshi",
                      role: "AI Research",
                      review:
                        "Exceptional mentorship and hands-on sessions! I now understand drone dynamics and automation better.",
                      avatar: sakshi,
                    },
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Hari Krishna",
                      role: "IoT & Robotics",
                      review:
                        "Fantastic journey. Loved the combination of theory and lab work. My project now flies!",
                      avatar: hari,
                    },
                    {
                      heading: "BOE at EMP Monitor",
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
            </div> */}

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
                <h2>Master UI UX Design Pro Program</h2>
                <ul className="drone-features-list" >
                  <li><span className="tickmark">&#10004;</span>  Hands-on product design in Figma</li>
                  <li><span className="tickmark">&#10004;</span> NSDC-recognized certification</li>
                  <li><span className="tickmark">&#10004;</span> Industry-relevant tools & workflow</li>
                  <li><span className="tickmark">&#10004;</span> Mentor-led critiques</li>
                </ul>
                <div className="pricing-price-row">
                  <div className="price">Price</div>
                  <div className="drone-price-section">
                    <div className="drone-original-price">₹24,999</div>
                    <div className="drone-current-price">₹20,000</div>
                  </div>
                </div>
                <EmiOptionBanner />
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
                    <h3 className="drone-form-title">UI UX Design Pro
                      Program</h3>
                    <GoogleSheetForm formName="UI UX Design Pro" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Mobile version - static, after reviews */}
        <div className="mobile-only" ref={mobileFormRef} style={{ margin: '32px 0' }}>
          <div className="drone-info-right" style={{ position: 'static' }}>
            {!showForm ? (
              <div className="drone-pricing-card" >
                <h2>Master Augmented & Virtual Reality</h2>
                <ul className="drone-features-list" >
                  <li><span className="tickmark">&#10004;</span> Innovation for professional growth</li>
                  <li><span className="tickmark">&#10004;</span> Certification included</li>
                  <li><span className="tickmark">&#10004;</span> Industry relevant skills</li>
                  <li><span className="tickmark">&#10004;</span> Hands on learning</li>
                </ul>
                <div className="pricing-price-row">
                  <div className="price">Price</div>
                  <div className="drone-price-section">
                    <div className="drone-original-price">₹24,999</div>
                    <div className="drone-current-price">₹20,000</div>
                  </div>
                </div>
                <EmiOptionBanner />
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
        <div className="uiux-drone-offer-section">

  <h2 className="uiux-offer-heading" ref={offerRef}>
    Biggest Price Drop Yet
  </h2>

  <p className="uiux-offer-subtext">
    The Clock’s Ticking — Enroll for{" "}
    <span className="uiux-offer-old-price">₹24,999</span>{" "}
    <strong className="uiux-offer-new-price">₹23,000</strong>
  </p>

  <div className="uiux-offer-content">

    <div className="uiux-offer-main">

      <div className="uiux-offer-discount-row">
        <div className="uiux-offer-discount">
          <span>
            Grab an additional discount of up to ₹3000
          </span>

          <button
            type="button"
            className="uiux-check-offers-btn"
          >
            Check Offers
          </button>
        </div>

        <button
          type="button"
          className="uiux-offer-arrow"
        >
          ›
        </button>
      </div>

      <div className="uiux-offer-timer">
        {Object.entries(timer).map(([label, value], i) => (
          <div className="uiux-timer-unit" key={i}>
            <div className="uiux-digit-pair">
              {String(value)
                .padStart(2, "0")
                .split("")
                .map((digit, j) => (
                  <div className="uiux-timer-box" key={j}>
                    {digit}
                  </div>
                ))}
            </div>

            <p>{label}</p>
          </div>
        ))}
      </div>

      <button
        className="uiux-offer-btn"
        onClick={scrollToForm}
      >
        Apply Now
      </button>

    </div>

    <div className="uiux-offers-card">
  <h3>OFFERS</h3>

  <div className="uiux-offer-item">
    <img
      src={uiuxeducationflat500}
      alt="Education offer"
      className="uiux-education-offer-img"
    />
  </div>

  <div className="uiux-offer-item">
    <img
      src={uiuxeducationflat500}
      alt="Education offer"
      className="uiux-education-offer-img"
    />
  </div>
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
              <a
                className="arvr-download-brochure-btn"
                href={uiuxBrochurePdf}
                download="UI_UX_Design_Brochure.pdf"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        <div className="arvr-skippers-section">
          <div className="arvr-faq-header">
            <hr className="arvr-faq-leftt" />
            <h2><span className="arvr-dronehighlight">Skippers</span> of the Month</h2>
            <hr className="arvr-faq-rightt" />
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
            <hr className="arvr-faq-leftt" />
            <h2>Frequently Asked Question</h2>
            <hr className="arvr-faq-rightt" />
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
      </div>
      <Footer />
    </>
  );
};

export default UiuxDesignPro;