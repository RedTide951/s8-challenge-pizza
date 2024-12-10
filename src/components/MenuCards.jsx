import React from "react";
import { Link } from "react-router-dom";

const MenuCards = ({ items }) => {
  return (
    <div className="intro-page-img-menu-cards-container">
      {items.map((item) => (
        <Link
          to={{
            pathname: "/siparis-formu",
            state: {
              name: item.name,
              price: item.price,
              rating: item.rating,
              image: item.image,
              id: item.id,
              description: item.description,
              ratingCount: item.ratingCount,
            },
          }}
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
            <p className="card-detail-rating">Puan: {item.rating}</p>
            <p className="card-detail-price">{item.price}₺</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuCards;
