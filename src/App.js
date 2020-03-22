import React from "react";
import "./App.css";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Home path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h3>Home Page</h3>
  </div>
);

export default App;
