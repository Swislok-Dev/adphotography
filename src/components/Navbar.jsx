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

  return (
    <nav className="navbar">
      <ul
        onClick={removeHamburgerActive}
        className={`nav-menu ${showActiveClass()}`}
      >
        <li className="nav-item">
          <a href="#1" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#2" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#3" className="nav-link">
            About
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
  )
}

export default Navbar
