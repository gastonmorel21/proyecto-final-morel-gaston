export const orderFormValidations = (formValues) => {
  const errors = {};
  const {
    buyer_name,
    buyer_surname,
    buyer_phone,
    buyer_email,
    buyer_email_confirmation,
  } = formValues;

  if (!buyer_name) {
    errors.buyer_name = "El nombre es obligatorio";
  }
  if (!buyer_surname) {
    errors.buyer_surname = "El apellido es obligatorio";
  }
  if (!buyer_phone) {
    errors.buyer_phone = "El telefono es obligatorio";
  }
  if (!buyer_email) {
    errors.buyer_email = "El email es obligatorio";
  }
  if (!buyer_email_confirmation) {
    errors.buyer_email_confirmation = "La confirmacion de email es obligatoria";
  }
  if (buyer_email !== buyer_email_confirmation) {
    errors.buyer_email_confirmation = "El email y su confirmacion no coinciden";
  }

  return errors;
};
