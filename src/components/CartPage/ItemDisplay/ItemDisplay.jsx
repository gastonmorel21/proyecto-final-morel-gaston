import React from "react";
import { useCart } from "../../../context/cart.context";
import ItemRow from "../../ItemRow/ItemRow";
import TotalRow from "../../TotalRow/TotalRow";
import "./ItemDisplay.css";

const ItemDisplay = () => {
  const cart = useCart();

  return (
    <div className="cart-container-items">
      {cart.length === 0 && <p>Tu carrito esta vacio</p>}
      {cart.map((item) => (
        <ItemRow key={item.id} item={item} />
      ))}
      <TotalRow />
    </div>
  );
};

export default ItemDisplay;
