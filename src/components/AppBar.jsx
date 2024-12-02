import React from "react";
import NavLinks from "./NavLinks";
import logo from "../../Assets/Iteration-1-assets/logo.svg";

function AppBar() {
  return (
    <div className="app-bar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <NavLinks />
    </div>
  );
}

export default AppBar;
