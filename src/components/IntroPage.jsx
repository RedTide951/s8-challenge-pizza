import React from "react";
import { Typography, Button } from "@mui/material";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import "./IntroPage.css";
import MenuCards from "./MenuCards";

function IntroPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };

  return (
    <>
      <section className="intro-page-banner-container">
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
              aria-label="Acıktım button"
            >
              <Typography variant="h6">Acıktım</Typography>
            </Button>
          </div>
        </div>
      </section>
      <section className="intro-page-content-wrapper">
        <div className="intro-page-menu-bar">
          <div className="intro-page-menu-item">
            <img src="../../Assets/Iteration-2-assets/icons/1.svg" alt="Kore" />
            <span>YENİ! Kore</span>
          </div>
          <div className="intro-page-menu-item">
            <img
              src="../../Assets/Iteration-2-assets/icons/2.svg"
              alt="Pizza"
            />
            <span>Pizza</span>
          </div>
          <div className="intro-page-menu-item">
            <img
              src="../../Assets/Iteration-2-assets/icons/3.svg"
              alt="Burger"
            />
            <span>Burger</span>
          </div>
          <div className="intro-page-menu-item">
            <img
              src="../../Assets/Iteration-2-assets/icons/4.svg"
              alt="Kızartmalar"
            />
            <span>Kızartmalar</span>
          </div>
          <div className="intro-page-menu-item">
            <img
              src="../../Assets/Iteration-2-assets/icons/5.svg"
              alt="Fast Food"
            />
            <span>Fast Food</span>
          </div>
          <div className="intro-page-menu-item">
            <img
              src="../../Assets/Iteration-2-assets/icons/6.svg"
              alt="Gazlı İçecek"
            />
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
              aria-label="Sipariş Ver button for Özel Lezzetus"
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
                aria-label="Sipariş Ver button for Hackatlon Burger Menu"
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
                aria-label="Sipariş Ver button for Çooook hızlı Npm gibi kurye"
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
              <img
                src="../../Assets/Iteration-2-assets/icons/1.svg"
                alt="Ramen"
              />
              <span>Ramen</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img
                src="../../Assets/Iteration-2-assets/icons/2.svg"
                alt="Pizza"
              />
              <span>Pizza</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img
                src="../../Assets/Iteration-2-assets/icons/3.svg"
                alt="Burger"
              />
              <span>Burger</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img
                src="../../Assets/Iteration-2-assets/icons/4.svg"
                alt="French Fries"
              />
              <span>French Fries</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img
                src="../../Assets/Iteration-2-assets/icons/5.svg"
                alt="Fast Food"
              />
              <span>Fast Food</span>
            </div>
            <div className="intro-page-img-menu-item">
              <img
                src="../../Assets/Iteration-2-assets/icons/6.svg"
                alt="Soft Drinks"
              />
              <span>Soft Drinks</span>
            </div>
          </div>
          <MenuCards />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IntroPage;
