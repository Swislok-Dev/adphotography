import React, { useState } from "react"

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const onHamburgerActive = () => {
    setIsActive((current) => !current)
  }

  const showActiveClass = () => {
    return isActive ? "active" : null
  }

  const removeHamburgerActive = () => {
    setIsActive(false)
  }

  // className => "img9" is last image

  const scrollTo = (scrollId) => {
    const anchor = document.querySelector(`#${scrollId}`)
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  return (
    <div>
      <nav className="navbar">
        <ul
          onClick={removeHamburgerActive}
          className={`nav-menu ${showActiveClass()}`}
        >
          <li className="nav-item">
            <a
              onClick={() => scrollTo("family")}
              href="#1"
              className="nav-link"
            >
              Family
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("couples")}
              href="#2"
              className="nav-link"
            >
              Couples
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => scrollTo("baby")} href="#3" className="nav-link">
              Baby
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("wedding")}
              href="#3"
              className="nav-link"
            >
              Wedding
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("art-prints")}
              href="#3"
              className="nav-link"
            >
              Art Prints
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("contact")}
              href="#3"
              className="nav-link"
            >
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={onHamburgerActive}
          className={`hamburger ${showActiveClass()}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
