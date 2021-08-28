import React from "react";
import { Link } from "gatsby";

const Navbar = (props) => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <button
          className="navbar-burger burger "
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true" className="has-textwhite"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="navbarBasic"
        className="navbar-menu  has-text-centered pt-4"
      >
        <div className="navbar-end ">
          <Link
            to="/"
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
            Services
          </Link>
          <Link
            to="/work/"
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
            Work
          </Link>
          <Link
            to="/why-kisokolab/"
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
            Why Kisokolab
          </Link>
          <Link
            to="/blog/"
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact/"
            className="navbar-item"
            onClick={toggleBurgerMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
