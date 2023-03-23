import React from 'react';
import { NavbarContext } from './contexts/Navbar/index';
import Footer from './Footer';
import Header from './Header';
import SEO from './seo';

function Layout({ children }) {
  const [state, dispatch] = React.useContext(NavbarContext);

  function closeHamburgerMenu() {
    dispatch({ type: 'toggle_button' });
  }

  const handleOffClick = (e) => {
    const { nodeName } = e.target;

    if (
      (state.active && nodeName === 'A') ||
      e.target.className.includes('active')
    ) {
      closeHamburgerMenu();
    }
    state.active && nodeName != 'LI' ? closeHamburgerMenu() : null;
  };

  return (
    <>
      <SEO />
      <div onClick={handleOffClick} className="content">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
