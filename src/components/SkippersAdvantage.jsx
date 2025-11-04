import React from "react";
import "./SkippersAdvantage.css";

const cards = [
  {
    label: "Live Classes",
    title: "Learn Skills That Actually Matter",
    desc: "Live sessions. No fluff.",
    image: require("../assets/GROUP1.png"),
    className: "card-1",
  },
  {
    label: "Community",
    title: "Built-In Hype Squad",
    desc: "Learn with your people.",
    image: require("../assets/GROUP3.png"),
    className: "card-2",
  },
  {
    label: "Certification",
    title: "Flex Real Cred",
    desc: "Not lame. Just legit.",
    image: require("../assets/GROUP4.png"),
    className: "card-3",
  },
  {
    label: "Portfolio",
    title: "Projects That Show You’re Not Just Talk",
    desc: "Stuff you can actually show off.",
    image: require("../assets/GROUP2.png"),
    className: "card-4",
  },
];

const SkippersAdvantage = () => {
  return (
    <section className="skippers-sectioned">
      <div className="header-line">
        <div className="le" />
        <h2>Get the <span className="highlightu">Skipperx</span> Advantage</h2>
        <div className="rig" />
      </div>
      <p className="subtitle2">
        Unlock real-world learning, mentor guidance, and a career-ready portfolio.
      </p>

      <div className="grid">
        {cards.map((card, idx) => (
          <div className={`advantage-card ${card.className}`} key={idx}>
            <img src={card.image} alt={card.title} className="card-bg" />
            <div className="overlayy" />
            <div className="badge">{card.label}</div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkippersAdvantage;
