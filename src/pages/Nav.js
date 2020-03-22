import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" style={styles}>
        <h3>logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={styles}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={styles}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

const styles = {
  color: "#fff"
};
