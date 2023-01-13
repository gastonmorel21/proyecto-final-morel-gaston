import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/CategoryPage.css";
import "./styles/ItemPage.css";
import "./styles/HomePage.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Se importa el contexto desde react-router-dom
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product.context";
import { CartProvider } from "./context/cart.context";
import { UiProvider } from "./context/ui.context";
import { OrderProvider } from "./context/order.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Se usa en forma de wrapper para que todos los componentes hijos tengan
    acceso a las rutas */}
    <BrowserRouter>
      <UiProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </UiProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
