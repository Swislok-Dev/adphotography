import React from "react"
import Navbar from "./Navbar"

function Header() {
  const scrollTo = (scrollId) => {
    const anchor = document.querySelector(`#${scrollId}`)
    anchor.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <header className="header">
      <div className="header-content">
        <a className="header-link" onClick={() => scrollTo("family")} href="#/">
          <h3>ANNA DAHLIA PHOTOGRAPHY</h3>
        </a>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
