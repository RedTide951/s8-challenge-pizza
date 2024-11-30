import React from "react";
import homeBanner from "../../Assets/Iteration-1-assets/home-banner.png";
import { Typography } from "@mui/material";

function IntroPage() {
  const bannerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    whiteSpace: "nowrap" /* Prevent breaking mid-word */,
    overflow: "hidden" /* Ensure it doesn't overflow */,
    marginTop: "8rem",
    paddingLeft: "25%",
    paddingRight: "25%",
  };

  const headerStyle = {
    color: "white",
    zIndex: 2,
  };

  return (
    <div>
      <img src={homeBanner} style={bannerStyle} alt="" />
      <div style={textContainerStyle}>
        <Typography variant="h1" style={headerStyle}>
          KOD ACIKTIRIR, <br /> PİZZA DOYURUR!
        </Typography>
      </div>
    </div>
  );
}

export default IntroPage;
