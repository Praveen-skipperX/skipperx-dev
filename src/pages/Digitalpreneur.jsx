// src/pages/ProductManagement.js

import React, {useRef, useState } from 'react';
import ChallengeBased from '../assets/cre1.png';
import CreatorLed from '../assets/cre2.png';
import BuildCreate from '../assets/cre3.png';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import './ProductManagement.css'; // Import the updated CSS file

import ChallengeBasedMob from '../assets/doers-1.png';
import CreatorLedMob from '../assets/doers-2.png';
import BuildCreateMob from '../assets/doers-3.png';


import newDifferentImage from '../assets/different-us.png';
import mobileImpactImage from '../assets/mentor-mobile.png';



import brochureImage from "../assets/doers-brochure.png";
import certificateDisplay from "../assets/new-cer.jpg";

// ⚠️ IMPORTANT: Image Imports for NEW How We're Different Section
// Replace these with your actual image paths
import aiWorkflowsImage from '../assets/ai-workflows.png';
import vibeCodingImage from '../assets/founder-notes.png';
import mockInterviewsImage from '../assets/mock-interviews.png';
import founderNotesImage from '../assets/vibe-coding.png';

import engagementBgform from '../assets/creatorform.png';
import engagementBg from '../assets/unique-engagement-bg.jpeg';

import credLogo from '../assets/cred.png'; // Replace with your actual path

import nykaaLogo from '../assets/nykaa.png';
import swiggyLogo from '../assets/swiggy.png';



// 🚨 IMPORTANT: Add these new image imports for testimonials
import anantShaImg from '../assets/anant_sha.jpeg'; // Replace with actual path
import piyushNamdevImg from '../assets/piyush_namdev.jpeg'; // Replace with actual path
import { default as riyaSharmaImg, default as soheliSharmaImg } from '../assets/riya_sharma.jpeg'; // Replace with actual path
import shantanuSinghImg from '../assets/shantanu_singh.jpeg'; // Replace with actual path

// 🆕 NEW: Imports for the Impact Dashboard Section
import brandCafoco from '../assets/cafoco.png'; // Replace with actual path to Cafoco logo
import brandFibr from '../assets/fibr.png'; // Replace with actual path to Fibr logo
import brandFortis from '../assets/fortis.png'; // Replace with actual path to Fortis logo
import brandPlaceholder from '../assets/placeholder-brand.png';
import mentorPreranaSaha from '../assets/prerana-saha.png'; // Replace with actual path to Prerana Saha's image
import brandTcAcademy from '../assets/tc-academy.png'; // Replace with actual path to TC Academy logo

import ordiamond from '../assets/or-diamond.png'; // Replace with actual path
import GoogleSheetRegisterForm from '../components/GoogleSheetRegisterForm.jsx';


const impactStats = [
  {
    id: 1,
    percentage: '87%',
    description: 'Our learners launched their first paid project within <span class="cp-highlight-text">30 days.</span>',
  },
  {
    id: 2,
    percentage: '95%',
    description: 'Rated mentor feedback sessions as <span class="cp-highlight-text">career-changing.</span>',
  },
  {
    id: 3,
    percentage: '60%',
    description: 'Graduates started a <span class="cp-highlight-text">creator community or side hustle.</span>',
  },
  {
    id: 4,
    percentage: '400+',
    description: 'Real brand campaigns created through <span class="cp-highlight-text">weekly challenges.</span>',
  },
  {
    id: 5,
    percentage: '230%',
    description: 'Average <span class="cp-highlight-text">engagement rise</span> after Week 4 content sprint.',
  },
];

