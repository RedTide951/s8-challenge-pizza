import AppBar from "./AppBar";
import React from "react";
import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <>
      <AppBar />
      <div className="order-page-wrapper">
        <OrderForm />
      </div>
    </>
  );
}

export default OrderPage;
