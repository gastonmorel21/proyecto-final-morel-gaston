import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/cart.context";
import CartMenu from "./CartMenu/CartMenu";
import { useUiActions, useUiState } from "../../context/ui.context";
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  const location = useLocation();
  const { isCartOpen } = useUiState();
  const { setIsCartOpen } = useUiActions();
  const cart = useCart();

  const pathWhereNotToDisplayCart = location.pathname.includes("/order") || location.pathname.includes("/cart")

  console.warn(location)

  return (
    <nav className="ulNav">
      <Link to="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNjIb6GQvFLqKCOKOZusb_z63m23Y-gOOKA&usqp=CAU"
          alt="home-icon"
        />
      </Link>
      {!pathWhereNotToDisplayCart && (
        <div className="cart-container">
          
          <img
            className="cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
            src="data:image/png;base64,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"
            alt="carrito 🛒"
          />
          <div
            className={
              cart.length > 0 ? "cart-indicator" : "cart-indicator no-display"
            }
          >
            {cart.length}
          </div>
          {isCartOpen && (
            <p className="cart-menu">
              {cart.length > 0 ? (
                <CartMenu cart={cart} />
              ) : (
                "Tu carrito esta vacio"
              )}
            </p>
          )}
        </div>
      )}
    </nav>
  );
}
export default NavBar;
