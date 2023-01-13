import React from "react";
import { useCartActions } from "../../context/cart.context";
import { useUiActions } from "../../context/ui.context";

const ItemRow = ({ item, editable = true }) => {
  const { setIsCartOpen } = useUiActions();
  const { sumOneUnitToItemQuantity, minusOneUnitToItemQuantity } =
    useCartActions();

  const handleRemoveOneUnit = (id) => {
    const { count } = minusOneUnitToItemQuantity(id);

    if (count === 0) {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      <div className="cart-item-row">
        <img
          src={item.img}
          alt="thumb"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <div className="cart-item-row-units-counter">
          {editable && (
            <span
              className="unit-btn"
              onClick={() => handleRemoveOneUnit(item.id)}
            >
              -
            </span>
          )}
          <span>{item.units}</span>
          {editable && (
            <span
              className="unit-btn"
              onClick={() => sumOneUnitToItemQuantity(item.id)}
            >
              +
            </span>
          )}
        </div>
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
      <div className="separator"></div>
    </>
  );
};

export default ItemRow;
