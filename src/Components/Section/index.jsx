import React from "react";
import "./style.css";
import sectionImg1 from "../../assets/section-img1.svg";
import sectionImg2 from "../../assets/section-img2.svg";
import sectionImg3 from "../../assets/section-img3.svg";
import sectionImg4 from "../../assets/section-img4.svg";
import sectionImg5 from "../../assets/section-png.png";
import sectionImg6 from "../../assets/card3-img.png";
import sectionImg7 from "../../assets/section-img5.svg";
import sectionImg8 from "../../assets/section-img6.svg";
import sectionImg9 from "../../assets/section-img7.svg";
import sectionImg10 from "../../assets/section-img8.svg";
import sectionImg11 from "../../assets/section-img9.svg";
import sectionImg12 from "../../assets/section-img10.svg";
import sectionImg13 from "../../assets/uman.png";
import sectionImg14 from "../../assets/barg1.png";
import sectionImg15 from "../../assets/barg2.png";

function Section() {
  return (
    <div className="section">
      <div className="section-card1">
        <h2>HR Production of the Highest Quality</h2>
        <div className="section-items">
          <div className="item">
            <img src={sectionImg1} alt="" />
            <p>Educates & Informs Employee Expectations</p>
          </div>
          <div className="item">
            <img src={sectionImg2} alt="" />
            <p>Educates & Informs Employee Expectations</p>
          </div>
          <div className="item">
            <img src={sectionImg3} alt="" />
            <p>Educates & Informs Employee Expectations</p>
          </div>
          <div className="item">
            <img src={sectionImg4} alt="" />
            <p>Educates & Informs Employee Expectations</p>
          </div>
        </div>
      </div>
      <div className="section-card2">
        <h2>Employees come in all shapes and sizes. Find the right fit.</h2>
        <p>
          Focus on casting and screening. Let Clerksy handle contracts, resolve
          any on set-conflicts and make sure you are compliant with work and
          safety boards.
        </p>
        <img src={sectionImg5} alt="" />
      </div>
      <div className="section-card3">
        <div>
          <h2>How the scenes fit together</h2>
          <p>
            Employee Training & Development, Diversity & Inclusion Programs, and
            Conflict Resolution.
          </p>
        </div>
        <div>
          <img src={sectionImg6} alt="" />
        </div>
      </div>
      <div className="section-card4">
        <h2>Consider everyone's best interest</h2>
        <p>HR is for everyone. Clerksy can help you.</p>
        <div className="section-card4-items">
          <div className="card1-card4">
            <img src={sectionImg7} alt="" />
            <h3>Protect Your Company</h3>
            <ul className="card1-card4-list">
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>
          <div className="card2-card4">
            <img src={sectionImg8} alt="" />
            <h3>Set Your Employees Up For Success</h3>
            <ul className="card1-card4-list">
              <li>Learning & Development</li>
              <li>Employee Relations</li>
              <li>Benefit Management</li>
              <li>Employee Performance</li>
            </ul>
          </div>
          <div className="card3-card4">
            <img src={sectionImg9} alt="" />
            <h3>Know Your Industry's Legal Landscape</h3>
            <ul className="card1-card4-list">
              <li>Work Place Investigations</li>
              <li>Employee Mediations</li>
              <li>Performance Tracking</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-card5">
        <div class="ikkinchi-qism konteyner">
          <h2 class="sarlavha">It's easy as 1, 2, 3</h2>
          <p class="tavsif">
            Clerksy can help use your unique business needs. Here's how:
          </p>
          <div class="qism-konteyner">
            <div class="quti">
              <p>Fill out a form and tell us what you're looking for:</p>
              <h4>5 minutes</h4>
            </div>
            <img class="strelka-rasm" src={sectionImg10} alt="Strelka" />
            <div class="quti">
              <p>Time it will take a Clerksy rep to follow up:</p>
              <h4>24 hours</h4>
            </div>
            <img class="strelka-rasm" src={sectionImg11} alt="Strelka" />
            <div class="quti">
              <p>Get our monthly plans at an introductory price:</p>
              <h4>$969 USD</h4>
            </div>
            <img class="aylana-rasm" src={sectionImg12} alt="" />
          </div>
          <button class="qongiroq-tugmasi">Bepul maslahatga yozilish</button>
        </div>
      </div>
      <div className="section-card3">
        <div>
          <h2>Not just another HR resource.</h2>
          <p>Simple. Entertaining. Informative.</p>
          <button className="download-btn">Download E-book</button>
        </div>
        <div>
          <img src={sectionImg13} alt="" />
        </div>
      </div>
      <div className="section-card6">
        <img src={sectionImg14} alt="" />
        <div>
          <h2>Get Started With Clerksy</h2>
          <p>Make sure your business puts people first.</p>
          <button>Book a Free Discovery Call</button>
        </div>
        <img src={sectionImg15} alt="" />
      </div>
      <div className="section-card7">
        <div>
          <h2>Stay up to date!</h2>
          <p className="section-card7-p1">
            Sign up for the latest Clerksy news.
          </p>
        </div>
        <div>
          <div className="section-card7-btn-div">
          <input type="text" />
            <button>Sign Up</button>
          </div>
            <p className="section-card7-p2">
              By submitting your email you agree to receive updates about
              Clerksy. You can unsubscribe at any time. View our full
            </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
