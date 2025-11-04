import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBg from "../assets/about-hero.png";
import bgImage from "../assets/about-x.png";
import founder1 from "../assets/scf.png";
import founder2 from "../assets/hcf.png";
import founder3 from "../assets/vcf.png";
import founder4 from "../assets/cf4.png";
import img1 from "../assets/ab1.png";
import img2 from "../assets/ab22.png";
import img3 from "../assets/ab21.png";
import img4 from "../assets/ab23.png";
import img5 from "../assets/ab24.png";
import missionImg from "../assets/missionImg.png";
import visionImg from "../assets/visionImg.png";
import image1 from "../assets/co-founder.png";
import image2 from "../assets/vice-president.png";
import image3 from "../assets/designer.png";
import image4 from "../assets/product.png";
import image5 from "../assets/harisha.jpg";


import bgImagemobile from '../assets/landing-mobile.png';



const teamMembers = [
  { name: "Himanshu Singh", position: "Co-Founder & CMO", image: image1, className: "member-card1",quote: "Building scalable web solutions" },
  { name: "Praveen Kittur", position: "Vice President", image: image2, className: "member-card2" ,quote: "Building scalable web solutions"},
  { name: "Sakshi Gupta", position: "Sr.Product Designer", image: image3, className: "member-card3" ,quote: "Building scalable web solutions"},
  { name: "Amit Biswas", position: "Product Manager", image: image4, className: "member-card4" ,quote: "Building scalable web solutions"},
  { name: "Harisha Ediga", position: "Full Stack Developer", image: image5, className: "member-card5" ,quote: "Building scalable web solutions"},

  
];


const founders = [
  { name: "Himanshu Singh", role: "Co-Founder & CMO", image: founder2 },
  
  {/*{ name: "Sourav Kamboj", role: "Co-Founder and CEO", image: founder1 },
  { name: "Vivek Agarwal", role: "Co-Founder and COO", image: founder3 },
  { name: "Hemanth Ingle", role: "Co-Founder and VP", image: founder4 },*/}
];



const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-hero-section " style={{ backgroundImage: `url(${heroBg})` }}>
        
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">
            They Came with Curiosity, We Gave <br /> Them Real Skills
          </h1>
          <p className="about-hero-subtitle">
            Training future pros who actually get hired
          </p>
          
        </div>
      </div>
      











      <div
          className="about-quote-section"
          //style={{ backgroundImage: `url(${bgImage})`}}
        >
          <div className="about-quote-content">
            <div className="quote-icon">❝</div>
            <p className="quote-text">
              We started SkipperX with one simple belief — that real-world tech skills should be accessible to every curious mind, not just a privileged few.
            </p>
            <p className="sub-quote">
              They Asked for More Than Lectures. So We Built SkipperX.
            </p>
            <hr className="divider" />
            <p className="highlight-text-about">
              SkipperX is highly recommended for students, working professionals, and entrepreneurs who are eager to master emerging technologies and build career-defining projects.
            </p>

            <div className="founders-list">
              {founders.map((founder, i) => (
                <div className="founder-card" key={i}>
                  <img src={founder.image} alt={founder.name} />
                  <h4>{founder.name}</h4>
                  <span>{founder.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>










       <div className="about-mission-vision">
        <div className="mission-card">
          <img src={missionImg} alt="Mission" className="mv-image" />
          <div className="mv-content">
            <div className="mv-heading">MISSION</div>
            <p>
              Our mission is to deliver high-impact programs that teach 
              the skills the world is hiring for—across tech, business, and 
              innovation. 
            </p>
            <p> We're here to help you upgrade your career, break into 
              new roles, or build something of your own.
            </p>
            <p>
              With every learner, our goal is clear: help 60–70% of them 
              land better jobs, launch companies, or grow into leadership 
              roles—faster, smarter, and with confidence.
            </p>
          </div>
        </div>

        <div className="vision-card">
          <img src={visionImg} alt="Vision" className="mv-image" />
          <div className="mv-content2">
            <div className="mv-heading">VISION</div>
            <p>
              At SkipperX, we're building the most powerful career launchpad for 
              ambitious professionals.
            </p>
            <p>
              Our vision is to create a new standard of upskilling—where learners 
              don't just learn, they transform.
            </p>
            <p>
              Whether it’s landing top roles, switching industries, or launching 
              startups, we exist to help people take the leap with skills that 
              actually move the needle.
            </p>
          </div>
        </div>
      </div>





     <div className="people-sectiona">
        <div className="people-headera">
          <hr className="gallery-line1a" />
            <h2 className="gallery-headinga">The People behind<span className="highlight-abouta"> SkipperX</span></h2>
            <hr className="gallery-line2a" />
        </div>
        <p className="subtitlea">
          Insights from those who’ve walked the path you’re about to take.
        </p>

        <div className="people-grid1a">
          {teamMembers.map((member, index) => (
            <div className={`people-carda ${member.className}`} key={index}>
              <img src={member.image} alt={member.name} className="people-imga" />
              <div className="people-infoa">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
              <div className="hover-overlaya">{member.quote}</div>
            </div>
          ))}

          <div className="people-carda join-carda">
            <p>You Can be one of them</p>
            <button className="join-btna">Join Our Team</button>
          </div>
        </div>
      </div>








        <div className="skipperx-gallery">
          <div className="skipperx-gallery-title">
            <hr className="gallery-line1a" />
            <h2 className="gallery-heading">Here’s what <span className="highlight-abouta"> SkipperX</span> is all about</h2>
            <hr className="gallery-line2a" />
          </div>
          <div className="skipperx-gallery-images">
            <div className="gallery-image-container">
              <img src={img1} alt="Award Ceremony" />
            </div>
            <div className="gallery-image-container">
              <img src={img2} alt="Training Session" />
            </div>
            {/*} <div className="gallery-image-container1">
              <img src={img3} alt="Team Collaboration" className="third"/>
            </div>
            <div className="gallery-image-container1">
              <img src={img4} alt="Group Meeting" className="fourth"/>
            </div>
            <div className="gallery-image-container1">
              <img src={img5} alt="Celebration Event" className="fifth" />
            </div>*/}
            
          </div>
        </div>














      






      <Footer />
    </>
  );
};

export default About;




