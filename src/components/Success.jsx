import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "./Success.css";
import Footer from "./Footer";

function Success() {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  console.log(orderDetails);
  return (
    <>
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
          <p className="success-styled-text">lezzetin yolda</p>
          <p className="success-confirmation-text">SİPARİŞ ALINDI</p>
          <hr className="success-hr" />
        </div>
        <div className="success-order-details-container">
          <h3 className="success-pizza-name">Pizza Name</h3>
          <div className="success-order-details-display">
            <p>
              Boyut:{" "}
              <span style={{ fontWeight: "bold" }}>{orderDetails.size}</span>
            </p>
            <p>
              Hamur:{" "}
              <span style={{ fontWeight: "bold" }}>{orderDetails.crust}</span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span style={{ fontWeight: "bold" }}>
                {orderDetails.ingredients}
              </span>
            </p>
          </div>
        </div>
        <div className="success-order-price-details">
          <h3 className="success-order-price-details-header">
            Sipariş Toplamı
          </h3>
          <div className="success-order-price-details-display">
            <div className="secimler">
              <p>Seçimler</p>
              <p>price{}</p>
            </div>
            <div className="toplam">
              <p>Toplam</p>
              <p>price{}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
