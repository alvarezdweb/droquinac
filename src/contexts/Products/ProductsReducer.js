import { GET_PRODUCTS, ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    case ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
