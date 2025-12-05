import React from "react";
import "./SuperStack.css";
import "./Doers.css";
import { Link } from "react-router-dom";


const stackData = [
  /*{
    title: "Creator Hub",
    subtitle: "5 Diverse Program",
    successRate: "93% land biz roles or launch ventures",
    tag: "Business",
    footer: "Business Analytics · Human Resource · Finance · Fashion Design",
    bgImage: require("../assets/1sttt.png"),
  },*/
  {
    title: "Psychology",
    subtitle: "Duration:2 Months",
    successRate: "90%  begin practicing their skills in real-world settings",
    tag: "Tech",
    bgImage: require("../assets/doers-psyc.png"),
  },
  {
    title: "Creatorpreneur",
    subtitle: "Duration:3 Months",
    successRate: "90% start earning as creators — brand deals or freelance projects",
    tag: "Medical",
    bgImage: require("../assets/doers-creater.png"),
  },
];

const Doers = () => {
  return (
    <section className="stack-wrapper" id="stack-navigate">
      <div className="best-heading-section">
        <hr className="lefst" id="lefstack" />
        <h1>
          For <span className="proo">Doers </span>
        </h1>
        <hr className="rig" id="lefstack" />
      </div>
      <p className="stackland-subheading">Upgrade your life — one course at a time.</p>
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
              <div className="stack-tag" >{item.tag}</div>
              <h3 className="stack-title" id='doers-title-home'>{item.title}</h3>
              <p className="stack-subn">{item.subtitle}</p>
              <p className="stack-rate">
                <strong ><span className="success">Success rate:</span></strong><br className="next"/>
                {item.successRate}
              </p>
              <button className="stack-learn" id="doers-stack-learn">
                <img src={require("../assets/arrows.png")} alt="arrow" className="arrow-icon" />
              </button>
            </div>
            
            
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Doers;
