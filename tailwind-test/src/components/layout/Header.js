import React from "react";

const Header = () => {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <div class="flex flex-row justify-items-center">
          <div>
            <img
              src="https://bulma.io/images/bulma-logo.png"
              class=" no-underline text-grey-darkest hover:text-blue-dark h-10 w-30"
            ></img>
          </div>
          <div>
            <a
              href="/home"
              class="text-3xl hover:text-blue justify-items-center"
            >
              Michael Kariuki
            </a>
          </div>
        </div>
      </div>
      <div>
        <a
          href="/one"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="/two"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="/three"
          class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Three
        </a>
      </div>
    </nav>
  );
};
export default Header;
