import React, {useContext, createContext} from 'react';
import {initialStateType} from "./types" 
export const initialState: initialStateType = {
    Cakes: 10,
    Coffees: 45,
    Bagels: 30,
  };
const CafeContext = createContext<{
    state: initialStateType;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null,
  });
  
export const useCafeContext = () => useContext(CafeContext);

export default CafeContext