const mentorDetails = {
  name: 'PRERANA SAHA',
  role: 'Ex-founder and psychology-marketing strategist',
  image: mentorPreranaSaha,
    workedWithBrands: [
        { src: brandPlaceholder, alt: "Placeholder Brand 1" }, // You might have a specific one for the egg-like logo
        { src: brandFortis, alt: "Fortis" },
        { src: brandCafoco, alt: "Cafoco" },
        { src: brandTcAcademy, alt: "TC Academy" },
        { src: brandFibr, alt: "Fibr" },
    ],
    expertiseAreas: [
    // Line 1: Centered block, ending with | before the break
        'Behaviour-Driven Marketing Mentor | Built <b>4 businesses</b> | Now leading <b>research at a unicorn</b> and helping',
        // Line 2: Centered block, continuing the thought
        'marketers blend <b>behaviour</b> | Storytelling & <b>strategy</b> for people-first growth',
    ],
  };

  

const testimonialsData = [
    {
        id: 1,
        name: "Riya Sharma",
        quote: "\"The Swiggy Challenge Week Pushed Me Out Of My Comfort Zone — I Actually Pitched My Idea To A Real Brand!\"",
        image: riyaSharmaImg,
    },
    {
        id: 2,
        name: "Anant Sha",
        quote: "\"Honestly, I Wasn't Sure I Could Do It, But The Brand Sprint Made Me Rethink My Approach.\"",
        image: anantShaImg,
    },
    {
        id: 3,
        name: "Piyush Namdev",
        quote: "\"I Joined Knowing Nothing About Social Campaigns, And Now I'm Running One For My Own Brand.\"",
        image: piyushNamdevImg,
    },
    {
        id: 4,
        name: "Shantanu Singh",
        quote: "\"The Challenge Weeks Made Me Plan Like A Marketer — Not Just Post For Likes\"",
        image: shantanuSinghImg,
    },
    {
        id: 5,
        name: "Soheli Sharma",
        quote: "\"Real, Honest Feedback From People Who've Built Things — That's Rare!\"",
        image: soheliSharmaImg,
    },
    // Add more testimonials if needed
];


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
        answer: "No prior experience in Digitalpreneur is required. We welcome individuals from diverse backgrounds eager to learn and grow.",
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

const methodologies = [
  {
    id: 1,
    title: "Challenge-Based Learning",
    description: "Real projects, brand sprints & weekly creative missions.",
    image: ChallengeBased,
    mobileImage: ChallengeBasedMob, // mobile
    alt: "Founders",
    bgColor: "#313131"
  },
  {
    id: 2,
    title: "Creator-Led Approach",
    description: "Fuelled by the stories that built India’s creator revolution.",
    image: CreatorLed,
    mobileImage: CreatorLedMob,
    alt: "Swiggy Team",
    bgColor: "#424b48"
  },
  {
    id: 3,
    title: "Build. Create. Grow.",
    description: "Experience Brand thinking inspired by CRED, and other modern disruptors.",
    image: BuildCreate,
    mobileImage: BuildCreateMob,
    alt: "Spotify Screens",
    bgColor: "#3e4d41"
  }
];









// 🆕 NEW: Data structure matching the image provided
const curriculumData = [
    {
        track: "TRACK 1 — FOUNDATIONS",
        modules: [
            {
                id: 1,
                title: "1. WHAT HUMAN PROBLEM ARE WE SOLVING? WHY IT EXISTS",
                focus: "Clarity on a product's 'why' and the mindset of a problem-solver.",
                sessions: 2,
            },
            {
                id: 2,
                title: "2. WHO YOU'RE HERE FOR",
                focus: "Strong customer understanding and a clear target audience.",
                sessions: 2,
            },
            {
                id: 3,
                title: "3. WHY YOU'RE THE ONE",
                focus: "A sharp, differentiated brand position.",
                sessions: 2,
            },
            {
                id: 4,
                title: "4. HOW YOU SHOW UP",
                focus: "A complete multi-channel marketing strategy.",
                sessions: 6,
            },
            {
                id: 5,
                title: "5. WHAT IMPACT YOU'RE CREATING",
                focus: "Data literacy and confidence to measure real impact.",
                sessions: 3,
            },
            {
                id: 6,
                title: "6. WHAT YOU SAY",
                focus: "Clear brand voice & structured content thinking.",
                sessions: 3,
            },
            {
                id: 7,
                title: "7. HOW IT CHANGES",
                focus: "Adaptability across any marketing environment.",
                sessions: 2,
            },
            {
                id: 8,
                title: "8. BECOMING THE MARKETER YOU'RE MEANT TO BE",
                focus: "A clear identity, confidence, and your own marketing lens.",
                sessions: 2,
            },
        ]
    },
    {
        track: "TRACK 2 — LAUNCHPAD",
        modules: [
            {
                id: 9,
                title: "1. FIND YOUR PLACE IN MARKETING",
                focus: "Clarity on your ideal marketing path.",
                sessions: 1,
            },
            {
                id: 10,
                title: "2. BUILDING PROOF OF WORK",
                focus: "A portfolio of real, demonstrable skills.",
                sessions: 1,
            },
            {
                id: 11,
                title: "3. RESUME, PORTFOLIO & LINKEDIN",
                focus: "A polished professional brand.",
                sessions: 1,
            },
            {
                id: 12,
                title: "4. NETWORKING — ONLINE & OFFLINE",
                focus: "A system to build opportunities through relationships.",
                sessions: 1,
            },
        ]
    }
];











