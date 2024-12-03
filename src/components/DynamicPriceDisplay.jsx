import React, { useEffect, useState } from "react";

const BASE_PRICE = 100; // Base price of the pizza
const INGREDIENT_PRICE = 5; // Price per ingredient

function DynamicPriceDisplay({ quantity, ingredients, size }) {
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [extrasPrice, setExtrasPrice] = useState(0);

  // Function to calculate the total price
  const calculatePrice = () => {
    const ingredientCost = ingredients.length * INGREDIENT_PRICE * quantity;

    let newPizzaPrice;

    if (size === "small") {
      newPizzaPrice = BASE_PRICE * 0.8;
    } else if (size === "medium") {
      newPizzaPrice = BASE_PRICE * 1;
    } else if (size === "large") {
      newPizzaPrice = BASE_PRICE * 1.5;
    }

    const totalPrice = quantity * newPizzaPrice + quantity * ingredientCost;

    setTotalPrice(totalPrice);
    setExtrasPrice(ingredientCost);
  };

  useEffect(() => {
    calculatePrice();
  }, [quantity, ingredients, size]);

  return (
    <>
      <h3 className="form-heading" style={{ textAlign: "left" }}>
        Sipariş Toplamı
      </h3>
      <div className="secimler-container">
        <p className="secimler-text">Seçimler</p>
        <p className="secimler-text">{extrasPrice}₺</p>
      </div>
      <div className="toplam-container">
        <p className="toplam-text">Toplam</p>
        <p className="toplam-text">{totalPrice}₺</p>
      </div>
    </>
  );
}

export default DynamicPriceDisplay;
