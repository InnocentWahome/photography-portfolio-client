import React, { useState } from "react";


import Facebook from "../assets/icons/social/facebook.svg";
import Instagram from "../assets/icons/social/instagram.svg";
import Linkedin from "../assets/icons/social/linkedin.svg";
import Twitter from "../assets/icons/social/twitter.svg";
import Messenger from "../assets/icons/social/messenger.svg";
import Email from "../assets/icons/social/email.svg";

const Footer = () => {
  return (
    <footer
      className="  has-text-dark "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="">
        <div className="level">
          <div className="level-item">
            <div className="columns">
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Facebook} alt="github" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Instagram} alt="github" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Linkedin} alt="linkedin" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Twitter} alt="twitter" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Messenger} alt="twitter" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-32x32">
                  <img src={Email} alt="twitter" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
