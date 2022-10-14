import React, { useState } from "react"

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const onHamburgerActive = () => {
    setIsActive((current) => !current)
  }

  const showActiveClass = () => {
    return isActive ? "active" : null
  }

  const removeHamburgerActive = (e) => {
    if (e.target.nodeName === "A") {
      setIsActive(false)
    }
  }

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
      <nav className="navbar" onClick={(e) => removeHamburgerActive(e)}>
        <ul className={`nav-menu ${showActiveClass()}`}>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("family")}
              href="#/family"
              className="nav-link"
            >
              Family
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("couples")}
              href="#/couples"
              className="nav-link"
            >
              Couples
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("baby")}
              href="#/baby"
              className="nav-link"
            >
              Baby
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("wedding")}
              href="#/wedding"
              className="nav-link"
            >
              Wedding
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => scrollTo("contact")}
              href="#/contact"
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
