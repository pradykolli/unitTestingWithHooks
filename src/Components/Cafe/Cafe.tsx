import React, { useReducer } from "react";
import Cakes from "../Cakes/Cakes";
import Bagels from "../Bagels/Bagels";
import Coffees from "../Coffees/Coffees";
import CafeContext, {initialState} from "./CafeContext"
import {cafeReducer} from './CafeReducer'

function Cafe() {
  const [state, dispatch] = useReducer(cafeReducer, initialState);

  return (
    <CafeContext.Provider value={{ state, dispatch }}>
      <div className="wrapper">
        <h1>Prady's Cafe</h1>
        <Cakes />
        <Bagels />
        <Coffees />
      </div>
    </CafeContext.Provider>
  );
}

export default Cafe;
