import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:pro_id" component={Product} />
        <Route exact path="*" component={NotFound} />
        <Redirect to="*" />
      </Switch>
    </div>
  );
}

export default App;
