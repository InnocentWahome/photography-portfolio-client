import React from "react";
import { Link } from "gatsby";

const Sidebar = () => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  return (
    <div class="container menu" role="navigation" aria-label="main navigation">
      <aside class="menu" id="sidebarToggle">
        <figure class="image is-128x128 pt-6 ">
          <img src="https://bulma.io/images/bulma-logo.png" alt="logo" />
          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic1"
            onClick={toggleBurgerMenu}
          >
            <span aria-hidden="true" className="has-textwhite"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </figure>
        <div id="navbarBasic1" className="menu  has-text-centered pt-4">
          <h5 class="ml-6 pb-2 is-hidden-mobile">Galleries</h5>
          <ul class="pl-5">
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/cityscape/"
                onClick={toggleBurgerMenu}
              >
                Cityscape
              </Link>
            </p>
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/portraiture/"
                onClick={toggleBurgerMenu}
              >
                Portraiture
              </Link>
            </p>
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/monochrome/"
                onClick={toggleBurgerMenu}
              >
                Monochrome
              </Link>
            </p>
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/landscape/"
                onClick={toggleBurgerMenu}
              >
                Landscape
              </Link>
            </p>
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/macro/"
                onClick={toggleBurgerMenu}
              >
                Macro
              </Link>
            </p>
            <p>
              <Link
                class="has-text-black is-hidden-mobile"
                to="/uncategorized/"
                onClick={toggleBurgerMenu}
              >
                Uncategorized
              </Link>
            </p>
          </ul>
          <div class="ml-6">
            <h5 class="pb-2">
              <Link
                class="has-text-black is-hidden-mobile"
                to="https://www.behance.net/innocentmaina"
                onClick={toggleBurgerMenu}
              >
                Buy Prints
              </Link>
            </h5>
            <h5 class="pb-2">
              <Link
                class="has-text-black is-hidden-mobile"
                to="https://www.instagram.com/wahome_._/"
                onClick={toggleBurgerMenu}
              >
                Instagram
              </Link>
            </h5>
            <h5 class="pb-2">
              <Link
                class="has-text-black is-hidden-mobile"
                to="/contact/"
                onClick={toggleBurgerMenu}
              >
                Contact
              </Link>
            </h5>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br />
        <footer>
          <p class="ml-6 has-text-weight-light is-hidden-mobile ">
            Innocent Wahome <br /> Photography
          </p>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
