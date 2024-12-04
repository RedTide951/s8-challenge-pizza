import React from "react";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "./Success.css";

function Success() {
  return (
    <div className="success-page">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ height: "2.5rem" }}
        />
      </div>
      <div className="success-order-confirmed-container">
        <p>lezzetin yolda</p>
        <p>Sipariş Alındı</p>
      </div>
      <div className="success-order-details-container"></div>
      <div className="success-order-price"></div>
    </div>
  );
}

export default Success;
