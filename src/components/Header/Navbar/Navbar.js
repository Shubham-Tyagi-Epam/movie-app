import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";

const Navbar = ({ Functionality }) => {
  console.log(Functionality);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-dark text-light fixed-top " +
        (navbar ? "bg-dark your-element" : "")
      }
      // style={{ background: "transparent" }}
    >
      <div className="container-fluid">
        <div>
          <NavLink
            to="/"
            className={
              "navbar-brand text-danger " +
              (navbar ? "text-light" : "text-danger")
            }
          >
            <b>shubh</b>movies
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink
                to="/"
                className={"nav-link" + (navbar ? "text-light" : "text-danger")}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className={navbar ? "text-light fs-4" : "text-danger fs-4"}
                />
              </NavLink>
            </li> */}
            <Functionality navbar={navbar} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
