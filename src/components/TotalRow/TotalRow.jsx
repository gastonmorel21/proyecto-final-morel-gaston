import React from "react";
import { useCartSelectors } from "../../context/cart.context";

const TotalRow = () => {
  const { cartTotalUnits, cartTotalAmount } = useCartSelectors();
  return (
    <div className="cart-item-info-row">
      <p>{cartTotalUnits} unidades totales</p>
      <div>
        <p>Total: </p>
        <p>${cartTotalAmount}</p>
      </div>
    </div>
  );
};

export default TotalRow;