const differentHighlights = [
    {
        id: 1,
        mainTitle: "Marketing Mindset",
        category: "The spark",
        description: "Build a strong foundation in how real marketing works—not just theory.",
        image: founderNotesImage,
        alt: "Founder Notes Instructor",
        className: "card-style-black",
    },
    {
        id: 2,
        mainTitle: "Skill Launchpad",
        category: "Learn → Apply",
        description: "Turn knowledge into confidence with hands-on projects and career-focused exercises.",
        image: aiWorkflowsImage,
        alt: "AI Workflows Instructor",
        className: "card-style-white",
    },
    {
        id: 3,
        mainTitle: "Live Learning",
        category: "Sundays & Wednesdays",
        description: "Join interactive sessions to learn, practice, and discuss with mentors in real time.",
        image: vibeCodingImage,
        alt: "Vibe Coding Instructor",
        className: "card-style-white",
    },
    {
        id: 4,
        mainTitle: "Mentorship Path",
        category: "Earn & Grow",
        description: "Gain points through participation and unlock personalised 1:1 mentor guidance.",
        image: mockInterviewsImage,
        alt: "Mock Interviews Instructor",
        className: "card-style-black",
    },
];








const engagementElements = [
  {
    id: 1,
    title: "Challenge Weeks",
    description: "Compete On Weekly Creative Missions Themed Around Major Indian Festival Or Social Trend.",
  },
  {
    id: 2,
    title: "Brand Takeovers",
    description: "Simulate A One-Day Content Calendar For A Trending Indian Startup Or D2C Brand.",
  },
  {
    id: 3,
    title: "Mentorship Circles",
    description: "Connect With Real Creators, Marketers, and Startup Founders As Guest Reviewers.",
  },
];

