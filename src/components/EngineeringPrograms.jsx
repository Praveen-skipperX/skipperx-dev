import { Link } from "react-router-dom";
import arrowIcon from "../assets/arrows.png";
import "./EngineeringPrograms.css";

import Card1 from "../assets/card-ar-vr.jpg";
import Card2 from "../assets/card-drone-eng.jpg";
import Card3 from "../assets/card-robot.jpg";
import Card4 from "../assets/card-uiux.jpg";

const programs = [
  {
    title: "Drone Engineering",
    tagIcon: "⭐",
    tag: "Exclusive Program",
    success: "90% land tech roles or launch products",
    bg: Card2,
  },
  {
    title: "Robot Engineering",
    tagIcon: "⚡",
    tag: "Bestseller",
    success: "89% build robots or step into core tech roles.",
    bg: Card3,
  },
  {
    title: "AR VR",
    tagIcon: "⚡",
    tag: "Bestseller",
    success: "92% land AR/VR roles or launch their own apps.",
    bg: Card1,
  },
  {
    title: "UI UX Design Pro",
    tagIcon: "⚡",
    tag: "Bestseller",
    success: "92% land UI/UX roles start their own agencies.",
    bg: Card4,
  },
];

const EngineeringPrograms = () => {
  return (
    <section className="eng-section">
      <div className="best-heading-section">
        <hr className="l" />
        <h1>
          For <span className="proo">Innovators</span>
        </h1>
        <hr className="r" />
      </div>
      <p className="best-subheading">Dive into today’s Trendiest Innovations</p>
      <div className="eng-container">
        {programs.map((item, index) => (
          <Link
            key={index}
            className="eng-card"
            to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            {item.tag && (
              <div className="eng-badge">
                <span className="eng-badge-icon" aria-hidden="true">{item.tagIcon}</span>
                <span>{item.tag}</span>
              </div>
            )}
            <h3 className="eng-title">{item.title}</h3>
            <div className="eng-footer">
              <div className="eng-success">
                <p className="eng-success-label">Success rate:</p>
                <p className="eng-success-value">{item.success}</p>
              </div>
              <div className="eng-arrow-btn">
                <img src={arrowIcon} alt="" className="eng-arrow-img" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPrograms;
