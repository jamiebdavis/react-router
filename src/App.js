import React from "react";
import "./App.css";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Home path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Shop} />
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
