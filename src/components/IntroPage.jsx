import React from "react";
import { Typography, Button } from "@mui/material";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import "./IntroPage.css";

function IntroPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };

  return (
    <>
      <div className="intro-page-banner-container">
        <div className="intro-page-hero">
          <img className="app-bar-logo" src={logo} alt="Logo" />
          <div className="intro-page-hero-text-container">
            <h2 className="intro-page-hero-styled-text">fırsatı kaçırma</h2>
            <h1 className="intro-page-hero-heading">
              KOD ACIKTIRIR, <br /> PİZZA DOYURUR!
            </h1>
            <Button
              variant="contained"
              color="secondary"
              className="intro-page-hero-button"
              id="intro-page-hero-button"
              onClick={handleClick}
            >
              <Typography variant="h6">Acıktım</Typography>
            </Button>
          </div>
        </div>
      </div>
      <div className="intro-page-content-wrapper">
        <div className="intro-page-menu-bar">
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/1.svg" alt="" />
            <span>YENİ! Kore</span>
          </div>
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/2.svg" alt="" />
            <span>Pizza</span>
          </div>
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/3.svg" alt="" />
            <span>Burger</span>
          </div>
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/4.svg" alt="" />
            <span>Kızartmalar</span>
          </div>
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/5.svg" alt="" />
            <span>Fast Food</span>
          </div>
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/6.svg" alt="" />
            <span>Gazlı İçecek</span>
          </div>
        </div>
        <div className="intro-page-cta-wrapper">
          <div className="intro-page-cta-left-column">
            <h2 className="cta-left-heading">
              Özel <br /> Lezzetus
            </h2>
            <p className="cta-left-subtitle">Position: Absolute Acı Burger</p>
            <Button
              variant="contained"
              color="secondary"
              id="cta-left-button"
              onClick={handleClick}
            >
              <span>Sipariş Ver</span>
            </Button>
          </div>
          <div className="intro-page-cta-right-column">
            <div className="cta-right-card-1">
              <h2 className="cta-right-card-1-heading">
                Hackatlon <br /> Burger Menu
              </h2>
              <Button
                variant="contained"
                color="secondary"
                id="cta-right-button1"
                onClick={handleClick}
              >
                <span>Sipariş Ver</span>
              </Button>
            </div>
            <div className="cta-right-card-2">
              <h2 className="cta-right-card-2-heading">
                <span style={{ color: "#ce2829" }}>Çooook </span> hızlı <br />{" "}
                Npm gibi kurye
              </h2>
              <Button
                variant="contained"
                color="secondary"
                id="cta-right-button2"
                onClick={handleClick}
              >
                <span>Sipariş Ver</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="intro-page-img-menu-wrapper">
          <div className="intro-page-img-menu-heading-container">
            <p className="intro-page-img-menu-styled-heading">
              en çok paketlenen menüler
            </p>
            <h3 className="intro-page-img-menu-heading">
              Acıktıran Kodlara Doyuran Lezzetler
            </h3>
          </div>
          <div className="intro-page-img-menu-bar">
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/1.svg" alt="" />
              <span>Ramen</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/2.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/3.svg" alt="" />
              <span>Burger</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/4.svg" alt="" />
              <span>French Fries</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/5.svg" alt="" />
              <span>Fast Food</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img src="../../Assets/Iteration-2-assets/icons/6.svg" alt="" />
              <span>Soft Drinks</span>
            </div>
          </div>
          <div className="intro-page-img-menu-cards-container">
            <div className="intro-page-img-menu-card1">
              <div className="card-image-container">
                <img
                  src="../../Assets/Iteration-2-assets/pictures/food-1.png"
                  alt=""
                />
              </div>
              <div className="card-heading-container">
                <h4 className="card-heading">Terminal Pizza</h4>
              </div>
              <div className="card-details-container">
                <p className="card-detail-rating">4.9</p>
                <p className="card-detail-rating-count">(200)</p>
                <p className="card-detail-price">85.50₺</p>
              </div>
            </div>
            <div className="intro-page-img-menu-card1">
              <div className="card-image-container">
                <img
                  src="../../Assets/Iteration-2-assets/pictures/food-2.png"
                  alt=""
                />
              </div>
              <div className="card-heading-container">
                <h4 className="card-heading">Terminal Pizza</h4>
              </div>
              <div className="card-details-container">
                <p className="card-detail-rating">4.9</p>
                <p className="card-detail-rating-count">(200)</p>
                <p className="card-detail-price">85.50₺</p>
              </div>
            </div>
            <div className="intro-page-img-menu-card1">
              <div className="card-image-container">
                <img
                  src="../../Assets/Iteration-2-assets/pictures/food-3.png"
                  alt=""
                />
              </div>
              <div className="card-heading-container">
                <h4 className="card-heading">Terminal Pizza</h4>
              </div>
              <div className="card-details-container">
                <p className="card-detail-rating">4.9</p>
                <p className="card-detail-rating-count">(200)</p>
                <p className="card-detail-price">85.50₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IntroPage;
