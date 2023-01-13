import React from "react";
import "./FormDisplay.css";

const FormDisplay = ({ formValues, formErrors, handleInputChange }) => {
  return (
    <form>
      <div>
        <label htmlFor="buyer_name">Nombre</label>
        <input
          name="buyer_name"
          value={formValues.buyer_name}
          onChange={handleInputChange}
        />
        {formErrors.buyer_name && (
          <span className="error-msg">{formErrors.buyer_name}</span>
        )}
      </div>
      <div>
        <label htmlFor="buyer_surname">Apellido</label>
        <input
          name="buyer_surname"
          value={formValues.buyer_surname}
          onChange={handleInputChange}
        />
        {formErrors.buyer_surname && (
          <span className="error-msg">{formErrors.buyer_surname}</span>
        )}
      </div>
      <div>
        <label htmlFor="buyer_phone">Telefono</label>
        <input
          name="buyer_phone"
          value={formValues.buyer_phone}
          onChange={handleInputChange}
        />
        {formErrors.buyer_phone && (
          <span className="error-msg">{formErrors.buyer_phone}</span>
        )}
      </div>
      <div>
        <label htmlFor="buyer_email">Email</label>
        <input
          type="email"
          name="buyer_email"
          value={formValues.buyer_email}
          onChange={handleInputChange}
        />
        {formErrors.buyer_email && (
          <span className="error-msg">{formErrors.buyer_email}</span>
        )}
      </div>
      <div>
        <label htmlFor="buyer_email_confirmation">Confirmar Email</label>
        <input
          type="email"
          name="buyer_email_confirmation"
          value={formValues.buyer_email_confirmation}
          onChange={handleInputChange}
        />
        {formErrors.buyer_email_confirmation && (
          <span className="error-msg">
            {formErrors.buyer_email_confirmation}
          </span>
        )}
      </div>
    </form>
  );
};

export default FormDisplay;
