type initialStateType = {
    Cakes: number;
    Coffees: number;
    Bagels: number;
  };

type ActionsType =
| { type: "buyCake" }
| { type: "addCake" }
| { type: "buyCoffee" }
| { type: "addCoffee" }
| { type: "buyBagel" }
| { type: "addBagel" };

type cafeReducerType = (
  state: initialStateType,
  action: ActionsType
) => initialStateType;

export {ActionsType, cafeReducerType, initialStateType}