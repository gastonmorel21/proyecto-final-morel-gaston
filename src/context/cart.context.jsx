import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => setCart([...cart, { ...item, units: 1 }]);

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);

    return { count: newCart.length };
  };

  const sumOneUnitToItemQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          units: item.units + 1,
        };
      }
      return item;
    });

    setCart(newCart);
  };

  const minusOneUnitToItemQuantity = (id) => {
    const product = cart.find((item) => item.id === id);

    if (product.units === 1) return removeItemFromCart(product.id);

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          units: item.units - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const cartTotalUnits = () => {
    const totalUnits = cart.reduce((acc, item) => acc + item.units, 0);
    return totalUnits;
  };

  const cartTotalAmount = () => {
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.units,
      0
    );
    return totalAmount;
  };

  const resetCart = () => setCart([]);

  const handleCheckout = () => {};

  const state = {
    cart,
  };

  const selectors = {
    cartTotalUnits,
    cartTotalAmount,
  };

  const actions = {
    addItemToCart,
    removeItemFromCart,
    sumOneUnitToItemQuantity,
    minusOneUnitToItemQuantity,
    handleCheckout,
    resetCart,
  };

  return (
    <CartContext.Provider value={{ state, selectors, actions }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

export const useCart = () => {
  const {
    state: { cart },
  } = useContext(CartContext);

  return cart;
};

export const useCartActions = () => {
  const {
    actions: {
      addItemToCart,
      removeItemFromCart,
      sumOneUnitToItemQuantity,
      minusOneUnitToItemQuantity,
      resetCart,
    },
  } = useContext(CartContext);

  return {
    addItemToCart,
    removeItemFromCart,
    sumOneUnitToItemQuantity,
    minusOneUnitToItemQuantity,
    resetCart,
  };
};

export const useCartSelectors = () => {
  const {
    selectors: { cartTotalUnits, cartTotalAmount },
  } = useContext(CartContext);

  return {
    cartTotalUnits: cartTotalUnits(),
    cartTotalAmount: cartTotalAmount(),
  };
};
