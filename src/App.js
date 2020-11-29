import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Login from "./containers/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthState from "./contexts/Auth/AuthState";
import ProductsState from "./contexts/Products/ProductsState";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <ProductsState>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ProductsState>
    </AuthState>
  );
}

export default App;
