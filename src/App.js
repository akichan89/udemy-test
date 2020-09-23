import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";
import NotFound from "./components/screens/NotFound";
import PizzaApp from "./components/screens/pizzaForm";
import Shop from "./components/screens/shop";
import Gallery from "./components/screens/gallery";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/pizzaForm">
            <PizzaApp />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
