import React from "react";
import Navbar from "./Navbar";

function CustomHeader() {
  return (
    <div className="app-bar">
      <div className="logo-container">
        <img src={"../../Assets/Iteration-1-assets/logo.svg"} alt="Logo" />
      </div>
      <Navbar />
    </div>
  );
}

export default CustomHeader;
