import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { GET_PRODUCTS, ERROR } from "../types";
import { getRows } from "./GoogleSheets";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    error: null,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const products = await getRows();
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          products,
        },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        error: state.error,
        getProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
