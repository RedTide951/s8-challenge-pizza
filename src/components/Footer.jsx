import React from "react";
import "./Footer.css";
import logoFooter from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import locationIcon from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import mailIcon from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import phoneIcon from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-info-container">
        <img className="footer-logo" src={logoFooter} alt="Logo" />
        <ul className="footer-info-list">
          <li>
            <img src={locationIcon} alt="" />
            <p>341 Londonderry Road, Istanbul Turkiye</p>
          </li>
          <li>
            <img src={mailIcon} alt="" />
            <p>aciktim@teknolojikyemekler.com</p>
          </li>
          <li>
            <img src={phoneIcon} alt="" />
            <p>+90 216 123 45 67</p>
          </li>
        </ul>
      </div>
      <div className="footer-menu-container">
        <h3>Hot Menu</h3>
        <ul className="footer-menu-list">
          <li>
            <a href="">Terminal Pizza</a>
          </li>
          <li>
            <a href="">Terminal Pizza</a>
          </li>
          <li>
            <a href="">Terminal Pizza</a>
          </li>
          <li>
            <a href="">Terminal Pizza</a>
          </li>
        </ul>
      </div>
      <div className="footer-spacer-container">asd</div>
      <div className="footer-gallery-container">asd</div>
    </div>
  );
}

export default Footer;
