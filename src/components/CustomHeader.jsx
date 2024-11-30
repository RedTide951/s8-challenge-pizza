import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../../Assets/Iteration-1-assets/logo.svg";

function CustomHeader() {
  const location = useLocation();
  const isIntroPage = location.pathname === "/";

  return (
    <div className={`app-bar ${isIntroPage ? "intro-page" : ""}`}>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      {/* Conditionally render Navbar */}
      {!isIntroPage && <Navbar />}
    </div>
  );
}

export default CustomHeader;
