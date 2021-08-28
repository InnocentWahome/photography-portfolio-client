import React from "react";
import "../assets/sass/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { Sidebar, Footer } from "../components";

const PageLayout = ({ children }) => {
  return (
    <>
      <div class="columns">
        <Router>
          <div class="column is-one-fifth content pr-6">
            <Sidebar />
          </div>
        </Router>
        <div class="column  pl-6">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
