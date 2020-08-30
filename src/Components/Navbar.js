import React, { Component } from "react";
import logo from "../Ressources/WB.png";

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var M = window.M;
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <a href="/" style={{ width: `60px`, height: `100%` }}>
                <img
                  className="brand-logo center"
                  src={logo}
                  style={{ width: `60px`, height: `100%` }}
                  alt="logo"
                />
              </a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/Projects">Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/">Walid BOUKRIS</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
