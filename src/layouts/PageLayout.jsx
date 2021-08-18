import React from "react"
import "../assets/sass/index.scss"

import { Sidebar  } from "../components"

const PageLayout = ({ children }) => {
  return (
    <>
    <div class="columns">
      <div class="column is-one-fifth">
        <div class="content is-fixed-left">
          <Sidebar />
        </div>
      </div>
      <div class="column is-four-fifths">
        {children}
      </div>
    </div>
    </>
  )
}

export default PageLayout