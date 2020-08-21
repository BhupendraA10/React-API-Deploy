import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/"> Our Store</NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/navbar">Home</NavLink>
              </li>
              <li>
              <NavLink to="/user">User</NavLink>
              </li>
              <li>
              <NavLink to="/login">Login</NavLink>
              </li>
              <li>
              <NavLink to="/aboutus">AboutUs</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
