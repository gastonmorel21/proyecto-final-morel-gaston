import React, { createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { orderActions } from "../actions";

const OrderContext = createContext({});

const OrderProvider = ({ children }) => {
  const [order, setOrder] = React.useState(null);
  const params = useParams();

  useEffect(() => {
    console.warn({ params });
    const fetchOrder = async () => {
      const products = await orderActions.getSingleOrder();
      setOrder(products);
    };
    fetchOrder("ddd");
  }, []);

  const state = {
    order,
  };
  const actions = {
    setOrder,
  };

  return (
    <OrderContext.Provider value={{ state, actions }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext };

export const useOrder = (orderId) => {
  const {
    state: { order },
  } = React.useContext(OrderContext);

  return order;
};

export const useUiActions = () => {
  const {
    actions: { setOrder },
  } = React.useContext(OrderContext);
  return { setOrder };
};
