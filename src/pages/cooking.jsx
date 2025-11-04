import Navbar from '../components/Navbar';
import bgImage from '../assets/X.png'; // Replace with actual image path
import './cooking.css';

function ComingSoonSection() {
  const scrollItems = [
    "PRODUCT MANAGEMENT",
    "DATA ANALYTICS",
    "YOUTUBE ACADEMY",
    "UI UX",
    "WEB DEVELOPMENT",
    "WEB DEVELOPMENT",
    "STOCK MARKET",
    "STOCK MARKET",
    "STOCK MARKET",
  ];

  return (
    <div className="coming-soon-container">
      
      <Navbar />

      <img src={bgImage} alt="Background" className="coming-soon-bg-img" />

      <div className="coming-soon-gradient"></div>

      <div className="coming-soon-content">
        <span className="mini-goldmine">⭐ Your Mini Goldmine</span>
        <h1>COMING SOON</h1>
        <p>Get ready everyone! We are currently working on something awesome</p>

        <form className="notify-form">
          <input type="email" placeholder="Email Id" />
          <button type="submit">Notify me</button>
        </form>

        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    
    
      {/* Horizontal Scroll Section */}
      <div className="horizontal-scroll-section">
        <div className="horizontal-scroll-track">
          {scrollItems.map((item, index) => (
            <div key={index} className="horizontal-scroll-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComingSoonSection;

