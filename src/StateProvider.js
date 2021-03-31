import React, { createContext, useContext, useReducer } from "react";

export const StateConext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateConext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateConext.Provider>
);

export const useStateValue = () => useContext(StateConext);
