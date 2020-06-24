import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav style={{background:'#6200ee'}}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* <!-- Dropdown Trigger --> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
