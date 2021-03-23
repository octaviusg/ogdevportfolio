import React, { Component, useState } from "react";
import "../components/Navbar.css";

import { Link } from "react-scroll";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="brand">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={800}
          >
            OCTAVIO<span className="last">GARCIA</span>
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link
              activeClass="active"
              className="links"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={800}
            >
              work & projects
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              className="links"
              to="info"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={800}
            >
              info
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              className="links"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={800}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
