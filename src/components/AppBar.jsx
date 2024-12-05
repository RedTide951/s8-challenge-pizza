import React from "react";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "./AppBar.css";

function AppBar() {
  return (
    <>
      <div className="app-bar-logo-container">
        <img className="app-bar-logo" src={logo} alt="Logo" />
      </div>
    </>
  );
}

export default AppBar;
