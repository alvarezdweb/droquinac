import React, { useReducer, useEffect } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { app } from "../../config/firebaseConfig";
import { GET_USER, ERROR } from "../types";

const AuthState = (props) => {
  const initialState = {
    user: {},
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      dispatch({
        type: GET_USER,
        payload: user
      })
    });
  }, []);

  const getUser = () => {};

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
