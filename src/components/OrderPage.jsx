import AppBar from "./AppBar";
import React from "react";
import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <>
      <AppBar />
      <div className="order-page-wrapper">
        <div className="description-container">
          <div className="item-heading-container">
            <h2 className="item-name-heading">Position Absolute Acı Pizza</h2>
          </div>
          <div className="numbers-container">
            <p className="price">85.50₺</p>
            <p></p>
            <p className="rating">4.9</p>
            <p className="bilinmeyen-sayi">200</p>
          </div>
          <div className="item-description-text">
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir
            </p>
          </div>
        </div>
        <OrderForm />
      </div>
    </>
  );
}

export default OrderPage;
