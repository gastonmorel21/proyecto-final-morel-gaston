import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart, useCartActions } from "../context/cart.context";
import { useGetSingleProduct } from "../context/product.context";

const ItemPage = () => {
  const { id } = useParams();
  const product = useGetSingleProduct(id);
  const cart = useCart();
  const { addItemToCart } = useCartActions();
  const productIsAddedToCart = cart.find((item) => item.id === id);

  return (
    <div className="item-page">
      {product === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="item-page-section">
            <div className="item-page-section-header">
              <Link to={`/`}>
                <button className="abs-btn">Volver</button>
              </Link>
              <div />
              <h1 className="item-page-section-title">{product.name}</h1>
            </div>
            <div className="item-page-section-section-description">
              <p>ID: {id}</p>
              <p className="item-page-section-description">
                {product.description}
              </p>
            </div>
            <div className="item-page-section-footer">
              <div className="item-page-section-footer-price">
                <p>Precio</p>
                <p>${product.price}</p>
              </div>
              {productIsAddedToCart ? (
                <Link
                  to={`/cart`}
                  className="item-page-section-footer-cart-btn-link"
                >
                  Ir al Carrito
                </Link>
              ) : (
                <button
                  disabled={product.notFound}
                  onClick={() => addItemToCart(product)}
                  className="item-page-section-footer-cart-btn"
                >
                  Agregar al carrito
                </button>
              )}
            </div>
          </div>
          <div className="item-page-section">
            <img
              className="item-page-section-img"
              src={product.img}
              alt={`${product.name}`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemPage;
