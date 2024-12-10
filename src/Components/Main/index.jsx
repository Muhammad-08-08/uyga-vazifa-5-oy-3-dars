import React from "react";
import "./style.css";
import mainImg1 from "../../assets/main-img1.png";
import mainImg2 from "../../assets/main-img2.png";
import mainImg3 from "../../assets/stripe.svg";
import mainImg4 from "../../assets/google.svg";
import mainImg5 from "../../assets/notion.svg";
import mainImg6 from "../../assets/gusto.svg";
import mainImg7 from "../../assets/aircall.svg";

function Main() {
  return (
    <div className="main">
      <div className="main-card">
        <div className="card-image">
          <img src={mainImg1} alt="" />
        </div>
        <div className="card-text">
          <h2>Put the human back in HR.</h2>
          <p>
            Your employees are the real stars. Show the love and help them
            perform!
          </p>
        </div>
      </div>
      <div className="main-card1">
        <div className="card-image">
          <img src={mainImg2} alt="" />
        </div>
        <div className="card-text">
          <h2>You don’t have to play all the parts.</h2>
          <p>
            Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
            help.
          </p>
        </div>
      </div>
      <div>
        <h2 className="main-h2">We partner with the best</h2>
        <div className="main-icon">
            <img src={mainImg3} alt="" />
            <img src={mainImg4} alt="" />
            <img src={mainImg5} alt="" />
            <img src={mainImg6} alt="" />
            <img src={mainImg7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
