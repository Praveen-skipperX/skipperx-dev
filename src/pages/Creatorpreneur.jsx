// src/pages/ProductManagement.js

import React, { useState } from 'react';
import './ProductManagement.css'; // Import the updated CSS file
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import ChallengeBased from '../assets/cre1.png'; 
import CreatorLed from '../assets/cre2.png'; 
import BuildCreate from '../assets/cre3.png';
import brochureImage from "../assets/doers-brochure.png";
import certificateDisplay from "../assets/new-cer.jpg";

// ⚠️ IMPORTANT: Image Imports for NEW How We're Different Section
// Replace these with your actual image paths
import founderNotesImage from '../assets/vibe-coding.png'; 
import aiWorkflowsImage from '../assets/ai-workflows.png';   
import vibeCodingImage from '../assets/founder-notes.png';     
import mockInterviewsImage from '../assets/mock-interviews.png'; 

import engagementBg from '../assets/unique-engagement-bg.jpeg';
import engagementBgform from '../assets/creatorform.png';

import amulLogo from '../assets/amul.png';      // Replace with your actual path
import credLogo from '../assets/cred.png';      // Replace with your actual path
import zomatoLogo from '../assets/zomato.png';  // Replace with your actual path
import mamaearthLogo from '../assets/mamaearth.png'; // Replace with your actual path
import fevicolLogo from '../assets/fevicol.png'; 
import swiggyLogo from '../assets/swiggy.png';
import nykaaLogo from '../assets/nykaa.png'; 
import spotifyLogo from '../assets/spotify.png';
import tataLogo from '../assets/tata.png'; 
import boatLogo from '../assets/boat.png';
import bewaLogo from '../assets/bewa.png'; 
import liciLogo from '../assets/lici.png';
import tatLogo from '../assets/tat.png';


// 🚨 IMPORTANT: Add these new image imports for testimonials
import riyaSharmaImg from '../assets/riya_sharma.jpeg'; // Replace with actual path
import anantShaImg from '../assets/anant_sha.jpeg';   // Replace with actual path
import piyushNamdevImg from '../assets/piyush_namdev.jpeg'; // Replace with actual path
import shantanuSinghImg from '../assets/shantanu_singh.jpeg'; // Replace with actual path
import soheliSharmaImg from '../assets/riya_sharma.jpeg'; // Replace with actual path

// 🆕 NEW: Imports for the Impact Dashboard Section
import mentorPreranaSaha from '../assets/prerana-saha.png'; // Replace with actual path to Prerana Saha's image
import brandFortis from '../assets/fortis.png';          // Replace with actual path to Fortis logo
import brandCafoco from '../assets/cafoco.png';          // Replace with actual path to Cafoco logo
import brandTcAcademy from '../assets/tc-academy.png';   // Replace with actual path to TC Academy logo
import brandFibr from '../assets/fibr.png';              // Replace with actual path to Fibr logo
import brandPlaceholder from '../assets/placeholder-brand.png';

import ordiamond from '../assets/or-diamond.png'; // Replace with actual path
import upgradeBg from '../assets/cta-upgrade-bg.jpg';


// 🆕 NEW: Data for the Impact Dashboard Section
const impactStats = [
    {
        id: 1,
        percentage: "87%",
        description: "Our learners launched their first paid project within <span class='highlight-text'>30 days</span>.",
    },
    {
        id: 2,
        percentage: "95%",
        description: "Rated mentor feedback sessions as <span class='highlight-text'>career-changing</span>.",
    },
    {
        id: 3,
        percentage: "60%",
        description: "Graduates started a <span class='highlight-text'>creator community or side hustle</span>.",
    },
    {
        id: 4,
        percentage: "400+",
        description: "Real brand campaigns created through <span class='highlight-text'>weekly challenges</span>.",
    },
    {
        id: 5,
        percentage: "230%",
        description: "Average <span class='highlight-text'>engagement rise</span> after Week 4 content sprint.",
    },
];

