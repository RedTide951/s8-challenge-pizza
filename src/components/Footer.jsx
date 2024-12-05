import React from "react";
import "./Footer.css";
import logoFooter from "../../Assets/Iteration-2-assets/footer/logo-footer.svg";
import locationIcon from "../../Assets/Iteration-2-assets/footer/icons/icon-1.png";
import mailIcon from "../../Assets/Iteration-2-assets/footer/icons/icon-2.png";
import phoneIcon from "../../Assets/Iteration-2-assets/footer/icons/icon-3.png";
import li0 from "../../Assets/Iteration-2-assets/footer/insta/li-0.png";
import li1 from "../../Assets/Iteration-2-assets/footer/insta/li-1.png";
import li2 from "../../Assets/Iteration-2-assets/footer/insta/li-2.png";
import li3 from "../../Assets/Iteration-2-assets/footer/insta/li-3.png";
import li4 from "../../Assets/Iteration-2-assets/footer/insta/li-4.png";
import li5 from "../../Assets/Iteration-2-assets/footer/insta/li-5.png";
import { ImageList, ImageListItem } from "@mui/material";

function Footer() {
  return (
    <>
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
          <h3 className="footer-heading">Hot Menu</h3>
          <ul className="footer-menu-list">
            <li>
              <a href="">Terminal Pizza</a>
            </li>
            <li>
              <a href="">5 Kişilik Pizza</a>
            </li>
            <li>
              <a href="">useEffect Pizza</a>
            </li>
            <li>
              <a href="">Ultimate Hacker Burger</a>
            </li>
            <li>
              <a href="">JSX Patates Kızartması</a>
            </li>
          </ul>
        </div>
        <div className="footer-spacer-container"></div>
        <div className="footer-gallery-container">
          <h3 className="footer-heading">Instagram</h3>
          <ImageList cols={3}>
            <ImageListItem key={1}>
              <img src={li0} loading="lazy" />
            </ImageListItem>
            <ImageListItem key={2}>
              <img src={li1} loading="lazy" />
            </ImageListItem>
            <ImageListItem key={3}>
              <img src={li2} loading="lazy" />
            </ImageListItem>
            <ImageListItem key={4}>
              <img src={li3} loading="lazy" />
            </ImageListItem>
            <ImageListItem key={5}>
              <img src={li4} loading="lazy" />
            </ImageListItem>
            <ImageListItem key={6}>
              <img src={li5} loading="lazy" />
            </ImageListItem>
          </ImageList>
        </div>
      </div>
      <div className="copyright-section">
        <div className="copyright-text">
          <p>2024 Teknolojik Yemekler</p>
        </div>
        <div className="social-icons"></div>
      </div>
    </>
  );
}

export default Footer;
