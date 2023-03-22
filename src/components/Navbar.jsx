import React, { useState } from 'react';
import ScrollLink from '../components/ScrollLink';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const onHamburgerActive = () => {
    setIsActive((current) => !current);
  };

  const showActiveClass = () => {
    return isActive ? 'active' : null;
  };

  const removeHamburgerActive = (e) => {
    if (e.target.nodeName === 'A') {
      setIsActive(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul
          onClick={removeHamburgerActive}
          className={`nav-menu ${showActiveClass()}`}
        >
          <li>
            <ScrollLink href="/#family">family</ScrollLink>
          </li>
          <li>
            <ScrollLink href="/#couples">couples</ScrollLink>
          </li>
          <li>
            <ScrollLink href="/#wedding">wedding</ScrollLink>
          </li>
          <li>
            <ScrollLink href="/#baby">baby</ScrollLink>
          </li>
          <li>
            <ScrollLink href="/#contact">contact</ScrollLink>
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
    </>
  );
};

export default Navbar;
