import React from 'react';
import './Circle.css';
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import med from "../assets/med-circle1.png";

const Circle = () => {
  return (
  <div className="circle-section1">
    <div className="desktop-circle">
    <section className='circlebody1'>
      <div className="circle-section">
        <h1 className="circle-heading">
            <span className="highlightc">NSDC</span> Certification Benefits
        </h1>
        <div className="circle-content">
            <div className="circle-left">
            <div className="circle-item1">
                <img src={i1} className="circle-icon1" />
                <p>Improves career advancement potential</p>
            </div>
            <div className="circle-item2">
                <img src={i2} className="circle-icon2" />
                <p>Enhances job prospects and growth</p>
            </div>
            <div className="circle-item">
                <img src={i3} className="circle-icon3" />
                <p>Ensures high standards of learning</p>
            </div>
            <div className="circle-item4">
                <img src={i4} className="circle-icon4" />
                <p>Core benefit of the Program</p>
            </div>
            </div>
            <div className="circle-container">
            <div class="circle-label label-11">Career <br/>Boost</div>
            <div class="circle-label label-22">Employment <br/>Opportunities</div>
            <div class="circle-label label-33">Quality <br/>Education</div>
            <div class="circle-label label-44">NSDC <br/>Certification</div>
            </div>
        </div>
        </div> 
    </section>
    </div>

     <div className="mobile-circle">
      <img src={med} alt="Mobile View Circle" />
      </div>

    </div>
  );
};

export default Circle;
