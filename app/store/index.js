import { createContext } from "react";

const context = createContext();
const Provider = context.Provider;

const initialState = {
  status: "inActive",
  quantity: 0,
  total: 0,
  products: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        status: action.payload.status,
        quantity: action.payload.quantity,
        total: action.payload.total,
        products: action.payload.products,
      };
    case "REMOVE": {
      return {
        status: action.payload.status,
        quantity: action.payload.quantity,
        total: action.payload.total,
        products: action.payload.products,
      };
    }
    case "CLEAR": {
      return state;
    }
  }
};
export { initialState, reducer, context };
export default Provider;
