import React from 'react';
import { reducer, initialState } from './reducer';

export const NavbarContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <NavbarContext.Provider value={[state, dispatch]}>
      {children}
    </NavbarContext.Provider>
  );
};
