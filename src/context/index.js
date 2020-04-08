import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.payload,
        };

      case "logout":
        return {
          ...state,
          user: null,
        };

      default:
        throw new Error("Noexistent State");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
