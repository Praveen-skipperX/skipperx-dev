import React from "react";
import "./SuperStack.css";
import { Link } from "react-router-dom";


const stackData = [
  {
    title: "Startup Stack",
    subtitle: "7+ Diverse Program",
    successRate: "93% land biz roles or launch ventures",
    tag: "Business",
    footer: "Business Analytics · Human Resource · Finance · Fashion Design",
    bgImage: require("../assets/1sttt.png"),
  },
  {
    title: "Core Tech",
    subtitle: "6+ Diverse Program",
    successRate: "90% land tech roles or launch products",
    tag: "Tech",
    footer: "Cybersecurity · Data Science · UI/UX Design · Web Development",
    bgImage: require("../assets/2nd.png"),
  },
  {
    title: "Creators hub",
    subtitle: "7+ Diverse Program",
    successRate: "88% grow brands or start freelancing.",
    tag: "Creative",
    footer: "Graphic Design · Photography · Content creation · UIUX · Digital media",
    bgImage: require("../assets/3rdd.png"),
  },
];

const SuperStack = () => {
  return (
    <section className="stack-wrapper" id="stack-navigate">
      <div className="best-heading-section">
        <hr className="l" />
        <h1>
          Super <span className="proo">Stack </span>
        </h1>
        <hr className="r" />
      </div>
      <p className="stackland-subheading">All-in-one bundles to grow and create</p>
      <div className="stack-card-container">
        {stackData.map((item, index) => (
          <Link className="navlink"
              to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
          <div
            className="stack-box"
            key={index}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          > 
            
            <div className="overlay">
              <div className="stack-tag">{item.tag}</div>
              <h3 className="stack-title">{item.title}</h3>
              <p className="stack-subn">{item.subtitle}</p>
              <p className="stack-rate">
                <strong ><span className="success">Success rate:</span></strong><br className="next"/>
                {item.successRate}
              </p>
              <button className="stack-learn">
                <img src={require("../assets/arrows.png")} alt="arrow" className="arrow-icon" />
              </button>
            </div>
            <div className="stack-footer-scroll">
              <div className="scroll-content">{item.footer} · {item.footer}</div>
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SuperStack;
