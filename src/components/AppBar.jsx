import React from "react";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import bannerImage from "../../Assets/Iteration-2-assets/pictures/form-banner.png";
import "./AppBar.css";

function AppBar() {
  return (
    <>
      <div className="app-bar-logo-container">
        <img className="app-bar-logo" src={logo} alt="Logo" />
      </div>
      <img src={bannerImage} alt="" />
    </>
  );
}

export default AppBar;
