import { TextField } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
// import Signup from "./Signup";
import { withRouter } from "react-router";
import { app, googleAuthProvider } from "../../config/firebaseConfig";
import AuthContext from "../../contexts/Auth/AuthContext";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Login = ({ history }) => {
  const { user, setUser } = useContext(AuthContext);
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      history.push("/products");
    }
  }, [history, user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { usuario, clave } = e.target.elements;

    await app
      .auth()
      .signInWithEmailAndPassword(usuario.value, clave.value)
      .then((result) => {
        console.log(result);
        history.push("/products");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const socialLogin = async (provider) => {
    await app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.additionalUserInfo.profile);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      {!signUp ? (
        <form onSubmit={handleLogin}>
            <h1>Ingreso</h1>
            <TextField
              prefix={
                <Icon
                  type="user"
                  style={{
                    color: "rgba(0,0,0,.25)",
                  }}
                />
              }
              name="usuario"
              placeholder="Usuario"
            />
            <TextField
              prefix={
                <Icon
                  type="lock"
                  style={{
                    color: "rgba(0,0,0,.25)",
                  }}
                />
              }
              name="clave"
              type="password"
              placeholder="Clave"
            />
            <Button
              type="primary"
              className="login-form-button"
              style={{ marginRight: 10 }}
            >
              Ingresa
            </Button>
            O{" "}
            <Button onClick={() => setSignUp(true)} type="link">
              Registrate Ahora!
            </Button>
            <Button
              type="danger"
              className="login-form-button"
              style={{ marginRight: 10 }}
              onClick={() => socialLogin(googleAuthProvider)}
            >
              Google
            </Button>
        </form>
      ) : (
          null
        // <Signup setsignup={setSignUp} />
      )}
    </div>
  );
};
export default withRouter(Login);
