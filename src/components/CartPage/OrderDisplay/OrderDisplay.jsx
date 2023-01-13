import React from "react";
import { useCart } from "../../../context/cart.context";
import ItemRow from "../../ItemRow/ItemRow";
import "./OrderDisplay.css";

const OrderDisplay = ({ header = "Resumen de compra", values }) => {
  const cart = useCart();
  const { buyer_name, buyer_surname, buyer_phone, buyer_email } = values;

  return (
    <div className="order-container">
      <h2>{header}</h2>
      <div className="order-information-container">
        <div>
          <p>Nombre: {buyer_name}</p>
          <p>Apellido: {buyer_surname}</p>
        </div>
        <div>
          <p>Telefono: {buyer_phone}</p>
          <p>Emai: {buyer_email}</p>
        </div>
      </div>
      <div className="cart-container-items">
        <h2>Productos</h2>
        {cart.map((item) => (
          <ItemRow key={item.id} item={item} editable={false} />
        ))}
      </div>
    </div>
  );
};

export default OrderDisplay;
