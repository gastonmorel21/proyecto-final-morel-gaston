import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { orderActions } from "../actions";
import ItemRow from "../components/ItemRow/ItemRow";
import "../styles/OrderPage.css";

const OrderPage = () => {
  const params = useParams();
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    console.warn({ params });
    const fetchOrder = async () => {
      const order = await orderActions.getSingleOrder(params.id);
      setOrder(order);
    };
    fetchOrder("ddd");
  }, []);

  return (
    <div className="order-page-container">
      {order ? (
        <div className="order-invoice">
          <h2>{`Ordern ${order.id}`}</h2>
          <div className="order-information-container">
            <div>
              <p>Nombre: {order.buyer.buyer_name}</p>
              <p>Apellido: {order.buyer.buyer_surname}</p>
            </div>
            <div>
              <p>Telefono: {order.buyer.buyer_phone}</p>
              <p>Emai: {order.buyer.buyer_email}</p>
            </div>
          </div>
          <div className="cart-container-items">
            <h2>Productos</h2>
            {order.products.map((item) => (
              <ItemRow key={item.id} item={item} editable={false} />
            ))}
          </div>
        </div>
      ) : (
        <p>Buscando la orden</p>
      )}
    </div>
  );
};

export default OrderPage;