const mentorDetails = {
    name: "PRERANA SAHA",
    role: "Ex-founder and psychology-marketing strategist",
    image: mentorPreranaSaha,
    workedWithBrands: [
        { src: brandPlaceholder, alt: "Placeholder Brand 1" }, // You might have a specific one for the egg-like logo
        { src: brandFortis, alt: "Fortis" },
        { src: brandCafoco, alt: "Cafoco" },
        { src: brandTcAcademy, alt: "TC Academy" },
        { src: brandFibr, alt: "Fibr" },
    ],
    expertiseAreas: [
        "Behaviour-Driven Marketing Mentor",
        "Built 4 businesses",
        "Now leading research at a unicorn and helping marketers blend behaviour",
        "Storytelling & strategy for people-first growth.",
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

const methodologies = [
  {
    id: 1,
    title: "Challenge-Based Learning",
    description: "Real projects, brand sprints & weekly creative missions.",
    image: ChallengeBased,
    alt: "Founders",
    bgColor: "#313131"
  },
  {
    id: 2,
    title: "Creator-Led Approach",
    description: "Fuelled by the stories that built India’s creator revolution.",
    image: CreatorLed,
    alt: "Swiggy Team",
    bgColor: "#424b48"
  },
  {
    id: 3,
    title: "Build. Create. Grow.",
    description: "Experience Brand thinking inspired by CRED, and other modern disruptors.",
    image: BuildCreate,
    alt: "Spotify Screens",
    bgColor: "#3e4d41"
  }
];

const curriculumModules = [
    {
        id: 1,
        title: "FOUNDATIONS OF CREATOR MINDSET",
        activities: "Self-discovery challenges, confidence-building through content creation, storytelling contests.",
        bonus: "Learn from Amul's topical content mastery—how to build timely, viral brand commentary",
        caseStudy: "CRED’s brand storytelling and founder-led narrative—how Kunal Shah built trust with storytelling",
        logos: [
            { src: amulLogo, alt: "Amul Logo", className: "amul" },
            { src: credLogo, alt: "CRED Logo", className: "cred" }
        ]
    },
    {
        id: 2,
        title: "COMMUNITY BUILDING & FANDOM TO BUSINESS",
        activities: "Build a niche WhatsApp/Instagram community around a passion; design a member onboarding journey.",
        bonus: "Zomato’s engagement hacks—hyperlocal content and user connect strategies",
        caseStudy: "Mamaearth’s organic community-led growth; how founder Ghazal Alagh turned moms into brand ambassadors",
        logos: [
            { src: zomatoLogo, alt: "Zomato Logo", className: "zomato" },
            { src: mamaearthLogo, alt: "Mamaearth Logo", className: "mamaearth" }
        ]
    },
    {
        id: 3,
        title: "CONTENT CREATION MASTERY",
        activities: "The “Viral Challenge”—create reels/posts applying viral hooks/challenges; content peer review rounds.",
        bonus: "Fevicol’s UGC-driven campaigns and witty content virality",
        caseStudy: "Swiggy’s Instagram Story campaigns—how creative assets drove app installs and retention",
        logos: [
            { src: fevicolLogo, alt: "Fevicol Logo", className: "fevicol" },
            { src: swiggyLogo, alt: "Swiggy Logo", className: "swiggy" }
        ]
    },
    {
        id: 4,
        title: "SOCIAL MEDIA MARKETING & FUNNELS",
        activities: "Funnel-building workshops using LinkedIn and Instagram for a simulated launch; create A/B test ads.",
        bonus: "Spotify India’s playlist campaign—creative use of data for personalisation and shareability",
        caseStudy: "Nykaa’s influencer-driven product launches; lessons on platform-first strategies",
        logos: [
            { src: nykaaLogo, alt: "nykaa Logo", className: "nykaa" },
            { src: spotifyLogo, alt: "spotify Logo", className: "spotify" }
        ]
    },
    {
        id: 5,
        title: "REAL-WORLD PROJECTS & BRAND CASE CHALLENGES",
        activities: "Live Agency Sprints”—work on real or simulated briefs from brands like boAt, Bewakoof, or Licious.",
        bonus: "Tata Tea’s “Jaago Re” social impact movement—integrating cause with commerce for deeper brand equity.",
        caseStudy: "BoAt’s rapid multimedia content approach across platforms; striking the balance between scale and relatability.",
        logos: [
            { src: tataLogo, alt: "nykaa Logo", className: "nykaa" },
            { src: boatLogo, alt: "spotify Logo", className: "spotify" }
        ]
    },
    {
        id: 6,
        title: "CREATORPRENEURSHIP & AGENCY TOOLS",
        activities: " Project—brand a personal skill as a service and pitch to mentors; pricing and negotiation simulations.",
        bonus: "Bewakoof’s affordable youth branding and meme marketing playbook.",
        caseStudy: "Licious’s journey as a D2C disruptor; leveraging storytelling, assurance, and influencer reviews for rapid scale",
        logos: [
            { src: bewaLogo, alt: "bewaLogo", className: "nykaa" },
            { src: liciLogo, alt: "liciLogo", className: "spotify" }
        ]
    },
    {
        id: 7,
        title: "GROWTH MINDSET & PERSONAL BRAND PORTFOLIO",
        activities: "Build video resumes, case books featuring campaign breakdowns, and portfolio reviews with mentors.",
        bonus: " Swiggy’s “Voice of Foodies” influencer activation as a model for beginner creators to gain traction.",
        caseStudy: "Tata Nano’s repositioning campaign—using story, empathy, and inclusion to reshape perceptions.",
        logos: [
            { src: swiggyLogo, alt: "bewaLogo", className: "nykaa" },
            { src: tatLogo, alt: "liciLogo", className: "spotify" }
        ]
    },
    
];

const differentHighlights = [
    {
        id: 1,
        mainTitle: "Challenge-Weeks",
        category: "The spark",
        description: "Where every week throws you into a new creative battlefield",
        image: founderNotesImage,
        alt: "Founder Notes Instructor",
        className: "card-style-black",
    },
    {
        id: 2,
        mainTitle: "Brand Takeovers",
        category: "The test",
        description: "Take over real brands, design content calendars, and prove your strategy.",
        image: aiWorkflowsImage,
        alt: "AI Workflows Instructor",
        className: "card-style-white",
    },
    {
        id: 3,
        mainTitle: "Mentor Circles",
        category: "The feedback",
        description: "Refine your work with insights from real creators and founders.",
        image: vibeCodingImage,
        alt: "Vibe Coding Instructor",
        className: "card-style-white",
    },
    {
        id: 4,
        mainTitle: "Portfolio Building",
        category: "The reward",
        description: "Graduate with a brag-worthy portfolio full of brand stories.",
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

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="doers-page-wrapper"> 
            <Navbar />
            
            <div className="doers-hero-container">
                <div className="doers-hero-content">
                    <h1 className="doers-hero-title">
                        Old Lessons Don’t Build New-Age Creators - <span className="doers-highlight">Welcome to Creatorpreneur</span> 
                    </h1>
                    <p className="doers-hero-subtitle">
                        Where you don’t study marketing, you live it through challenges, brand sprints, and creator-led growth.
                    </p>
                    <button className="doers-hero-button">Start Learning</button>
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
                            </div>
                        </div>
                    ))}
                </div>
            </section>





            {/* 🆕 NEW: Registration/Upgrade Form Section - Based on image_14f8be.png */}
            <section className="doers-register-section">
                <div className="doers-register-header">
                    <p className="doers-register-overline">WHAT CREATORPRENEUR IS ABOUT</p>
                    <h2 className="doers-register-main-title">
                        From  <span className="doers-register-highlight">Content Makers </span>to <span className="doers-register-highlight">Business Builders.</span>
                    </h2>
                    <p className="doers-register-subtitle">
                        Because creating is just the beginning.
                    </p>
                </div>
                
                <div className="doers-register-body">
                    <p className="doers-register-text-1">
                        Creatorpreneur is where Creators become Entrepreneurs —
                    </p>
                    <p className="doers-register-text-2" id='doers-register-text-2'>
                        Learning storytelling, Marketing, and Growth through Real projects, Brand sprints, and Creative challenges.
                    </p>
                    <p className="doers-register-text-2">
                        Forget recorded lectures and static PDFs. Every week, you'll face a real challenge inspired by brands like
                    </p>
                    
                    {/* Brand Logos Placeholder - You'll replace the SVG/Images here */}
                    <div className="doers-register-logos">
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
                <div className="doers-register-form-container">
                    
                    {/* Left CTA Card */}
                    <div className="doers-register-cta-card">
                        <div className="doers-register-cta-content" style={{backgroundImage: `url(${engagementBgform})`}}>
                            <p className="doers-register-cta-overline">WORK WITH US TODAY</p>
                            <h3 className="doers-register-cta-title">Ready-to <span id='doers-register-cta-title'>Upgrade?</span></h3>
                            <p className="doers-register-cta-subtext">Dive into the future with Skipperx</p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <form className="doers-register-form">
                        <div className="doers-form-group-row">
                            <input type="text" placeholder="First Name*" required className="doers-form-input" />
                            <select className="doers-form-input doers-form-select">
                                <option value="" disabled selected>Interest*</option>
                                <option>Product Management</option>
                                {/*<option>UX/UI Design</option>*/}
                            </select>
                        </div>
                        <div className="doers-form-group-row">
                            <input type="tel" placeholder="+91 XXXXXXXXXX" required className="doers-form-input" />
                            <input type="email" placeholder="E-mail*" required className="doers-form-input" />
                        </div>
                        <div className="doers-form-group-single">
                            <input type="text" placeholder="College name*" required className="doers-form-input" />
                        </div>
                        
                        <button type="submit" className="doers-form-submit-button">
                            Submit enquiry
                        </button>
                    </form>

                </div>
            </section>






            <section className="doers-different-section">
                <div className="doers-different-header">
                    <p className="doers-different-overline">HOW WE'RE DIFFERENT</p>
                    <h2 className="doers-different-title">
                        We Don’t Teach. <span className="doers-highlight">We Challenge.</span>
                    </h2>
                    <p className="doers-different-subtitle">
                        <span className='doers-different-subtitle-highlight'></span>Because the best creators grow through action, not instruction
                    </p>
                </div>
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





            <section className="doers-curriculum-section">
                <div className="doers-curriculum-header">
                    <p className="doers-curriculum-overline">CURRICULUM</p>
                    <h2 className="doers-curriculum-main-title">
                        <span className="doers-curriculum-highlight">The Creator's Playbook  — </span> Built Around Real Brands.
                    </h2>
                    <p className="doers-curriculum-subtext">
                        7 modules. 7 challenges. Infinite creative growth.
                    </p>
                </div>

                <div className="doers-curriculum-modules-container">
                    {curriculumModules.map((module) => (
                        <div key={module.id} className="doers-module-card">
                        <h3 className="doers-module-title">
                            <span className="doers-module-number">{module.id}.</span> {module.title}
                        </h3>
                        
                        {/* Activities Block - Title and Content are now consecutive paragraphs */}
                        <div className='doers-case-act'>
                        <p className="doers-module-detail-title" >Activities:</p>
                        <p className="doers-module-detail-content" id='doers-activity'>{module.activities}</p>
                        </div>

                        {/* Bonus Block */}
                        <div className='doers-case-act1'>
                        <p className="doers-module-detail-title">Bonus:</p>
                        <p className="doers-module-detail-content" id='doers-activity'>{module.bonus}</p>
                        </div>
                        
                        {/* 🎯 Case Study Block: Use a single parent div for flex/grid control */}
                        <div className="doers-module-case-study">
                            {/* Left Side: Case Study Text */}
                            <div className="doers-case-study-text-area"> 
                                <p className="doers-module-detail-title" id='doers-case'>Case Study:</p>
                                <p className="doers-module-detail-content" id='doers-casestudy'>{module.caseStudy}</p>
                            </div>
                            
                            {/* Right Side: Logos */}
                            <div className="doers-case-study-logos">
                                {module.logos.map(logo => (
                                    <div key={logo.alt} className="doers-logo-container">
                                        <img src={logo.src} alt={logo.alt} className="doers-brand-logo-img" /> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    ))}
                </div>
            </section>







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

                {/* 🆕 FINAL IMPACT DASHBOARD SECTION */}
<section className="doers-impact-dashboard-section">
  <div className="doers-impact-header">
    <p className="doers-impact-overline">IMPACT DASHBOARD</p>
    <h2 className="doers-impact-title">
      Numbers That <span className="doers-impact-highlight">Redefine</span> Learning
    </h2>
    <p className="doers-impact-subtitle">
      Creatorpreneur isn’t theory — it’s traction. See what happens when creators learn by doing
    </p>
  </div>

  <div className="doers-impact-content-wrapper">
    {/* Stat Cards */}
    {impactStats.map((stat, index) => (
      <div key={stat.id} className={`doers-impact-stat-card doers-stat-card-${index + 1}`}>
        <p className="doers-stat-percentage">{stat.percentage}</p>
        <p
          className="doers-stat-description"
          dangerouslySetInnerHTML={{ __html: stat.description }}
        ></p>
      </div>
    ))}

    {/* Mentor Section */}
    <div className="doers-impact-mentor-section">
      <p className="doers-mentor-overline">Mentored By :</p>
      <h3 className="doers-mentor-name">{mentorDetails.name}</h3>
      <p className="doers-mentor-role">{mentorDetails.role}</p>
      <div className="doers-mentor-image-wrapper">
        <img
          src={mentorDetails.image}
          alt={mentorDetails.name}
          className="doers-mentor-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  {/* Footer Single Block */}
  <div className="doers-impact-footer-bar">
    <div className="doers-footer-top">
      <p className="doers-footer-label">Worked with 10+ brands</p>
      <div className="doers-brand-logos">
        {mentorDetails.workedWithBrands.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="doers-footer-brand-logo"
            loading="lazy"
          />
        ))}
      </div>
    </div>

    <div className="doers-footer-bottom">
      {mentorDetails.expertiseAreas.map((area, index) => (
        <React.Fragment key={index}>
          <span className="doers-expertise-item">{area}</span>
          {index < mentorDetails.expertiseAreas.length - 1 && (
            <span className="doers-expertise-divider">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>




            
            <Footer />
        </div>
    );
};

export default CreatorPreneur;





