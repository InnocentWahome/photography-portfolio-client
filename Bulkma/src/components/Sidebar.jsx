import React from "react";
// import { Link } from "gatsby";

// import Logo from "../assets/images/logo.png"

const Sidebar = () => {
  return (
    <div
      class="container is-fullheight "
      role="navigation"
      aria-label="main navigation"
    >
      <aside class="menu sidebar">
        <figure class="image is-128x128 pt-6 ">
          <img src="https://bulma.io/images/bulma-logo.png"  alt=""/>
        </figure>

        <h5 class="ml-6 pb-2">Galleries</h5>
        <ul class="pl-5 is-hoverable">
          <p>Cityscape </p>
          <p>Portraiture </p>
          <p>Monochrome </p>
          <p>Landscape </p>
          <p>Macro </p>
          <p>Uncategorized </p>
        </ul>
        <div class="ml-6">
          <h5 class="pb-2">Buy Prints</h5>
          <h5 class="pb-2">Instagram</h5>
          <h5 class="pb-2">Contact</h5>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <footer>
          <p class="ml-6 has-text-weight-light  ">Michael  Kariuki <br /> Photography</p>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
