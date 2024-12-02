import React from "react";
import homeBanner from "../../Assets/Iteration-1-assets/home-banner.png";
import { Typography, Button } from "@mui/material";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { useHistory } from "react-router-dom";


function IntroPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };



  return (
    <div className="intro-page">
      <img src={logo} alt="Logo" className="logo" />
      <img src={homeBanner} alt="" className="intro-page-home-banner" />
      <div className="intro-page-heading-container">
        <Typography variant="h1" className="intro-page-heading">
          KOD ACIKTIRIR, <br /> PİZZA DOYURUR!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className="intro-page-button"
          onClick={handleClick}
        >
          <Typography variant="h6">Acıktım</Typography>
        </Button>
      </div>
    </div>
  );
}

export default IntroPage;
