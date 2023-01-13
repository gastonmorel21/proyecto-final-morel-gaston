import React from "react";
import { Link } from "react-router-dom";
import ItemRow from "../../ItemRow/ItemRow";
import TotalRow from "../../TotalRow/TotalRow";
import "./CartMenu.css";

const CartMenu = ({ cart }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-header">
        <div>
          <p>Carrito: </p>
          <p>Djfhdj32F</p>
        </div>
        <img
          src="https://pic.onlinewebfonts.com/svg/img_185728.png"
          alt="clear-cart"
        />
      </div>
      <div>
        {cart.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>
      <TotalRow />
      <Link to="/cart">
        <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
};

export default CartMenu;
