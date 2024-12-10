import React from "react";
import "./style.css";
import FooterLogo from "../../assets/footer-logo.svg";
import Faceboock from "../../assets/faceboock.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/in.svg";
import Instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <div className="footer">  
     <div className="footer-flex">
     <div>
        <img src={FooterLogo} alt="" />
      </div>
      <div>
        <h3>A people company.</h3>
      </div>
      <div className="footer-icon">
        <img src={Faceboock} alt="" />
        <img src={Twitter} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Instagram} alt="" />
      </div>
     </div>
     <div className="footer-bottom">
     <p className="chiqilgam">© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>
     <div className="footer-plar">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>GDPR</p>
        <p>Careers</p>
        <p>Press Kit</p>
     </div>
     </div>
    </div>
  );
}

export default Footer;
