import {ActionsType, cafeReducerType, initialStateType} from "./types"
export const cafeReducer: cafeReducerType = (
    state: initialStateType,
    action: ActionsType
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