const CreatorPreneur = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const desktopFormRef = useRef(null);
    const mobileFormRef = useRef(null);//navigation
    

    const [openModules, setOpenModules] = useState([]); // Initialize with module 8 (Becoming the Marketer) and 12 (Networking) open, as suggested by the image's structure.

    const toggleModule = (id) => {
        setOpenModules(prevOpenModules => 
            prevOpenModules.includes(id) 
                ? prevOpenModules.filter(moduleId => moduleId !== id) 
                : [...prevOpenModules, id]
        );
    };

    //navigation
  const scrollToForm = () => {
    const isMobile = window.innerWidth <= 480;

    const targetRef = isMobile ? mobileFormRef : desktopFormRef;

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };




    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    

    return (
        <div className="doers-page-wrapper"> 
            <Navbar />
            
            <div className="doers-hero-container">
                <div className="doers-hero-content">
                    <h1 className="doers-hero-title">
                        Old Lessons Don’t Build New-Age Creators - <span className="doers-highlight">Welcome to Digitalpreneur</span> 
                    </h1>
                    <p className="doers-hero-subtitle">
                        Where you don’t study marketing, you live it through challenges, brand sprints, and creator-led growth.
                    </p>
                    <button className="doers-hero-button" onClick={scrollToForm}>Start Learning</button>
                </div>
            </div>














            <section className="doers-methodology-section">
                <div className="doers-methodology-cards-container">
                    {methodologies.map((method) => (
                        <div 
                            key={method.id} 
                            className="doers-methodology-card"
                            style={{ backgroundColor: method.bgColor }} 
                        >
                            <div className="doers-card-text-content">
                                <h3 className="doers-card-title" id='doers-card-title'>{method.title}</h3>
                                <p className="doers-card-description">{method.description}</p>
                            </div>
                            <div className="doers-card-image-container">
                                <img src={method.image} alt={method.alt} className="doers-card-image" />
                                <img src={method.mobileImage} alt={method.alt} className="doers-card-image mobile-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>















            {/* 🆕 NEW: Registration/Upgrade Form Section - Based on image_14f8be.png */}
            <section className="doers-register-section">
                <div className="doers-register-header">
                    <p className="doers-register-overline">WHAT DIGITALPRENEUR IS ABOUT</p>
                    <h2 className="doers-register-main-title">
                        From  <span className="doers-register-highlight">Content Makers </span>to <span className="doers-register-highlight">Business Builders.</span>
                    </h2>
                    <p className="doers-register-subtitle">
                        Because creating is just the beginning.
                    </p>
                </div>
                
                <div className="doers-register-body">
                    <p className="doers-register-text-1">
                        Digitalpreneur is where Creators become Entrepreneurs —
                    </p>
                    <p className="doers-register-text-2" id='doers-register-text-2' ref={desktopFormRef}>
                        Learning storytelling, Marketing, and Growth through Real projects, Brand sprints, and Creative challenges.
                    </p>
                    <p className="doers-register-text-2" ref={mobileFormRef}>
                        Forget recorded lectures and static PDFs. Every week, you'll face a real challenge inspired by brands like
                    </p >
                    
                    {/* Brand Logos Placeholder - You'll replace the SVG/Images here */}
                    <div className="doers-register-logos" >
                        {/* Example structure, replace with actual logos */}
                        <img src={credLogo} alt="CRED" className="doers-logo" />
                        <img src={swiggyLogo} alt="SWIGGY" className="doers-logo" />
                        <img src={nykaaLogo} alt="NYKAA" className="doers-logo" />
                    </div>

                    <p className="doers-register-text-3">
                        with feedback from mentors who live the game, not just teach it.
                    </p>
                </div>

                {/* Registration/CTA Form Layout */}
                <div className="doers-register-form-container"  >
                    
                    {/* Left CTA Card */}
                    <div className="doers-register-cta-card" >
                        <div className="doers-register-cta-content" style={{backgroundImage: `url(${engagementBgform})`}}>
                            <p className="doers-register-cta-overline">WORK WITH US TODAY</p>
                            <h3 className="doers-register-cta-title">Ready-to <span id='doers-register-cta-title'>Upgrade?</span></h3>
                            <p className="doers-register-cta-subtext">Dive into the future with Skipperx</p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <GoogleSheetRegisterForm formName="DigitalpreneurForm" />

                </div>
            </section>









            <section className="doers-different-section">
    <div className="doers-different-header">
        <p className="doers-different-overline">HOW WE'RE DIFFERENT</p>
        <h2 className="doers-different-title">
            We Don’t Teach. <span className="doers-highlight">We Challenge.</span>
        </h2>
        <p className="doers-different-subtitle">
            <span className='doers-different-subtitle-highlight'></span>
            Because the best creators grow through action, not instruction
        </p>
    </div>

    {/* ⭐ MOBILE IMAGE (ONLY for mobile UI) */}
    <div className="doers-different-mobile-image">
        <img 
            src={newDifferentImage} 
            alt="Different Mobile Visual"
            className="doers-different-mobile-image-element"
        />
    </div>

    {/* ⭐ DESKTOP GRID (unchanged) */}
    <div className="doers-different-grid-container">
        {differentHighlights.map((item) => (
            <div key={item.id} className={`doers-different-card ${item.className}`}>
                <div className="doers-different-card-text-content">
                    <h3 className="doers-different-card-main-title">{item.mainTitle}</h3>
                    <p className="doers-different-card-category" id='diffp1'>{item.category}</p>
                    <p className="doers-different-card-description" id='diffp2'>{item.description}</p>
                </div>
                <div className="doers-different-card-image-container">
                    <img src={item.image} alt={item.alt} className="doers-different-card-image" />
                </div>
            </div>
        ))}
    </div>
</section>






            












           <section className="cp-doers-impact-dashboard-section">
    <div className="cp-doers-impact-header">
        <p className="cp-doers-impact-overline">IMPACT DASHBOARD</p>
        <h2 className="cp-doers-impact-title">
            Numbers That <span className="cp-doers-impact-highlight">Redefine</span> Learning
        </h2>
        <p className="cp-doers-impact-subtitle">
            Digitalpreneur isn’t theory — it’s traction. See what happens when creators learn by doing
        </p>
    </div>

    {/* ⭐ MOBILE ONLY IMAGE */}
    <div className="cp-mobile-impact-image">
        <img src={mobileImpactImage} alt="Impact Mobile Visual" />
    </div>

    <div className="cp-doers-impact-content-wrapper">
        
        {impactStats.map((stat, index) => (
            <div key={stat.id} className={`cp-doers-impact-stat-card cp-doers-stat-card-${index + 1}`}>
                <p className="cp-doers-stat-percentage">{stat.percentage}</p>
                <p
                    className="cp-doers-stat-description"
                    dangerouslySetInnerHTML={{ __html: stat.description }}
                ></p>
            </div>
        ))}

        
        <div className="cp-doers-impact-mentor-section">
        <p className="cp-doers-mentor-overline">Mentored By:</p>
        <h3 className="cp-doers-mentor-name">{mentorDetails.name}</h3>
        <p className="cp-doers-mentor-role">{mentorDetails.role}</p>
        <div className="cp-doers-mentor-image-wrapper">
            <img
            src={mentorDetails.image}
            alt={mentorDetails.name}
            className="cp-doers-mentor-image"
            loading="lazy"
            />
        </div>
        </div>
    </div>

    
    <div className="cp-doers-impact-footer-bar">
        <div className="cp-doers-footer-top"> 
        <p className="cp-doers-footer-label">Worked with 10+ brands</p>
        
        {/* New wrapper for the scrolling logos */}
        <div className="cp-doers-logo-scroll-area">
            <div className="cp-doers-brand-logos">
                {mentorDetails.workedWithBrands.map((brand, index) => (
                    <img
                        key={index}
                        src={brand.src}
                        alt={brand.alt}
                        className="cp-doers-footer-brand-logo"
                        loading="lazy"
                    />
                ))}
                {/* CRITICAL FOR LOOPING: Duplicate the logos */}
                {mentorDetails.workedWithBrands.map((brand, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={brand.src}
                        alt={brand.alt}
                        className="cp-doers-footer-brand-logo"
                        loading="lazy"
                        aria-hidden="true" 
                    />
                ))}
            </div>
        </div>
    </div>



        <div className="cp-doers-footer-bottom">
            
            {/* Render Line 1 */}
            <span
                className="cp-expertise-line-1"
                dangerouslySetInnerHTML={{ __html: mentorDetails.expertiseAreas[0] }}
            />
            
            {/* Render Line 2 */}
            <span
                className="cp-expertise-line-2"
                dangerouslySetInnerHTML={{ __html: mentorDetails.expertiseAreas[1] }}
            />
        </div>

        
    </div>
</section>











        {/* 🆕 NEW: Curriculum Section (based on the image) - UPDATED WITH UNIQUE CLASS NAMES */}
            <section className="doers-new-curriculum-section" >
                <div className="doers-new-curriculum-header">
                    <p className="doers-curriculum-overline">C U R R I C U L U M</p>
                    <h2 className="doers-new-creator-curriculum-main-title">
                        <span className="doers-new-creator-curriculum-highlight">The Creator’s Playbook — </span>Built Around Real Brands.
                    </h2>
                    <p className="doers-new-creator-curriculum-subtext">
                        Two tracks. One goal — think like a marketer, grow like a creator.
                    </p>
                </div>

                <div className="doers-new-curriculum-content">
                    {curriculumData.map((trackItem, index) => (
                        <div key={index} className="doers-new-creator-track-container">
                            <p className="doers-new-creator-track-title">{trackItem.track}</p>
                            
                            {trackItem.modules.map((moduleItem) => {
                                const isOpen = openModules.includes(moduleItem.id);
                                return (
                                    <div 
                                        key={moduleItem.id} 
                                        className={`doers-new-creator-module-card ${isOpen ? 'is-open' : ''}`}
                                    >
                                        <div 
                                            className="doers-new-creator-module-header" 
                                            onClick={() => toggleModule(moduleItem.id)}
                                            role="button"
                                            aria-expanded={isOpen}
                                            aria-controls={`doers-new-creator-module-body-${moduleItem.id}`}
                                        >
                                            <div className="doers-new-creator-title-wrapper">
                                                <h3 className="doers-new-creator-module-title">{moduleItem.title}</h3>
                                                <p className="doers-new-creator-module-focus">
                                                    <span className="doers-new-creator-focus-label"><b>Focus :</b></span> {moduleItem.focus}
                                                </p>
                                            </div>
                                            <div className="doers-new-creator-sessions-tag">
                                                <span>{moduleItem.sessions} SESSIONS</span>
                                            </div>
                                            <button className="doers-new-creator-toggle-btn">
                                                {/* Use a simple arrow icon, rotated by CSS */}
                                                <span className={`doers-new-creator-arrow-icon ${isOpen ? 'up' : 'down'}`}>
                                                    &#9660; {/* Down Arrow */}
                                                </span>
                                            </button>
                                        </div>

                                        <div 
                                            id={`doers-new-creator-module-body-${moduleItem.id}`} 
                                            className="doers-new-creator-module-body"
                                            aria-hidden={!isOpen}
                                        >
                                            {/* Content shown when module is open */}
                                            <p>{moduleItem.focus}</p>
                                            
                                            {/* The list structure below is hidden in the CSS but kept here 
                                            for future use if detailed bullet points are added.
                                            <ul className="module-detail-list">
                                                <li>- Case Study: Learn from Amul's topical content mastery</li>
                                                <li>- Activity: Self-discovery challenges, confidence-building.</li>
                                            </ul> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </section>
            
            {/* ⬆️ NEW SECTION ENDS HERE ⬆️ */}























            <section className="doers-success-sprints-section">
                <div className="doers-sprints-container">
                    {/* Left Column: Image and Main Title */}
                    <div 
                        className="doers-sprints-left-panel"
                        style={{ backgroundImage: `url(${engagementBg})` }}
                    >
                        <p className="doers-sprints-overline">SUCCESS SPRINTS</p>
                        <h2 className="doers-sprints-main-title">Unique Engagement Elements</h2>
                    </div>

                    {/* Right Column: List of Engagement Elements */}
                    <div className="doers-sprints-right-panel">
                        {engagementElements.map((element) => (
                            <div key={element.id} className="doers-sprints-item">
                                <h3 className="doers-sprints-item-title">{element.title}</h3>
                                <p className="doers-sprints-item-description">{element.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <div className="doers-brochure">
                <div
                className="doers-brochure-banner"
                style={{ backgroundImage: `url(${brochureImage})` }}
                >
                <div className="doers-brochure-overlay">
                    <h3>
                    Want the Deep Dive? Grab the <span>Brochure</span>
                    </h3>
                    <p>
                    From what you’ll learn to where it can take you — it’s all inside.
                    </p>
                    <button className="doers-download-brochure-btn">Download Brochure</button>
                </div>
                </div>
            </div>



            
          


            











               <section className="doers-testimonials-section">
                    <div className="doers-testimonials-header">
                        <p className="doers-testimonials-overline">TESTIMONIALS</p>
                        <h2 className="doers-testimonials-main-title">
                        What Our <span className="doers-testimonials-highlight-italic">Early Creators</span> are saying
                        </h2>
                        <p className="doers-testimonials-subtext">
                        Every story here started with one challenge — and turned into something real.
                        </p>
                    </div>

                    {/* Tag Bar with Infinite Auto Scroll */}
                    <div className="doers-testimonials-tag-bar">
                        <div className="doers-tag-scroll-track">
                        {[...Array(32)].map((_, i) => (
                            <React.Fragment key={i}>
                            <span className="doers-tag-item">
                                Real <span className="doers-tag-item1">people</span>
                                <span className="doers-tag-diamond">
                                <img src={ordiamond} id="doers-tag-diamond1" />
                                </span>
                            </span>
                            <span className="doers-tag-item">
                                Real <span className="doers-tag-item1">projects</span>
                                <span className="doers-tag-diamond">
                                <img src={ordiamond} id="doers-tag-diamond1" />
                                </span>
                            </span>
                            <span className="doers-tag-item">
                                Real <span className="doers-tag-item1">transformation</span>
                                <span className="doers-tag-diamond">
                                <img src={ordiamond} id="doers-tag-diamond1" />
                                </span>
                            </span>
                            </React.Fragment>
                        ))}
                        </div>
                    </div>

                    {/* Testimonial Cards Auto Scroll */}
                    <div className="doers-testimonial-cards-container">
                        <div className="doers-cards-scroll-track">
                        {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                            <div key={index} className="doers-testimonial-card">
                            <div className="doers-testimonial-image-wrapper">
                                <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="doers-testimonial-img"
                                loading="lazy"
                                />
                            </div>
                            <h3 className="doers-testimonial-name">{testimonial.name}</h3>
                            <p className="doers-testimonial-quote">{testimonial.quote}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
               




           <div className="doers-cert-drone">
            <div className="doers-certificate-display-section">
                <div className="doers-certificate-image-wrapper">
            <img
                src={certificateDisplay}
                alt="Skipper Certificate"
                className="doers-certificate-background-img"
                
            />
            <div className="doers-certificate-overlay">
                <h2 className="doers-certificate-title">
                Seal the Skill with a <span className="doers-highlight">SkipperX </span> Certificate
                </h2>
                <p className="doers-certificate-subtext">
                Yes! You will be certified for this program.
                </p>
            </div>
            </div>
            </div>
            </div>




            
                <section className="doers-pricing-section">
                    <div className="doers-pricing-header">
                        <p className="doers-pricing-overline">P R I C I N G</p>
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

                            
                            {/*<div className="doers-card-footer">
                                <div>
                                    <p className="doers-price-label">PRICE</p>
                                    <p className="doers-original-price">₹10,000</p>
                                    
                                </div>
                                
                                 
                                <p className="doers-offer-text doers-offer-button-wrapper">
                                    Avail student offer and get it for <span className="doers-offer-price"> ₹8,000</span>
                                </p>
                            </div>*/}
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

                            {/*<div className="doers-card-footer">
                                <div>
                                    <p className="doers-price-label">PRICE</p>
                                    <p className="doers-original-price">₹20,000</p>
                                </div>
                                
                                <p className="doers-offer-text doers-offer-button-wrapper">
                                    Avail student offer and get it for <span className="doers-offer-price">₹18,000</span>
                                </p>
                            </div>*/}
                        </div>
                    </div>
                     <div className="doers-card-footer">
                                <div>
                                    <p className="doers-price-label">PRICE</p>
                                    <p className="doers-original-price">₹50,000</p>
                                    
                                </div>
                                
                                {/* 🎯 NEW CLASS FOR THE BUTTON EFFECT */}
                                <p className="doers-offer-text doers-offer-button-wrapper">
                                    Avail student offer and get it for <span className="doers-offer-price"> ₹40,000</span>
                                </p>
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










       


            
            <Footer />
        </div>
    );
};

export default CreatorPreneur;





