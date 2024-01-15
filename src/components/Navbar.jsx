import React from 'react';
import ScrollLink from '../components/ScrollLink';
import { NavbarContext } from './contexts/Navbar/index';

const Navbar = () => {
  const [state, dispatch] = React.useContext(NavbarContext);

  const onHamburgerActive = () => {
    dispatch({ type: 'toggle_button' });
  };

  const showActiveClass = () => {
    return state.active ? 'active' : null;
  };

  const removeHamburgerActive = (e) => {
    if (e.target.nodeName === 'A') {
      dispatch({ type: 'toggle_button' });
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
          {/* <li>
            <ScrollLink href="/#contact">contact</ScrollLink>
          </li> */}
        </ul>

        <div
          onClick={onHamburgerActive}
          className={`hamburger ${showActiveClass()}`}
        >
          <span className={`bar ${showActiveClass()}`}></span>
          <span className={`bar ${showActiveClass()}`}></span>
          <span className={`bar ${showActiveClass()}`}></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
