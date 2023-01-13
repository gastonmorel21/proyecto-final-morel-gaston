import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderActions } from "../actions";
import FormDisplay from "../components/CartPage/FormDisplay/FormDisplay";
import ItemDisplay from "../components/CartPage/ItemDisplay/ItemDisplay";
import OrderDisplay from "../components/CartPage/OrderDisplay/OrderDisplay";
import { useCart, useCartActions } from "../context/cart.context";
import { useUiActions } from "../context/ui.context";
import "../styles/CartPage.css";
import { orderFormValidations } from "../validations/validations";

const content = {
  button: {
    1: "Siguiente paso",
    2: "Guardar datos",
    3: "Finalizar compra",
  },
  prevButton: {
    2: "Paso anterior",
    3: "Editar datos",
  },
  actionDescription: {
    1: "Esta todo lo que quieres en tu carrito?",
    2: "Completa tus datos personales para finalizar la compra",
    3: "Revisa tu orden y finaliza la compra",
  },
};

const CartPage = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = React.useState({
    buyer_name: "",
    buyer_surname: "",
    buyer_phone: "",
    buyer_email: "",
    buyer_email_confirmation: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const cart = useCart();
  const navigate = useNavigate();
  const { setIsCartOpen } = useUiActions();
  const { resetCart } = useCartActions();

  useEffect(() => {
    if (cart.length === 0) navigate("/");

    setIsCartOpen(false);
  }, []);

  const handleOrderCreation = async () => {
    const newOrder = {
      buyer: {
        buyer_name: formValues.buyer_name,
        buyer_surname: formValues.buyer_surname,
        buyer_phone: formValues.buyer_phone,
        buyer_email: formValues.buyer_email,
      },
      products: cart,
      order_state: "generada",
      order_date: new Date().toLocaleDateString("es-AR"),
    };

    const orderCreated = await orderActions.createOrder(newOrder);

    resetCart();

    navigate(`/order/${orderCreated.id}`);
  };

  const handleInputChange = (e) => {
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null,
      });
    }

    if (e.target.name === "buyer_phone") {
      formValues[e.target.name] = e.target.value.replace(/\D/g, "");

      return setFormValues({ ...formValues });
    }

    formValues[e.target.name] = e.target.value;

    setFormValues({ ...formValues });
  };

  const handleNextStep = () => {
    step === 1 && setStep(2);
    step === 2 && handleForm();
    step === 3 && handleOrderCreation();
  };

  const handlePrevStep = () => {
    setFormErrors({});
    setStep(step - 1);
  };

  const handleForm = () => {
    const errors = orderFormValidations(formValues);

    if (Object.entries(errors).length > 0) return setFormErrors(errors);

    setStep(3);
  };

  return (
    <div>
      <h2>Carrito: ttrt233</h2>
      <div className="cart-container-page">
        {step === 1 && <ItemDisplay />}
        {step === 2 && (
          <FormDisplay
            formValues={formValues}
            handleInputChange={handleInputChange}
            formErrors={formErrors}
          />
        )}
        {step === 3 && <OrderDisplay values={formValues} />}
        <div className="cart-action-side">
          <p>Paso: {step}/3</p>
          <p>{content.actionDescription[step]}</p>
          <div className="cart-stepper">
            {step > 1 && (
              <button className="checkout" onClick={handlePrevStep}>
                {" "}
                {content.prevButton[step]}
              </button>
            )}
            <button
              onClick={handleNextStep}
              className={step === 3 ? "checkout-final-btn" : "checkout"}
            >
              {content.button[step]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
