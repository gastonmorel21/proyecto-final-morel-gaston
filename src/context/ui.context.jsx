import React, { createContext } from "react";

const UiContext = createContext({});

const UiProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const state = {
    isCartOpen,
  };
  const actions = {
    setIsCartOpen,
  };

  return (
    <UiContext.Provider value={{ state, actions }}>
      {children}
    </UiContext.Provider>
  );
};

export { UiProvider, UiContext };

export const useUiState = () => {
  const {
    state: { isCartOpen },
  } = React.useContext(UiContext);
  return { isCartOpen };
};

export const useUiActions = () => {
  const {
    actions: { setIsCartOpen },
  } = React.useContext(UiContext);
  return { setIsCartOpen };
};
