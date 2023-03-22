import React from 'react'
import Navbar from './Navbar';
import ScrollLink from './ScrollLink';

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <ScrollLink href="/#family">
            <h1>ANNA DAHLIA PHOTOGRAPHY</h1>
          </ScrollLink>
          <Navbar />
        </div>
      </header>
    </>
  );
}

export default Header;
