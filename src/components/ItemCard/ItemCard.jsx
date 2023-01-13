import React from "react";
import { Link } from "react-router-dom";
import CardTextBox from "./CardTextBox/CardTextBox";

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <CardTextBox text={item.name} />
      <div>
        <img className="card-img " src={item.img} alt={`${item.name}`} />
      </div>
      <p className="card-description">
        {" "}
        {item.description.substring(0, 50)}
        {item.description.length > 50 && "..."}
      </p>
      <Link to={`/item/${item.id}`}>
        <button className="card-details-btn">Ver detalle del producto</button>
      </Link>
      <CardTextBox text={`Stock disponible ${item.quantity}`} place="footer" />
    </div>
  );
};

export default ItemCard;
