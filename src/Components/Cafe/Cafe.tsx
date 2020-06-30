import React, { createContext, useReducer } from "react";
import Cakes from "../Cakes/Cakes";
import Bagels from "../Bagels/Bagels";
import Coffees from "../Coffees/Coffees";

type Actions =
  | { type: "buyCake" }
  | { type: "addCake" }
  | { type: "buyCoffee" }
  | { type: "addCoffee" }
  | { type: "buyBagel" }
  | { type: "addBagel" };

type initialStateType = {
  Cakes: number;
  Coffees: number;
  Bagels: number;
};

type cafeReducerType = (
  state: initialStateType,
  action: Actions
) => initialStateType;

const initialState: initialStateType = {
  Cakes: 10,
  Coffees: 45,
  Bagels: 30,
};

const cafeReducer: cafeReducerType = (
  state: initialStateType,
  action: Actions
) => {
  switch (action.type) {
    case "buyCake":
      return { ...state, Cakes: state.Cakes - 1 };
    case "addCake":
      return { ...state, Cakes: state.Cakes + 1 };
    case "buyCoffee":
      return { ...state, Coffees: state.Coffees - 1 };
    case "addCoffee":
      return { ...state, Coffees: state.Coffees + 1 };
    case "buyBagel":
      return { ...state, Bagels: state.Bagels - 1 };
    case "addBagel":
      return { ...state, Bagels: state.Bagels + 1 };
    default:
      return state;
  }
};
const CafeContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

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
export { CafeContext };
