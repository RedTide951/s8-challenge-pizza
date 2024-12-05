import React from "react";
import { Link } from "react-router-dom";

const MenuCards = () => {
  const items = [
    {
      id: 1,
      image: "../../Assets/Iteration-2-assets/pictures/food-1.png",
      name: "Terminal Pizza",
      rating: 4.9,
      ratingCount: 200,
      price: "85.50₺",
    },
    {
      id: 2,
      image: "../../Assets/Iteration-2-assets/pictures/food-2.png",
      name: "Terminal Pizza",
      rating: 4.9,
      ratingCount: 200,
      price: "85.50₺",
    },
    {
      id: 3,
      image: "../../Assets/Iteration-2-assets/pictures/food-3.png",
      name: "Terminal Pizza",
      rating: 4.9,
      ratingCount: 200,
      price: "85.50₺",
    },
  ];

  return (
    <div className="intro-page-img-menu-cards-container">
      {items.map((item) => (
        <Link
          to={`/siparis-formu`}
          className="intro-page-img-menu-card1"
          key={item.id}
        >
          <div className="card-image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-heading-container">
            <h4 className="card-heading">{item.name}</h4>
          </div>
          <div className="card-details-container">
            <p className="card-detail-rating">{item.rating}</p>
            <p className="card-detail-rating-count">({item.ratingCount})</p>
            <p className="card-detail-price">{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuCards;
