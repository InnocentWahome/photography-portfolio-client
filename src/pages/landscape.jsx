import React from "react";

import { PageLayout } from "../layouts";
import SEO from "../components/Seo";

const Index = () => (
  <PageLayout>
    <SEO title="Home" />
    {/* row begins here */}
    <div class="columns pt-6 mr-5 mb-6">
      {/* col 1 */}
      <div class="column">
        <figure class="image is-256x256">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-2by3 mt-4">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-square mt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
      </div>
      {/* col 2 */}
      <div class="column">
        <figure class="image is-2by3">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-2by3 mt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
      </div>
      {/* col 3 */}
      <div class="column">
        <figure class="image is-256x256">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-2by3 mt-4">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-square mt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
      </div>
      {/* col 4 */}
      <div class="column">
        <figure class="image is-2by3">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-256x256 pt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
        <figure class="image is-2by3 mt-5">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="" />
        </figure>
      </div>
    </div>
  </PageLayout>
);

export default Index;
