import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
const Navbar = (props) => {
  //   setTimeout(() => {
  //     props.history.push("/about");
  //   }, 2000);
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <h2>React'Router</h2>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
