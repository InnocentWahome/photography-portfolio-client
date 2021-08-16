import React from "react";

import { PageLayout } from "../layouts";

const Contact = () => (
  <PageLayout>
    <div class=" hero content pt-6">
      <div class="hero-body">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <h2 class="title is-size-1 has-text-weight-bold">
          Hello, I am Michael Kariuki
        </h2>
        <p class="pt-3">An on location photographer based in Nairobi, Kenya.</p>
        <hr class="pr-6" />
        <div class="content pr-6">
          <h5 class="has-text-centered pb-6">Get in Touch</h5>
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <p class="control is-expanded">
                <input class="input " type="text" placeholder="Name" />
              </p>
              <p class="control is-expanded pt-5">
                <input class="input " type="email" placeholder="Email" />
              </p>
            </div>
            <div class="column is-two-fifths">
              <textarea
                class="textarea"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div class="level">
            <div class="level-item">
              <button class="button is-light" type="submit">
                SEND
              </button>
            </div>
          </div>
          <div class="level pt-6">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Facebook</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Pintrest</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Mail</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Behance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);
export default Contact;
