import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container">
        <a className="navbar-brand " href="/#">
          <img src={logo} className="logo" alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contacte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
